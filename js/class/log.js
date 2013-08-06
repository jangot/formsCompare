function Log(node) {
    this._node = node;
}

Log.prototype = {

    _node : null,

    show : function(params) {
        var newHtml = '';

        for (var name in params) {
            newHtml += this._getItemHtml({
                name : name,
                massage : params[name]
            });
        }

        this._node.innerHTML = '<ul>' + newHtml + '</ul>';
    },

    _getItemHtml : function(item) {
        return '<li>' + item.name + ' : ' + item.massage + '</li>'
    }

}
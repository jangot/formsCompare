function Application() {
}

Application.prototype = {

    _params : null,
    _form : null,
    _log : null,

    run : function() {
        this
            ._createLog()
            ._createForm()
        ;
    },

    showDifference : function() {
        var newParams = this._form.getParams();
        var difference = this._getDifference(newParams);
        this._log.show(difference);
        this._params = newParams;
    },

    _createLog : function() {
        this._log = new Log(document.getElementById('log'));

        return this;
    },

    _createForm : function() {
        var node = document.getElementsByTagName('form')[0];
        this._form = new Form(node);
        this._params = this._form.getParams();
        return this;
    },

    _getDifference : function(newParams) {
        var result = {};
        for (var name in this._params) {
            if (newParams[name] == undefined) {
                result[name] = 'Deleted';
            } else if (!this._compareValues(this._params[name], newParams[name])) {
                result[name] = 'Changed';
            }
        }
        for (var name in newParams) {
            if (this._params[name] == undefined) {
                result[name] = 'New';
            }
        }
        return result;
    },

    _compareValues : function(value1, value2) {
        if (value1 === value2) {
            return true;
        }
        if (JSON.stringify(value1) == JSON.stringify(value2)) {
            return true;
        }
        return false;
    }

}
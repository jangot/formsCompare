function Form(formNode) {
    this._form = formNode;
}

Form.prototype = {

    _form : null,

    getParams : function() {
        var elements = this._form.elements;

        var result = {};
        for (var i = 0; i < elements.length; i++) {
            result = this._addElementValue(result, elements[i]);
        }

        return result;
    },

    _addElementValue : function(result, element) {
        switch (element.type) {
            case 'radio':
            case 'checkbox':
                if (element.checked) {
                    this._addItemValue(result, element.name, element.value);
                }
                break;
            default :
                this._addItemValue(result, element.name, element.value);
        }

        return result;
    },

    _addItemValue : function(result, name, value) {
        if (result[name] == undefined) {
            result[name] = value;
        } else if (result[name] instanceof Array) {
            result[name].push(value);
        } else {
            result[name] = [result[name], value];
        }
        return result;
    }
}
var Gemini;
(function (Gemini) {
    "use strict"; //Types:
    class GeminiObject {
        set typeName(value) {
            this.typeNameField = value;
        }
        get typeName() {
            return this.typeNameField;
        }
        SayHello() {
            return " I'm a Gemini object";
        }
    }
    Gemini.GeminiObject = GeminiObject;
    class TypedArray extends GeminiObject {
        constructor(itemTypeField) {
            super();
            this.Items = [];
            this.itemTypeField = itemTypeField;
        }
        set Items(value) {
            this.itemsField = value;
        }
        get Items() {
            return this.itemsField;
        }
        set itemType(value) {
            this.itemTypeField = value;
        }
        get itemType() {
            return this.itemTypeField;
        }
    }
    Gemini.TypedArray = TypedArray;
})(Gemini || (Gemini = {}));
//# sourceMappingURL=Gemini.partial.js.map
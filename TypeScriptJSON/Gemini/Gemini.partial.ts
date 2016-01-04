module Gemini {
    "use strict"//Types:

    export class GeminiObject
    {
        private typeNameField: String;

        public set typeName(value: String) {
            this.typeNameField = value;
        }

        public get typeName(): String {
            return this.typeNameField;
        }
        public SayHello(): String {
            return " I'm a Gemini object";
        }
    }

    export class TypedArray<T> extends GeminiObject
    {        

        private itemsField: T[];

        public set Items(value: Array<T>)
        {
            this.itemsField = value;
        }

        public get Items(): Array<T>
        {
            return this.itemsField;
        }

        private itemTypeField: String;

        public set itemType(value: String) {
            this.itemTypeField = value;
        }

        public get itemType(): String {
            return this.itemTypeField;
        }        

        constructor(itemTypeField: string) {

            super();
            this.Items = [];
            this.itemTypeField = itemTypeField;
        }
    }
}
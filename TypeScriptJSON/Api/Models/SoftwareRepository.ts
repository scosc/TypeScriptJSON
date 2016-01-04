"use strict";
module Services
{
    export module Models
    {
        export class SoftwareRepository
        {
            private componentField: string;
            private versionField: string;
            private idField: number;

            public set Component(value: string) 
            {
                this.componentField = value;
            }

            public get Component(): string
            {
                return this.componentField;
            }

            public get Version(): string {
                return this.versionField;
            }

            public set Version(value: string) {
                this.versionField = value;
            }

            public get Id(): number
            {
                return this.Id;
            }

            public set Id(value: number)
            {
                this.idField = value;
            }
        }
    }
}
"use strict";
module Services
{
    export enum HttpMethod
    {
        GET,
        POST
    }

    export class Request
    {
        private method: HttpMethod;
        private url: String;

        public set Method(value: HttpMethod)
        {
            this.method = value;
        }

        public get Method(): HttpMethod
        {
            return this.method;
        }

        public set Url(value: String)
        {
            this.url = value;
        }

        public get Url() : String
        {
            return this.url;
        }

        constructor(method: HttpMethod)
        {
            this.method = method;
        }
    }
}
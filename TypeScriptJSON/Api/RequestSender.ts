"use strict";
module Services
{
    export interface IStringDictionary
    {
        [index: string]: string;
    }

    export interface IRequestCallback<T> {
        (json: T);
    }

    export class RequestSender
    {
        
        private baseUrl: string;

        constructor()
        {
            this.baseUrl = "";
        }

        public FormatUrl(url: String): string
        {
            return this.baseUrl + url;
        }

        public Send<T>(req: Request, qp: IStringDictionary, callback: IRequestCallback<T>)
        {
            var xmlhttp = new XMLHttpRequest();            

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var json = JSON.parse(xmlhttp.responseText);
                    if (callback !== null) {
                        callback(<T>json);
                    }
                }
            };
            xmlhttp.open(HttpMethod[req.Method], this.FormatUrl(req.Url), true);
            xmlhttp.send();                       
        }
    }
}
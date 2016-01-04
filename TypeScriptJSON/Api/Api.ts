/// <reference path="./Models/SoftwareRepository.ts" />
"use strict";
module Services
{
    export class Api
    {
        public static GetSoftwareRepository(componentName: string, callback: IRequestCallback<Models.SoftwareRepository>)
        {
            var sender: Services.RequestSender;
            sender = new Services.RequestSender();

            var request = new Request(HttpMethod.GET);
            request.Url = "/software/" + componentName;

            sender.Send<Services.Models.SoftwareRepository>(request, null, callback);
        }

        public static GetRepositoryPack(repository: Models.SoftwareRepository, callback: IRequestCallback<any>)
        {
            var sender: Services.RequestSender;
            sender = new Services.RequestSender();

            var request = new Request(HttpMethod.GET);
            request.Url = "/repository/pack/" + repository.Id;

            sender.Send<any>(request, null, callback);
        }
    }
}


//import * as guixEntities from "guixEntities";

//import * as kendo from './Scripts/typescript/kendo.all.d.ts';

/// <reference path="scripts/typescript/jquery/jquery.d.ts" />
/// <reference path="./Scripts/typescript/kendo-ui/kendo.all.d.ts" />
/// <reference path="./Scripts/typescript/moment/moment.d.ts" />
///// <reference path="./Scripts/typescript/underscore/underscore.d.ts" />
/// <reference path="./Scripts/typescript/lodash/lodash.d.ts" />

/// <reference path="./Gemini/Gemini.partial.ts" />
/// <reference path="./Gemini/Gemini.ts" />
/// <reference path="./Api/Api.ts" />

//# sourceMappingURL=./app.js.map


"use strict";

function deserialize(json, environment) {
    
    var instance;

    if (json === null)
    {
        instance = null;
    }
    else if (Array.isArray(json))
    {
        instance = [];

        for (var i = 0; i < json.length; i++)
        {
            if (typeof json[i] === 'object') {
                instance[i] = deserialize(json[i], environment);
            } else {
                instance[i] = json[i];
            }            
        }        
    }
    else
    {
        if (environment.hasOwnProperty(json.typeName)) {
            instance = new environment[json.typeName]();
            for (var prop in json) {
                if (!json.hasOwnProperty(prop)) {
                    continue;
                }

                if (typeof json[prop] === 'object') {
                    instance[prop] = deserialize(json[prop], environment);
                } else {
                    instance[prop] = json[prop];
                }
            }
        }
        else
        {
            var i: number;
            i = 0;
            i++;
        }
    }

    return instance;
}
var mibx: Gemini.Mibx;
var guix: Gemini.Guix;
var mibxRepository: Services.Models.SoftwareRepository;
var guixRepository: Services.Models.SoftwareRepository;

window.onload = () => {
    var el = document.getElementById('content');    

    Services.Api.GetSoftwareRepository("mibx", GetMibxSoftwareRepositoryCallback);    
};

function GetMibxSoftwareRepositoryCallback(repository: Services.Models.SoftwareRepository)
{    
    mibxRepository = repository;
    Services.Api.GetSoftwareRepository("guix", GetGuixSoftwareRepositoryCallback);        
}

function GetGuixSoftwareRepositoryCallback(repository: Services.Models.SoftwareRepository) {
    guixRepository = repository;
    Services.Api.GetRepositoryPack(mibxRepository, GetMibxRepositoryPackCallback);
}


function GetMibxRepositoryPackCallback(pack: any)
{
    mibx = <Gemini.Mibx>deserialize(pack, Gemini);    

    Services.Api.GetRepositoryPack(guixRepository, GetGuixRepositoryPackCallback);

    
}

function GetGuixRepositoryPackCallback(pack: any) {
    guix = <Gemini.Guix>deserialize(pack, Gemini);

    var el = document.getElementById('list');
    var rightPane = document.getElementById('right-pane');
    var treeConstructor = new TreeContructor(el, rightPane);
    treeConstructor.generateKendoUIGrids();
}

var loremipsum = "" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce lobortis augue eget massa euismod, sed tristique odio ultrices.Nam eget ipsum lobortis, luctus sapien at, blandit nunc.Aliquam accumsan dignissim metus, sit amet vehicula quam varius vitae.Fusce lobortis eu massa ac condimentum.Fusce enim ante, sodales eu ipsum suscipit, pulvinar euismod tellus.Praesent et lorem luctus, bibendum nisl nec, dictum ligula.Nam rhoncus fringilla ipsum.Fusce malesuada elementum ligula, vel fringilla orci efficitur ac.Donec ipsum arcu, dapibus quis nibh at, ornare porttitor orci." +
    "Phasellus semper lorem ex, eget semper ex eleifend eu.Donec mattis felis et massa eleifend commodo.Pellentesque a feugiat lacus, at consequat nulla.Aliquam libero lectus, commodo sit amet libero ut, varius euismod justo.Pellentesque volutpat interdum lacus tincidunt accumsan.Quisque feugiat, tellus ac bibendum lobortis, leo neque aliquet libero, id sollicitudin augue diam vel metus.Quisque rhoncus vehicula vehicula.Curabitur vulputate interdum scelerisque.Proin condimentum lacus urna, a consequat erat laoreet eget.Integer ex risus, sollicitudin ac euismod vitae, suscipit in leo.Maecenas finibus aliquet nulla eu tincidunt.Praesent luctus, dolor sit amet commodo varius, lectus mauris mattis enim, nec varius metus est ut odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque tincidunt lacus et cursus condimentum." +
    "Maecenas bibendum libero eu ligula aliquam mollis.In in nibh efficitur, feugiat lorem eget, fringilla nisi.Vivamus rutrum eu turpis sit amet iaculis.Proin dictum, nisi vitae varius vulputate, augue neque fringilla tortor, sit amet tristique nulla metus quis quam.Aliquam ut urna vitae risus ultrices tristique at vel nulla.Vivamus a pulvinar erat, non elementum eros.Donec at porta nisl.Sed aliquam dui risus, id cursus lectus malesuada at.Duis metus ligula, auctor eu vestibulum ac, commodo ut ante.Proin at purus semper felis vehicula semper in facilisis libero.Phasellus ac sapien at tellus aliquam aliquet vel vel sapien.Aliquam ac mi est.Nam ultricies aliquam ligula non vehicula." +
    "Vestibulum consequat metus non consequat tincidunt.Cras blandit elit at viverra pellentesque.Etiam auctor nunc non libero efficitur luctus.Interdum et malesuada fames ac ante ipsum primis in faucibus.Nunc at pretium ex.Donec non diam a sapien iaculis pellentesque.Proin fermentum tellus quis dapibus placerat." +
    "Nulla at accumsan sem, quis mollis magna.Vestibulum diam ligula, lacinia venenatis rutrum nec, rhoncus at sapien.Proin eleifend dui at orci interdum pulvinar at vitae arcu.Donec commodo quis ante quis semper.Proin nisi eros, commodo sed consequat non, sodales vitae nisi.Suspendisse in libero ut nunc imperdiet egestas nec quis nulla.Etiam nec enim non nulla convallis fermentum sed nec turpis.Nam mattis erat vel diam ornare aliquam.Nullam semper efficitur ex at volutpat.Nunc eros felis, fermentum ut erat elementum, euismod pretium metus.";


class TreeContructor {
    element: HTMLElement;
    ul: HTMLElement;

    rightPane: HTMLElement;

    data: Array<Gemini.GuixNode>;
    configuration: Gemini.Configuration;

    tableDictionary: Array<any>;

    dependenciesDictionary: any;
    params: Array<Gemini.Param>;

    constructor(element: HTMLElement, rightPane: HTMLElement) {
        var self = this;
        this.element = element;
        this.rightPane = rightPane;
        this.ul = document.createElement('ul');
        this.element.appendChild(this.ul);

        this.params = this.getAllParams(mibx.Module);

        //this.dependenciesDictionary = _.chain(this.params).pluckMany('UID', 'Dependencies').groupBy(function (o: { UID: string, Dependencies: Gemini.Dependencies }) {
        //    if (o !== undefined && o.Dependencies !== undefined && o.Dependencies.InactiveDependency !== undefined)
        //    { return o.Dependencies.InactiveDependency[0].Condition.ClauseGroup.Items[0].Clause.ClauseLeft.UID; }
        //}).value();
        
        self.tableDictionary = new Array<any>();

        this.generateNodes(this.ul, this.rightPane, guix.Configuration.Items);

        $("#horizontal").kendoSplitter({
            panes: [
                { collapsible: true, size: '350px' },
                { collapsible: false }
            ]
        });
    }

    applyDependencies(param: Gemini.Param, dependentObjects: any) {
        var parentElement = document.getElementById(<string>param.UID);
        var value;

        if ((<HTMLInputElement>parentElement).type === 'checkbox') {
            value = (<HTMLInputElement>parentElement).checked;
        }

        if (dependentObjects === null || dependentObjects === undefined || dependentObjects.length == 0) {
            return;
        }

        dependentObjects.forEach(function (item) {
            if (item.Dependencies.InactiveDependency !== null && item.Dependencies.InactiveDependency !== undefined) {
                var childElement = document.getElementById(item.UID);
                var valueToBeApplied = item.Dependencies.InactiveDependency.Condition.ClauseGroup.Clause.ClauseRight.Absolute;

                //var css = childElement.style;
                

                if (value.toString().toLowerCase() !== valueToBeApplied.toLowerCase() && value.toString().toLowerCase() === "true") {
                    var boolValue = false;
                    childElement.style.display = "inline-block";
                }
                else if (value.toString().toLowerCase() === valueToBeApplied.toLowerCase() && value.toString().toLowerCase() === "false") {
                    var boolValue = true;
                    childElement.style.display = "none";
                }
            }
        });

    }

    generateKendoUIGrids() {
        var self = this;
        self.tableDictionary.forEach(function (value) {
            $('#' + value.tableId).kendoGrid({
                //dataSource: dataSource,
                pageable: true,
                height: 550,
                toolbar: ["create", "destroy"],
                columns: value.columns,
                editable: "popup"
            });

        });

    }


    //<input type="checkbox" id= "item-2" /><label for="item-2" > Can You Believe...</label>

    generateNodes(el: HTMLElement, rightPane: HTMLElement, nodes: Array<any>): void {
        var self = this;
        nodes.forEach(function (value: any) {

            if (value instanceof Gemini.GuixNode)
            {
                var guixNode = <Gemini.GuixNode>value;
                var checkBox = document.createElement('input');
                checkBox.type = 'checkbox';
                //checkBox.id = 'checkbox' + value.UID;

                //<a href="#" onclick= "onHello();return false;" > <label style="cursor:pointer" > Hello2 < /label></a >
                var link = document.createElement('a');
                link.href = '#' + guixNode.UID;
                var label = document.createElement('label');
                //label.htmlFor = value.UID;
                label.innerHTML = <string>(guixNode.Name);
                link.appendChild(label);

                var li = document.createElement('li');

                var divLi = document.createElement('div');


                if (guixNode.Items != null && guixNode.Items.length > 0) {
                    divLi.appendChild(checkBox);
                }

                divLi.appendChild(link);

                el.appendChild(divLi);
                //console.log(guixNode);

                var divSection = document.createElement('section');
                divSection.id = <string>(guixNode.UID);
                divSection.className = 'page';


                //var params = self.getAllParams(objects.Mibx.Module.Node);

                if (guixNode.GuixSection != null) {
                    var sections = guixNode.GuixSection;

                    if (sections !== null && sections !== undefined && sections.length > 0) {
                        sections.forEach(function (value: Gemini.GuixSection) {
                            self.generateSection(divSection, value);
                        });
                    }
                }


            
                //<input class="toggle-box" id= "header1" type= "checkbox" >
                //<label for="header1" > Click here to read more!</label>
                //< div > Lorem ipsum dolor sit amet, consectetuer adipiscing.</div>  

                rightPane.appendChild(divSection);



                if (guixNode.Items !== null && guixNode.Items !== undefined) {
                    var childUl = document.createElement('ul');
                    divLi.appendChild(childUl);
                    self.generateNodes(childUl, rightPane, guixNode.Items);
                    console.log("\t" + value);
                }
            }
            });

    };

    getAllParams(container: Gemini.MibxContainer): Array<Gemini.Param> {
        var self = this;
        var parameters: Gemini.Param[];
        parameters = new Array<Gemini.Param>();

        if (container != null && container.Items != null)
        {
            container.Items.forEach(function (item: Gemini.MibxItem) {
                if (item instanceof Gemini.Param) {
                    parameters.push(<Gemini.Param>item);
                }
                else if (item instanceof Gemini.MibxContainer)
                {
                    parameters = parameters.concat(self.getAllParams(<Gemini.MibxContainer>item));
                }
            });
        }

        return parameters;
    };


    //getAllParams(node: _.List<any>): Array<any> {
    //    var params: Array<Gemini.Param>;

    //    var firstLevelParams = _.pluck(node, 'Param');
    //    var firstLevelSubNodes = _.pluck(node, 'Node');
    //    var secondLevelParams = _.reduce(_.compact(firstLevelSubNodes), function (result, arr) { return result.concat(arr) }, []);
    //    _.pluck(secondLevelParams, 'Param');

    //    params = _.reduce(_.compact(firstLevelParams), function (result, arr) { return result.concat(arr) }, []);
    //    params = params.concat(_.reduce(_.compact(_.pluck(secondLevelParams, 'Param')), function (result, arr) { return result.concat(arr) }, []));

    //    var firstLevelTableParams = _.chain(node).pluck('Table').compact().flatten().pluck('Param').flatten().value();
    //    var secondLevelTableParams = _.chain(node).pluck('Node').compact().flatten().pluck('Table').compact().pluck('Param').flatten().value()

    //    params = params.concat(firstLevelTableParams).concat(secondLevelTableParams);

    //    return params;

    //};

    //getAllTableParams(node: _.List<any>): Array<any> {
    //    var params: Array<mibxEntities.Param>;

    //    //params.concat();

    //    //params = _.select(node, function (data) { return data.Param; });

    //    //params = _.reduce(_.map(node, function (data) { return data.Param }), function (result, arr) { return result.concat(arr) }, [])
    //    var firstLevelParams = _.pluck(node, 'Param');
    //    var firstLevelSubNodes = _.pluck(node, 'Node');
    //    var secondLevelParams = _.reduce(_.compact(firstLevelSubNodes), function (result, arr) { return result.concat(arr) }, []);
    //    _.pluck(secondLevelParams, 'Param');

    //    params = _.reduce(_.compact(firstLevelParams), function (result, arr) { return result.concat(arr) }, []);
    //    params = params.concat(_.reduce(_.compact(_.pluck(secondLevelParams, 'Param')), function (result, arr) { return result.concat(arr) }, []));

    //    return params;

    //};

    generateObjects(sectionDiv: HTMLElement, objectsArray: Array<Gemini.GuixObject>, params: Array<any>) {
        var self = this;
        objectsArray.forEach(function (value: Gemini.GuixObject) {
            var div = document.createElement('div');
            div.classList.add('row');

            var controlUID = value.Attached;

            var param = <Gemini.Param>(_.first(_.where(params, { UID: controlUID })));

            if (param.Type === Gemini.Type.String) {
                var label = document.createElement('label');
                label.htmlFor = <string>(param.UID);
                label.textContent = <string>(param.Name);
                label.classList.add('k-label');

                var control = document.createElement('input');
                control.type = 'text';
                control.id = <string>(param.UID);
                control.name = <string>(param.UID);
                control.classList.add('k-widget', 'k-textbox');
                control.onchange = () => self.applyDependencies(param, _.where(self.dependenciesDictionary, { 'UID': controlUID }));


                if (param.Status === Gemini.Status.mandatory) {
                    div.classList.add("required");
                }

                div.appendChild(label);
                div.appendChild(control);
            }
            else if (param.Type === Gemini.Type.Double) {
                var label = document.createElement('label');
                label.htmlFor = <string>(param.UID);
                label.textContent = <string>(param.Name);
                label.classList.add('k-label');

                var control = document.createElement('input');
                control.type = 'number';
                control.id = <string>(param.UID);
                control.step = '0.01';
                control.classList.add('k-widget', 'k-textbox');
                control.onchange = () => self.applyDependencies(param, _.where(self.dependenciesDictionary, { 'UID': controlUID }));

                if (param.Status === Gemini.Status.mandatory) {
                    div.classList.add("required");
                }

                div.appendChild(label);
                div.appendChild(control);
            }
            else if (param.Type === Gemini.Type.UInt16 ||
                param.Type === Gemini.Type.UInt8 ||
                param.Type === Gemini.Type.Int32 ||
                param.Type === Gemini.Type.Int8 ||
                param.Type === Gemini.Type.Int16) {
                var label = document.createElement('label');
                label.htmlFor = <string>(param.UID);
                label.textContent = <string>(param.Name);
                label.classList.add('k-label');

                var control = document.createElement('input');
                control.type = 'number';
                control.id = <string>(param.UID);
                control.step = '1';
                control.classList.add('k-widget', 'k-textbox');

                if (param.Status === Gemini.Status.mandatory) {
                    div.classList.add("required");
                }

                div.appendChild(label);
                div.appendChild(control);
            }
            else if (param.Type === Gemini.Type.Date) {
                var label = document.createElement('label');
                label.htmlFor = <string>(param.UID);
                label.textContent = <string>(param.Name);
                label.classList.add('k-label');

                var control = document.createElement('input');
                control.type = 'date';
                control.id = <string>(param.UID);
                control.classList.add('k-widget', 'k-textbox');

                if (param.Status === Gemini.Status.mandatory) {
                    div.classList.add("required");
                }

                div.appendChild(label);
                div.appendChild(control);
            }
            else if (param.Type === Gemini.Type.DateTime) {
                var label = document.createElement('label');
                label.htmlFor = <string>(param.UID);
                label.textContent = <string>(param.Name);
                label.classList.add('k-label');

                var control = document.createElement('input');
                control.type = 'datetime';
                control.id = <string>(param.UID);
                control.classList.add('k-widget', 'k-textbox');

                if (param.Status === Gemini.Status.mandatory) {
                    div.classList.add("required");
                }

                div.appendChild(label);
                div.appendChild(control);
            }
            else if (param.Type === Gemini.Type.Bool) {
                var label = document.createElement('label');
                label.htmlFor = <string>(param.UID);
                label.textContent = <string>(param.Name);
                label.classList.add('k-label');

                var control = document.createElement('input');
                control.type = 'checkbox';
                control.id = <string>(param.UID);
                //control.classList.add('k-widget', 'k-checkbox');
                //control.onchange = () => self.applyDependencies(param, self.dependenciesDictionary[param.UID]);

                if (param.Status === Gemini.Status.mandatory) {
                    div.classList.add("required");
                }

                div.appendChild(label);
                div.appendChild(control);
            }
            else {
                // do nothing atm.
            }


            sectionDiv.appendChild(div);
        });
    }

    generateTable(sectionDiv: HTMLElement, table: Gemini.GuixTable, tableParams: Array<any>) {
        var self = this;
        var tableDiv = document.createElement('div');
        tableDiv.id = <string>(table.Attached);

        sectionDiv.appendChild(tableDiv);

        var tableColumns: Array<any>;
        tableColumns = new Array<any>();
        table.GuixTableColumn.forEach(function (value: Gemini.GuixTableColumn) {

            var param = <Gemini.Param>(_.first(_.where(tableParams, { UID: value.Attached })));


            var column = {
                title: param.Name,
                field: param.MibName
            };

            tableColumns.push(column);

        });

        var command = {
            command: ["edit", "destroy"],
            title: "&nbsp;",
            width: "250px"
        };
        tableColumns.push(command);

        var tableStruct = {
            tableId: tableDiv.id,
            columns: tableColumns
        };

        self.tableDictionary.push(tableStruct);


        

        //$('#' + tableDiv.id).kendoGrid({
        //    //dataSource: dataSource,
        //    pageable: true,
        //    height: 550,
        //    toolbar: ["create", "destroy"],
        //    columns: [
        //        { field: "ProductName", title: "Product Name" },
        //        { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "120px" },
        //        { field: "UnitsInStock", title: "Units In Stock", width: "120px" },
        //        { field: "Discontinued", width: "120px" },
        //        { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" }],
        //    editable: "popup"
        //});

        //objectsArray.forEach(function (value: any) {
        //    var div = document.createElement('div');
        //    div.classList.add('row');

        //    //console.log(typeof (value.GuixObject))

        //    if (value.hasOwnProperty('Attached')) {
        //        //var guixObject = <guixEntities.GuixObject>value;

        //        var controlUID = value.Attached;

        //        var param = <mibxEntities.Param>(_.first(_.where(params, { UID: value.Attached })));

        //        if (param.Type === 'String') {
        //            var label = document.createElement('label');
        //            label.htmlFor = param.UID;
        //            label.textContent = param.Name;
        //            label.classList.add('k-label');

        //            var control = document.createElement('input');
        //            control.type = 'text';
        //            control.id = param.UID;
        //            control.name = param.UID;
        //            control.classList.add('k-widget', 'k-textbox');


        //            if (param.Status === "mandatory") {
        //                div.classList.add("required");
        //            }

        //            div.appendChild(label);
        //            div.appendChild(control);
        //        }
        //        else if (param.Type === 'Double') {
        //            var label = document.createElement('label');
        //            label.htmlFor = param.UID;
        //            label.textContent = param.Name;
        //            label.classList.add('k-label');

        //            var control = document.createElement('input');
        //            control.type = 'number';
        //            control.id = param.UID;
        //            control.step = '0.01';
        //            control.classList.add('k-widget', 'k-textbox');

        //            if (param.Status === "mandatory") {
        //                div.classList.add("required");
        //            }

        //            div.appendChild(label);
        //            div.appendChild(control);
        //        }
        //        else if (param.Type === 'UInt16' || param.Type === 'UInt8' || param.Type === 'Int32' || param.Type === 'Int8' || param.Type === 'Int16') {
        //            var label = document.createElement('label');
        //            label.htmlFor = param.UID;
        //            label.textContent = param.Name;
        //            label.classList.add('k-label');

        //            var control = document.createElement('input');
        //            control.type = 'number';
        //            control.id = param.UID;
        //            control.step = '1';
        //            control.classList.add('k-widget', 'k-textbox');

        //            if (param.Status === "mandatory") {
        //                div.classList.add("required");
        //            }

        //            div.appendChild(label);
        //            div.appendChild(control);
        //        }
        //        else if (param.Type === 'Date') {
        //            var label = document.createElement('label');
        //            label.htmlFor = param.UID;
        //            label.textContent = param.Name;
        //            label.classList.add('k-label');

        //            var control = document.createElement('input');
        //            control.type = 'date';
        //            control.id = param.UID;
        //            control.classList.add('k-widget', 'k-textbox');

        //            if (param.Status === "mandatory") {
        //                div.classList.add("required");
        //            }

        //            div.appendChild(label);
        //            div.appendChild(control);
        //        }
        //        else if (param.Type === 'DateTime') {
        //            var label = document.createElement('label');
        //            label.htmlFor = param.UID;
        //            label.textContent = param.Name;
        //            label.classList.add('k-label');

        //            var control = document.createElement('input');
        //            control.type = 'datetime';
        //            control.id = param.UID;
        //            control.classList.add('k-widget', 'k-textbox');

        //            if (param.Status === "mandatory") {
        //                div.classList.add("required");
        //            }

        //            div.appendChild(label);
        //            div.appendChild(control);
        //        }
        //        else if (param.Type === 'Bool') {
        //            var label = document.createElement('label');
        //            label.htmlFor = param.UID;
        //            label.textContent = param.Name;
        //            label.classList.add('k-label');

        //            var control = document.createElement('input');
        //            control.type = 'checkbox';
        //            control.id = param.UID;
        //            //control.classList.add('k-widget', 'k-checkbox');

        //            if (param.Status === "mandatory") {
        //                div.classList.add("required");
        //            }

        //            div.appendChild(label);
        //            div.appendChild(control);
        //        }
        //        else {
        //            // do nothing atm.
        //        }

        //        //div.innerHTML = controlUID;
        //    }


        //    sectionDiv.appendChild(div);
        //});
    }

    generateSection(divSection: HTMLElement, guixSection: Gemini.GuixSection): void {
        var headerChk = document.createElement('input');
        headerChk.type = 'checkbox';
        headerChk.className = 'toggle-box';
        headerChk.id = 'chk' + guixSection.UID;

        var headerLabel = document.createElement('label');
        headerLabel.htmlFor = 'chk' + guixSection.UID;
        headerLabel.innerText = <string>(guixSection.Name);

        var sectionDiv = document.createElement('div');

        var params = this.params;

        //_.reduce(_.map(params, function(data){return data.Param}), function(result, arr){return result.concat(arr)},[])
        var paramsFlatArray = _.reduce(params, function (result, arr) { return result.concat(arr) }, []);
        //sectionDiv.innerText = loremipsum;
        //if (section instanceof guixEntities.GuixSection)
        
        {            
            if (guixSection !== null && guixSection !== undefined) {
                if (guixSection.Items != null) {

                    for (var i = 0; i < guixSection.Items.length; i++)
                    {
                        if (guixSection.Items[i] instanceof Gemini.GuixTable) {
                            this.generateTable(sectionDiv, <Gemini.GuixTable>(guixSection.Items[i]), params);
                        }                        
                    }

                    var parameters: Array<Gemini.GuixObject>;
                    parameters = new Array<Gemini.GuixObject>();
                    var j: number;
                    j = 0;
                    for (var i = 0; i < guixSection.Items.length; i++) {
                        if (guixSection.Items[i] instanceof Gemini.GuixObject) {
                            parameters[j++] = <Gemini.GuixObject>(guixSection.Items[i]);                            
                        }
                    }

                    this.generateObjects(sectionDiv, parameters, params);

                    //var controls = <Array<string>>guixSection.GuixObject;
                    
                }               
            }

            
            //else if (guixSection !== null && guixSection !== undefined) {
            //    //self.generateSection(divSection, value);                   

            //    if (guixSection.GuixObject !== null && guixSection.GuixObject !== undefined) {

            //        var objectsArray = guixSection.GuixObject;

            //        if (objectsArray !== null && objectsArray !== undefined && objectsArray.length > 0) {
            //            this.generateObjects(divSection, objectsArray, params)
            //        }
            //    }

            //}
        }

        divSection.appendChild(headerChk);
        divSection.appendChild(headerLabel);
        //divSection.appendChild(document.createElement('br'));
        divSection.appendChild(sectionDiv);
    };
}

class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}
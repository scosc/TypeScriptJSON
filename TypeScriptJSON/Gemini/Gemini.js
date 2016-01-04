"use strict";
var Gemini;
(function (Gemini) {
    (function (ConvertOperation) {
        ConvertOperation[ConvertOperation["multiplication"] = 'multiplication'] = "multiplication";
        ConvertOperation[ConvertOperation["division"] = 'division'] = "division";
    })(Gemini.ConvertOperation || (Gemini.ConvertOperation = {}));
    var ConvertOperation = Gemini.ConvertOperation;
    (function (Units) {
        Units[Units["TS"] = 'TS'] = "TS";
        Units[Units["PCR32"] = 'PCR32'] = "PCR32";
        Units[Units["cm"] = 'cm'] = "cm";
        Units[Units["Km"] = 'Km'] = "Km";
        Units[Units["packets"] = 'packets'] = "packets";
        Units[Units["bursts"] = 'bursts'] = "bursts";
        Units[Units["symbols"] = 'symbols'] = "symbols";
        Units[Units["dB"] = 'dB'] = "dB";
        Units[Units["dBm"] = 'dBm'] = "dBm";
        Units[Units["degrees"] = 'degrees'] = "degrees";
        Units[Units["hours"] = 'hours'] = "hours";
        Units[Units["minutes"] = 'minutes'] = "minutes";
        Units[Units["sec"] = 'sec'] = "sec";
        Units[Units["ms"] = 'ms'] = "ms";
        Units[Units["µs"] = 'µs'] = "µs";
        Units[Units["Hz"] = 'Hz'] = "Hz";
        Units[Units["KHz"] = 'KHz'] = "KHz";
        Units[Units["MHz"] = 'MHz'] = "MHz";
        Units[Units["GHz"] = 'GHz'] = "GHz";
        Units[Units["bytes"] = 'bytes'] = "bytes";
        Units[Units["KB"] = 'KB'] = "KB";
        Units[Units["MB"] = 'MB'] = "MB";
        Units[Units["GB"] = 'GB'] = "GB";
        Units[Units["bps"] = 'bps'] = "bps";
        Units[Units["Kbps"] = 'Kbps'] = "Kbps";
        Units[Units["pps"] = 'pps'] = "pps";
        Units[Units["sps"] = 'sps'] = "sps";
        Units[Units["Ksps"] = 'Ksps'] = "Ksps";
        Units[Units["ppm"] = 'ppm'] = "ppm";
        Units[Units["Mbps"] = 'Mbps'] = "Mbps";
        Units[Units["mA"] = 'mA'] = "mA";
        Units[Units["W"] = 'W'] = "W";
        Units[Units["mW"] = 'mW'] = "mW";
        Units[Units["V"] = 'V'] = "V";
        Units[Units["Item"] = ''] = "Item";
        Units[Units["BBsegment"] = 'BB segment'] = "BBsegment";
        Units[Units["COMMbuff"] = 'COMM buff'] = "COMMbuff";
        Units[Units["MPEGframes"] = 'MPEG frames'] = "MPEGframes";
        Units[Units["TSSS"] = 'TS/SS'] = "TSSS";
        Units[Units["Item1"] = '%'] = "Item1";
        Units[Units["Item27MHzticks"] = '27MHz ticks'] = "Item27MHzticks";
        Units[Units["EsN0dB"] = 'Es/N0 dB'] = "EsN0dB";
        Units[Units["CN0dB"] = 'C/N0 dB'] = "CN0dB";
        Units[Units["Item01dB"] = '0.1dB'] = "Item01dB";
        Units[Units["Item001dB"] = '0.01dB'] = "Item001dB";
        Units[Units["Item01dBmHz"] = '0.1dBm/Hz'] = "Item01dBmHz";
        Units[Units["C"] = '°C'] = "C";
        Units[Units["dBmHz"] = 'dBm/Hz'] = "dBmHz";
        Units[Units["Item10ms"] = '10ms'] = "Item10ms";
    })(Gemini.Units || (Gemini.Units = {}));
    var Units = Gemini.Units;
    (function (UIAccessLevel) {
        UIAccessLevel[UIAccessLevel["normal"] = 'normal'] = "normal";
        UIAccessLevel[UIAccessLevel["tech"] = 'tech'] = "tech";
    })(Gemini.UIAccessLevel || (Gemini.UIAccessLevel = {}));
    var UIAccessLevel = Gemini.UIAccessLevel;
    (function (Severity) {
        Severity[Severity["information"] = 'information'] = "information";
        Severity[Severity["normal"] = 'normal'] = "normal";
        Severity[Severity["warning"] = 'warning'] = "warning";
        Severity[Severity["minor"] = 'minor'] = "minor";
        Severity[Severity["major"] = 'major'] = "major";
        Severity[Severity["critical"] = 'critical'] = "critical";
    })(Gemini.Severity || (Gemini.Severity = {}));
    var Severity = Gemini.Severity;
    (function (CapabilityLevel) {
        CapabilityLevel[CapabilityLevel["global"] = 'global'] = "global";
        CapabilityLevel[CapabilityLevel["folder"] = 'folder'] = "folder";
        CapabilityLevel[CapabilityLevel["element"] = 'element'] = "element";
    })(Gemini.CapabilityLevel || (Gemini.CapabilityLevel = {}));
    var CapabilityLevel = Gemini.CapabilityLevel;
    (function (ClauseOperand) {
        ClauseOperand[ClauseOperand["equal"] = 'equal'] = "equal";
        ClauseOperand[ClauseOperand["notEqual"] = 'notEqual'] = "notEqual";
        ClauseOperand[ClauseOperand["less"] = 'less'] = "less";
        ClauseOperand[ClauseOperand["lessOrEqual"] = 'lessOrEqual'] = "lessOrEqual";
        ClauseOperand[ClauseOperand["greater"] = 'greater'] = "greater";
        ClauseOperand[ClauseOperand["greaterEqual"] = 'greaterEqual'] = "greaterEqual";
        ClauseOperand[ClauseOperand["isEmpty"] = 'isEmpty'] = "isEmpty";
    })(Gemini.ClauseOperand || (Gemini.ClauseOperand = {}));
    var ClauseOperand = Gemini.ClauseOperand;
    (function (ItemChoiceType) {
        ItemChoiceType[ItemChoiceType["Absolute"] = 'Absolute'] = "Absolute";
        ItemChoiceType[ItemChoiceType["UID"] = 'UID'] = "UID";
    })(Gemini.ItemChoiceType || (Gemini.ItemChoiceType = {}));
    var ItemChoiceType = Gemini.ItemChoiceType;
    (function (ClauseLogicalOperand) {
        ClauseLogicalOperand[ClauseLogicalOperand["and"] = 'and'] = "and";
        ClauseLogicalOperand[ClauseLogicalOperand["or"] = 'or'] = "or";
    })(Gemini.ClauseLogicalOperand || (Gemini.ClauseLogicalOperand = {}));
    var ClauseLogicalOperand = Gemini.ClauseLogicalOperand;
    (function (Status) {
        Status[Status["optional"] = 'optional'] = "optional";
        Status[Status["mandatory"] = 'mandatory'] = "mandatory";
        Status[Status["obsolete"] = 'obsolete'] = "obsolete";
    })(Gemini.Status || (Gemini.Status = {}));
    var Status = Gemini.Status;
    (function (SupportedIn) {
        SupportedIn[SupportedIn["operational"] = 'operational'] = "operational";
        SupportedIn[SupportedIn["boot"] = 'boot'] = "boot";
        SupportedIn[SupportedIn["both"] = 'both'] = "both";
    })(Gemini.SupportedIn || (Gemini.SupportedIn = {}));
    var SupportedIn = Gemini.SupportedIn;
    (function (ItemChoiceType1) {
        ItemChoiceType1[ItemChoiceType1["Absolute"] = 'Absolute'] = "Absolute";
        ItemChoiceType1[ItemChoiceType1["UID"] = 'UID'] = "UID";
    })(Gemini.ItemChoiceType1 || (Gemini.ItemChoiceType1 = {}));
    var ItemChoiceType1 = Gemini.ItemChoiceType1;
    (function (MibMaxAccess) {
        MibMaxAccess[MibMaxAccess["notaccessible"] = 'not-accessible'] = "notaccessible";
        MibMaxAccess[MibMaxAccess["accessiblefornotify"] = 'accessible-for-notify'] = "accessiblefornotify";
        MibMaxAccess[MibMaxAccess["readonly"] = 'read-only'] = "readonly";
        MibMaxAccess[MibMaxAccess["readwrite"] = 'read-write'] = "readwrite";
        MibMaxAccess[MibMaxAccess["readcreate"] = 'read-create'] = "readcreate";
    })(Gemini.MibMaxAccess || (Gemini.MibMaxAccess = {}));
    var MibMaxAccess = Gemini.MibMaxAccess;
    (function (AccessLevel) {
        AccessLevel[AccessLevel["guest"] = 'guest'] = "guest";
        AccessLevel[AccessLevel["user"] = 'user'] = "user";
        AccessLevel[AccessLevel["operator"] = 'operator'] = "operator";
        AccessLevel[AccessLevel["admin"] = 'admin'] = "admin";
        AccessLevel[AccessLevel["supervisor"] = 'supervisor'] = "supervisor";
        AccessLevel[AccessLevel["tech"] = 'tech'] = "tech";
        AccessLevel[AccessLevel["readonly"] = 'read-only'] = "readonly";
    })(Gemini.AccessLevel || (Gemini.AccessLevel = {}));
    var AccessLevel = Gemini.AccessLevel;
    (function (ObjectMode) {
        ObjectMode[ObjectMode["none"] = 'none'] = "none";
        ObjectMode[ObjectMode["template"] = 'template'] = "template";
        ObjectMode[ObjectMode["element"] = 'element'] = "element";
        ObjectMode[ObjectMode["NMS"] = 'NMS'] = "NMS";
    })(Gemini.ObjectMode || (Gemini.ObjectMode = {}));
    var ObjectMode = Gemini.ObjectMode;
    (function (ServiceInterruption) {
        ServiceInterruption[ServiceInterruption["none"] = 'none'] = "none";
        ServiceInterruption[ServiceInterruption["interruption"] = 'interruption'] = "interruption";
        ServiceInterruption[ServiceInterruption["reset"] = 'reset'] = "reset";
    })(Gemini.ServiceInterruption || (Gemini.ServiceInterruption = {}));
    var ServiceInterruption = Gemini.ServiceInterruption;
    (function (DefaultUpgrade) {
        DefaultUpgrade[DefaultUpgrade["none"] = 'none'] = "none";
        DefaultUpgrade[DefaultUpgrade["overwrite"] = 'overwrite'] = "overwrite";
        DefaultUpgrade[DefaultUpgrade["overwriteunchanged"] = 'overwrite-unchanged'] = "overwriteunchanged";
    })(Gemini.DefaultUpgrade || (Gemini.DefaultUpgrade = {}));
    var DefaultUpgrade = Gemini.DefaultUpgrade;
    (function (Type) {
        Type[Type["String"] = 'String'] = "String";
        Type[Type["Bool"] = 'Bool'] = "Bool";
        Type[Type["OID"] = 'OID'] = "OID";
        Type[Type["Int32Bits"] = 'Int32Bits'] = "Int32Bits";
        Type[Type["Int8"] = 'Int8'] = "Int8";
        Type[Type["UInt8"] = 'UInt8'] = "UInt8";
        Type[Type["Int16"] = 'Int16'] = "Int16";
        Type[Type["UInt16"] = 'UInt16'] = "UInt16";
        Type[Type["Int32"] = 'Int32'] = "Int32";
        Type[Type["UInt32"] = 'UInt32'] = "UInt32";
        Type[Type["Int64"] = 'Int64'] = "Int64";
        Type[Type["UInt64"] = 'UInt64'] = "UInt64";
        Type[Type["Float"] = 'Float'] = "Float";
        Type[Type["Double"] = 'Double'] = "Double";
        Type[Type["DateTime"] = 'DateTime'] = "DateTime";
        Type[Type["Date"] = 'Date'] = "Date";
        Type[Type["Time"] = 'Time'] = "Time";
        Type[Type["TimeTicks"] = 'TimeTicks'] = "TimeTicks";
        Type[Type["MAC"] = 'MAC'] = "MAC";
        Type[Type["IPv4"] = 'IPv4'] = "IPv4";
        Type[Type["IPv6"] = 'IPv6'] = "IPv6";
        Type[Type["RowStatus"] = 'RowStatus'] = "RowStatus";
        Type[Type["Complex"] = 'Complex'] = "Complex";
        Type[Type["File"] = 'File'] = "File";
        Type[Type["IPv4Hex"] = 'IPv4 Hex'] = "IPv4Hex";
        Type[Type["IPv4Multicast"] = 'IPv4 Multicast'] = "IPv4Multicast";
        Type[Type["IPv4MulticastHex"] = 'IPv4 Multicast Hex'] = "IPv4MulticastHex";
        Type[Type["IPv4Unicast"] = 'IPv4 Unicast'] = "IPv4Unicast";
        Type[Type["IPv4UnicastHex"] = 'IPv4 Unicast Hex'] = "IPv4UnicastHex";
        Type[Type["IPv6PrefixLength"] = 'IPv6 Prefix Length'] = "IPv6PrefixLength";
        Type[Type["SubnetMask"] = 'Subnet Mask'] = "SubnetMask";
    })(Gemini.Type || (Gemini.Type = {}));
    var Type = Gemini.Type;
    (function (ParamUsage) {
        ParamUsage[ParamUsage["none"] = 'none'] = "none";
        ParamUsage[ParamUsage["config"] = 'config'] = "config";
    })(Gemini.ParamUsage || (Gemini.ParamUsage = {}));
    var ParamUsage = Gemini.ParamUsage;
    (function (ItemsChoiceType) {
        ItemsChoiceType[ItemsChoiceType["Augments"] = 'Augments'] = "Augments";
        ItemsChoiceType[ItemsChoiceType["Index"] = 'Index'] = "Index";
        ItemsChoiceType[ItemsChoiceType["RowStatus"] = 'RowStatus'] = "RowStatus";
    })(Gemini.ItemsChoiceType || (Gemini.ItemsChoiceType = {}));
    var ItemsChoiceType = Gemini.ItemsChoiceType;
    (function (EventAttributes) {
        EventAttributes[EventAttributes["id"] = 'id'] = "id";
        EventAttributes[EventAttributes["sequence"] = 'sequence'] = "sequence";
        EventAttributes[EventAttributes["status"] = 'status'] = "status";
        EventAttributes[EventAttributes["param"] = 'param'] = "param";
        EventAttributes[EventAttributes["version"] = 'version'] = "version";
        EventAttributes[EventAttributes["SubModule"] = 'SubModule'] = "SubModule";
        EventAttributes[EventAttributes["SubModuleInstance"] = 'SubModuleInstance'] = "SubModuleInstance";
    })(Gemini.EventAttributes || (Gemini.EventAttributes = {}));
    var EventAttributes = Gemini.EventAttributes;
    (function (EventAttrMaps) {
        EventAttrMaps[EventAttrMaps["absolute"] = 'absolute'] = "absolute";
        EventAttrMaps[EventAttrMaps["lookup"] = 'lookup'] = "lookup";
        EventAttrMaps[EventAttrMaps["GetValue"] = 'GetValue'] = "GetValue";
        EventAttrMaps[EventAttrMaps["position"] = 'position'] = "position";
        EventAttrMaps[EventAttrMaps["replace"] = 'replace'] = "replace";
    })(Gemini.EventAttrMaps || (Gemini.EventAttrMaps = {}));
    var EventAttrMaps = Gemini.EventAttrMaps;
    class LinkBase extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Component() {
            return this.componentField;
        }
        set Component(value) {
            this.componentField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Version() {
            return this.versionField;
        }
        set Version(value) {
            this.versionField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Merge() {
            return this.mergeField;
        }
        set Merge(value) {
            this.mergeField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get LinkTelemetries() {
            return this.linkTelemetriesField;
        }
        set LinkTelemetries(value) {
            this.linkTelemetriesField = value;
        }
    }
    Gemini.LinkBase = LinkBase;
    class Links extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get PrototypeLink() {
            return this.prototypeLinkField;
        }
        set PrototypeLink(value) {
            this.prototypeLinkField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get SingletonLink() {
            return this.singletonLinkField;
        }
        set SingletonLink(value) {
            this.singletonLinkField = value;
        }
    }
    Gemini.Links = Links;
    class UniqueItem extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get UID() {
            return this.uIDField;
        }
        set UID(value) {
            this.uIDField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Name() {
            return this.nameField;
        }
        set Name(value) {
            this.nameField = value;
        }
    }
    Gemini.UniqueItem = UniqueItem;
    class GuixPresentation extends Gemini.GeminiObject {
        get ValueConverter() {
            return this.valueConverterField;
        }
        set ValueConverter(value) {
            this.valueConverterField = value;
        }
        get NumericUpDown() {
            return this.numericUpDownField;
        }
        set NumericUpDown(value) {
            this.numericUpDownField = value;
        }
        get MultilineTextOptions() {
            return this.multilineTextOptionsField;
        }
        set MultilineTextOptions(value) {
            this.multilineTextOptionsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get IsMultilineText() {
            return this.isMultilineTextField;
        }
        set IsMultilineText(value) {
            this.isMultilineTextField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get IsUrl() {
            return this.isUrlField;
        }
        set IsUrl(value) {
            this.isUrlField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get DoNotConvertToLocalTime() {
            return this.doNotConvertToLocalTimeField;
        }
        set DoNotConvertToLocalTime(value) {
            this.doNotConvertToLocalTimeField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get ShowAsProfileSelector() {
            return this.showAsProfileSelectorField;
        }
        set ShowAsProfileSelector(value) {
            this.showAsProfileSelectorField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get IsPasswordField() {
            return this.isPasswordFieldField;
        }
        set IsPasswordField(value) {
            this.isPasswordFieldField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get NumberOfDecimalDigits() {
            return this.numberOfDecimalDigitsField;
        }
        set NumberOfDecimalDigits(value) {
            this.numberOfDecimalDigitsField = value;
        }
    }
    Gemini.GuixPresentation = GuixPresentation;
    class ValueConverterBase extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get ConvertOperation() {
            return this.convertOperationField;
        }
        set ConvertOperation(value) {
            this.convertOperationField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Factor() {
            return this.factorField;
        }
        set Factor(value) {
            this.factorField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get OverrideUnits() {
            return this.overrideUnitsField;
        }
        set OverrideUnits(value) {
            this.overrideUnitsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get OverrideUnitsSpecified() {
            return this.overrideUnitsFieldSpecified;
        }
        set OverrideUnitsSpecified(value) {
            this.overrideUnitsFieldSpecified = value;
        }
    }
    Gemini.ValueConverterBase = ValueConverterBase;
    class NumericUpDown extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Step() {
            return this.stepField;
        }
        set Step(value) {
            this.stepField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get AllowDirectEdit() {
            return this.allowDirectEditField;
        }
        set AllowDirectEdit(value) {
            this.allowDirectEditField = value;
        }
    }
    Gemini.NumericUpDown = NumericUpDown;
    class MultilineTextOptions extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Lines() {
            return this.linesField;
        }
        set Lines(value) {
            this.linesField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Wrap() {
            return this.wrapField;
        }
        set Wrap(value) {
            this.wrapField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get WidthFactor() {
            return this.widthFactorField;
        }
        set WidthFactor(value) {
            this.widthFactorField = value;
        }
    }
    Gemini.MultilineTextOptions = MultilineTextOptions;
    class AttachedMibxItem extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Attached() {
            return this.attachedField;
        }
        set Attached(value) {
            this.attachedField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get UID() {
            return this.uIDField;
        }
        set UID(value) {
            this.uIDField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get DisplayName() {
            return this.displayNameField;
        }
        set DisplayName(value) {
            this.displayNameField = value;
        }
    }
    Gemini.AttachedMibxItem = AttachedMibxItem;
    class Commands extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
    }
    Gemini.Commands = Commands;
    class Element extends Gemini.GeminiObject {
    }
    Gemini.Element = Element;
    class LinkedGuixCommand extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get CommandUID() {
            return this.commandUIDField;
        }
        set CommandUID(value) {
            this.commandUIDField = value;
        }
    }
    Gemini.LinkedGuixCommand = LinkedGuixCommand;
    class LinkedGuixCommandNode extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get CommandNodeUID() {
            return this.commandNodeUIDField;
        }
        set CommandNodeUID(value) {
            this.commandNodeUIDField = value;
        }
    }
    Gemini.LinkedGuixCommandNode = LinkedGuixCommandNode;
    class Condition extends Gemini.GeminiObject {
        get ClauseGroup() {
            return this.clauseGroupField;
        }
        set ClauseGroup(value) {
            this.clauseGroupField = value;
        }
    }
    Gemini.Condition = Condition;
    class ClauseGroup extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Operand() {
            return this.operandField;
        }
        set Operand(value) {
            this.operandField = value;
        }
    }
    Gemini.ClauseGroup = ClauseGroup;
    class Clause extends Gemini.GeminiObject {
        get ClauseLeft() {
            return this.clauseLeftField;
        }
        set ClauseLeft(value) {
            this.clauseLeftField = value;
        }
        get Operand() {
            return this.operandField;
        }
        set Operand(value) {
            this.operandField = value;
        }
        get ClauseRight() {
            return this.clauseRightField;
        }
        set ClauseRight(value) {
            this.clauseRightField = value;
        }
    }
    Gemini.Clause = Clause;
    class ClauseLeft extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Item() {
            return this.itemField;
        }
        set Item(value) {
            this.itemField = value;
        }
    }
    Gemini.ClauseLeft = ClauseLeft;
    class CapabilityClause extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Path() {
            return this.pathField;
        }
        set Path(value) {
            this.pathField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Level() {
            return this.levelField;
        }
        set Level(value) {
            this.levelField = value;
        }
    }
    Gemini.CapabilityClause = CapabilityClause;
    class ClauseRight extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlChoiceIdentifierAttribute
        get Item() {
            return this.itemField;
        }
        set Item(value) {
            this.itemField = value;
        }
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get ItemElementName() {
            return this.itemElementNameField;
        }
        set ItemElementName(value) {
            this.itemElementNameField = value;
        }
    }
    Gemini.ClauseRight = ClauseRight;
    class Transport extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Sequence() {
            return this.sequenceField;
        }
        set Sequence(value) {
            this.sequenceField = value;
        }
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get SequenceSpecified() {
            return this.sequenceFieldSpecified;
        }
        set SequenceSpecified(value) {
            this.sequenceFieldSpecified = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get PDUSequence() {
            return this.pDUSequenceField;
        }
        set PDUSequence(value) {
            this.pDUSequenceField = value;
        }
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get PDUSequenceSpecified() {
            return this.pDUSequenceFieldSpecified;
        }
        set PDUSequenceSpecified(value) {
            this.pDUSequenceFieldSpecified = value;
        }
    }
    Gemini.Transport = Transport;
    class Dependencies extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get InactiveDependency() {
            return this.inactiveDependencyField;
        }
        set InactiveDependency(value) {
            this.inactiveDependencyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get SetValueDependency() {
            return this.setValueDependencyField;
        }
        set SetValueDependency(value) {
            this.setValueDependencyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get LimitsDependency() {
            return this.limitsDependencyField;
        }
        set LimitsDependency(value) {
            this.limitsDependencyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get LicenseDependency() {
            return this.licenseDependencyField;
        }
        set LicenseDependency(value) {
            this.licenseDependencyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get TableLimitsDependency() {
            return this.tableLimitsDependencyField;
        }
        set TableLimitsDependency(value) {
            this.tableLimitsDependencyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get ReadOnlyDependency() {
            return this.readOnlyDependencyField;
        }
        set ReadOnlyDependency(value) {
            this.readOnlyDependencyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get RangeDependency() {
            return this.rangeDependencyField;
        }
        set RangeDependency(value) {
            this.rangeDependencyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get ChangeStatusDependency() {
            return this.changeStatusDependencyField;
        }
        set ChangeStatusDependency(value) {
            this.changeStatusDependencyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get DisableStartsProcessDependency() {
            return this.disableStartsProcessDependencyField;
        }
        set DisableStartsProcessDependency(value) {
            this.disableStartsProcessDependencyField = value;
        }
    }
    Gemini.Dependencies = Dependencies;
    class Dependency extends Gemini.GeminiObject {
        get Condition() {
            return this.conditionField;
        }
        set Condition(value) {
            this.conditionField = value;
        }
    }
    Gemini.Dependency = Dependency;
    class SetValue extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlChoiceIdentifierAttribute
        get Item() {
            return this.itemField;
        }
        set Item(value) {
            this.itemField = value;
        }
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get ItemElementName() {
            return this.itemElementNameField;
        }
        set ItemElementName(value) {
            this.itemElementNameField = value;
        }
    }
    Gemini.SetValue = SetValue;
    class Limits extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
        get RegEx() {
            return this.regExField;
        }
        set RegEx(value) {
            this.regExField = value;
        }
    }
    Gemini.Limits = Limits;
    class RangeBase extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get UID() {
            return this.uIDField;
        }
        set UID(value) {
            this.uIDField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Min() {
            return this.minField;
        }
        set Min(value) {
            this.minField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Max() {
            return this.maxField;
        }
        set Max(value) {
            this.maxField = value;
        }
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get MaxSpecified() {
            return this.maxFieldSpecified;
        }
        set MaxSpecified(value) {
            this.maxFieldSpecified = value;
        }
    }
    Gemini.RangeBase = RangeBase;
    class Upgrade extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Default() {
            return this.defaultField;
        }
        set Default(value) {
            this.defaultField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Convert() {
            return this.convertField;
        }
        set Convert(value) {
            this.convertField = value;
        }
    }
    Gemini.Upgrade = Upgrade;
    class TableDef extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlChoiceIdentifierAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get ItemsElementName() {
            return this.itemsElementNameField;
        }
        set ItemsElementName(value) {
            this.itemsElementNameField = value;
        }
    }
    Gemini.TableDef = TableDef;
    class RowDefaultsRow extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get ColumnDefault() {
            return this.columnDefaultField;
        }
        set ColumnDefault(value) {
            this.columnDefaultField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get IndexValue() {
            return this.indexValueField;
        }
        set IndexValue(value) {
            this.indexValueField = value;
        }
    }
    Gemini.RowDefaultsRow = RowDefaultsRow;
    class ColumnDefault extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get UID() {
            return this.uIDField;
        }
        set UID(value) {
            this.uIDField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Value() {
            return this.valueField;
        }
        set Value(value) {
            this.valueField = value;
        }
    }
    Gemini.ColumnDefault = ColumnDefault;
    class TrapMapping extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Item() {
            return this.itemField;
        }
        set Item(value) {
            this.itemField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get EventAttr() {
            return this.eventAttrField;
        }
        set EventAttr(value) {
            this.eventAttrField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Map() {
            return this.mapField;
        }
        set Map(value) {
            this.mapField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Value() {
            return this.valueField;
        }
        set Value(value) {
            this.valueField = value;
        }
    }
    Gemini.TrapMapping = TrapMapping;
    class ReplacePattern extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get KeyValue() {
            return this.keyValueField;
        }
        set KeyValue(value) {
            this.keyValueField = value;
        }
    }
    Gemini.ReplacePattern = ReplacePattern;
    class KeyValue extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Key() {
            return this.keyField;
        }
        set Key(value) {
            this.keyField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Value() {
            return this.valueField;
        }
        set Value(value) {
            this.valueField = value;
        }
    }
    Gemini.KeyValue = KeyValue;
    class Licenses extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get License() {
            return this.licenseField;
        }
        set License(value) {
            this.licenseField = value;
        }
    }
    Gemini.Licenses = Licenses;
    class License extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Code() {
            return this.codeField;
        }
        set Code(value) {
            this.codeField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Description() {
            return this.descriptionField;
        }
        set Description(value) {
            this.descriptionField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Max() {
            return this.maxField;
        }
        set Max(value) {
            this.maxField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Extent() {
            return this.extentField;
        }
        set Extent(value) {
            this.extentField = value;
        }
    }
    Gemini.License = License;
    class CommandsContainer extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
    }
    Gemini.CommandsContainer = CommandsContainer;
    class RowDefaults extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Row() {
            return this.rowField;
        }
        set Row(value) {
            this.rowField = value;
        }
    }
    Gemini.RowDefaults = RowDefaults;
    class SNMPHealthOid extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Oid() {
            return this.oidField;
        }
        set Oid(value) {
            this.oidField = value;
        }
    }
    Gemini.SNMPHealthOid = SNMPHealthOid;
    class Health extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get SNMPHealthRule() {
            return this.sNMPHealthRuleField;
        }
        set SNMPHealthRule(value) {
            this.sNMPHealthRuleField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get PingHealthRule() {
            return this.pingHealthRuleField;
        }
        set PingHealthRule(value) {
            this.pingHealthRuleField = value;
        }
    }
    Gemini.Health = Health;
    class EventBaseContainer extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
    }
    Gemini.EventBaseContainer = EventBaseContainer;
    class Mibx extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Links() {
            return this.linksField;
        }
        set Links(value) {
            this.linksField = value;
        }
        //Not supported @System.Xml.Serialization.XmlArrayAttribute
        //Not supported @System.Xml.Serialization.XmlArrayItemAttribute
        get Licenses() {
            return this.licensesField;
        }
        set Licenses(value) {
            this.licensesField = value;
        }
        get Health() {
            return this.healthField;
        }
        set Health(value) {
            this.healthField = value;
        }
        get Events() {
            return this.eventsField;
        }
        set Events(value) {
            this.eventsField = value;
        }
        get Alarms() {
            return this.alarmsField;
        }
        set Alarms(value) {
            this.alarmsField = value;
        }
        get Commands() {
            return this.commandsField;
        }
        set Commands(value) {
            this.commandsField = value;
        }
        get Module() {
            return this.moduleField;
        }
        set Module(value) {
            this.moduleField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Schema() {
            return this.schemaField;
        }
        set Schema(value) {
            this.schemaField = value;
        }
    }
    Gemini.Mibx = Mibx;
    class DependenciesBase extends Gemini.GeminiObject {
    }
    Gemini.DependenciesBase = DependenciesBase;
    class LinkedGuixNode extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get NodeUID() {
            return this.nodeUIDField;
        }
        set NodeUID(value) {
            this.nodeUIDField = value;
        }
    }
    Gemini.LinkedGuixNode = LinkedGuixNode;
    class GuixContainer extends Gemini.GeminiObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
    }
    Gemini.GuixContainer = GuixContainer;
    class Guix extends Gemini.GeminiObject {
        get Configuration() {
            return this.configurationField;
        }
        set Configuration(value) {
            this.configurationField = value;
        }
        get Telemetries() {
            return this.telemetriesField;
        }
        set Telemetries(value) {
            this.telemetriesField = value;
        }
        get Commands() {
            return this.commandsField;
        }
        set Commands(value) {
            this.commandsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Schema() {
            return this.schemaField;
        }
        set Schema(value) {
            this.schemaField = value;
        }
    }
    Gemini.Guix = Guix;
    class SingletonLink extends LinkBase {
    }
    Gemini.SingletonLink = SingletonLink;
    class PrototypeLink extends LinkBase {
    }
    Gemini.PrototypeLink = PrototypeLink;
    class UniqueLink extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Component() {
            return this.componentField;
        }
        set Component(value) {
            this.componentField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Version() {
            return this.versionField;
        }
        set Version(value) {
            this.versionField = value;
        }
    }
    Gemini.UniqueLink = UniqueLink;
    class GuixGroup extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Row() {
            return this.rowField;
        }
        set Row(value) {
            this.rowField = value;
        }
    }
    Gemini.GuixGroup = GuixGroup;
    class ValueConverter extends ValueConverterBase {
    }
    Gemini.ValueConverter = ValueConverter;
    class GuixItem extends AttachedMibxItem {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Column() {
            return this.columnField;
        }
        set Column(value) {
            this.columnField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Colspan() {
            return this.colspanField;
        }
        set Colspan(value) {
            this.colspanField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Row() {
            return this.rowField;
        }
        set Row(value) {
            this.rowField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Rowspan() {
            return this.rowspanField;
        }
        set Rowspan(value) {
            this.rowspanField = value;
        }
    }
    Gemini.GuixItem = GuixItem;
    class GuixTableColumn extends AttachedMibxItem {
        get GuixPresentation() {
            return this.guixPresentationField;
        }
        set GuixPresentation(value) {
            this.guixPresentationField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get GroupUID() {
            return this.groupUIDField;
        }
        set GroupUID(value) {
            this.groupUIDField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get IsSingleRowTableName() {
            return this.isSingleRowTableNameField;
        }
        set IsSingleRowTableName(value) {
            this.isSingleRowTableNameField = value;
        }
    }
    Gemini.GuixTableColumn = GuixTableColumn;
    class GuixCommand extends UniqueItem {
        get GuixPrimaryCommandObject() {
            return this.guixPrimaryCommandObjectField;
        }
        set GuixPrimaryCommandObject(value) {
            this.guixPrimaryCommandObjectField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get GuixCommandParameter() {
            return this.guixCommandParameterField;
        }
        set GuixCommandParameter(value) {
            this.guixCommandParameterField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Value() {
            return this.valueField;
        }
        set Value(value) {
            this.valueField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get AttachToRowInstance() {
            return this.attachToRowInstanceField;
        }
        set AttachToRowInstance(value) {
            this.attachToRowInstanceField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get UIAccessLevel() {
            return this.uIAccessLevelField;
        }
        set UIAccessLevel(value) {
            this.uIAccessLevelField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get QuickAccess() {
            return this.quickAccessField;
        }
        set QuickAccess(value) {
            this.quickAccessField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get UseInBulk() {
            return this.useInBulkField;
        }
        set UseInBulk(value) {
            this.useInBulkField = value;
        }
    }
    Gemini.GuixCommand = GuixCommand;
    class GuixPrimaryCommandObject extends AttachedMibxItem {
    }
    Gemini.GuixPrimaryCommandObject = GuixPrimaryCommandObject;
    class GuixCommandParameter extends AttachedMibxItem {
        get GuixPresentation() {
            return this.guixPresentationField;
        }
        set GuixPresentation(value) {
            this.guixPresentationField = value;
        }
    }
    Gemini.GuixCommandParameter = GuixCommandParameter;
    class GuixCommandNode extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get UIAccessLevel() {
            return this.uIAccessLevelField;
        }
        set UIAccessLevel(value) {
            this.uIAccessLevelField = value;
        }
    }
    Gemini.GuixCommandNode = GuixCommandNode;
    class GuixCommandSeparator extends Element {
    }
    Gemini.GuixCommandSeparator = GuixCommandSeparator;
    class ColumnGroup extends UniqueItem {
    }
    Gemini.ColumnGroup = ColumnGroup;
    class EventBase extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Description() {
            return this.descriptionField;
        }
        set Description(value) {
            this.descriptionField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Arg() {
            return this.argField;
        }
        set Arg(value) {
            this.argField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get ID() {
            return this.idField;
        }
        set ID(value) {
            this.idField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Category() {
            return this.categoryField;
        }
        set Category(value) {
            this.categoryField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Type() {
            return this.typeField;
        }
        set Type(value) {
            this.typeField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Version() {
            return this.versionField;
        }
        set Version(value) {
            this.versionField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Severity() {
            return this.severityField;
        }
        set Severity(value) {
            this.severityField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get ExportToC() {
            return this.exportToCField;
        }
        set ExportToC(value) {
            this.exportToCField = value;
        }
    }
    Gemini.EventBase = EventBase;
    class HealthRule extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Description() {
            return this.descriptionField;
        }
        set Description(value) {
            this.descriptionField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Condition() {
            return this.conditionField;
        }
        set Condition(value) {
            this.conditionField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Severity() {
            return this.severityField;
        }
        set Severity(value) {
            this.severityField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get SeverityAfter() {
            return this.severityAfterField;
        }
        set SeverityAfter(value) {
            this.severityAfterField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get WaitPeriod() {
            return this.waitPeriodField;
        }
        set WaitPeriod(value) {
            this.waitPeriodField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Interval() {
            return this.intervalField;
        }
        set Interval(value) {
            this.intervalField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Timeout() {
            return this.timeoutField;
        }
        set Timeout(value) {
            this.timeoutField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Retries() {
            return this.retriesField;
        }
        set Retries(value) {
            this.retriesField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get EventID() {
            return this.eventIDField;
        }
        set EventID(value) {
            this.eventIDField = value;
        }
    }
    Gemini.HealthRule = HealthRule;
    class MibxItem extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Description() {
            return this.descriptionField;
        }
        set Description(value) {
            this.descriptionField = value;
        }
        get DevNote() {
            return this.devNoteField;
        }
        set DevNote(value) {
            this.devNoteField = value;
        }
        get DevNote2() {
            return this.devNote2Field;
        }
        set DevNote2(value) {
            this.devNote2Field = value;
        }
        get DevNote3() {
            return this.devNote3Field;
        }
        set DevNote3(value) {
            this.devNote3Field = value;
        }
        get DevNote4() {
            return this.devNote4Field;
        }
        set DevNote4(value) {
            this.devNote4Field = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get MibName() {
            return this.mibNameField;
        }
        set MibName(value) {
            this.mibNameField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get ID() {
            return this.idField;
        }
        set ID(value) {
            this.idField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get OID() {
            return this.oIDField;
        }
        set OID(value) {
            this.oIDField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Status() {
            return this.statusField;
        }
        set Status(value) {
            this.statusField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get ExportToMib() {
            return this.exportToMibField;
        }
        set ExportToMib(value) {
            this.exportToMibField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get ExportToC() {
            return this.exportToCField;
        }
        set ExportToC(value) {
            this.exportToCField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get SupportedIn() {
            return this.supportedInField;
        }
        set SupportedIn(value) {
            this.supportedInField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get ExportToJava() {
            return this.exportToJavaField;
        }
        set ExportToJava(value) {
            this.exportToJavaField = value;
        }
    }
    Gemini.MibxItem = MibxItem;
    class BaseInactiveDependency extends Dependency {
    }
    Gemini.BaseInactiveDependency = BaseInactiveDependency;
    class DisableStartsProcessDependency extends Dependency {
    }
    Gemini.DisableStartsProcessDependency = DisableStartsProcessDependency;
    class ChangeStatusDependency extends Dependency {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Status() {
            return this.statusField;
        }
        set Status(value) {
            this.statusField = value;
        }
    }
    Gemini.ChangeStatusDependency = ChangeStatusDependency;
    class RangeDependency extends Dependency {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get EndUID() {
            return this.endUIDField;
        }
        set EndUID(value) {
            this.endUIDField = value;
        }
    }
    Gemini.RangeDependency = RangeDependency;
    class SetValueDependency extends Dependency {
        get SetValue() {
            return this.setValueField;
        }
        set SetValue(value) {
            this.setValueField = value;
        }
    }
    Gemini.SetValueDependency = SetValueDependency;
    class LimitsDependency extends Dependency {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get LimitId() {
            return this.limitIdField;
        }
        set LimitId(value) {
            this.limitIdField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Allow() {
            return this.allowField;
        }
        set Allow(value) {
            this.allowField = value;
        }
    }
    Gemini.LimitsDependency = LimitsDependency;
    class LicenseDependency extends Dependency {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get LicenseCode() {
            return this.licenseCodeField;
        }
        set LicenseCode(value) {
            this.licenseCodeField = value;
        }
    }
    Gemini.LicenseDependency = LicenseDependency;
    class TableLimitsDependency extends Dependency {
        get MinRows() {
            return this.minRowsField;
        }
        set MinRows(value) {
            this.minRowsField = value;
        }
        get MaxRows() {
            return this.maxRowsField;
        }
        set MaxRows(value) {
            this.maxRowsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get MaxRowsSpecified() {
            return this.maxRowsFieldSpecified;
        }
        set MaxRowsSpecified(value) {
            this.maxRowsFieldSpecified = value;
        }
        get MinRowsLookup() {
            return this.minRowsLookupField;
        }
        set MinRowsLookup(value) {
            this.minRowsLookupField = value;
        }
        get MaxRowsLookup() {
            return this.maxRowsLookupField;
        }
        set MaxRowsLookup(value) {
            this.maxRowsLookupField = value;
        }
    }
    Gemini.TableLimitsDependency = TableLimitsDependency;
    class ReadOnlyDependency extends Dependency {
    }
    Gemini.ReadOnlyDependency = ReadOnlyDependency;
    class EnumBase extends RangeBase {
    }
    Gemini.EnumBase = EnumBase;
    class Range extends RangeBase {
    }
    Gemini.Range = Range;
    class StrLen extends RangeBase {
    }
    Gemini.StrLen = StrLen;
    class CommandBase extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Description() {
            return this.descriptionField;
        }
        set Description(value) {
            this.descriptionField = value;
        }
        get Action() {
            return this.actionField;
        }
        set Action(value) {
            this.actionField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Parameters() {
            return this.parametersField;
        }
        set Parameters(value) {
            this.parametersField = value;
        }
    }
    Gemini.CommandBase = CommandBase;
    class Commands1 extends CommandsContainer {
    }
    Gemini.Commands1 = Commands1;
    class Alarms extends EventBaseContainer {
    }
    Gemini.Alarms = Alarms;
    class Events extends EventBaseContainer {
    }
    Gemini.Events = Events;
    class GuixSection extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
        get Dependencies() {
            return this.dependenciesField;
        }
        set Dependencies(value) {
            this.dependenciesField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get ShowTitle() {
            return this.showTitleField;
        }
        set ShowTitle(value) {
            this.showTitleField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get IsExpanded() {
            return this.isExpandedField;
        }
        set IsExpanded(value) {
            this.isExpandedField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get UIAccessLevel() {
            return this.uIAccessLevelField;
        }
        set UIAccessLevel(value) {
            this.uIAccessLevelField = value;
        }
    }
    Gemini.GuixSection = GuixSection;
    class GuixDependencies extends DependenciesBase {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get InactiveDependency() {
            return this.inactiveDependencyField;
        }
        set InactiveDependency(value) {
            this.inactiveDependencyField = value;
        }
    }
    Gemini.GuixDependencies = GuixDependencies;
    class GuixNode extends UniqueItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get GuixSection() {
            return this.guixSectionField;
        }
        set GuixSection(value) {
            this.guixSectionField = value;
        }
        get Dependencies() {
            return this.dependenciesField;
        }
        set Dependencies(value) {
            this.dependenciesField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get AutoRefreshInterval() {
            return this.autoRefreshIntervalField;
        }
        set AutoRefreshInterval(value) {
            this.autoRefreshIntervalField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get UIAccessLevel() {
            return this.uIAccessLevelField;
        }
        set UIAccessLevel(value) {
            this.uIAccessLevelField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get IsInfo() {
            return this.isInfoField;
        }
        set IsInfo(value) {
            this.isInfoField = value;
        }
    }
    Gemini.GuixNode = GuixNode;
    class Configuration extends GuixContainer {
    }
    Gemini.Configuration = Configuration;
    class Telemetries extends GuixContainer {
    }
    Gemini.Telemetries = Telemetries;
    class GuixObject extends GuixItem {
        get GuixPresentation() {
            return this.guixPresentationField;
        }
        set GuixPresentation(value) {
            this.guixPresentationField = value;
        }
    }
    Gemini.GuixObject = GuixObject;
    class GuixTable extends GuixItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get GuixTableColumn() {
            return this.guixTableColumnField;
        }
        set GuixTableColumn(value) {
            this.guixTableColumnField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get GuixTable1() {
            return this.guixTable1Field;
        }
        set GuixTable1(value) {
            this.guixTable1Field = value;
        }
        get Commands() {
            return this.commandsField;
        }
        set Commands(value) {
            this.commandsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get ColumnGroup() {
            return this.columnGroupField;
        }
        set ColumnGroup(value) {
            this.columnGroupField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get HideIndex() {
            return this.hideIndexField;
        }
        set HideIndex(value) {
            this.hideIndexField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get DefaultMaxRepetitions() {
            return this.defaultMaxRepetitionsField;
        }
        set DefaultMaxRepetitions(value) {
            this.defaultMaxRepetitionsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get IsSingleRowTable() {
            return this.isSingleRowTableField;
        }
        set IsSingleRowTable(value) {
            this.isSingleRowTableField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get DoNotExpand() {
            return this.doNotExpandField;
        }
        set DoNotExpand(value) {
            this.doNotExpandField = value;
        }
    }
    Gemini.GuixTable = GuixTable;
    class MibxObject extends MibxItem {
        get Transport() {
            return this.transportField;
        }
        set Transport(value) {
            this.transportField = value;
        }
        get Dependencies() {
            return this.dependenciesField;
        }
        set Dependencies(value) {
            this.dependenciesField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get MaxAccess() {
            return this.maxAccessField;
        }
        set MaxAccess(value) {
            this.maxAccessField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get ReadAccess() {
            return this.readAccessField;
        }
        set ReadAccess(value) {
            this.readAccessField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get WriteAccess() {
            return this.writeAccessField;
        }
        set WriteAccess(value) {
            this.writeAccessField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Mode() {
            return this.modeField;
        }
        set Mode(value) {
            this.modeField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get ServiceInterruption() {
            return this.serviceInterruptionField;
        }
        set ServiceInterruption(value) {
            this.serviceInterruptionField = value;
        }
    }
    Gemini.MibxObject = MibxObject;
    class InactiveDependency extends BaseInactiveDependency {
    }
    Gemini.InactiveDependency = InactiveDependency;
    class GuixInactiveDependency extends BaseInactiveDependency {
    }
    Gemini.GuixInactiveDependency = GuixInactiveDependency;
    class Enum extends EnumBase {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Name() {
            return this.nameField;
        }
        set Name(value) {
            this.nameField = value;
        }
    }
    Gemini.Enum = Enum;
    class Trap extends MibxItem {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Object() {
            return this.objectField;
        }
        set Object(value) {
            this.objectField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get TrapMapping() {
            return this.trapMappingField;
        }
        set TrapMapping(value) {
            this.trapMappingField = value;
        }
    }
    Gemini.Trap = Trap;
    class CollectionUniqueLink extends UniqueLink {
    }
    Gemini.CollectionUniqueLink = CollectionUniqueLink;
    class Command extends CommandBase {
    }
    Gemini.Command = Command;
    class SNMPHealthRule extends HealthRule {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get SNMPHealthOid() {
            return this.sNMPHealthOidField;
        }
        set SNMPHealthOid(value) {
            this.sNMPHealthOidField = value;
        }
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get TrapMapping() {
            return this.trapMappingField;
        }
        set TrapMapping(value) {
            this.trapMappingField = value;
        }
    }
    Gemini.SNMPHealthRule = SNMPHealthRule;
    class PingHealthRule extends HealthRule {
    }
    Gemini.PingHealthRule = PingHealthRule;
    class Event extends EventBase {
    }
    Gemini.Event = Event;
    class Alarm extends EventBase {
    }
    Gemini.Alarm = Alarm;
    class MibxContainer extends MibxObject {
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        //Not supported @System.Xml.Serialization.XmlElementAttribute
        get Items() {
            return this.itemsField;
        }
        set Items(value) {
            this.itemsField = value;
        }
    }
    Gemini.MibxContainer = MibxContainer;
    class Param extends MibxObject {
        get Limits() {
            return this.limitsField;
        }
        set Limits(value) {
            this.limitsField = value;
        }
        get Upgrade() {
            return this.upgradeField;
        }
        set Upgrade(value) {
            this.upgradeField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Type() {
            return this.typeField;
        }
        set Type(value) {
            this.typeField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get Default() {
            return this.defaultField;
        }
        set Default(value) {
            this.defaultField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get FlashOffseet() {
            return this.flashOffseetField;
        }
        set FlashOffseet(value) {
            this.flashOffseetField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Units() {
            return this.unitsField;
        }
        set Units(value) {
            this.unitsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Usage() {
            return this.usageField;
        }
        set Usage(value) {
            this.usageField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get NonDuplicatable() {
            return this.nonDuplicatableField;
        }
        set NonDuplicatable(value) {
            this.nonDuplicatableField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get AllowSuggestedValue() {
            return this.allowSuggestedValueField;
        }
        set AllowSuggestedValue(value) {
            this.allowSuggestedValueField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get AllowSuggestedValueOnValueChanged() {
            return this.allowSuggestedValueOnValueChangedField;
        }
        set AllowSuggestedValueOnValueChanged(value) {
            this.allowSuggestedValueOnValueChangedField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get AllowPossibleValues() {
            return this.allowPossibleValuesField;
        }
        set AllowPossibleValues(value) {
            this.allowPossibleValuesField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get AllowMultipleEdit() {
            return this.allowMultipleEditField;
        }
        set AllowMultipleEdit(value) {
            this.allowMultipleEditField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get StartsProcess() {
            return this.startsProcessField;
        }
        set StartsProcess(value) {
            this.startsProcessField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Unique() {
            return this.uniqueField;
        }
        set Unique(value) {
            this.uniqueField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Searchable() {
            return this.searchableField;
        }
        set Searchable(value) {
            this.searchableField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get MessageOnChange() {
            return this.messageOnChangeField;
        }
        set MessageOnChange(value) {
            this.messageOnChangeField = value;
        }
    }
    Gemini.Param = Param;
    class Node extends MibxContainer {
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Imported() {
            return this.importedField;
        }
        set Imported(value) {
            this.importedField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get ImportedMibName() {
            return this.importedMibNameField;
        }
        set ImportedMibName(value) {
            this.importedMibNameField = value;
        }
    }
    Gemini.Node = Node;
    class Table extends MibxContainer {
        get TableDef() {
            return this.tableDefField;
        }
        set TableDef(value) {
            this.tableDefField = value;
        }
        //Not supported @System.Xml.Serialization.XmlArrayItemAttribute
        get RowDefaults() {
            return this.rowDefaultsField;
        }
        set RowDefaults(value) {
            this.rowDefaultsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get MinRows() {
            return this.minRowsField;
        }
        set MinRows(value) {
            this.minRowsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        get MaxRows() {
            return this.maxRowsField;
        }
        set MaxRows(value) {
            this.maxRowsField = value;
        }
        //Not supported @System.Xml.Serialization.XmlIgnoreAttribute
        get MaxRowsSpecified() {
            return this.maxRowsFieldSpecified;
        }
        set MaxRowsSpecified(value) {
            this.maxRowsFieldSpecified = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get RowsAuth() {
            return this.rowsAuthField;
        }
        set RowsAuth(value) {
            this.rowsAuthField = value;
        }
        //Not supported @System.Xml.Serialization.XmlAttributeAttribute
        //Not supported @System.ComponentModel.DefaultValueAttribute
        get Usage() {
            return this.usageField;
        }
        set Usage(value) {
            this.usageField = value;
        }
    }
    Gemini.Table = Table;
    class Module extends MibxContainer {
    }
    Gemini.Module = Module;
})(Gemini || (Gemini = {}));
//# sourceMappingURL=Gemini.js.map
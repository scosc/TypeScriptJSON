"use strict"
module Gemini
{//Types:



	export enum ConvertOperation
	{
		multiplication = <any>'multiplication',
		division = <any>'division'
	}

	export enum Units
	{
		TS = <any>'TS',
		PCR32 = <any>'PCR32',
		cm = <any>'cm',
		Km = <any>'Km',
		packets = <any>'packets',
		bursts = <any>'bursts',
		symbols = <any>'symbols',
		dB = <any>'dB',
		dBm = <any>'dBm',
		degrees = <any>'degrees',
		hours = <any>'hours',
		minutes = <any>'minutes',
		sec = <any>'sec',
		ms = <any>'ms',
		µs = <any>'µs',
		Hz = <any>'Hz',
		KHz = <any>'KHz',
		MHz = <any>'MHz',
		GHz = <any>'GHz',
		bytes = <any>'bytes',
		KB = <any>'KB',
		MB = <any>'MB',
		GB = <any>'GB',
		bps = <any>'bps',
		Kbps = <any>'Kbps',
		pps = <any>'pps',
		sps = <any>'sps',
		Ksps = <any>'Ksps',
		ppm = <any>'ppm',
		Mbps = <any>'Mbps',
		mA = <any>'mA',
		W = <any>'W',
		mW = <any>'mW',
		V = <any>'V',
		Item = <any>'',
		BBsegment = <any>'BB segment',
		COMMbuff = <any>'COMM buff',
		MPEGframes = <any>'MPEG frames',
		TSSS = <any>'TS/SS',
		Item1 = <any>'%',
		Item27MHzticks = <any>'27MHz ticks',
		EsN0dB = <any>'Es/N0 dB',
		CN0dB = <any>'C/N0 dB',
		Item01dB = <any>'0.1dB',
		Item001dB = <any>'0.01dB',
		Item01dBmHz = <any>'0.1dBm/Hz',
		C = <any>'°C',
		dBmHz = <any>'dBm/Hz',
		Item10ms = <any>'10ms'
	}

	export enum UIAccessLevel
	{
		normal = <any>'normal',
		tech = <any>'tech'
	}

	export enum Severity
	{
		information = <any>'information',
		normal = <any>'normal',
		warning = <any>'warning',
		minor = <any>'minor',
		major = <any>'major',
		critical = <any>'critical'
	}

	export enum CapabilityLevel
	{
		global = <any>'global',
		folder = <any>'folder',
		element = <any>'element'
	}

	export enum ClauseOperand
	{
		equal = <any>'equal',
		notEqual = <any>'notEqual',
		less = <any>'less',
		lessOrEqual = <any>'lessOrEqual',
		greater = <any>'greater',
		greaterEqual = <any>'greaterEqual',
		isEmpty = <any>'isEmpty'
	}

	export enum ItemChoiceType
	{
		Absolute = <any>'Absolute',
		UID = <any>'UID'
	}

	export enum ClauseLogicalOperand
	{
		and = <any>'and',
		or = <any>'or'
	}

	export enum Status
	{
		optional = <any>'optional',
		mandatory = <any>'mandatory',
		obsolete = <any>'obsolete'
	}

	export enum SupportedIn
	{
		operational = <any>'operational',
		boot = <any>'boot',
		both = <any>'both'
	}

	export enum ItemChoiceType1
	{
		Absolute = <any>'Absolute',
		UID = <any>'UID'
	}

	export enum MibMaxAccess
	{
		notaccessible = <any>'not-accessible',
		accessiblefornotify = <any>'accessible-for-notify',
		readonly = <any>'read-only',
		readwrite = <any>'read-write',
		readcreate = <any>'read-create'
	}

	export enum AccessLevel
	{
		guest = <any>'guest',
		user = <any>'user',
		operator = <any>'operator',
		admin = <any>'admin',
		supervisor = <any>'supervisor',
		tech = <any>'tech',
		readonly = <any>'read-only'
	}

	export enum ObjectMode
	{
		none = <any>'none',
		template = <any>'template',
		element = <any>'element',
		NMS = <any>'NMS'
	}

	export enum ServiceInterruption
	{
		none = <any>'none',
		interruption = <any>'interruption',
		reset = <any>'reset'
	}

	export enum DefaultUpgrade
	{
		none = <any>'none',
		overwrite = <any>'overwrite',
		overwriteunchanged = <any>'overwrite-unchanged'
	}

	export enum Type
	{
		String = <any>'String',
		Bool = <any>'Bool',
		OID = <any>'OID',
		Int32Bits = <any>'Int32Bits',
		Int8 = <any>'Int8',
		UInt8 = <any>'UInt8',
		Int16 = <any>'Int16',
		UInt16 = <any>'UInt16',
		Int32 = <any>'Int32',
		UInt32 = <any>'UInt32',
		Int64 = <any>'Int64',
		UInt64 = <any>'UInt64',
		Float = <any>'Float',
		Double = <any>'Double',
		DateTime = <any>'DateTime',
		Date = <any>'Date',
		Time = <any>'Time',
		TimeTicks = <any>'TimeTicks',
		MAC = <any>'MAC',
		IPv4 = <any>'IPv4',
		IPv6 = <any>'IPv6',
		RowStatus = <any>'RowStatus',
		Complex = <any>'Complex',
		File = <any>'File',
		IPv4Hex = <any>'IPv4 Hex',
		IPv4Multicast = <any>'IPv4 Multicast',
		IPv4MulticastHex = <any>'IPv4 Multicast Hex',
		IPv4Unicast = <any>'IPv4 Unicast',
		IPv4UnicastHex = <any>'IPv4 Unicast Hex',
		IPv6PrefixLength = <any>'IPv6 Prefix Length',
		SubnetMask = <any>'Subnet Mask'
	}

	export enum ParamUsage
	{
		none = <any>'none',
		config = <any>'config'
	}

	export enum ItemsChoiceType
	{
		Augments = <any>'Augments',
		Index = <any>'Index',
		RowStatus = <any>'RowStatus'
	}

	export enum EventAttributes
	{
		id = <any>'id',
		sequence = <any>'sequence',
		status = <any>'status',
		param = <any>'param',
		version = <any>'version',
		SubModule = <any>'SubModule',
		SubModuleInstance = <any>'SubModuleInstance'
	}

	export enum EventAttrMaps
	{
		absolute = <any>'absolute',
		lookup = <any>'lookup',
		GetValue = <any>'GetValue',
		position = <any>'position',
		replace = <any>'replace'
	}

	export class LinkBase extends GeminiObject
	{



		private componentField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Component(): String
		{
			return this.componentField;
		}
		public set Component(value: String)
		{
			this.componentField = value;
		}


		private versionField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Version(): String
		{
			return this.versionField;
		}
		public set Version(value: String)
		{
			this.versionField = value;
		}


		private mergeField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Merge(): Boolean
		{
			return this.mergeField;
		}
		public set Merge(value: Boolean)
		{
			this.mergeField = value;
		}


		private linkTelemetriesField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get LinkTelemetries(): Boolean
		{
			return this.linkTelemetriesField;
		}
		public set LinkTelemetries(value: Boolean)
		{
			this.linkTelemetriesField = value;
		}


	}

	export class Links extends GeminiObject
	{


		private prototypeLinkField : Array<PrototypeLink>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get PrototypeLink(): Array<PrototypeLink>
		{
			return this.prototypeLinkField;
		}
		public set PrototypeLink(value: Array<PrototypeLink>)
		{
			this.prototypeLinkField = value;
		}


		private singletonLinkField : Array<SingletonLink>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get SingletonLink(): Array<SingletonLink>
		{
			return this.singletonLinkField;
		}
		public set SingletonLink(value: Array<SingletonLink>)
		{
			this.singletonLinkField = value;
		}


	}

	export class UniqueItem extends GeminiObject
	{


		private uIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get UID(): String
		{
			return this.uIDField;
		}
		public set UID(value: String)
		{
			this.uIDField = value;
		}


		private nameField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Name(): String
		{
			return this.nameField;
		}
		public set Name(value: String)
		{
			this.nameField = value;
		}


	}

	export class GuixPresentation extends GeminiObject
	{



		private valueConverterField : ValueConverter;

		public get ValueConverter(): ValueConverter
		{
			return this.valueConverterField;
		}
		public set ValueConverter(value: ValueConverter)
		{
			this.valueConverterField = value;
		}


		private numericUpDownField : NumericUpDown;

		public get NumericUpDown(): NumericUpDown
		{
			return this.numericUpDownField;
		}
		public set NumericUpDown(value: NumericUpDown)
		{
			this.numericUpDownField = value;
		}


		private multilineTextOptionsField : MultilineTextOptions;

		public get MultilineTextOptions(): MultilineTextOptions
		{
			return this.multilineTextOptionsField;
		}
		public set MultilineTextOptions(value: MultilineTextOptions)
		{
			this.multilineTextOptionsField = value;
		}


		private isMultilineTextField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get IsMultilineText(): Boolean
		{
			return this.isMultilineTextField;
		}
		public set IsMultilineText(value: Boolean)
		{
			this.isMultilineTextField = value;
		}


		private isUrlField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get IsUrl(): Boolean
		{
			return this.isUrlField;
		}
		public set IsUrl(value: Boolean)
		{
			this.isUrlField = value;
		}


		private doNotConvertToLocalTimeField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get DoNotConvertToLocalTime(): Boolean
		{
			return this.doNotConvertToLocalTimeField;
		}
		public set DoNotConvertToLocalTime(value: Boolean)
		{
			this.doNotConvertToLocalTimeField = value;
		}


		private showAsProfileSelectorField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get ShowAsProfileSelector(): Boolean
		{
			return this.showAsProfileSelectorField;
		}
		public set ShowAsProfileSelector(value: Boolean)
		{
			this.showAsProfileSelectorField = value;
		}


		private isPasswordFieldField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get IsPasswordField(): Boolean
		{
			return this.isPasswordFieldField;
		}
		public set IsPasswordField(value: Boolean)
		{
			this.isPasswordFieldField = value;
		}


		private numberOfDecimalDigitsField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get NumberOfDecimalDigits(): Number
		{
			return this.numberOfDecimalDigitsField;
		}
		public set NumberOfDecimalDigits(value: Number)
		{
			this.numberOfDecimalDigitsField = value;
		}


	}

	export class ValueConverterBase extends GeminiObject
	{


		private convertOperationField : ConvertOperation;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get ConvertOperation(): ConvertOperation
		{
			return this.convertOperationField;
		}
		public set ConvertOperation(value: ConvertOperation)
		{
			this.convertOperationField = value;
		}


		private factorField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Factor(): Number
		{
			return this.factorField;
		}
		public set Factor(value: Number)
		{
			this.factorField = value;
		}


		private overrideUnitsField : Units;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get OverrideUnits(): Units
		{
			return this.overrideUnitsField;
		}
		public set OverrideUnits(value: Units)
		{
			this.overrideUnitsField = value;
		}


		private overrideUnitsFieldSpecified : Boolean;

		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get OverrideUnitsSpecified(): Boolean
		{
			return this.overrideUnitsFieldSpecified;
		}
		public set OverrideUnitsSpecified(value: Boolean)
		{
			this.overrideUnitsFieldSpecified = value;
		}


	}

	export class NumericUpDown extends GeminiObject
	{



		private stepField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Step(): Number
		{
			return this.stepField;
		}
		public set Step(value: Number)
		{
			this.stepField = value;
		}


		private allowDirectEditField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get AllowDirectEdit(): Boolean
		{
			return this.allowDirectEditField;
		}
		public set AllowDirectEdit(value: Boolean)
		{
			this.allowDirectEditField = value;
		}


	}

	export class MultilineTextOptions extends GeminiObject
	{



		private linesField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Lines(): Number
		{
			return this.linesField;
		}
		public set Lines(value: Number)
		{
			this.linesField = value;
		}


		private wrapField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Wrap(): Boolean
		{
			return this.wrapField;
		}
		public set Wrap(value: Boolean)
		{
			this.wrapField = value;
		}


		private widthFactorField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get WidthFactor(): Number
		{
			return this.widthFactorField;
		}
		public set WidthFactor(value: Number)
		{
			this.widthFactorField = value;
		}


	}

	export class AttachedMibxItem extends GeminiObject
	{


		private attachedField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Attached(): String
		{
			return this.attachedField;
		}
		public set Attached(value: String)
		{
			this.attachedField = value;
		}


		private uIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get UID(): String
		{
			return this.uIDField;
		}
		public set UID(value: String)
		{
			this.uIDField = value;
		}


		private displayNameField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get DisplayName(): String
		{
			return this.displayNameField;
		}
		public set DisplayName(value: String)
		{
			this.displayNameField = value;
		}


	}

	export class Commands extends GeminiObject
	{


		private itemsField : Array<any>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<any>
		{
			return this.itemsField;
		}
		public set Items(value: Array<any>)
		{
			this.itemsField = value;
		}


	}

	export class Element extends GeminiObject
	{

	}

	export class LinkedGuixCommand extends GeminiObject
	{


		private commandUIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get CommandUID(): String
		{
			return this.commandUIDField;
		}
		public set CommandUID(value: String)
		{
			this.commandUIDField = value;
		}


	}

	export class LinkedGuixCommandNode extends GeminiObject
	{


		private commandNodeUIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get CommandNodeUID(): String
		{
			return this.commandNodeUIDField;
		}
		public set CommandNodeUID(value: String)
		{
			this.commandNodeUIDField = value;
		}


	}

	export class Condition extends GeminiObject
	{


		private clauseGroupField : ClauseGroup;

		public get ClauseGroup(): ClauseGroup
		{
			return this.clauseGroupField;
		}
		public set ClauseGroup(value: ClauseGroup)
		{
			this.clauseGroupField = value;
		}


	}

	export class ClauseGroup extends GeminiObject
	{



		private itemsField : Array<any>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<any>
		{
			return this.itemsField;
		}
		public set Items(value: Array<any>)
		{
			this.itemsField = value;
		}


		private operandField : ClauseLogicalOperand;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Operand(): ClauseLogicalOperand
		{
			return this.operandField;
		}
		public set Operand(value: ClauseLogicalOperand)
		{
			this.operandField = value;
		}


	}

	export class Clause extends GeminiObject
	{


		private clauseLeftField : ClauseLeft;

		public get ClauseLeft(): ClauseLeft
		{
			return this.clauseLeftField;
		}
		public set ClauseLeft(value: ClauseLeft)
		{
			this.clauseLeftField = value;
		}


		private operandField : ClauseOperand;

		public get Operand(): ClauseOperand
		{
			return this.operandField;
		}
		public set Operand(value: ClauseOperand)
		{
			this.operandField = value;
		}


		private clauseRightField : ClauseRight;

		public get ClauseRight(): ClauseRight
		{
			return this.clauseRightField;
		}
		public set ClauseRight(value: ClauseRight)
		{
			this.clauseRightField = value;
		}


	}

	export class ClauseLeft extends GeminiObject
	{


		private itemField : any;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Item(): any
		{
			return this.itemField;
		}
		public set Item(value: any)
		{
			this.itemField = value;
		}


	}

	export class CapabilityClause extends GeminiObject
	{


		private pathField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Path(): String
		{
			return this.pathField;
		}
		public set Path(value: String)
		{
			this.pathField = value;
		}


		private levelField : CapabilityLevel;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Level(): CapabilityLevel
		{
			return this.levelField;
		}
		public set Level(value: CapabilityLevel)
		{
			this.levelField = value;
		}


	}

	export class ClauseRight extends GeminiObject
	{


		private itemField : String;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlChoiceIdentifierAttribute
		public get Item(): String
		{
			return this.itemField;
		}
		public set Item(value: String)
		{
			this.itemField = value;
		}


		private itemElementNameField : ItemChoiceType;

		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get ItemElementName(): ItemChoiceType
		{
			return this.itemElementNameField;
		}
		public set ItemElementName(value: ItemChoiceType)
		{
			this.itemElementNameField = value;
		}


	}

	export class Transport extends GeminiObject
	{


		private sequenceField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Sequence(): Number
		{
			return this.sequenceField;
		}
		public set Sequence(value: Number)
		{
			this.sequenceField = value;
		}


		private sequenceFieldSpecified : Boolean;

		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get SequenceSpecified(): Boolean
		{
			return this.sequenceFieldSpecified;
		}
		public set SequenceSpecified(value: Boolean)
		{
			this.sequenceFieldSpecified = value;
		}


		private pDUSequenceField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get PDUSequence(): Number
		{
			return this.pDUSequenceField;
		}
		public set PDUSequence(value: Number)
		{
			this.pDUSequenceField = value;
		}


		private pDUSequenceFieldSpecified : Boolean;

		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get PDUSequenceSpecified(): Boolean
		{
			return this.pDUSequenceFieldSpecified;
		}
		public set PDUSequenceSpecified(value: Boolean)
		{
			this.pDUSequenceFieldSpecified = value;
		}


	}

	export class Dependencies extends GeminiObject
	{


		private inactiveDependencyField : Array<InactiveDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get InactiveDependency(): Array<InactiveDependency>
		{
			return this.inactiveDependencyField;
		}
		public set InactiveDependency(value: Array<InactiveDependency>)
		{
			this.inactiveDependencyField = value;
		}


		private setValueDependencyField : Array<SetValueDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get SetValueDependency(): Array<SetValueDependency>
		{
			return this.setValueDependencyField;
		}
		public set SetValueDependency(value: Array<SetValueDependency>)
		{
			this.setValueDependencyField = value;
		}


		private limitsDependencyField : Array<LimitsDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get LimitsDependency(): Array<LimitsDependency>
		{
			return this.limitsDependencyField;
		}
		public set LimitsDependency(value: Array<LimitsDependency>)
		{
			this.limitsDependencyField = value;
		}


		private licenseDependencyField : Array<LicenseDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get LicenseDependency(): Array<LicenseDependency>
		{
			return this.licenseDependencyField;
		}
		public set LicenseDependency(value: Array<LicenseDependency>)
		{
			this.licenseDependencyField = value;
		}


		private tableLimitsDependencyField : Array<TableLimitsDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get TableLimitsDependency(): Array<TableLimitsDependency>
		{
			return this.tableLimitsDependencyField;
		}
		public set TableLimitsDependency(value: Array<TableLimitsDependency>)
		{
			this.tableLimitsDependencyField = value;
		}


		private readOnlyDependencyField : Array<ReadOnlyDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get ReadOnlyDependency(): Array<ReadOnlyDependency>
		{
			return this.readOnlyDependencyField;
		}
		public set ReadOnlyDependency(value: Array<ReadOnlyDependency>)
		{
			this.readOnlyDependencyField = value;
		}


		private rangeDependencyField : Array<RangeDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get RangeDependency(): Array<RangeDependency>
		{
			return this.rangeDependencyField;
		}
		public set RangeDependency(value: Array<RangeDependency>)
		{
			this.rangeDependencyField = value;
		}


		private changeStatusDependencyField : Array<ChangeStatusDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get ChangeStatusDependency(): Array<ChangeStatusDependency>
		{
			return this.changeStatusDependencyField;
		}
		public set ChangeStatusDependency(value: Array<ChangeStatusDependency>)
		{
			this.changeStatusDependencyField = value;
		}


		private disableStartsProcessDependencyField : Array<DisableStartsProcessDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get DisableStartsProcessDependency(): Array<DisableStartsProcessDependency>
		{
			return this.disableStartsProcessDependencyField;
		}
		public set DisableStartsProcessDependency(value: Array<DisableStartsProcessDependency>)
		{
			this.disableStartsProcessDependencyField = value;
		}


	}

	export class Dependency extends GeminiObject
	{


		private conditionField : Condition;

		public get Condition(): Condition
		{
			return this.conditionField;
		}
		public set Condition(value: Condition)
		{
			this.conditionField = value;
		}


	}

	export class SetValue extends GeminiObject
	{


		private itemField : String;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlChoiceIdentifierAttribute
		public get Item(): String
		{
			return this.itemField;
		}
		public set Item(value: String)
		{
			this.itemField = value;
		}


		private itemElementNameField : ItemChoiceType1;

		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get ItemElementName(): ItemChoiceType1
		{
			return this.itemElementNameField;
		}
		public set ItemElementName(value: ItemChoiceType1)
		{
			this.itemElementNameField = value;
		}


	}

	export class Limits extends GeminiObject
	{


		private itemsField : Array<RangeBase>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<RangeBase>
		{
			return this.itemsField;
		}
		public set Items(value: Array<RangeBase>)
		{
			this.itemsField = value;
		}


		private regExField : String;

		public get RegEx(): String
		{
			return this.regExField;
		}
		public set RegEx(value: String)
		{
			this.regExField = value;
		}


	}

	export class RangeBase extends GeminiObject
	{


		private uIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get UID(): String
		{
			return this.uIDField;
		}
		public set UID(value: String)
		{
			this.uIDField = value;
		}


		private minField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Min(): Number
		{
			return this.minField;
		}
		public set Min(value: Number)
		{
			this.minField = value;
		}


		private maxField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Max(): Number
		{
			return this.maxField;
		}
		public set Max(value: Number)
		{
			this.maxField = value;
		}


		private maxFieldSpecified : Boolean;

		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get MaxSpecified(): Boolean
		{
			return this.maxFieldSpecified;
		}
		public set MaxSpecified(value: Boolean)
		{
			this.maxFieldSpecified = value;
		}


	}

	export class Upgrade extends GeminiObject
	{



		private defaultField : DefaultUpgrade;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Default(): DefaultUpgrade
		{
			return this.defaultField;
		}
		public set Default(value: DefaultUpgrade)
		{
			this.defaultField = value;
		}


		private convertField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Convert(): String
		{
			return this.convertField;
		}
		public set Convert(value: String)
		{
			this.convertField = value;
		}


	}

	export class TableDef extends GeminiObject
	{


		private itemsField : Array<String>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlChoiceIdentifierAttribute
		public get Items(): Array<String>
		{
			return this.itemsField;
		}
		public set Items(value: Array<String>)
		{
			this.itemsField = value;
		}


		private itemsElementNameField : Array<ItemsChoiceType>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get ItemsElementName(): Array<ItemsChoiceType>
		{
			return this.itemsElementNameField;
		}
		public set ItemsElementName(value: Array<ItemsChoiceType>)
		{
			this.itemsElementNameField = value;
		}


	}

	export class RowDefaultsRow extends GeminiObject
	{


		private columnDefaultField : Array<ColumnDefault>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get ColumnDefault(): Array<ColumnDefault>
		{
			return this.columnDefaultField;
		}
		public set ColumnDefault(value: Array<ColumnDefault>)
		{
			this.columnDefaultField = value;
		}


		private indexValueField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get IndexValue(): String
		{
			return this.indexValueField;
		}
		public set IndexValue(value: String)
		{
			this.indexValueField = value;
		}


	}

	export class ColumnDefault extends GeminiObject
	{


		private uIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get UID(): String
		{
			return this.uIDField;
		}
		public set UID(value: String)
		{
			this.uIDField = value;
		}


		private valueField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Value(): String
		{
			return this.valueField;
		}
		public set Value(value: String)
		{
			this.valueField = value;
		}


	}

	export class TrapMapping extends GeminiObject
	{


		private itemField : any;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Item(): any
		{
			return this.itemField;
		}
		public set Item(value: any)
		{
			this.itemField = value;
		}


		private eventAttrField : EventAttributes;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get EventAttr(): EventAttributes
		{
			return this.eventAttrField;
		}
		public set EventAttr(value: EventAttributes)
		{
			this.eventAttrField = value;
		}


		private mapField : EventAttrMaps;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Map(): EventAttrMaps
		{
			return this.mapField;
		}
		public set Map(value: EventAttrMaps)
		{
			this.mapField = value;
		}


		private valueField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Value(): String
		{
			return this.valueField;
		}
		public set Value(value: String)
		{
			this.valueField = value;
		}


	}

	export class ReplacePattern extends GeminiObject
	{


		private keyValueField : Array<KeyValue>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get KeyValue(): Array<KeyValue>
		{
			return this.keyValueField;
		}
		public set KeyValue(value: Array<KeyValue>)
		{
			this.keyValueField = value;
		}


	}

	export class KeyValue extends GeminiObject
	{


		private keyField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Key(): String
		{
			return this.keyField;
		}
		public set Key(value: String)
		{
			this.keyField = value;
		}


		private valueField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Value(): String
		{
			return this.valueField;
		}
		public set Value(value: String)
		{
			this.valueField = value;
		}


	}

	export class Licenses extends GeminiObject
	{


		private licenseField : Array<License>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get License(): Array<License>
		{
			return this.licenseField;
		}
		public set License(value: Array<License>)
		{
			this.licenseField = value;
		}


	}

	export class License extends GeminiObject
	{



		private codeField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Code(): String
		{
			return this.codeField;
		}
		public set Code(value: String)
		{
			this.codeField = value;
		}


		private descriptionField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Description(): String
		{
			return this.descriptionField;
		}
		public set Description(value: String)
		{
			this.descriptionField = value;
		}


		private maxField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Max(): Number
		{
			return this.maxField;
		}
		public set Max(value: Number)
		{
			this.maxField = value;
		}


		private extentField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Extent(): Number
		{
			return this.extentField;
		}
		public set Extent(value: Number)
		{
			this.extentField = value;
		}


	}

	export class CommandsContainer extends GeminiObject
	{


		private itemsField : Array<Command>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<Command>
		{
			return this.itemsField;
		}
		public set Items(value: Array<Command>)
		{
			this.itemsField = value;
		}


	}

	export class RowDefaults extends GeminiObject
	{


		private rowField : Array<RowDefaultsRow>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Row(): Array<RowDefaultsRow>
		{
			return this.rowField;
		}
		public set Row(value: Array<RowDefaultsRow>)
		{
			this.rowField = value;
		}


	}

	export class SNMPHealthOid extends GeminiObject
	{


		private oidField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Oid(): String
		{
			return this.oidField;
		}
		public set Oid(value: String)
		{
			this.oidField = value;
		}


	}

	export class Health extends GeminiObject
	{


		private sNMPHealthRuleField : Array<SNMPHealthRule>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get SNMPHealthRule(): Array<SNMPHealthRule>
		{
			return this.sNMPHealthRuleField;
		}
		public set SNMPHealthRule(value: Array<SNMPHealthRule>)
		{
			this.sNMPHealthRuleField = value;
		}


		private pingHealthRuleField : Array<PingHealthRule>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get PingHealthRule(): Array<PingHealthRule>
		{
			return this.pingHealthRuleField;
		}
		public set PingHealthRule(value: Array<PingHealthRule>)
		{
			this.pingHealthRuleField = value;
		}


	}

	export class EventBaseContainer extends GeminiObject
	{


		private itemsField : Array<EventBase>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<EventBase>
		{
			return this.itemsField;
		}
		public set Items(value: Array<EventBase>)
		{
			this.itemsField = value;
		}


	}

	export class Mibx extends GeminiObject
	{


		private linksField : Links;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Links(): Links
		{
			return this.linksField;
		}
		public set Links(value: Links)
		{
			this.linksField = value;
		}


		private licensesField : Array<License>;

		//Not supported @System.Xml.Serialization.XmlArrayAttribute
		//Not supported @System.Xml.Serialization.XmlArrayItemAttribute
		public get Licenses(): Array<License>
		{
			return this.licensesField;
		}
		public set Licenses(value: Array<License>)
		{
			this.licensesField = value;
		}


		private healthField : Health;

		public get Health(): Health
		{
			return this.healthField;
		}
		public set Health(value: Health)
		{
			this.healthField = value;
		}


		private eventsField : Events;

		public get Events(): Events
		{
			return this.eventsField;
		}
		public set Events(value: Events)
		{
			this.eventsField = value;
		}


		private alarmsField : Alarms;

		public get Alarms(): Alarms
		{
			return this.alarmsField;
		}
		public set Alarms(value: Alarms)
		{
			this.alarmsField = value;
		}


		private commandsField : Commands1;

		public get Commands(): Commands1
		{
			return this.commandsField;
		}
		public set Commands(value: Commands1)
		{
			this.commandsField = value;
		}


		private moduleField : Module;

		public get Module(): Module
		{
			return this.moduleField;
		}
		public set Module(value: Module)
		{
			this.moduleField = value;
		}


		private schemaField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Schema(): String
		{
			return this.schemaField;
		}
		public set Schema(value: String)
		{
			this.schemaField = value;
		}


	}

	export class DependenciesBase extends GeminiObject
	{

	}

	export class LinkedGuixNode extends GeminiObject
	{


		private nodeUIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get NodeUID(): String
		{
			return this.nodeUIDField;
		}
		public set NodeUID(value: String)
		{
			this.nodeUIDField = value;
		}


	}

	export class GuixContainer extends GeminiObject
	{


		private itemsField : Array<any>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<any>
		{
			return this.itemsField;
		}
		public set Items(value: Array<any>)
		{
			this.itemsField = value;
		}


	}

	export class Guix extends GeminiObject
	{


		private configurationField : Configuration;

		public get Configuration(): Configuration
		{
			return this.configurationField;
		}
		public set Configuration(value: Configuration)
		{
			this.configurationField = value;
		}


		private telemetriesField : Telemetries;

		public get Telemetries(): Telemetries
		{
			return this.telemetriesField;
		}
		public set Telemetries(value: Telemetries)
		{
			this.telemetriesField = value;
		}


		private commandsField : Commands;

		public get Commands(): Commands
		{
			return this.commandsField;
		}
		public set Commands(value: Commands)
		{
			this.commandsField = value;
		}


		private schemaField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Schema(): String
		{
			return this.schemaField;
		}
		public set Schema(value: String)
		{
			this.schemaField = value;
		}


	}

	export class SingletonLink  extends LinkBase
	{

	}

	export class PrototypeLink  extends LinkBase
	{

	}

	export class UniqueLink  extends UniqueItem
	{


		private componentField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Component(): String
		{
			return this.componentField;
		}
		public set Component(value: String)
		{
			this.componentField = value;
		}


		private versionField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Version(): String
		{
			return this.versionField;
		}
		public set Version(value: String)
		{
			this.versionField = value;
		}


	}

	export class GuixGroup  extends UniqueItem
	{



		private itemsField : Array<GuixItem>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<GuixItem>
		{
			return this.itemsField;
		}
		public set Items(value: Array<GuixItem>)
		{
			this.itemsField = value;
		}


		private rowField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Row(): Number
		{
			return this.rowField;
		}
		public set Row(value: Number)
		{
			this.rowField = value;
		}


	}

	export class ValueConverter  extends ValueConverterBase
	{

	}

	export class GuixItem  extends AttachedMibxItem
	{



		private columnField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Column(): Number
		{
			return this.columnField;
		}
		public set Column(value: Number)
		{
			this.columnField = value;
		}


		private colspanField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Colspan(): Number
		{
			return this.colspanField;
		}
		public set Colspan(value: Number)
		{
			this.colspanField = value;
		}


		private rowField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Row(): Number
		{
			return this.rowField;
		}
		public set Row(value: Number)
		{
			this.rowField = value;
		}


		private rowspanField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Rowspan(): Number
		{
			return this.rowspanField;
		}
		public set Rowspan(value: Number)
		{
			this.rowspanField = value;
		}


	}

	export class GuixTableColumn  extends AttachedMibxItem
	{



		private guixPresentationField : GuixPresentation;

		public get GuixPresentation(): GuixPresentation
		{
			return this.guixPresentationField;
		}
		public set GuixPresentation(value: GuixPresentation)
		{
			this.guixPresentationField = value;
		}


		private groupUIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get GroupUID(): String
		{
			return this.groupUIDField;
		}
		public set GroupUID(value: String)
		{
			this.groupUIDField = value;
		}


		private isSingleRowTableNameField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get IsSingleRowTableName(): Boolean
		{
			return this.isSingleRowTableNameField;
		}
		public set IsSingleRowTableName(value: Boolean)
		{
			this.isSingleRowTableNameField = value;
		}


	}

	export class GuixCommand  extends UniqueItem
	{



		private guixPrimaryCommandObjectField : GuixPrimaryCommandObject;

		public get GuixPrimaryCommandObject(): GuixPrimaryCommandObject
		{
			return this.guixPrimaryCommandObjectField;
		}
		public set GuixPrimaryCommandObject(value: GuixPrimaryCommandObject)
		{
			this.guixPrimaryCommandObjectField = value;
		}


		private guixCommandParameterField : Array<GuixCommandParameter>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get GuixCommandParameter(): Array<GuixCommandParameter>
		{
			return this.guixCommandParameterField;
		}
		public set GuixCommandParameter(value: Array<GuixCommandParameter>)
		{
			this.guixCommandParameterField = value;
		}


		private valueField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Value(): String
		{
			return this.valueField;
		}
		public set Value(value: String)
		{
			this.valueField = value;
		}


		private attachToRowInstanceField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get AttachToRowInstance(): Boolean
		{
			return this.attachToRowInstanceField;
		}
		public set AttachToRowInstance(value: Boolean)
		{
			this.attachToRowInstanceField = value;
		}


		private uIAccessLevelField : UIAccessLevel;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get UIAccessLevel(): UIAccessLevel
		{
			return this.uIAccessLevelField;
		}
		public set UIAccessLevel(value: UIAccessLevel)
		{
			this.uIAccessLevelField = value;
		}


		private quickAccessField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get QuickAccess(): Boolean
		{
			return this.quickAccessField;
		}
		public set QuickAccess(value: Boolean)
		{
			this.quickAccessField = value;
		}


		private useInBulkField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get UseInBulk(): Boolean
		{
			return this.useInBulkField;
		}
		public set UseInBulk(value: Boolean)
		{
			this.useInBulkField = value;
		}


	}

	export class GuixPrimaryCommandObject  extends AttachedMibxItem
	{

	}

	export class GuixCommandParameter  extends AttachedMibxItem
	{


		private guixPresentationField : GuixPresentation;

		public get GuixPresentation(): GuixPresentation
		{
			return this.guixPresentationField;
		}
		public set GuixPresentation(value: GuixPresentation)
		{
			this.guixPresentationField = value;
		}


	}

	export class GuixCommandNode  extends UniqueItem
	{



		private itemsField : Array<any>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<any>
		{
			return this.itemsField;
		}
		public set Items(value: Array<any>)
		{
			this.itemsField = value;
		}


		private uIAccessLevelField : UIAccessLevel;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get UIAccessLevel(): UIAccessLevel
		{
			return this.uIAccessLevelField;
		}
		public set UIAccessLevel(value: UIAccessLevel)
		{
			this.uIAccessLevelField = value;
		}


	}

	export class GuixCommandSeparator  extends Element
	{

	}

	export class ColumnGroup  extends UniqueItem
	{

	}

	export class EventBase  extends UniqueItem
	{



		private descriptionField : String;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Description(): String
		{
			return this.descriptionField;
		}
		public set Description(value: String)
		{
			this.descriptionField = value;
		}


		private argField : Array<String>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Arg(): Array<String>
		{
			return this.argField;
		}
		public set Arg(value: Array<String>)
		{
			this.argField = value;
		}


		private idField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get ID(): Number
		{
			return this.idField;
		}
		public set ID(value: Number)
		{
			this.idField = value;
		}


		private categoryField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Category(): Number
		{
			return this.categoryField;
		}
		public set Category(value: Number)
		{
			this.categoryField = value;
		}


		private typeField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Type(): Number
		{
			return this.typeField;
		}
		public set Type(value: Number)
		{
			this.typeField = value;
		}


		private versionField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Version(): Number
		{
			return this.versionField;
		}
		public set Version(value: Number)
		{
			this.versionField = value;
		}


		private severityField : Severity;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Severity(): Severity
		{
			return this.severityField;
		}
		public set Severity(value: Severity)
		{
			this.severityField = value;
		}


		private exportToCField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get ExportToC(): Boolean
		{
			return this.exportToCField;
		}
		public set ExportToC(value: Boolean)
		{
			this.exportToCField = value;
		}


	}

	export class HealthRule  extends UniqueItem
	{



		private descriptionField : String;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Description(): String
		{
			return this.descriptionField;
		}
		public set Description(value: String)
		{
			this.descriptionField = value;
		}


		private conditionField : Condition;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Condition(): Condition
		{
			return this.conditionField;
		}
		public set Condition(value: Condition)
		{
			this.conditionField = value;
		}


		private severityField : Severity;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Severity(): Severity
		{
			return this.severityField;
		}
		public set Severity(value: Severity)
		{
			this.severityField = value;
		}


		private severityAfterField : Severity;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get SeverityAfter(): Severity
		{
			return this.severityAfterField;
		}
		public set SeverityAfter(value: Severity)
		{
			this.severityAfterField = value;
		}


		private waitPeriodField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get WaitPeriod(): Number
		{
			return this.waitPeriodField;
		}
		public set WaitPeriod(value: Number)
		{
			this.waitPeriodField = value;
		}


		private intervalField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Interval(): Number
		{
			return this.intervalField;
		}
		public set Interval(value: Number)
		{
			this.intervalField = value;
		}


		private timeoutField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Timeout(): Number
		{
			return this.timeoutField;
		}
		public set Timeout(value: Number)
		{
			this.timeoutField = value;
		}


		private retriesField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Retries(): Number
		{
			return this.retriesField;
		}
		public set Retries(value: Number)
		{
			this.retriesField = value;
		}


		private eventIDField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get EventID(): Number
		{
			return this.eventIDField;
		}
		public set EventID(value: Number)
		{
			this.eventIDField = value;
		}


	}

	export class MibxItem  extends UniqueItem
	{



		private descriptionField : String;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Description(): String
		{
			return this.descriptionField;
		}
		public set Description(value: String)
		{
			this.descriptionField = value;
		}


		private devNoteField : String;

		public get DevNote(): String
		{
			return this.devNoteField;
		}
		public set DevNote(value: String)
		{
			this.devNoteField = value;
		}


		private devNote2Field : String;

		public get DevNote2(): String
		{
			return this.devNote2Field;
		}
		public set DevNote2(value: String)
		{
			this.devNote2Field = value;
		}


		private devNote3Field : String;

		public get DevNote3(): String
		{
			return this.devNote3Field;
		}
		public set DevNote3(value: String)
		{
			this.devNote3Field = value;
		}


		private devNote4Field : String;

		public get DevNote4(): String
		{
			return this.devNote4Field;
		}
		public set DevNote4(value: String)
		{
			this.devNote4Field = value;
		}


		private mibNameField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get MibName(): String
		{
			return this.mibNameField;
		}
		public set MibName(value: String)
		{
			this.mibNameField = value;
		}


		private idField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get ID(): Number
		{
			return this.idField;
		}
		public set ID(value: Number)
		{
			this.idField = value;
		}


		private oIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get OID(): String
		{
			return this.oIDField;
		}
		public set OID(value: String)
		{
			this.oIDField = value;
		}


		private statusField : Status;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Status(): Status
		{
			return this.statusField;
		}
		public set Status(value: Status)
		{
			this.statusField = value;
		}


		private exportToMibField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get ExportToMib(): Boolean
		{
			return this.exportToMibField;
		}
		public set ExportToMib(value: Boolean)
		{
			this.exportToMibField = value;
		}


		private exportToCField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get ExportToC(): Boolean
		{
			return this.exportToCField;
		}
		public set ExportToC(value: Boolean)
		{
			this.exportToCField = value;
		}


		private supportedInField : SupportedIn;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get SupportedIn(): SupportedIn
		{
			return this.supportedInField;
		}
		public set SupportedIn(value: SupportedIn)
		{
			this.supportedInField = value;
		}


		private exportToJavaField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get ExportToJava(): Boolean
		{
			return this.exportToJavaField;
		}
		public set ExportToJava(value: Boolean)
		{
			this.exportToJavaField = value;
		}


	}

	export class BaseInactiveDependency  extends Dependency
	{

	}

	export class DisableStartsProcessDependency  extends Dependency
	{

	}

	export class ChangeStatusDependency  extends Dependency
	{



		private statusField : Status;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Status(): Status
		{
			return this.statusField;
		}
		public set Status(value: Status)
		{
			this.statusField = value;
		}


	}

	export class RangeDependency  extends Dependency
	{


		private endUIDField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get EndUID(): String
		{
			return this.endUIDField;
		}
		public set EndUID(value: String)
		{
			this.endUIDField = value;
		}


	}

	export class SetValueDependency  extends Dependency
	{


		private setValueField : SetValue;

		public get SetValue(): SetValue
		{
			return this.setValueField;
		}
		public set SetValue(value: SetValue)
		{
			this.setValueField = value;
		}


	}

	export class LimitsDependency  extends Dependency
	{



		private limitIdField : Array<String>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get LimitId(): Array<String>
		{
			return this.limitIdField;
		}
		public set LimitId(value: Array<String>)
		{
			this.limitIdField = value;
		}


		private allowField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Allow(): Boolean
		{
			return this.allowField;
		}
		public set Allow(value: Boolean)
		{
			this.allowField = value;
		}


	}

	export class LicenseDependency  extends Dependency
	{


		private licenseCodeField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get LicenseCode(): String
		{
			return this.licenseCodeField;
		}
		public set LicenseCode(value: String)
		{
			this.licenseCodeField = value;
		}


	}

	export class TableLimitsDependency  extends Dependency
	{



		private minRowsField : Number;

		public get MinRows(): Number
		{
			return this.minRowsField;
		}
		public set MinRows(value: Number)
		{
			this.minRowsField = value;
		}


		private maxRowsField : Number;

		public get MaxRows(): Number
		{
			return this.maxRowsField;
		}
		public set MaxRows(value: Number)
		{
			this.maxRowsField = value;
		}


		private maxRowsFieldSpecified : Boolean;

		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get MaxRowsSpecified(): Boolean
		{
			return this.maxRowsFieldSpecified;
		}
		public set MaxRowsSpecified(value: Boolean)
		{
			this.maxRowsFieldSpecified = value;
		}


		private minRowsLookupField : String;

		public get MinRowsLookup(): String
		{
			return this.minRowsLookupField;
		}
		public set MinRowsLookup(value: String)
		{
			this.minRowsLookupField = value;
		}


		private maxRowsLookupField : String;

		public get MaxRowsLookup(): String
		{
			return this.maxRowsLookupField;
		}
		public set MaxRowsLookup(value: String)
		{
			this.maxRowsLookupField = value;
		}


	}

	export class ReadOnlyDependency  extends Dependency
	{

	}

	export class EnumBase  extends RangeBase
	{

	}

	export class Range  extends RangeBase
	{

	}

	export class StrLen  extends RangeBase
	{

	}

	export class CommandBase  extends UniqueItem
	{


		private descriptionField : String;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Description(): String
		{
			return this.descriptionField;
		}
		public set Description(value: String)
		{
			this.descriptionField = value;
		}


		private actionField : String;

		public get Action(): String
		{
			return this.actionField;
		}
		public set Action(value: String)
		{
			this.actionField = value;
		}


		private parametersField : Array<String>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Parameters(): Array<String>
		{
			return this.parametersField;
		}
		public set Parameters(value: Array<String>)
		{
			this.parametersField = value;
		}


	}

	export class Commands1  extends CommandsContainer
	{

	}

	export class Alarms  extends EventBaseContainer
	{

	}

	export class Events  extends EventBaseContainer
	{

	}

	export class GuixSection  extends UniqueItem
	{



		private itemsField : Array<any>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<any>
		{
			return this.itemsField;
		}
		public set Items(value: Array<any>)
		{
			this.itemsField = value;
		}


		private dependenciesField : GuixDependencies;

		public get Dependencies(): GuixDependencies
		{
			return this.dependenciesField;
		}
		public set Dependencies(value: GuixDependencies)
		{
			this.dependenciesField = value;
		}


		private showTitleField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get ShowTitle(): Boolean
		{
			return this.showTitleField;
		}
		public set ShowTitle(value: Boolean)
		{
			this.showTitleField = value;
		}


		private isExpandedField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get IsExpanded(): Boolean
		{
			return this.isExpandedField;
		}
		public set IsExpanded(value: Boolean)
		{
			this.isExpandedField = value;
		}


		private uIAccessLevelField : UIAccessLevel;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get UIAccessLevel(): UIAccessLevel
		{
			return this.uIAccessLevelField;
		}
		public set UIAccessLevel(value: UIAccessLevel)
		{
			this.uIAccessLevelField = value;
		}


	}

	export class GuixDependencies  extends DependenciesBase
	{


		private inactiveDependencyField : Array<GuixInactiveDependency>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get InactiveDependency(): Array<GuixInactiveDependency>
		{
			return this.inactiveDependencyField;
		}
		public set InactiveDependency(value: Array<GuixInactiveDependency>)
		{
			this.inactiveDependencyField = value;
		}


	}

	export class GuixNode  extends UniqueItem
	{



		private itemsField : Array<any>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<any>
		{
			return this.itemsField;
		}
		public set Items(value: Array<any>)
		{
			this.itemsField = value;
		}


		private guixSectionField : Array<GuixSection>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get GuixSection(): Array<GuixSection>
		{
			return this.guixSectionField;
		}
		public set GuixSection(value: Array<GuixSection>)
		{
			this.guixSectionField = value;
		}


		private dependenciesField : GuixDependencies;

		public get Dependencies(): GuixDependencies
		{
			return this.dependenciesField;
		}
		public set Dependencies(value: GuixDependencies)
		{
			this.dependenciesField = value;
		}


		private autoRefreshIntervalField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get AutoRefreshInterval(): Number
		{
			return this.autoRefreshIntervalField;
		}
		public set AutoRefreshInterval(value: Number)
		{
			this.autoRefreshIntervalField = value;
		}


		private uIAccessLevelField : UIAccessLevel;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get UIAccessLevel(): UIAccessLevel
		{
			return this.uIAccessLevelField;
		}
		public set UIAccessLevel(value: UIAccessLevel)
		{
			this.uIAccessLevelField = value;
		}


		private isInfoField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get IsInfo(): Boolean
		{
			return this.isInfoField;
		}
		public set IsInfo(value: Boolean)
		{
			this.isInfoField = value;
		}


	}

	export class Configuration  extends GuixContainer
	{

	}

	export class Telemetries  extends GuixContainer
	{

	}

	export class GuixObject  extends GuixItem
	{


		private guixPresentationField : GuixPresentation;

		public get GuixPresentation(): GuixPresentation
		{
			return this.guixPresentationField;
		}
		public set GuixPresentation(value: GuixPresentation)
		{
			this.guixPresentationField = value;
		}


	}

	export class GuixTable  extends GuixItem
	{



		private guixTableColumnField : Array<GuixTableColumn>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get GuixTableColumn(): Array<GuixTableColumn>
		{
			return this.guixTableColumnField;
		}
		public set GuixTableColumn(value: Array<GuixTableColumn>)
		{
			this.guixTableColumnField = value;
		}


		private guixTable1Field : Array<GuixTable>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get GuixTable1(): Array<GuixTable>
		{
			return this.guixTable1Field;
		}
		public set GuixTable1(value: Array<GuixTable>)
		{
			this.guixTable1Field = value;
		}


		private commandsField : Commands;

		public get Commands(): Commands
		{
			return this.commandsField;
		}
		public set Commands(value: Commands)
		{
			this.commandsField = value;
		}


		private columnGroupField : Array<ColumnGroup>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get ColumnGroup(): Array<ColumnGroup>
		{
			return this.columnGroupField;
		}
		public set ColumnGroup(value: Array<ColumnGroup>)
		{
			this.columnGroupField = value;
		}


		private hideIndexField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get HideIndex(): Boolean
		{
			return this.hideIndexField;
		}
		public set HideIndex(value: Boolean)
		{
			this.hideIndexField = value;
		}


		private defaultMaxRepetitionsField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get DefaultMaxRepetitions(): Number
		{
			return this.defaultMaxRepetitionsField;
		}
		public set DefaultMaxRepetitions(value: Number)
		{
			this.defaultMaxRepetitionsField = value;
		}


		private isSingleRowTableField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get IsSingleRowTable(): Boolean
		{
			return this.isSingleRowTableField;
		}
		public set IsSingleRowTable(value: Boolean)
		{
			this.isSingleRowTableField = value;
		}


		private doNotExpandField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get DoNotExpand(): Boolean
		{
			return this.doNotExpandField;
		}
		public set DoNotExpand(value: Boolean)
		{
			this.doNotExpandField = value;
		}


	}

	export class MibxObject  extends MibxItem
	{



		private transportField : Transport;

		public get Transport(): Transport
		{
			return this.transportField;
		}
		public set Transport(value: Transport)
		{
			this.transportField = value;
		}


		private dependenciesField : Dependencies;

		public get Dependencies(): Dependencies
		{
			return this.dependenciesField;
		}
		public set Dependencies(value: Dependencies)
		{
			this.dependenciesField = value;
		}


		private maxAccessField : MibMaxAccess;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get MaxAccess(): MibMaxAccess
		{
			return this.maxAccessField;
		}
		public set MaxAccess(value: MibMaxAccess)
		{
			this.maxAccessField = value;
		}


		private readAccessField : AccessLevel;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get ReadAccess(): AccessLevel
		{
			return this.readAccessField;
		}
		public set ReadAccess(value: AccessLevel)
		{
			this.readAccessField = value;
		}


		private writeAccessField : AccessLevel;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get WriteAccess(): AccessLevel
		{
			return this.writeAccessField;
		}
		public set WriteAccess(value: AccessLevel)
		{
			this.writeAccessField = value;
		}


		private modeField : ObjectMode;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Mode(): ObjectMode
		{
			return this.modeField;
		}
		public set Mode(value: ObjectMode)
		{
			this.modeField = value;
		}


		private serviceInterruptionField : ServiceInterruption;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get ServiceInterruption(): ServiceInterruption
		{
			return this.serviceInterruptionField;
		}
		public set ServiceInterruption(value: ServiceInterruption)
		{
			this.serviceInterruptionField = value;
		}


	}

	export class InactiveDependency  extends BaseInactiveDependency
	{

	}

	export class GuixInactiveDependency  extends BaseInactiveDependency
	{

	}

	export class Enum  extends EnumBase
	{


		private nameField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Name(): String
		{
			return this.nameField;
		}
		public set Name(value: String)
		{
			this.nameField = value;
		}


	}

	export class Trap  extends MibxItem
	{


		private objectField : Array<String>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Object(): Array<String>
		{
			return this.objectField;
		}
		public set Object(value: Array<String>)
		{
			this.objectField = value;
		}


		private trapMappingField : Array<TrapMapping>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get TrapMapping(): Array<TrapMapping>
		{
			return this.trapMappingField;
		}
		public set TrapMapping(value: Array<TrapMapping>)
		{
			this.trapMappingField = value;
		}


	}

	export class CollectionUniqueLink  extends UniqueLink
	{

	}

	export class Command  extends CommandBase
	{

	}

	export class SNMPHealthRule  extends HealthRule
	{


		private sNMPHealthOidField : Array<SNMPHealthOid>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get SNMPHealthOid(): Array<SNMPHealthOid>
		{
			return this.sNMPHealthOidField;
		}
		public set SNMPHealthOid(value: Array<SNMPHealthOid>)
		{
			this.sNMPHealthOidField = value;
		}


		private trapMappingField : Array<TrapMapping>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get TrapMapping(): Array<TrapMapping>
		{
			return this.trapMappingField;
		}
		public set TrapMapping(value: Array<TrapMapping>)
		{
			this.trapMappingField = value;
		}


	}

	export class PingHealthRule  extends HealthRule
	{

	}

	export class Event  extends EventBase
	{

	}

	export class Alarm  extends EventBase
	{

	}

	export class MibxContainer  extends MibxObject
	{


		private itemsField : Array<MibxItem>;

		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		//Not supported @System.Xml.Serialization.XmlElementAttribute
		public get Items(): Array<MibxItem>
		{
			return this.itemsField;
		}
		public set Items(value: Array<MibxItem>)
		{
			this.itemsField = value;
		}


	}

	export class Param  extends MibxObject
	{



		private limitsField : Limits;

		public get Limits(): Limits
		{
			return this.limitsField;
		}
		public set Limits(value: Limits)
		{
			this.limitsField = value;
		}


		private upgradeField : Upgrade;

		public get Upgrade(): Upgrade
		{
			return this.upgradeField;
		}
		public set Upgrade(value: Upgrade)
		{
			this.upgradeField = value;
		}


		private typeField : Type;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Type(): Type
		{
			return this.typeField;
		}
		public set Type(value: Type)
		{
			this.typeField = value;
		}


		private defaultField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get Default(): String
		{
			return this.defaultField;
		}
		public set Default(value: String)
		{
			this.defaultField = value;
		}


		private flashOffseetField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get FlashOffseet(): String
		{
			return this.flashOffseetField;
		}
		public set FlashOffseet(value: String)
		{
			this.flashOffseetField = value;
		}


		private unitsField : Units;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Units(): Units
		{
			return this.unitsField;
		}
		public set Units(value: Units)
		{
			this.unitsField = value;
		}


		private usageField : ParamUsage;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Usage(): ParamUsage
		{
			return this.usageField;
		}
		public set Usage(value: ParamUsage)
		{
			this.usageField = value;
		}


		private nonDuplicatableField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get NonDuplicatable(): Boolean
		{
			return this.nonDuplicatableField;
		}
		public set NonDuplicatable(value: Boolean)
		{
			this.nonDuplicatableField = value;
		}


		private allowSuggestedValueField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get AllowSuggestedValue(): Boolean
		{
			return this.allowSuggestedValueField;
		}
		public set AllowSuggestedValue(value: Boolean)
		{
			this.allowSuggestedValueField = value;
		}


		private allowSuggestedValueOnValueChangedField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get AllowSuggestedValueOnValueChanged(): Boolean
		{
			return this.allowSuggestedValueOnValueChangedField;
		}
		public set AllowSuggestedValueOnValueChanged(value: Boolean)
		{
			this.allowSuggestedValueOnValueChangedField = value;
		}


		private allowPossibleValuesField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get AllowPossibleValues(): Boolean
		{
			return this.allowPossibleValuesField;
		}
		public set AllowPossibleValues(value: Boolean)
		{
			this.allowPossibleValuesField = value;
		}


		private allowMultipleEditField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get AllowMultipleEdit(): Boolean
		{
			return this.allowMultipleEditField;
		}
		public set AllowMultipleEdit(value: Boolean)
		{
			this.allowMultipleEditField = value;
		}


		private startsProcessField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get StartsProcess(): Boolean
		{
			return this.startsProcessField;
		}
		public set StartsProcess(value: Boolean)
		{
			this.startsProcessField = value;
		}


		private uniqueField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Unique(): Boolean
		{
			return this.uniqueField;
		}
		public set Unique(value: Boolean)
		{
			this.uniqueField = value;
		}


		private searchableField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Searchable(): Boolean
		{
			return this.searchableField;
		}
		public set Searchable(value: Boolean)
		{
			this.searchableField = value;
		}


		private messageOnChangeField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get MessageOnChange(): String
		{
			return this.messageOnChangeField;
		}
		public set MessageOnChange(value: String)
		{
			this.messageOnChangeField = value;
		}


	}

	export class Node  extends MibxContainer
	{



		private importedField : Boolean;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Imported(): Boolean
		{
			return this.importedField;
		}
		public set Imported(value: Boolean)
		{
			this.importedField = value;
		}


		private importedMibNameField : String;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get ImportedMibName(): String
		{
			return this.importedMibNameField;
		}
		public set ImportedMibName(value: String)
		{
			this.importedMibNameField = value;
		}


	}

	export class Table  extends MibxContainer
	{



		private tableDefField : TableDef;

		public get TableDef(): TableDef
		{
			return this.tableDefField;
		}
		public set TableDef(value: TableDef)
		{
			this.tableDefField = value;
		}


		private rowDefaultsField : Array<RowDefaultsRow>;

		//Not supported @System.Xml.Serialization.XmlArrayItemAttribute
		public get RowDefaults(): Array<RowDefaultsRow>
		{
			return this.rowDefaultsField;
		}
		public set RowDefaults(value: Array<RowDefaultsRow>)
		{
			this.rowDefaultsField = value;
		}


		private minRowsField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get MinRows(): Number
		{
			return this.minRowsField;
		}
		public set MinRows(value: Number)
		{
			this.minRowsField = value;
		}


		private maxRowsField : Number;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		public get MaxRows(): Number
		{
			return this.maxRowsField;
		}
		public set MaxRows(value: Number)
		{
			this.maxRowsField = value;
		}


		private maxRowsFieldSpecified : Boolean;

		//Not supported @System.Xml.Serialization.XmlIgnoreAttribute
		public get MaxRowsSpecified(): Boolean
		{
			return this.maxRowsFieldSpecified;
		}
		public set MaxRowsSpecified(value: Boolean)
		{
			this.maxRowsFieldSpecified = value;
		}


		private rowsAuthField : AccessLevel;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get RowsAuth(): AccessLevel
		{
			return this.rowsAuthField;
		}
		public set RowsAuth(value: AccessLevel)
		{
			this.rowsAuthField = value;
		}


		private usageField : ParamUsage;

		//Not supported @System.Xml.Serialization.XmlAttributeAttribute
		//Not supported @System.ComponentModel.DefaultValueAttribute
		public get Usage(): ParamUsage
		{
			return this.usageField;
		}
		public set Usage(value: ParamUsage)
		{
			this.usageField = value;
		}


	}

	export class Module  extends MibxContainer
	{

	}


}
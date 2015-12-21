namespace mibxEntities{

    export interface StrLen {
        UID: string;
        Min: string;
        Max: string;
    }

    export interface Range {
        UID: string;
        Min: string;
        Max: string;
    }

    export interface Enum {
        UID: string;
        Min: string;
        Name: string;
    }

    export interface Limits {
        StrLen: StrLen;
        Range: Range;
        Enum: Enum[];
    }

    export interface CClauseLeft {
        UID: string;
    }

    export interface CClauseRight {
        Absolute: string;
    } 

    export interface CClause {
        ClauseLeft: CClauseLeft;
        Operand: string;
        ClauseRight: CClauseRight;
    }
    
    export interface CClauseGroup {
        Operand: string;
        Clause: CClause;
    }

    export interface CCondition {
        ClauseGroup: CClauseGroup;
    }

    export interface InactiveDependency {
        Condition: CCondition;
    }

    export interface Dependencies {
        InactiveDependency?: InactiveDependency;
        LimitsDependency?: any;
        SetValueDependency?: SetValueDependency;
    }

    export interface Param {
        UID: string;
        Name: string;
        MibName: string;
        ID: string;
        OID: string;
        Status: string;
        ServiceInterruption: string;
        Type: string;
        Usage: string;
        MaxAccess: string;
        Limits: Limits;
        Units: string;
        AllowSuggestedValue: string;
        AllowPossibleValues: string;
        Default: string;
        Dependencies: Dependencies;
        Description?: string;
    }   

    export interface SetValue {
        UID: string;
        Absolute: string;
    }

     
    export interface SetValueDependency {
        SetValue: SetValue;
        Condition: CCondition;
    }


    export interface TableDef {
        Index: string;
    }

    export interface Table {
        UID: string;
        Name: string;
        MibName: string;
        ID: string;
        OID: string;
        MaxAccess: string;
        Usage: string;
        Param: Param[];
        TableDef: TableDef;
    }

    export interface Node {
        UID: string;
        Name: string;
        MibName: string;
        ID: string;
        OID: string;
        Status: string;
        Param: Param[];
        Table?: Table|any;
        Node: Node[];        
    }

    export interface Module {
        UID: string;
        Name: string;
        MibName: string;
        ID: string;
        OID: string;
        SupportedIn: string;
        Mode: string;
        Node: Node[];
    }

    export interface Mibx {       
        Schema: string;
        Module: Module;
    }

    export interface RootObject {
        Mibx: Mibx;
    }

}


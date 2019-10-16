export interface gstr3bobject {
    gstin:String;
    ret_period:String;
    sup_details:Sup_details;
    // b2b:Array<B2b>;
    // b2ba:Array<B2ba>;
    // b2cl:Array<B2cl>;
    // b2cla:Array<B2cla>;
    // b2cs:Array<B2cs>;
    // b2csa:Array<B2csa>;
    // nil:Object;
  }
  export interface Sup_details{
    osup_det:Osup_det;
  }
  export interface Osup_det{
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
    osup_zero:sup_zero
  }
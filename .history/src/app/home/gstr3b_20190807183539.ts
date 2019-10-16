export interface gstr3bobject {
    gstin:String;
    ret_period:String;
    sup_details:Sup_details;
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
    osup_zero:Osup_zero
  }
  export interface Osup_zero{
    txval:number;
    iamt:number;
    csamt:number;
  }
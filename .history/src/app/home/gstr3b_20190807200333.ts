export interface gstr3bobject {
    gstin:String;
    ret_period:String;
    sup_details:Sup_details;
    inter_sup:Inter_sup;
    comp_details:Array<Comp_details>;
    uin_details:Array<Uin_details>
  }
  export interface Sup_details{
    osup_det:Osup_det;
    osup_zero:Osup_zero;
    osup_nil_exmp:Osup_nil_exmp;
    isup_rev:Isup_rev;
    osup_nongst:Osup_nongst;
  }
  export interface Osup_det{
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
    
  }
  export interface Osup_zero{
    txval:number;
    iamt:number;
    csamt:number;
  }

  export interface Osup_nil_exmp{
    txval:number;
  }
  export interface Isup_rev{
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
  }
  export interface Osup_nongst{
    txval:number;
  }
 
  export interface Inter_sup{
    unreg_details:Array<Unreg_details>
  }

  export interface Unreg_details
  {
    pos:number;
    txval:number;
    iamt:number;
  }
//   {
//     pos:number;
//     txval:number;
//     iamt:number;
//   }

export interface Comp_details{
    pos:number;
    txval:number;
    iamt:number;
}

export interface Uin_details



export interface fullobject {
    gstin:String;
    ret_period:String;
    gt:number;
    cur_gt:number;
    b2b:Array<B2b>;
    b2ba:Array<B2ba>;
    b2cl:Array<B2cl>;
    b2cla:Array<B2cla>;
    b2cs:Array<B2cs>;
    b2csa:Array<B2csa>;
    nil:Ob;
  }
  
  export interface B2b{
    ctin: String;
    inv: Array<Invoice>;
  
  }
  export interface Invoice {
  
    inum: String;
  
    idt: String;
  
    val: number;
  
    pos: String;
  
    rchrg: String;
  
    etin: String;
  
    inv_typ: String;
  
    diff_percent:number;
  
    itms: Array<Item>;
  
  }
  export interface Item {
  
    num: number;
  
    itm_det: ItemDetail;
  
  
  
  }
  export interface ItemDetail {
  
    rt: number;
  
    txval: number;
  
    iamt: number;
  
    csamt: number;
  
  }
  
  export interface B2ba{
    ctin: String;
    inv: Array<Invoiceb2ba>;
  }
  
  export interface Invoiceb2ba {
  
    oinum: String;
  
    oidt: String;
    inum:String;
    idt:String;
    val: number;
  
    pos: String;
  
    rchrg: String;
  
    etin: String;
  
    inv_typ: String;
  
    diff_percent:number;
  
    itms: Array<InvoiceitmsB2ba>;
  
  }
  
  export interface InvoiceitmsB2ba {
    num:number;
    itm_det:ItemDetailB2ba;
  
  }
  export interface ItemDetailB2ba{
    rt:number;
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
  }
  
  export interface B2cl{
    pos:String;
    inv:Array<Invoiceb2cl>
  
  }
  export interface Invoiceb2cl{
    inum: String;
  
    idt: String;
  
    val: number;
    inv_typ: String;
    etin: String;
    diff_percent:number;
  
    itms: Array<Itemb2cl>;
  }
  export interface Itemb2cl{
    num:number;
    itm_det:ItemDetailB2cl;
  }
  export interface ItemDetailB2cl{
    rt:number;
    txval:number;
    iamt:number;
    csamt:number;
  }
  export interface B2cla{
    pos:number;
    inv:Array<Invoiceb2cla>
  }
  export interface Invoiceb2cla{
    oinum:String;
    oidt:String;
    inv_typ:String;
    diff_percent:number;
    inum:String;
    idt:String;
    val:number;
    etin:String
  
    itms:Array<Itmsb2cla>
  }
  export interface Itmsb2cla{
    num:number;
    itm_det:ItemDetailB2cla;
  }
  export interface ItemDetailB2cla{
    rt:number;
    txval:number;
    iamt:number;
  }
  export interface B2cs
  {
    sply_ty:String;
    diff_percent:number;
    rt:number;
    typ:String;
    etin:String;
    pos:String;
    txval:number;
    iamt:number;
    csamt:number;
  }
  // {
  //   rt:number;
  //   sply_ty:String;
  //   diff_percent:number;
  //   typ:String;
  //   txval:number;
  //   iamt:number;
  //   csamt:number;
  //   pos:number;
  // }
  export interface B2csa
  {
    omon:String;
    sply_ty:String;
    diff_percent:number;
    typ:String;
    etin:String;
    pos:String;
    itms:Array<Itmsb2csa>
  }
  export interface Itmsb2csa
  {
    rt:number;
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
  }
  // {
  //   rt:number;
  //   txval:number;
  //   iamt:number;
  //   camt:number;
  //   samt:number;
  //   csamt:number;
   
  // }
  export class Nil{
    inv:Array<InvB2csa>
  }
  export class InvB2csa
  {
    sply_ty:String;
    expt_amt:number;
    nil_amt:number;
    ngsup_amt:number;
  }
  // {
  //   sply_ty:String;
  //   expt_amt:number;
  //   nil_amt:number;
  //   ngsup_amt:number;
  // }
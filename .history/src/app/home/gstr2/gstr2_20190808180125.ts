export interface gstr2object{
    gstin:string;
    fp:string;
    b2b:Array<B2b>
}
export interface B2b{
    ctin:string;
    inv:Array<Inv>;
    flag:string;
          chksum:string;
          inum:string;
          idt:string;
          val:
          "pos": "06",
          "rchrg": "N",
          "inv_typ": "R",
}
export interface Inv{
    inum:string;
    idt:string;
    val:number;
    pos:string;
    rchrg:string;
    inv_typ:string;
    itms:Array<Itms>;
}
export interface Itms{
    num:number;
    itm_det:Itm_det;
    itc:Itc;
}
export interface Itm_det{
    rt:number;
    txval:number;
    iamt:number;
    camt:number;
    samt:number;
    csamt:number;
}
export interface Itc{
    elg:string;
    tx_i:number;
    tx_s:number;
    tx_c:number;
    tx_cs:number;
}











































































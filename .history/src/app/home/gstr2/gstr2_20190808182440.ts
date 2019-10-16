export interface gstr2object{
    gstin:string;
    fp:string;
    b2b:Array<B2b>;
    b2bur:Array<B2bur>;
    cdn:Array<Cdn>;
    hsnsum:Array<Hsnsum>;
    imp_g:Array<Imp_g>;
    imp_s:
}
export interface B2b{
    ctin:string;
    inv:Array<Inv>;
    flag:string;
    chksum:string;
    inum:string;
    idt:string;
    val:number;
    pos:string;
    rchrg:string;
    inv_typ:string;
    itms:Array<Itms>;
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

export interface B2bur{
    inv:Array<Inv>;
}
export interface Inv{
    chksum: string;
    inum: string;
    idt: string;
    val: number;
    pos: string;
    sply_ty: string;
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

export interface Cdn{
    ctin:number;
    nt:Array<Nt>;
}
export interface Nt{
    ntty: string;
    nt_num: string;
    nt_dt: string;
    rsn: string;
    p_gst: string;
    inum: string;
    idt: string;
    val: number;
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

export interface Hsnsum{
    det:Array<Det>;
}
export interface Det{
    num: number;
    hsn_sc: string;
    desc: string;
    uqc: string;
    qty: number;
    val: number;
    txval: number;
    iamt: number;
    camt: number;
    samt: number;
    csamt: number;

}
export interface Imp_g{
    is_sez: string;
    stin: string;
    boe_num: string;
    boe_dt: string;
    boe_val: number;
    port_code: string;
    itms:Array<Itms>;
}

export interface Itms{
    num: number;
    txval: number;
    rt: number;
    iamt: number;
    csamt: number;
    elg: string;
    tx_i: number;
    tx_cs: number;
}
























































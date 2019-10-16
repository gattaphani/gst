export interface gstr2object{
    gstin:string;
    fp:string;
    b2b:Array<B2b>
}
export interface B2b{
    ctin:string;
    inv:Array<Inv>;
}
export interface Inv{
    inum:string;
    idt:string;
    val:number;
    pos:string;
    rchrg:
}
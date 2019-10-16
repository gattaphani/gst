export interface gstr3bobject {
    gstin:String;
    ret_period:String;
    sup_details:Sup_details;
    inter_sup:Inter_sup;
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

  export interface Unreg_details{
    pos:number
    txval
    iamt
  }





//   {
//   "gstin": "05AVHPB7348G1ZP",
//   "ret_period": "042017",
//   "sup_details": {
//     "osup_det": {
//       "txval": 250,
//       "iamt": 100,
//       "camt": 200,
//       "samt": 300,
//       "csamt": 400
//     },
//     "osup_zero": {
//       "txval": 250,
//       "iamt": 100,
//       "csamt": 400
//     },
//     "osup_nil_exmp": {
//       "txval": 250
//     },
//     "isup_rev": {
//       "txval": 250,
//       "iamt": 100,
//       "camt": 200,
//       "samt": 300,
//       "csamt": 400
//     },
//     "osup_nongst": {
//       "txval": 250
//     }
//   },
//   "inter_sup": {
//     "unreg_details": [
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       },
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       },
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       }
//     ],
//     "comp_details": [
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       },
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       },
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       }
//     ],
//     "uin_details": [
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       },
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       },
//       {
//         "pos": "07",
//         "txval": 250,
//         "iamt": 200
//       }
//     ]
//   },
//   "itc_elg": {
//     "itc_avl": [
//       {
//         "ty": "IMPG",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       },
//       {
//         "ty": "IMPS",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       },
//       {
//         "ty": "ISRC",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       },
//       {
//         "ty": "ISD",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       },
//       {
//         "ty": "OTH",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       }
//     ],
//     "itc_rev": [
//       {
//         "ty": "RUL",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       },
//       {
//         "ty": "OTH",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       }
//     ],
//     "itc_net": {
//       "iamt": 136.53,
//       "camt": 274,
//       "samt": 162.99,
//       "csamt": 103
//     },
//     "itc_inelg": [
//       {
//         "ty": "RUL",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       },
//       {
//         "ty": "OTH",
//         "iamt": 136.53,
//         "camt": 274,
//         "samt": 162.99,
//         "csamt": 103
//       }
//     ]
//   },
//   "inward_sup": {
//     "isup_details": [
//       {
//         "ty": "GST",
//         "inter": 100,
//         "intra": 200
//       }
     
//     ]
//   },
//   "intr_ltfee": {
//     "intr_details": {
//       "iamt": 10,
//       "camt": 20,
//       "samt": 30,
//       "csamt": 40
//     }
//   }
// }
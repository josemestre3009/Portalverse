export type Character={id:number;name:string;status:'Alive'|'Dead'|'unknown';species:string;gender:string;origin:{name:string};location:{name:string};image:string;episode:string[]}
export type ApiResponse={info:{pages:number;count:number};results:Character[]}
export type ToastMessage={id:number;kind:'success'|'error'|'info';text:string}

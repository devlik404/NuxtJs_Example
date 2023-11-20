export  interface IProv{
    id:string;
    name:string;
}

export  interface IDistric{
    id:string;
    province_id:string;
    name:string;
}

export  interface ISubDistric{
    id:string;
    regency_id:string;
    name:string;
}
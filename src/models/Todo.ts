
export interface Todo {
    _id?: string,
    name: string,
    description:string
    matrice : number|undefined,
    status : string
    updatedAt?: Date,
    createdAt?:  Date
}
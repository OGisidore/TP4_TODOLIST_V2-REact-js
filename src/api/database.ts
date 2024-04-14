import { EsperoDB } from "esperodb";

const dataStructure: any = [
    {
      todolist: [
        {
             indexes: [
              { _id: { unique: true } }
            ],
             primaryKey: '_id' },
      ],
    }
  ];
 export const db = new EsperoDB('todolist_v2', dataStructure, 2);
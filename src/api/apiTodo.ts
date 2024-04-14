
import { Todo } from "../models/Todo";

import { db } from "./database";

/************************** fonction d'ajout de todo ****************** */
export const addTodo = async (todo: Todo) => {
    console.log("we are");
    
    try {
        await db.addData("todolist", todo)
        console.log("we are");

        return {
            isSuccess: true,
            message: "todo added succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de mise a jour de todo ****************** */

export const updateTodo = async (todo: Todo) => {
    try {
        await db.updateData("todolist", todo)
        return {
            isSuccess: true,
            message: "todo updated succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}


/************************** fonction de recuperation  d'une todo ****************** */


export const getTodo = async (_id: string) => {
    try {
        const todo = await db.getData("todolist", _id)
        return {
            isSuccess: true,
            result: todo
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de recuperation  de toutes les todos ****************** */

export const getAllTodo = async () => {
    console.log("hi");
    
    try {
        const todos = await db.getAllData("todolist")
        // console.log(todos);
        
        return {
            isSuccess: true,
            results: todos,
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}

/************************** fonction de suppression  d'une todo ****************** */


export const deleteTodo = async (_id: string) => {
    try {
        await db.deleteData("todolist", _id)
        return {
            isSuccess: true,
            message: "todo deleted succesfully"
        }


    } catch (error) {
        console.log({ error });
        return {
            isSuccess: false,
            error
        }


    }
}


/************************** fonction de recherche d'une todo ****************** */




/**************************fonction de recuperation de todo par page  ****************** */

// fonction de recuperation de todo par page 


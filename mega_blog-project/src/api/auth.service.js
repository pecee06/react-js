import { Client, Account, ID } from "appwrite";
import { endPoint, projectId } from "../env_variables";

class AuthService{
    client = new Client()
    account
    constructor(){
        this.client.setEndpoint(endPoint)
        this.client.setProject(projectId)
        this.account = new Account(this.client)
    }

    async signup({name, email, password}){
        try {
            const user = await this.account.create(ID.unique(),email,password,name)
            if (!user) throw new Error("Unable to create account")
            await this.login({email, password})
            return user
        } catch (err) {
            console.error(err.message);
            return null
        }
    }

    async login({email, password}){
        try {
            const session = await this.account.createEmailSession(email,password)
            if (!session) throw new Error("Unable to login")
            return session
        } catch (err) {
            console.error(err.message);
            return null
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
            return true
        } catch (err) {
            console.error(err.message);
            return false
        }
    }

    async changePassword({oldPass,newPass}){
        try {
            const user = this.account.updatePassword(newPass, oldPass)
            if (!user) throw new Error("Unable to change password")
            return user
        } catch (err) {
            console.error(err.message);
            return null
        }
    }

    async currentUser(){
        try {
            const user =  await this.account.get()
            if (!user) throw new Error("Unable to get details of current user")
            return user
        } catch (err) {
            console.error(err.message);
            return null
        }
    }
}

export default new AuthService()
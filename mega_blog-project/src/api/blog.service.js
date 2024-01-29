import { Client, Databases, ID, Storage } from "appwrite";
import { endPoint, projectId, dbId, collectionId, bucketId } from "../env_variables";

class BlogService{
    client = new Client()
    databases
    storage
    constructor(){
        this.client.setEndpoint(endPoint)
        this.client.setProject(projectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async post({title, content, featured_img, user_id}){
        try {
            const document = await this.databases.createDocument(dbId, collectionId, ID.unique(), {title, content, featured_img, user_id})
            if (!document) throw new Error("Unable to post the blog")
            return document
        } catch (err) {
            console.error(err.message)
            return null
        }
    }

    async listBlogs(){
        try {
            const docList = await this.databases.listDocuments(dbId, collectionId)
            if (!docList) throw new Error("Unable to fetch your blogs")
            return docList
        } catch (err) {
            console.error(err.message)
            return null
        }
    }

    async getPost(id){
        try {
            const document = await this.databases.getDocument(dbId, collectionId, id)
            if (!document) throw new Error("Unable to fetch the post")
            return document
        } catch (err) {
            console.error(err.message)
            return null
        }
    }

    async editPost(id, {title, content, featured_img, user_id}){
        try {
            const document = await this.databases.updateDocument(dbId, collectionId, id, {title, content, featured_img, user_id})
            if (!document) throw new Error("Unable to edit your post")
            return document
        } catch (err) {
            console.error(err.message)
            return null
        }
    }

    async deletePost(id){
        try {
            await this.databases.deleteDocument(dbId, collectionId, id)
        } catch (err) {
            console.error(err.message)
        }
    }

    async uploadPhoto(FILE){
        try {
            const file = await this.storage.createFile(bucketId, ID.unique(), FILE)
            if (!file) throw new Error("Unable to upload the file")
            return file
        } catch (err) {
            console.error(err.message)
            return null
        }
    }

    async fetchPhoto(id){
        try {
            const file = await this.storage.get(bucketId, id)
            if (!file) throw new Error("Unable to fetch the file")
            return file
        } catch (err) {
            console.error(err.message)
            return null
        }
    }

    async deletePhoto(id){
        try {
            await this.storage.deleteFile(bucketId, id)
        } catch (err) {
            console.error(err.message)
        }
    }

    downloadPhoto(id){
        try {
            this.storage.getFileDownload(bucketId, id)
        } catch (err) {
            console.error(err.message)
        }
    }

    previewPhoto(id){
        try {
            return this.storage.getFilePreview(bucketId, id, 355, 200)
        } catch (err) {
            console.error(err.message)
            return null
        }
    }
}

export default new BlogService()
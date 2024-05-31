import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

class AuthService {
    constructor() {
        this.client = new Client();
        this.account = new Account(this.client);

        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error('Error creating account:', error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    }
}

const authService = new AuthService();

export default authService;

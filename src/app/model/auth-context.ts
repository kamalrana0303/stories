import { SimpleCalim } from "./simple-claim";
import { UserProfile } from "./user-profile";

export class AuthContext {
    claims: SimpleCalim[] | undefined;
    userProfile: UserProfile | undefined;
    sub:string | undefined;

    get isAdmin(){
        
        return !!this.claims  && !!this.claims.find(c=> {return c.type === 'ROLE' && c.value === 'ADMIN'})
    }

    get isUser(){
        return !!this.claims && !!this.claims.find(c=>{
            return c.type === 'ROLE' && c.value === 'USER'
        } )
    }

    get isAuthenticated(){
        return !!this.claims && !!this.userProfile
    }
}

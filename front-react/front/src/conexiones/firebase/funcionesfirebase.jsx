import { auth } from "./firebase"

export const login = (usuario,contraseña)=>{
    return auth().signInWithEmailAndPassword(usuario,contraseña);
    
}
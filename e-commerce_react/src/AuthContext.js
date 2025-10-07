import React,{createContext,useState, useContext, useEffect, Children} from "react";

import { AuthAPI } from "./api/api";

const AuthContext = createContext();

export const useAuth = ()=>{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");

    }
    return context;
}

export const AuthProvider = ({children})=>{
    const[user, setUser]= useState(null);

    const[loading, setLoading]= useState(true);

    useEffect(()=>{
        checkAuth();
    },[]);
    const checkAuth = async ()=>{
        try{
            const token = localStorage.getItem('auth-token');
            if(token){
                const response = await AuthAPI.getUser();
                setUser(response.data);
            }
        }catch(error){
            console.log("Not Authenticated");
            localStorage.removeItem('auth-token');
        }finally{
            setLoading(false);
        }
   }
};
const login = async(credentials)=>{
    try{
       const response = await AuthAPI.login(credentials);
       const{token, user}=response.data;

       localStorage.setItem('auth-token',token);
       setUser(user);

       return{success: true}
    }catch(error){
        return{
            success : false,
            error: error.response?.data?.message||'Login failed'
        }
    }
 }

const register = async(userData)=>{
    try{
        const response = await AuthAPI.register(userData);
        const{token,user}=response.data;

        localStorage.setItem('auth-token', token);
        setUser(user);
        return{success: true}
    }catch(error){
        return{
            success : false,
            error: error.response?.data?.message || 'Registration failed'
        }
    }
}
const logout = async()=>{
    try{
        await AuthAPI.logout();
    }catch(error){
        console.log('Logout error',error);
    }finally{
        localStorage.removeItem('auth-token');
        setUser(null);
    }
}
const value ={
    user,
    login,
    register,
    logout,
    loading,
    isAthenticated: !!user
};

return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)
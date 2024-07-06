import {useState,createContext,useContext} from "react";
const UserContext=createContext();
function Component(){
    const [user,setUser]=useState("swamy");
    return(
        <>
        <UserContext.Provider value={user}>
        
        <h1>{`Hello${user}!`}</h1>
        <Component2/>
        </UserContext.Provider>
        </>

    );

}
function Component2(){
    return(
        <>
        <h1>Component2</h1>
        <Component3/></>
    );
}
function Component3(){
    return(
        <>
        <h1>Component3</h1>
        <Component4/></>
    );
}
function Component4(){
    return(
        <>
        <h1>Component4</h1>
        <Component5/></>
    );
}
function Component5(){
    const user=useContext(UserContext);
    return(
        <>
        <h1>Component5</h1>
        <h2>{`Hello${user}again!`}</h2></>
    );
}
export default Component;



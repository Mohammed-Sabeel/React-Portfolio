import React,{useContext} from "react";


const Context = React.createContext();


const AppProvider = ({childern})=>{
      return <Context.Provider value={"sabeel"}>{childern}</Context.Provider>;
};

const useGlobalcontext = ()=>{
     return useContext(Context)
};

export {Context,AppProvider,useGlobalcontext};
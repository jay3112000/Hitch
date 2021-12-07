import { createContext, useReducer } from "react";
import CEpostreducer from "../Reducers/CEpostreducer";

const Init_state={
  post:{

  },
  error:null,
  uploading:false,
  uploaded:false,
  editing:false,
  edited:false
}

export const CEPostcontext=createContext(Init_state)

export const CEPostcontextprovider=({children})=>{
      const [state,dispatch]= useReducer(CEpostreducer,Init_state)

      return(
         <CEPostcontext.Provider
         value={{
             post:state.post,
             error:state.error,
             editing:state.editing,
             edited:state.edited,
             uploading:state.uploading,
             uploaded:state.uploaded,
             dispatch
         }}
         >
         {children}
         </CEPostcontext.Provider>
      )
}
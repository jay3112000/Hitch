import { POST_START,POST_SUCCESS,POST_FAILURE, UPDATE_START, UPDATE_SUCCESS, UPDATE_FAILURE  } from "../Actions/Actions"


const CEpostreducer=(state,action)=>{
    switch(action.type){
       
          case POST_START:
              return{
                post:null,
                error:null,
                uploading:true,
                uploaded:false,
                editing:false,
                edited:false
                
              }
            case POST_SUCCESS:return{
                post:action.payload,
                error:false,
                uploading:false,
                uploaded:true,
                editing:false,
                edited:false
               
            }
            case POST_FAILURE:return{
                post:null,
                error:action.payload,
                uploading:false,
                uploaded:false,
                editing:false,
                edited:false
               
            }
            case UPDATE_START:return{
                post:null,
                error:null,
                uploading:false,
                uploaded:false,
                editing:true,
                edited:false

            }
            case UPDATE_SUCCESS:return{
                post:action.payload,
                error:false,
                uploading:false,
                uploaded:false,
                editing:false,
                edited:true,

            }
            case UPDATE_FAILURE:return{
                post:null,
                error:action.payload,
                uploading:false,
                uploaded:false,
                editing:true,
                edited:false
            }
        
         default:
             return state
    }
 }
 export default CEpostreducer
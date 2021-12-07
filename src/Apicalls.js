import axios from "axios";
import { FETCH_FAILURE, FETCH_POSTS, FETCH_SUCCESS, LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_START, REGISTER_SUCCESS,POST_START ,POST_SUCCESS,POST_FAILURE} from "./Actions/Actions";


export const logincall=async(credentials,dispatch)=>{
    dispatch({type:LOGIN_START})
    try{
        const response=await axios.post('http://localhost:3000/api/user/login', credentials)
        dispatch({type : LOGIN_SUCCESS,payload:response.data})
        return true
    }catch(err){
        dispatch({type:LOGIN_FAILURE,payload:err})
        return false
    }

}

export const registercall=async(credentials,dispatch)=>{
    dispatch({type:REGISTER_START})
    try{
        const response=await axios.post('http://localhost:3000/api/user/register', credentials)
        dispatch({type : REGISTER_SUCCESS,payload:response.data})
        localStorage.setItem('userid',response.data._id)
        return true
    }catch(err){
        dispatch({type:REGISTER_FAILURE,payload:err})
        return false
    }

}

export const getallposts=async(dispatch)=>{
        dispatch({type:FETCH_POSTS})
    try{
        const response=await axios.get('http://localhost:3000/api/post')
        console.log(response.data)
        dispatch({type:FETCH_SUCCESS,payload:response.data})
    }
    catch(error){
        dispatch({type:FETCH_FAILURE,payload:error})
    }
}


export const createpost=async(postdata,dispatch)=>{
        const userid=localStorage.getItem('userid')
          const body = {
              userId:userid,
              title: postdata.title,
              desc: postdata.desc,
              cname:postdata.cname,
              img:postdata.img,
              
          };
         dispatch({type:POST_START})
          if (body.img) {
            const data = new FormData();
            const imgName = body.img.name ;
            data.append("file", body.img);
            data.append("name", imgName);
            body.img = imgName;
            console.log(body);
            try {
              await axios.post("http://localhost:3000/api/upload", data);
            } catch (err) {
              console.log(err)
            }
          }
          try{
          const response=await axios.post(`http://localhost:3000/api/post`,body)
          console.log(response.data)
          dispatch({type:POST_SUCCESS,payload:response.data})
      }
      catch(error){
          console.log(error)
          dispatch({type:POST_FAILURE,payload:error})
      }
  }
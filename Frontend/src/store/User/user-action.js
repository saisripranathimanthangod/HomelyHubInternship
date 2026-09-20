import {userActions} from './user-slice';
import {axiosInstance} from '../../utils/axios';

//signup
export const getsignup = (user) => async(dispatch)=>{
    try{
        dispatch(userActions.getSignupRequest());
        const {data} = await axiosInstance.post('/v1/rent/user/signup',user);
        dispatch(userActions.getSignupDetails(data.user))
    }catch(error){
        dispatch(userActions.getError(error.response.data.message))
    }
}

//login
export const getLogin = (user) => async(dispatch)=>{
    try{
        dispatch(userActions.getLoginRequest());
        const {data} = await axiosInstance.post('/v1/rent/user/login',user);
        localStorage.setItem("token", data.token);
        dispatch(userActions.getLoginDetails(data.user))
    }catch(error){
        dispatch(userActions.getError(error.response.data.message))
    }
}

export const getCurrentUser = () => async(dispatch)=>{
    try{
    dispatch(userActions.getCurrentRequest());
    const {data} = await axiosInstance.get('/v1/rent/user/me');
    dispatch(userActions.getCurrentUser(data.user))
    }catch(error){
        console.log("User session check failed:", error.response?.data);
    }
}

export const updateUser = (updatedUser) => async(dispatch)=>{
    try{
    dispatch(userActions.getUpdateUserRequest());
    const response = await axiosInstance.patch('/v1/rent/user/updateMe',updatedUser);
    console.log(response)
    const {data} = await axiosInstance.get('/v1/rent/user/me')
    dispatch(userActions.getCurrentUser(data.user));
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

export const forgotPassword = (email) => async(dispatch)=>{
    try{
        await axiosInstance.post('/v1/rent/user/forgotPassword',{email});
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));    
    }
}

export const resetPassword = (repassword,token) => async(dispatch)=>{
    try{
        await axiosInstance.patch(`/v1/rent/user/resetPassword/${token}`,repassword);
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

export const updatePassword = (passwords) => async(dispatch)=>{
    try{
        dispatch(userActions.getPasswordRequest());
        await axiosInstance.patch('/v1/rent/user/updateMyPassword',passwords);
        dispatch(userActions.getPasswordSuccess(true));
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}

export const logout = () => async(dispatch)=>{
    try{
    await axiosInstance.get('/v1/rent/user/logout');
    dispatch(userActions.getLogout(null));
    }catch(error){
        dispatch(userActions.getError(error.response.data.message));
    }
}
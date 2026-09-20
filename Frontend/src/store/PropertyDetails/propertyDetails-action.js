import{propertyDetailsActions} from './propertydetails-slice';
import {axiosInstance} from '../../utils/axios';

//fetch details of one specific property using its id

//recv the property id
//start loading
//call backend api
//wait for response
//get the property data
//store details in redux
//if error store error in redux


export const getPropertyDetails = (id) => async (dispatch) => {
    try{
    dispatch(propertyDetailsActions.getListRequest());
     const response = await axiosInstance.get(`/v1/rent/listing/${id}`);
    console.log(response.data);
    if(!response){
        throw new Error("could not fetch any propertyDetails")
     }
        
     const{data} = response.data;
     dispatch(propertyDetailsActions.getPropertyDetails(data));
    }catch(error){
        dispatch(propertyDetailsActions.getError(error.response.data.error))
    }
}

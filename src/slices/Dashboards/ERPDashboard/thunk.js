import { ERP_GET_MainDashboard } from "../../../helpers/fakebackend_helper";

// action
import { dataSuccess } from "./reducer";

export const GET_MainDashboard = () => async (dispatch) => {
    try {
        
           const response = await ERP_GET_MainDashboard();
           dispatch(dataSuccess(response));

    } catch (error) {
        //dispatch(profileError(error));
    }
};

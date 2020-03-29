import { launchesAPI } from './../api/api'

const SET_LAUNCHES = 'launches/SET_LAUNCHES'

let initialState = {
    launchesData: []
 }

const launchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAUNCHES:
            return {
                ...state,
                launchesData: action.launches
            }
        default:
            return state
    }
}

export const setLaunchesData = (launches) => ({
    type: SET_LAUNCHES,
    launches
})

export const getLaunches = () => async (dispatch) => {
    let response = await launchesAPI.getLaunches()
    if (response.status === 200) {
        dispatch(setLaunchesData(response.data))
    }
}


export default launchesReducer
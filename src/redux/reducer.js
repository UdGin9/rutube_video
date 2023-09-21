import {DOWNLOAD_VIDEO, LOAD_VIDEO, TOGGLE_IS_FETCHING} from "../consts";


const initialState = {
    video: null,
    newVideo: null,
    isFetching: false
}



export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_VIDEO:
            return {...state, video: action.video}
        case DOWNLOAD_VIDEO:
            return {...state, newVideo: action.newVideo}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}


export const loadVideo = (video) => ({type: LOAD_VIDEO, video})
export const downloadVideo = (newVideo) => ({type: DOWNLOAD_VIDEO, newVideo})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

/*
export const dispatchVideo = (newVideo) => async (dispatch) => {
    dispatch(toggleIsFetching(true))

}
*/

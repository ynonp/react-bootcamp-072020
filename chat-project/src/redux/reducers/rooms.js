import produce from 'immer';

import * as actions from "../consts/action-types";
import {createReducer} from "./utils"

const initialState = {
    rooms: [],
    activeRoomId: null,
    searchPattern: "",
};

function setSearchRoomPattern(state, action) {
    state.searchPattern = action.payload;
}
function receivedRooms(state, action) {
    state.rooms.push(...action.payload);
}
function roomModified(state, action) {
    action.payload.forEach(modifiedItem => {
        const index = state.rooms.findIndex( item => item.id === modifiedItem.id);
        state.rooms[index] = modifiedItem;
    });
}
function setActiveRoom(state, action) {
    state.activeRoomId = action.payload.roomId;
}

const cases = {
    [actions.SET_ACTIVE_ROOM]: setActiveRoom,
    [actions.ROOM_MODIFIED]: roomModified,
    [actions.RECEIVED_ROOMS]: receivedRooms,
    [actions.SET_SEARCH_ROOM_PATTERN]: setSearchRoomPattern,
};

export default produce(createReducer(cases), initialState);



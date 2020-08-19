let pastStates = [];
const undo = store => next => action => {
    if (  action.type === 'UNDO') {
        if (addPastState(action)) {
          return next(action);
        }
    }
    else {
        saveStateBeforeAction(store);
        return next(action);
    }
}

function addPastState(action) {
    if ( pastStates.length === 0 ) {
        return;
    }
    const prevState = pastStates.pop();
    action.payload = prevState;
    console.log('pastStates', pastStates);
    return true;    
}

function saveStateBeforeAction(store) {
        const state = store.getState();
        pastStates.push(state);
        console.log('pastStates', pastStates);
}

export default undo;

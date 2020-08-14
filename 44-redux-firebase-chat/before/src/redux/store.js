import { createStore, combineReducers, applyMiddleware } from 'redux';
import messages from './reducers/messages';
import rooms from './reducers/rooms';
import account from './reducers/account';

const firebaseMessages = ({dispatch }) => next => action => {
  if (action.type === 'FIREBASE_INIT') {
    // Read From Firebase
    firebase.firestore().collection('messages')
        .orderBy('created_at')
        .onSnapshot(function (qs) {
        const batch = [];
        qs.forEach(function (doc) {
          batch.push({id: doc.id, ...doc.data()});
        });
        /// we have the new messages in batch
        dispatch({type: 'RESET_MESSAGES', payload: batch});
      }
    )
    return;
  }

  return next(action);
}

const reducer = combineReducers({ messages, rooms, account });

const store = createStore(reducer, applyMiddleware(firebaseMessages));
store.dispatch({type: 'FIREBASE_INIT'})
window.store = store;
export default store;


import { createStore } from 'redux';

// Action generator - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions.
// 2. Never change state or action, just return a new object with the state.

const countReducer = ((state = {count: 0}, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'RESET':
			return {
				count: 0
			};

		case 'SET':
			return {
				count: action.count
			}
		default:
			return state;
	}
});

const store = createStore(countReducer);

// this function watch all the changes on redux
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
store.dispatch(setCount());
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// NOTE: Reducers specify how the application's state changes in response to actions

// ADD_EXPENSE
const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			// we don't use push because this method manipulate the original state
			// state.push(action.expense);
			// the method array, return a new array concatenating with the new value
			// return state.concat(action.expense);
			
			// using the spread operator it's the best practice and it's similar to concat
			// create a new array and return the values
			// action.expense it's the value from the object that recieve from the object
			// console.log(action)
			return [
				...state,
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => { // destructure state.id
				return id !== action.id
			});
		default:
			return state;
	}
};

// Filters Reducer

const filtersReducerDefaultState = {
	text: '',
	stortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

// Store creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

// Called the Actions here ...
store.subscribe(() => {
	console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// console.log('\n\n', expenseOne);

// ===================================================
const demoState = {
	expenses: [{
		id: 'poijasdfhwer',
		description: 'January Rent',
		note: 'This was the final payment for that address',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		sortDate: undefined,
		endDate: undefined
	}
};
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
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
});

// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({ // the default date it's undefined
	type: 'SET_START_DATE',
	startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
});

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
		case 'EDIT_EXPENSE':
			return state.map((expense) => { // expense it's the value for state[0], state[1] ... state[n]
				// the logic to find coincidences
				if(expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				}
				else {
					return expense;
				}
			});
		default:
			return state;
	}
};

// Filters Reducer

const filtersReducerDefaultState = { 
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
		default:
			return state;
	}
}

// timestamps (miliseconds)
// 0 = January 1st 1970 (unix epoch) // start point
// 33400 ms after 0, 10, -203

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if(sortBy === 'date')
			return a.createdAt < b.createdAt ? 1 : -1
		else if(sortBy === 'amount')
			return a.amount < b.amount ? 1 : -1
	});
};

// Store creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);

// Called the Actions here ...
store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());


store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999));

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
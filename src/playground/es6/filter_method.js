// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter

// const state = [{
// 	id: 'uuid-1',
// 	description: '',
// 	note: '',
// 	amount: '',
// 	createdAt: 0
// },{
// 	id: 'uuid-2',
// 	description: '',
// 	note: '',
// 	amount: '',
// 	createdAt: 0
// }];

// console.log(state);
// console.log();

// const result = (
// 	state.filter(({ id }) => {
// 		return state[0].id !== id
// 	})
// );

// console.log(result);

// ========================================
let state = [];
let count = 0;

const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
}) => {
	reducers(
		{
			id: ('id-' + (++count)),
			description,
			note,
			amount,
			createdAt
		},
		{
			type: 'ADD_EXPENSE'
		}
	);
}

const removeExpense = ({ id } = {}) => {
	reducers({ id }, { type: 'REMOVE_EXPENSE'});
};

const defaultState = [];
const defaultAction = { type: undefined };

const reducers = (st = defaultState, action = defaultAction) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			state.push(st);
			return state;
		case 'REMOVE_EXPENSE':
			state = state.filter(({ id }) => { // destructure state.id
				return st.id !== id;
			});
			return state;
		default:
			return state;
	}
};

const log = () => console.log(state)

addExpense({description: 'rent', amount: 100});
addExpense({description: 'Coffee', amount: 300});
removeExpense({id: 'id-1'});

log();



























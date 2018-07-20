import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal 
		isOpen={!!props.selectedOption} // !!convert into booleans value
		// allows you to close the box touching the box or clicking esc
		onRequestClose={props.handleClearSelectedOption} 			
		contentLabel="Selected Option"
	>
		<h3>Selected Option</h3>
		{props.selectedOption && <p>{props.selectedOption}</p>}
		<button onClick={props.handleClearSelectedOption}>Okay</button>
	</Modal>
);

export default OptionModal;
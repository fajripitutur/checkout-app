

import styled from "styled-components";


const StyleWrapper = styled.div`

	.shipment-box {

		&__header {
		display: flex;
		flex-flow: row;
		justify-content: space-between;
		margin: 0 10px;
		width: 60%;
		
			@media only screen and (max-width: 667px) {
				width: 100%;
				flex-flow: column;
			}

		}

		&__content {
		display: flex;
		flex-flow: row;
		
		@media only screen and (max-width: 667px) {
			flex-flow: column;
		}
		
		&-form {
			width: 70%;
			
			@media only screen and (max-width: 667px) {
			width: 100%;
			}
		}

		&-summary {
			width: calc(100% - 70%);;

			@media only screen and (max-width: 768px) {
				width: 100%;
			}
		}

		}
  	}

	.radio-card {
		height: 100px;
		width: 200px;
		position: relative;
		border: 1px solid #CCCCCC;
		padding: 10px;

		@media only screen and (max-width: 667px) {
			width: 100%;
		}
	}

	input[type='radio'] { 
		position: absolute;
		right: 20px;
		top: 45px;
		accent-color: #1BD97B;
	}

	input[type='radio']:checked ~ label {
		color: #1BD97B;
		// border: 3px solid #1BD97B;
	}
	
	.radio-card:has(> input:checked) {
		border: 1px solid #1BD97B;
		background-color: rgba(27, 217, 123, 0.1);
		color: #1BD97B;
	}

	input[type='radio'] {
		// -webkit-appearance: none;
		// appearance: none;
		// // background-color: white;
		// height: 100%;
		// width: 100%;
		// border-radius: 10px;
		// position: absolute;
		// cursor: pointer;
		// outline: none;
		// border: 1px solid #CCCCCC;
		// box-shadow: 7px 7px 15px;
	}

	// input[type="radio"]:before {
	// 	content: '';	
	// 	position: absolute;
	// 	height: 22px;
	// 	width: 22px;
	// 	background-color: grey;
	// 	border: 1 px solid blue;
	// 	border-radius: 50%;
	// 	top: 35px;
	// 	right: 20px;
	// }
	// input[type="radio"]:after {
	// 	content: '';	
	// 	position: absolute;
	// 	height: 13px;
	// 	width: 13px;
	// 	background-color: transparent;
	// 	border-radius: 10px;
	// 	top: 39.5px;
	// 	right: 24.5px;
	// }
	// label {
	// 	position: absolute;
	// 	margin: 20px;
	// 	cursore: pointer;
	// }
	// h5 {
	// 	font-weight: 500;
	// 	font-size: 18px;
	// 	letter-spaceing: 0.5px;
	// 	margin: 15px 0 20px 0;
	// }
	// h2  {
	// 	font-size: 28px;
	// }

	// input[type='radio']:checked {
	// 	border: 3px solid #1BD97B;
	// 	background-color: rgba(27, 217, 123, 0.1);
	// }
	// input[type='radio']:checked:after {
	// 	background-color: red;
	// }


`;

export default StyleWrapper;
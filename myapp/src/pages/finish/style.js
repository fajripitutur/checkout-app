

import styled from "styled-components";


const StyleWrapper = styled.div`

	.finish-box {

		display: flex;
		flex-flow: row;

		@media only screen and (max-width: 667px) {
			flex-flow: column;
		}
		
		&__content {
			width: 70%;
			display: flex;
			justify-content: center;
			align-items: center;

			@media only screen and (max-width: 667px) {
				width: 100%;
			}

      &-detail {
        &__text {
          text-decoration: none;
          color: black;
          display: flex;
          align-self: center;
          align-items: center;
          gap: 10px;
        }
      }
	  }
    &__summary {
      width: calc(100% - 70%);

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

export default StyleWrapper;
import styled from "styled-components";


const StyleWrapper = styled.div`

  .delivery-box {

    &__header {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      margin: 0 10px;
      width: 90%;
      
      @media only screen and (max-width: 768px) {
        width: 100%;
        flex-flow: column;
      }

    }

    &__content {
      display: flex;
      flex-flow: row;
      
      @media only screen and (max-width: 768px) {
        flex-flow: column;
      }
      
      &-form {
        padding: 10px;
        width: 70%;
        
        @media only screen and (max-width: 768px) {
          width: 100%;
          padding: 0;
        }
      }

      &-summary {
        width: calc(100% - 70%);

        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }

  .form {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: flex-start;
    width: 100%;
    gap: 5%;

    &-dropshipper {
      width: 45%;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
    
    &-common {
      width: 45%;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }

    &-group {
      display: flex;
      flex-direction: column;
      margin: 10px 0px;
      width: 100%;
      position: relative;

      @media only screen and (max-width: 500px) {
        width: 100%;
      }
      
      input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        margin-bottom: 10px;
      }

      textarea {
        padding: 10px;
        border: 1px solid rgb(204, 204, 204);
        border-radius: 5px;
        font-size: 16px;
      }

      &__counter {
        font-size: 8px;
        position: absolute;
        right: 0;
        bottom: -10px;
      }
    }

    &-error-input {
      font-size: 12px;
      color: red;
    }

  }

  .input-field {
    border: 1px solid #2D2A40; /* default border color */
  }
  
  .input-field.error {
    border: 1px solid #FF8A00; /* border color for errors */
  }
  
  .input-field.success {
    border: 1px solid #1BD97; /* border color for success */
  }

`;

export default StyleWrapper;
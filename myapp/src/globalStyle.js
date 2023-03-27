import { createGlobalStyle } from 'styled-components';
// rgb(255,228,184)

const GlobalStyle = createGlobalStyle`
  body {
    // height: 100vh;
    margin: 0;
    padding: 0;
    background: #FFFAE6;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  .title {

    margin-bottom: 20px;

    h3 {
      color: #FF8A00;
      font-size: 28px;
      margin: 0px;
      line-height: 0.5;
    }

    &__underline {
      height: 10px; 
      width: 300px;
      background-color: #EEEEEE;
    }
  }

  .summary-box {
    height: 80vh;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      height: 50%;
      margin: 20px 0 0 0;
    }

    h1, h2 {
      margin: 0;
    }

    &__content-val {
      color: #1BD97B;
      font-weight: 700;
    }

    &__footer {
      margin-top: auto;
      width: 100%;
      
      

      &-totalorder {
        display: flex;
        justify-content: space-between;

        p {
          color: #FF8A00;
          font-size: 24px;
          font-weight: 700;
        }
      }
      
      button {
        width: 100%;
        margin-bottom: 10px;
        height: 60px;
        background-color: #FF8A00;
        color: white;
        border-color: transparent;
        border-radius: 8px; 
        font-size: 20px;
        font-weight: 700;
      }
    }


  }

  .container{
    width: 100vw;
    // min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    margin: 10px;
    min-height: 90vh;
    background: white;
    width: 90%;
    box-shadow: 0px 0px 15px -3px rgba(247, 222, 178);

    @media (max-width: 768px) {
      // height: 160vh;
    }

    &-content {
      padding: 0 20px;

      // &__divider {
      //   border-left: 1px solid #FF8A00; 
      //   height: 78vh; 
      //   width: 10px;

      //   @media (max-width: 768px) {
      //     border-left: 0; 
      //     border-bottom: 1px solid #FF8A00; 
      //     height: 10px;
      //     width: 100%;
      //   }
      // }

      // &__summary {
      //   width: 35%;
      //   @media (max-width: 768px) {
      //     width: 100%;
      //   }
      // }
    }
  }

  .back-box {
    a {
      text-decoration: none;
      color: black;
      padding-left: 10px;
    }
    padding: 20px;
    
    &_arrow {
      height: 16px;
      vertical-align: middle;
    }
    
    &_title {
      text-transform: capitalize;
      text-decoration: none;
      color: black;
      padding: 10px;
    }
  }

  .stepper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: auto;
    // width: 500px;
    margin: 10px 20px;

    &-group {
      display: flex;
      width: auto;
      position: relative;

      &__text {
        vertical-align: middle;
        align-content: center;
        align-self: center;

        @media (max-width: 768px) {
          // visibility: hidden;
        }
      }
    }
  }
  
  .step {
    width: 30px;
    height: 30px;
    // border: 1px solid gray;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
  }
  
  .stepper-group.active {
    background-color: #FF8A00;
    color: white;
  }
  
  .step.active {
    background-color: #FF8A00;
    color: white;
  }
  .step.inactive {
    // background-color: rgba(255, 138, 0, 1);
    // opacity: 20%;
    color: #FF8A00;
  }
  
  .divider {
    position: relative;
    height: 40px;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 20px;
    height: 20px;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    
    gap: 1rem;
  }
  
  .grid-item {
    background-color: #ddd;
    padding: 20px;
  }
  
  .larger {
    grid-column: span 3;
  }

  input[type="checkbox"] {
    accent-color: #1BD97B;
  }
`;

export default GlobalStyle;
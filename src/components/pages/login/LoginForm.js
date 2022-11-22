import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate();

  const handleChange = (event) => setInputValue(event.target.value);
  const handleSubmit = (event) => navigate(`order/${inputValue}`);

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          value={inputValue}
          onChange={handleChange}
          required
          placeholder="Entrez votre prénom"
        />
      </div>

      <button className="button-with-icon">
        <span>Accéder à mon espace</span>
        <IoChevronForward className="icon" />
      </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  h1 {
    color: white;
    font-size: 48px;
  }

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h2 {
    color: white;
    font-size: 36px;
    margin: 20px 10px 10px;
  }

  .input-with-icon {
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      color: #93a2b1;
      font-size: 15px;
      margin-right: 8px;
    }

    input {
      color: #17161a;
      font-size: 15px;
      border: none;
    }

    &::placeholder {
      color: lightgrey;
      background: white;
    }
  }

  .button-with-icon {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;

    line-height: 1;
    padding: 18px 24px;
    border-radius: 5px;
    white-space: nowrap;
    text-decoration: none;

    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;

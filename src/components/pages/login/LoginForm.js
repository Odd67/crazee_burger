import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <input
        value={inputValue}
        onChange={handleChange}
        required
        placeholder="Entrez votre prénom"
      />
      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
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
`;

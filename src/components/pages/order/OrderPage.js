import styled from "styled-components";
import { theme } from "../../../theme";
<<<<<<< HEAD
import Main from "./Main/Main";
=======
import Main from "./Main";
>>>>>>> 58664249ffca7d76cc5d68548a9951ff5849b3e1
import Navbar from "./Navbar/Navbar";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

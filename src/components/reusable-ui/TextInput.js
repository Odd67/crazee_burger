import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ Icon, value, onChange, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon ?? null}
      <input type="text" value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: white;

  margin: 18px 0;
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};

  .icon {
    color: ${theme.colors.greySemiDark};
    font-size: ${theme.fonts.size.P0};
    margin-right: 8px;
  }

  input {
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.size.P0};
    width: 100%;
    border: none;

    &::placeholder {
      color: ${theme.colors.greyMedium};
      background: ${theme.colors.white};
    }
  }
`;

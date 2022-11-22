import styled from "styled-components";

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
  border-radius: 5px;

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
`;

import styled from "styled-components";

export const FoodTypeContainer = styled.div`
  width: 30px;
  min-width: 30px;
  height: 30px;
  text-align: center;
  margin-right: 10px;
  margin-top: 10px;
  border: ${(props) =>
    props.type === 1 ? "solid 1px #92282a" : "solid 1px #00923f"};
`;
export const FoodTypeButton = styled.button`
  border: 0px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
  background-color: ${(props) => (props.type === 1 ? "#92282a" : "#00923f")};
`;

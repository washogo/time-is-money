import { styled } from 'styled-components';

type Props = {
  text: string;
};

export const Main = (props: Props) => {
  const { text } = props;
  return <SButton>{text}</SButton>;
};

const SButton = styled.button`
  width: 212px;
  height: 56px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

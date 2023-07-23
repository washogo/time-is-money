import { styled } from 'styled-components';

type Props = {
  text: string;
};

export const Main = (props: Props) => {
  const { text } = props;
  return <SLabel>{text}</SLabel>;
};

const SLabel = styled.label`
  height: '120px';
  width: '30px';
  background-color: '#fff';
  font-weight: 'bold';
`;

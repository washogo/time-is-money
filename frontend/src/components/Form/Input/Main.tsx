import { styled } from 'styled-components';

type Props = {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const Main = (props: Props) => {
  const { type, value, onChange, placeholder } = props;
  return <SInput type={type} value={value} onChange={onChange} placeholder={placeholder} />;
};

const SInput = styled.input`
  height: 45px;
  width: 337px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

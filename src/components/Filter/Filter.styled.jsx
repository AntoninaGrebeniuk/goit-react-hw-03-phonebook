import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  color: var(--white);
  text-shadow: -1px -1px var(--dark-violet), 0 1px 0 var(--grey-violet);
`;

export const FilterInput = styled.input`
  flex: 1;
  margin-top: 15px;
  padding: 12px 32px;
  border: 0;
  width: 300px;
  box-sizing: border-box;
  color: var(--white);
  font-size: 16px;
  font-family: 'Courgette', cursive;
  text-shadow: 1px 1px 1px #232323;
  border-radius: 25px;
  background: var(--grey-blue);
  caret-color: var(--white);

  background: linear-gradient(to bottom, var(--grey-blue) 0%, #565e79 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='var(--grey-blue)', endColorstr='#565e79', GradientType=0 );
  transition: transform var(--cubic-bezier);

  &:hover,
  &:focus {
    outline: none;
    transform: scale(1.02);
  }

  &::placeholder {
    font-family: 'Courgette', cursive;
    color: var(--placeholder-color);
  }
`;

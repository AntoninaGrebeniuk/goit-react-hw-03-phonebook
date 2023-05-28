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
  padding: 1em 2em;
  border: 0;
  width: 300px;
  box-sizing: border-box;
  color: var(--white);
  font-size: 14px;
  font-family: Open Sans, Arial, sans-serif;
  text-shadow: 1px 1px 1px #232323;
  border-radius: 25px;
  background: var(--grey-blue);
  caret-color: var(--white);

  background: linear-gradient(to bottom, var(--grey-blue) 0%, #565e79 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='var(--grey-blue)', endColorstr='#565e79', GradientType=0 );

  &:hover,
  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(1.02);
  }
`;

import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
  text-shadow: -1px -1px var(--dark-violet), 0 1px 0 var(--grey-violet);
`;

export const Name = styled.span`
  width: 150px;
  font-size: 18px;
  color: var(--white);
  border-bottom: 1px solid var(--border-line);
`;

export const Number = styled.span`
  width: 150px;
  font-size: 18px;
  color: var(--white);
  border-bottom: 1px solid var(--border-line);
`;

export const RemoveBtn = styled.button`
  display: block;
  width: 40px;
  /* height: 35px; */
  text-align: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  color: var(--white);
  cursor: pointer;
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: var(--yellow);
  background: linear-gradient(
    to bottom,
    var(--yellow) 0%,
    var(--dark-yellow) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='var(--yellow)', endColorstr='var(--dark-yellow)', GradientType=0 );
  border: 0;
  border-radius: 30px;
  /* border-radius: 50%; */

  text-shadow: -1px -1px var(--dark-orange), 0 1px 0 var(--light-orange);

  &:hover,
  &:focus {
    outline: none;
    transition: transform 0.15s ease;
    transform: scale(0.95);
  }
`;

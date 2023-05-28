import styled from '@emotion/styled';

export const Container = styled.div`
  height: '100vh';
  text-align: center;
  padding: 30px;
  font-size: 40;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 450px;

  /* width: 100%; */
  padding: 20px;
  position: relative;
  border-radius: 3px;
  border: 1px solid var(--grey-blue);
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: var(--grey-blue);

  background: linear-gradient(
    to right,
    var(--grey-blue) 0%,
    var(--light-grey-blue) 29%,
    var(--light-grey-blue) 50%,
    var(--light-grey-blue) 71%,
    var(--grey-blue) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='var(--grey-blue)', endColorstr='var(--light-grey-blue)', GradientType=1 );

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    width: 100%;
  }
`;

export const Phonebook = styled.h1`
  margin-bottom: 10px;
  color: var(--white);
  text-shadow: -2px -2px var(--dark-violet), 0 2px 0 var(--grey-violet);
`;

export const Contacts = styled.h2`
  margin-bottom: 10px;
  font-size: 26px;
  color: var(--white);
  text-shadow: -2px -2px var(--dark-violet), 0 2px 0 var(--grey-violet);
`;

import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 350px;

  padding: 20px;
  position: relative;
  border-radius: 3px;
  border: 1px solid #b12816;
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: #bc3220;

  background: linear-gradient(
    to right,
    #bc3220 0%,
    #db4a37 29%,
    #db4a37 50%,
    #db4a37 71%,
    #bc3220 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bc3220', endColorstr='#bc3220', GradientType=1 );

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    width: 100%;
  }
`;

export const ContactInput = styled.input`
  flex: 1;
  padding: 12px 32px;
  border: 0;
  width: 100%;
  box-sizing: border-box;
  color: var(--white);
  font-size: 16px;
  font-family: 'Courgette', cursive;
  text-shadow: 1px 1px 1px #232323;
  border-radius: 25px;
  background: var(--red);
  caret-color: var(--white);

  background: linear-gradient(to bottom, var(--red) 0%, var(--light-red) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='var(--red)', endColorstr='var(--light-red)', GradientType=0 );
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

export const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  width: 250px;

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
  color: var(--white);
  margin-top: 50px;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  text-shadow: -1px -1px var(--dark-orange), 0 1px 0 var(--light-orange);
  transition: transform var(--cubic-bezier);

  &:hover,
  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

export const Label = styled.label`
  font-size: 22px;
  color: var(--white);
  text-shadow: -1px -2px var(--bright-red), 0 1px 0 var(--pale-red);
`;

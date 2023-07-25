import styled from 'styled-components'

export const LoginPageBgContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  height: 100vh;
`

export const LoginFormContainer = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
  border-radius: 14px;
  box-shadow: 2px 2px 4px 4px
    ${props => (props.isDarkMode ? '#000000' : ' #ebebeb')};
  align-items: center;
  width: 45%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const LogoImage = styled.img`
  width: 30%;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    width: 40%;
  }
`

export const InputElementContainer = styled.div`
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-top: 20px;
`

export const InputLabelElement = styled.label`
  font-size: 12px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#7e858e')};
  margin-bottom: 4px;
  font-weight: 600;
  margin-left: 3px;
`

export const InputElement = styled.input`
  padding: 10px;
  background-color: transparent;
  border-radius: 10px;
  width: 70%;
  border: 2px solid ${props => (props.isDarkMode ? '#606060' : '#e2e8f0')};
  outline: none;
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#7e858e')};
`

export const CheckBoxContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 30px;
`

export const CheckBoxLabelElement = styled.label`
  font-size: 14px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#212121')};
  margin-bottom: 4px;
  font-weight: 600;
  margin-left: 3px;
`

export const LoginButton = styled.button`
  align-self: stretch;
  padding: 10px;
  background-color: #3b82f6;
  font-size: 13px;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 30px;
  color: #ffffff;
  margin-top: 10px;
`

export const ErrorMassage = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-weight: 500;
  align-self: flex-start;
  margin-top: -1px;
  margin-left: 30px;
`

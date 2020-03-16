import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import axios from 'axios'
import { navigate } from "@reach/router"

import { Form } from "../components/Form"
import { Heading } from "../components/Heading"
import {Subheading} from "../components/Subheading"
import { InputGroup } from '../components/InputGroup';
import {Input} from '../components/Input';
import logo from '../images/logo.svg';

const loginBase = css`
  text-align: center;

  img {
    height: 5em;
  }s
`

function LoginRaw(props) {
  const [error, setError] = React.useState()

  const handleSubmit = async ({ username, password}) => {
    try {
      await axios.post('https://glacial-shelf-31721.herokuapp.com/auth/login', { username, password })

      navigate('https://cookie-auth-app-logged.netlify.com');      
    } catch(e) {
      setError(e.message)
    }
  }

  return (
    <div className={props.className}>
      <img src={logo} alt="Logo" />
      <Heading>Boas vindas!</Heading>
      <Subheading>Informe seus dados para entrar na área logada.</Subheading>
      <Form onSubmit={handleSubmit}>
        <section>
          <InputGroup label="Usuário" type="text" name="username"/>
          <InputGroup label="Senha" type="password" name="password"/>
        </section>
        <p>{error}</p>
        <Input type="submit" value="Continuar"/>
      </Form>
    </div>
  )
}

const Login = styled(LoginRaw)`
  ${loginBase}
`

export { Login };
import React, { Component } from "react";
import { connect } from "react-redux";
import  {routes} from "../Router";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    const { goToSignUpPage } = this.props;

    return (
      <LoginWrapper>
        <TextField
          onChange={this.handleFieldChange}
          name="email"
          type="email"
          label="E-mail"
          value={email}
        />
        <TextField
          onChange={this.handleFieldChange}
          name="password"
          type="password"
          label="Password"
          value={password}
        />
        <Button>Login</Button>
        <Button onClick={goToSignUpPage}>CADASTRE-SE</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    goToSignUpPage: () => dispatch(push(routes.signuppage))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);


// perfilEmpreendedor={
//     //cadastro
//     informacoesCadastrais={
//       nome: "",
//       email: "",
//       empresa: "",
//       id: ""
//     },

//     //feed
//     conteudoFeed={
//       titulo: "",
//       objetivo: "",
//       video: "",
//       votos: "",
//       autor: ""
//     },

//     //conteudo do perfil
//     perfil={
//       equipe={
//         membros=["lorenzo", "profissão"]
//       },
//       produto={

//       },
//       proposta={

//       },
//       problema={
        
//       }
//     }

// }

// feed={
//   [
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},
//     {"id", "title", "logo", "problematica", "proposta", "video", "numero de votos", "usuario atual já votou"},

//   ]
// }
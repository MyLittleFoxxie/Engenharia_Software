import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../components/common/Logo';
import MenuItem from '@mui/material/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

const bairros = [
  {
    value: 'Belvedere',
  },
  {
    value: 'Sion',
  },
  {
    value: 'Funcionários',
  },
  {
    value: 'Savassi',
  },
  {
    value: 'Floresta',
  },
  {
    value: 'Santa Efigênia',
  },
  {
    value: 'Santo Antônio',
  },
  {
    value: 'Mangabeiras',
  },
];

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState(0);
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const sucesso = () => toast("Conta criada com sucesso!");

  const handleClick = () => {
    let apiUrl = 'http://viacep.com.br/ws/{cep}/json/';
    let url = apiUrl.replace('{cep}', cep);
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log('This is your data', data);
        setLogradouro(data.logradouro);
        setNumero(data.numero);
        setBairro(data.bairro);
        setLocalidade(data.localidade);
      })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const cliente = { nome, sobrenome, cpf, telefone, email, senha, "endereco": { cep, logradouro, complemento, numero, bairro, localidade } };
    const apiUrl = 'http://localhost:8080/api/cliente/createUpdate';
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente)
    }).then(() => {
      console.log(JSON.stringify(cliente))
      sucesso();
    })
  }


  return (
    <ThemeProvider theme={theme}>
      <Logo />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="Nome"
                  autoFocus
                  value={nome || ''}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="sobrenome"
                  label="Sobrenome"
                  name="sobrenome"
                  autoComplete="family-name"
                  value={sobrenome || ''}
                  onChange={(e) => setSobrenome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cpf"
                  label="CPF"
                  type="cpf"
                  id="cpf"
                  value={cpf || ''}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="telefone"
                  label="Telefone"
                  type="telefone"
                  id="telefone"
                  value={telefone || ''}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="senha"
                  label="Senha"
                  type="senha"
                  id="senha"
                  autoComplete="new-password"
                  value={senha || ''}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cep"
                  label="CEP"
                  id="cep"
                  value={cep || ''}
                  onChange={(e) => setCep(e.target.value)}
                />
              </Grid>
              <Button
                style={{ marginLeft: '60px', width: '300px' }}
                variant="contained"
                sx={{ mt: 3, mb: 3 }}
                href="#contained-buttons"
                onClick={handleClick}>
                Buscar CEP
              </Button>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="logradouro"
                  label="Logradouro"
                  id="logradouro"
                  value={logradouro || ''}
                  onChange={(e) => setLogradouro(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="complemento"
                  label="Complemento"
                  id="complemento"
                  value={complemento || ''}
                  onChange={(e) => setComplemento(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="numero"
                  label="Número"
                  id="numero"
                  value={numero || ''}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  required
                  fullWidth
                  name="bairro"
                  label="Bairro"
                  id="bairro"
                  value={bairro || ''}
                  onChange={(e) => setBairro(e.target.value)}
                >
                  {bairros.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="localidade"
                  label="Localidade"
                  id="localidade"
                  value={localidade || ''}
                  onChange={(e) => setLocalidade(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Eu quero receber inspiração, promoções e atualizações por email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <ToastContainer />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">
                  Ja possui uma conta? Entre!
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
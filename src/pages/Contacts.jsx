import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { forwardRef, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/core/Alert';
import { useHistory } from 'react-router';

const Alert = forwardRef( function Alert( props, ref ) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
} );

export const Contacts = () => {
  const [formData, setFormData] = useState( {
    nome: "",
    cognome: "",
    email: "",
    help_body: ""
  } )
  const [notify, setNotify] = useState()
  const history = useHistory()

  const onChangeHandler = ( event ) => {
    setFormData( prev => ( {
      ...prev,
      [event.target.name]: event.target.value
    } ) )
  }

  const submit = () => {
    if ( Object.values( formData ).every( field => field.length > 0 ) ) {
      setNotify( {
        text: "Grazie mille! Verrai presto contattato!",
        type: 'success'
      } )
    }
    else {
      setNotify( {
        text: "Compila tutti i campi!",
        type: 'error'
      } )

    }
  }

  const delay = ( ms ) => new Promise( ( resolve, reject ) => {
    setTimeout( resolve, ms )
  } )

  const handleClose = ( type ) => {
    setNotify()
    if ( type === 'success' )
      delay( 500 )
        .then( () => history.push( '/' ) )
  }

  return <Container component="main" maxWidth="xs">
    <Snackbar open={notify ? true : false}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={6000}
      onClose={() => handleClose( notify?.type )}>
      <Alert
        onClose={() => handleClose( notify?.type )}
        severity={notify?.type}
        sx={{ width: '100%' }}>
        {notify?.text}
      </Alert>
    </Snackbar>
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <HelpIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Contattaci
        </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          width: '100%', // Fix IE11 issue.
          mt: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="nome"
              required
              fullWidth
              label="Nome"
              autoFocus
              value={formData.nome}
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Cognome"
              name="cognome"
              autoComplete="lname"
              value={formData.cognome}
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Indirizzo Email"
              name="email"
              autoComplete="email"
              type="email"
              value={formData.email}
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              minRows={4}
              name="help_body"
              label="Descrivici di cosa hai bisogno"
              type="help_body"
              value={formData.help_body}
              onChange={onChangeHandler}
            />
          </Grid>

        </Grid>
        <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={submit}>
          Invia
          </Button>
      </Box>
    </Box>
  </Container>
}
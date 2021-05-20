import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/styles';
import Copyright from 'components/Copyright';

const useStyles = makeStyles( ( theme ) => ( {
  heroContainer: {
    height: '60vmin',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&  h1,p': {
      color: 'black!important',
    },
    '&::after': {
      content: '""',
      backgroundImage: `url(https://mykidsapp.files.wordpress.com/2020/10/img_9383-2.jpg?w=1024)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: - 1,
      opacity: 0.65
    }
  },
  footer: {
    textAlign: 'center',
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing( 5 ),
    paddingTop: theme.spacing( 3 ),
    paddingBottom: theme.spacing( 3 ),
    [theme.breakpoints.up( 'sm' )]: {
      paddingTop: theme.spacing( 6 ),
      paddingBottom: theme.spacing( 6 ),
    },
  },
} ) );

const Landing = () => {
  const classes = useStyles();

  return (
    <>

      <div className={classes.heroContainer}>
        <div>
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Feniculi
        </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p" style={{ fontStyle: 'italic' }}>
            I momenti più belli della vita sono quelli che,
            uniti insieme, formano un percorso.
        </Typography>
        </div>

      </div>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Typography variant="h2" align="center" color="text.secondary" component="p">
          Chi siamo
        </Typography>
        <Typography align="center" color="text.secondary" component="p">
          Feniculi nasce con un gruppo di giovani menti pugliesi e l’obiettivo di dar vita ad un ponte di conoscenze tra Nord e Sud Italia, creando nuovi prodotti digitali e sperimentando nuove tecnologie senza mai tralasciare tradizioni e umanità, formando un connubio genuino fra uomo e macchina.

          “Uallio” è il primo progetto di Feniculi, un prototipo di intelligenza robotica che interagisce con le persone e l’ambiente, con la missione di creare una comunità con lo sguardo rivolto al futuro.

          Feniculi di avvale di un gruppo eterogeneo di giovani con la passione verso il mondo tecnologico, che insieme sperimentano tecnologie di frontiera quali la robotica e l’intelligenza artificiale.

          Tra le attività che svolgiamo, oltre la realizzazione di Uallio, si presentano workshop e corsi nell’ambito della stampa 3D e la partecipazione ad eventi e fiere di ambito tecnologico volti sia ad allargare la community che a presentare il nostro prodotto.
        </Typography>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}

export default Landing
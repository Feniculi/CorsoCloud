import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default
  function Copyright( props ) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mykidsapp.wordpress.com/">
        Feniculi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
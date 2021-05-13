import './styles.scss'

const copyToClip = ( text ) => {
  navigator.clipboard.writeText( text ).then( function () {
    alert( 'Copying to clipboard was successful!' );
  }, function ( err ) {
    alert( 'Could not copy text: ', err );
  } );
}

export const Card = ( { title, text, imgUrl, actionUrl } ) =>
  <div className="card">
    <p className="title">{title}</p>
    <p className="imgContainer">
      {
        imgUrl && <img src={imgUrl} alt="Avatar" />
      }
    </p>
    <p>{text}</p>
    {
      actionUrl && <div className="urls">
        <div onClick={() => window.open( actionUrl, '_blank' )}>
          WIKIPEDIA
        </div>
        <div onClick={() => copyToClip( actionUrl )}>
          COPIA
        </div>
      </div>
    }
  </div>

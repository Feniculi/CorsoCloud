const parseDogInfo = ( dog ) => {
  const imgRef = document.getElementById( 'dog-img' )
  imgRef.src = dog.url
  const dogBreed = document.getElementById( 'dog-breed' )
  const breedInfo = document.querySelector( '#breed-info' )
  if ( dog?.breeds[0] ) {
    const { name } = dog?.breeds[0]
    dogBreed.textContent = name ? name.toUpperCase() : '- RAZZA SCONOSCIUTA -'
    breedInfo.textContent = dog ? JSON.stringify( dog, null, 2 ) : ''
  } else {
    dogBreed.textContent = '- RAZZA SCONOSCIUTA -'
    breedInfo.textContent = dog ? JSON.stringify( dog, null, 2 ) : ''
  }
}


/*const getDogInfo = () => {
  const url = 'https://api.thedogapi.com/v1/images/search'
  fetch( url )
    .then( async resp => ( await resp.json() )[0] )
    .then( parseDongInfo )
    .catch( e => console.log( `GET_DOG_INFO:: ${e.message}` ) )
}*/

const getDogInfo = async () => {
  const url = 'https://api.thedogapi.com/v1/images/search'
  let data = await fetch( url )
  data = await data.json()
  parseDogInfo( data[0] )
}

const main = () => {
  getDogInfo()
  const btnAnother = document.getElementById( 'another-one' )
  btnAnother.addEventListener( 'click', () => getDogInfo() )
}


window.addEventListener( "load", function ( event ) {
  main()
} );

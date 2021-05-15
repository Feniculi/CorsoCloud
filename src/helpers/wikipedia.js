const endpoint_rest = "https://it.wikipedia.org/api/rest_v1/"
const endpoint_php = 'https://it.wikipedia.org/w/api.php?'

export const summary = async ( query ) => {
  /*
    {
      query: {
        normalized: { ...},
        pages: { ...},
        redirects: { ...},
        ...
      },
      ...
    }
  */
  const { query: { normalized, pages, redirects } } =
    await fetch( `${endpoint_php}format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${query}` )
      .then( res => res.json() )

  const normalizedQuery = normalized?.length > 0 && !redirects ?
    //prendo il testo normalizzato e rendo tutte le prime lettere maiuscole
    normalized[0].to
      .toLowerCase()
      .split( ' ' ) //divido la stringa usando come separatore lo spazio
      .map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) )
      .join( ' ' ) :
    pages[Object.keys( pages )[0]].title

  const url = `${endpoint_rest}page/summary/${normalizedQuery}?origin=*`;

  return fetch( url )
    .then( ( res ) => res.json() )
}

const Wikipedia = {
  summary
}


export default Wikipedia
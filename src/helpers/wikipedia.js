const endpoint_rest = "https://it.wikipedia.org/api/rest_v1/"
const endpoint_php = 'https://it.wikipedia.org/w/api.php?'

export const summary = async ( query ) => {
  const { query: { normalized, pages, redirects } } =
    await fetch( `${endpoint_php}format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${query}` )
      .then( res => res.json() )

  const normalizedQuery = normalized?.length > 0 && !redirects ?
    normalized[0].to
      .toLowerCase()
      .split( ' ' )
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

/*

import wiki from 'wikijs'
const endpoint = "https://it.wikipedia.org/w/api.php"


export const summary = async ( text ) => {
  const page = await wiki( { apiUrl: endpoint } )
    .page( text )

  return {
    page,
    image: await page.mainImage(),
    summary: await page.summary()
  }
}

const Wikipedia = {
  summary
}


export default Wikipedia
*/


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


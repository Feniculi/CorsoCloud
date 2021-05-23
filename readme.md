# CorsoCloud

Nel branch "master" trovate sempre l'ultimo codice aggiornato anche se in lavorazione/preparazione per la lezione.
Fate riferimento sempre al branch della lezione che volete vedere



# lezione_3 (workflow)
## (da zero)
clonare il repo
```
git clone https://github.com/Feniculi/CorsoCloud.git
```
oppure farlo da github desktop
```
file -> clone -> https://github.com/Feniculi/CorsoCloud.git
```
installare le librerie (nella cartella del progetto)
```
yarn install
```
avviare il dev server
```
yarn start
```

## (a partire da lezione_2)
Libreria componenti: https://next--material-ui.netlify.app/ 
```
yarn add @material-ui/core@next @emotion/react @emotion/styled
```
installare font Roboto guida ->  https://fontsource.org/docs/getting-started
```
yarn add @fontsource/roboto

// nella indes.js
import '@fontsource/roboto'

```
installare icone
```
yarn add @material-ui/icons
```
avviare il dev server
```
yarn start
```

Esempio template: 
https://next--material-ui.netlify.app/getting-started/templates/

https://github.com/mui-org/material-ui/blob/next/docs/src/pages/getting-started/templates/pricing/Pricing.js

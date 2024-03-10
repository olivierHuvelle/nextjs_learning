anatomie du projet 
=> app folder 
page.js => 
    signifie que page (donc je suppose que sous-page = repertoire + page.js) sont des server-components, confirmé
    attention server-side donc si log => dans le terminal et pas console du navigateur 
layout.js (au moins 1 requis) 


navigation
import Link from 'next/link'
<p><Link href="/about">About us</Link></p> 

layout 
au moins un requis (root) 
on peut en ajouter dans chaque sous-repertoire si on veut 
metadata => reserved name, sera consomme par le layout dans lequel il est défini 


reserved file names, custom components et organisation 
icon.* => sera utilisé comme favicon
pour le reste utilisation assez classique des composants (note je change ma convention pour function)
not-found.js => fallback page for not_found 
error.js (idem mais pour des erreurs cette fois) 
loading.js (idem) 
route.js (pour une api route => donc pour une fullstack mais je ne compte pas l'utiliser de cette manière)

dynamic routes 
[param] comme nom de dossier 
réception d'une prop params avec comme clef ce qui est passé exemple params.param dans ce cas 

foodies starting app 
meals 
meals/share 
community routes 
note ... je n'écris pas tout ce que je fais uniquement les points à relire potentiellement dans second temps 

optimisation des images avec Image component (ex lazy loading, adaptation de la size en fonction du vp, adaptation du format en fonction du navigateur) 
[doc](https://nextjs.org/docs/app/api-reference/components/image)

ok on ajoute un peu de css et des composants assez génériques => il gueule pour le slidedhow parce que state (et que server-side-component) 
idem pour les event listeners (ce qui est assez logique) 
si le composant est un client component = 'use client' en première ligne du fichier 


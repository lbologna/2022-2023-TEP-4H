<!DOCTYPE html>
<html>
<head>
<title>Basic Json parsing</title>

<script>
// legge il file json da github
fetch ("https://raw.githubusercontent.com/lbologna/2022-2023-TEP-4H/main/fetchJson/basicHTMLPage.json") 
 .then(response => response.json()) // converte la risposta in un dizionario (json)
 .then(json => parseText(json)) // interpreta il contenuto della risposta

 function parseText(myJson){
    let fullResponse = myJson; 
    console.log(fullResponse);

    let keys = Object.keys(fullResponse); // estrae le chiavi del dizionario
    for (let k = 0; k < keys.length; k++){ // per ogni chiave
      let currentKey = keys[k]; // estrare l'elemento corrente      
      if (currentKey == "div"){ // se l'elemento corrente è un div
         let div = document.createElement("div"); // crea un div
         div.id = fullResponse[currentKey]["id"]; // assegna l'id
         div.innerHTML = fullResponse[currentKey]["innerHTML"]; // assegna il contenuto del div
         document.body.appendChild(div); // visualizza l'elemento in fondo alla pagina html
      }      
    }    
 }
</script>
</head>
<body>


</body>
</html>

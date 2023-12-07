it('should visit the website correcctly',()=>{
    //avec la commande "visit" nous pouvons visiter un site web, localhost ou n'importe que page html dans le systeme
    //parmi les bonnes pratiques de cypress il faut utiliser "baseURL" dans le fichier de configuratuion cypress.config.js 
    cy.visit('/')
})


it('should visit the website correcctly',()=>{
    // nous pouvons ajouter "option" dans la commande "visit" 
    //lien pour la documentation de "visit": https://docs.cypress.io/api/commands/visit
    //parmi les option "qs"
    // par exemple pour chercher le mot cypress dans google "https://www.google.com/search?q=cypress"
    //il ajoute & saisi les mots recherchés
    cy.visit('/search',{
        qs:{
            q:'cypress',
        }
    })
})
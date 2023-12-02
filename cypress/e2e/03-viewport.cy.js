it('should visit the website correcctly',()=>{
    //avec la commande "visit" nous pouvons visiter un site web, localhost ou n'importe que page html dans le systeme
    //parmi les bonne pratique de cypress il faut utiliser "baseURL" dans le fichier de configuratuion cypress.config.js 
    cy.visit('/')
})
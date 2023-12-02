/// <reference types="cypress"/>

//pour regrouper les cas de test  sous un suite de test on utilise "describe" ou "context"
describe('login functionality',()=>{
//before va s'executer une seule fois avant les 3 cas de test
before(()=>{
    cy.log('i am inside the before hook')
})

//beforeEach va s'executer avant chaque cas de test
beforeEach(()=>{
    cy.log('i am inside the beforeEach hook')
})
//after va s'executer une seule fois apres les 3 cas de test
after(()=>{
    cy.log('i am inside the after hook')
})
//afterEach va s'executer apres chaque cas de test
afterEach(()=>{
    cy.log('i am inside the afterEach hook')
})

//pour ecrire un cas de test on utilise "it" qui est une fonction de mocha avec deux arguments
//it("titre de cas de test",les steps)
it("should login with valid email and password correctly",function(){
    cy.log('should login with valid email and password correctly')
})

//function() et la meme chose que ()=>
it("should not login if username is wrong",()=>{
    cy.log('should not login if username is wrong')
})

//function() et la meme chose que ()=>
it("should be able to reset the password",()=>{
    cy.log('should be able to reset the password')
})
})
describe('order functionality',()=>{
//function() et la meme chose que ()=>
it("should be able to order a new food",()=>{
    cy.log('should be able to order a new food')
})
})



describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('has body element', ()=>{
            cy.get('body').should('be.visible');
        });
    });
});
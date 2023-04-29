

describe('National page', () => {

  it('should render all the components of a single Pokemon', () => {

    cy.visit('/')

    cy.wait(2000);
    cy.get('[data-testid="bulbasaur"]').should('be.visible')
    cy.get(':nth-child(1) > h3').should('be.visible')
    cy.get(':nth-child(1) > [data-testid="legend"]').should('be.visible')
    cy.get('[data-testid="bulbasaurgrass"]').should('be.visible')
    cy.get('[data-testid="bulbasaurpoison"]').should('be.visible')
  })



  it('should render all the Pokemon after clicked the Show More button different times', () => {

    cy.visit('/')

    cy.get('.show-button').should('be.visible')

    cy.wait(3000);
    cy.get('.national-section').find('.pokemon-section').should('have.length', 60);
  })


  it('should render the shiny Pokemon', () => {

    cy.visit('/')

    cy.wait(3000)
    cy.get('[data-testid="bulbasaur"]').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
    cy.get('.slider').should('be.visible')
    cy.get('.slider').click();
    cy.get('[data-testid="bulbasaur"]').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png')
  })


  it('should render result of a search', () => {

    cy.visit('/')

    cy.wait(2000);
    cy.get('.search').type('Primeape');
    cy.get('[data-testid="sections"]').should('be.visible');
  })

})



describe('Regions page', () => {

  it('should render all the pokemon of Galar region', () => {

    cy.visit('/regions');

    cy.wait(3000);
    cy.get('.national-section').find('.pokemon-section').should('have.length', 96);
  })


  it('should render all the pokemon of Kanto region', () => {

    cy.visit('/regions');

    cy.wait(3000);
    cy.get('.regions > :nth-child(1)').should('be.visible');
    cy.get('.regions > :nth-child(1)').click();
    cy.wait(1000);
    cy.get('.national-section').find('.pokemon-section').should('have.length', 151);
  })

})



describe('Legendary page', () => {

  it.only('should render', () => {

    cy.visit('/legendary');

    

  })

})


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
    cy.switchMode();
    cy.get('[data-testid="bulbasaur"]').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png')
  })


  it('should render result of Mewtwo search', () => {

    cy.visit('/')

    cy.wait(4000);
    cy.get('.show-button').click();
    cy.wait(3000);
    cy.inputSearchMewtwo();
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


  it('should render the shiny Pokemon', () => {

    cy.visit('/regions')

    cy.wait(3000)
    cy.get('[data-testid="grookey"]').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png')
    cy.switchMode();
    cy.get('[data-testid="grookey"]').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/810.png')
  })


  it('should render result of Mewtwo search', () => {

    cy.visit('/regions')

    cy.wait(3000);
    cy.get('.regions > :nth-child(1)').click();
    cy.wait(3000);
    cy.inputSearchMewtwo();
  })

})



describe('Legendary page', () => {

  it('should render', () => {

    cy.visit('/legendaries');

    cy.wait(3000);
    cy.get('.national-section').find('.pokemon-section').should('have.length', 77);

  })


  it('should render the shiny Pokemon', () => {

    cy.visit('/legendaries')

    cy.wait(3000)
    cy.get('[data-testid="articuno"]').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png')
    cy.switchMode();
    cy.get('[data-testid="articuno"]').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png')
  })


  it('should render result of Mewtwo search', () => {

    cy.visit('/legendaries')

    cy.wait(3000);
    cy.inputSearchMewtwo();
  })

})



describe('Type page', () => {

  it('should render all the type buttons', () => {

    cy.visit('/types')

    cy.get('.type-btn').should('have.length', 18);

  })


  // it('should render the shiny Pokemon', () => {

  //   cy.visit('/types')

  //   cy.wait(16000);

  //   cy.get(':nth-child(3) > .sprite').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png')
  //   cy.switchMode();
  //   cy.get(':nth-child(3) > .sprite').should('have.attr', 'src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png')
  // })


  it('should render the normal pokemon', () => {

    cy.visit('/types');

    cy.wait(20000);
    cy.get('.national-section > :nth-child(1)').should('be.visible');
    cy.get('[style="background-color: rgb(145, 153, 161);"]').click();
    cy.wait(6000);
    cy.get(':nth-child(1) > h3').should('contain', 'Pidgey');

  })


  it('should render result of Mewtwo search', () => {

    cy.visit('/types')

    cy.wait(24000);
    cy.get('[style="background-color: rgb(246, 113, 119);"]').click();
    cy.wait(6000);
    cy.inputSearchMewtwo();
  })
  
})




describe('should render the community page', () => {
  it('should render the community page', () => {
    cy.visit('/community');
    cy.get('h2').should('contain', 'COMING SOON');
  })
})

describe('should render the daily page', () => {
  it.only('should render the daily page', () => {
    cy.visit('/daily');
    cy.get('h2').should('contain', 'COMING SOON');
  })
})
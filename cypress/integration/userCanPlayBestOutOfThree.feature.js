describe('User can navigate trough the page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#simplegame-tab').click();
  });

  it('and it displays header', () => {
    cy.get('#simplegame-header').should(
      'contain',
      'Play to score for every win!'
    );
  });

  it('user can see three buttons', () => {
    cy.get('#rock').should('contain', 'Rock');
    cy.get('#paper').should('contain', 'Paper');
    cy.get('#scissors').should('contain', 'Scissors');
  });

  it('user can chose rock as a weapon', () => {
    cy.get('#rock').click();
    cy.wait(500)
    cy.get('#playermove').should('contain', 'You chose: rock');
  });

  it('user can chose paper as a weapon', () => {
    cy.get('#paper').click();
    cy.wait(500)
    cy.get('#playermove').should('contain', 'You chose: paper');
  });

  it('user can chose scissors as a weapon', () => {
    cy.get('#scissors').click();
    cy.wait(500)
    cy.get('#playermove').should('contain', 'You chose: scissors');
  });
});

describe('Page can show results', () => {
  describe('when computer picks rock', () => {
    beforeEach(() => {
      cy.visit('/BestOfThree', {
        onBeforeLoad: bot => {
          cy.stub(botMove(), 'bot').returns('rock');
        }
      });
    });

    it('player gets two out of three and gets a score', () => {
      cy.get('#paper').click();
      cy.get('#player-score').should('contain', '1');
      cy.get('#bot-score').should('contain', '0');
    });
    it('player chose scissor equals a computer win', () => {
      cy.get('#scissors').click();
      cy.get('#player-score').should('contain', '0');
      cy.get('#bot-score').should('contain', '1');
    });
    it('player chose paper equals a player win', () => {
      cy.get('#paper').click();
      cy.get('#player-score').should('contain', '2');
      cy.get('#bot-score').should('contain', '0');
    });
    it('player gets one gamescore', () => {
      cy.get('#gamescore-player').should('contain', '1')
    })
  });
});



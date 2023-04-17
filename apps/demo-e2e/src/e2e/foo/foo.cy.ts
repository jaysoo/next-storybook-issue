describe('demo: Foo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=foo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Foo!');
    });
});

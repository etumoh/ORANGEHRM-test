describe('OrangeHRM Login', () => {
  it('should visit login page, enter credentials and click login', () => {
    // This is to visit the site and the login page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(8000); // the user has to wait for 8 secs based on the internet speed (which can be adjusted based on the internet speed)

    // This line types the username into the username input field
    cy.get('input[name="username"]').type('Admin');
    cy.wait(2000); // the user waits for 2secs for the username to be typed (which can be adjusted based on the internet speed)

    // This line types the password into the password input field
    cy.get('input[name="password"]').type('admin123');
    cy.wait(2000); // the user waits for 2secs for the password to be typed (which can be adjusted based on the internet speed)

    // This is to click the login button
    cy.get('button[type="submit"]').click();
    cy.wait(2000);  // the user waits for 2secs after clicking the login button (which can be adjusted based on the internet speed)

    // This is an assertion to verify that the login was successful
    // cy.url().should('not.include', '/auth/login');
    // cy.get('h6').should('contain.text', 'Dashboard');  // this is to verify that the Dashboard header is present
  });
});

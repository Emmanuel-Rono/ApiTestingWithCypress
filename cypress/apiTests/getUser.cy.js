/// <reference types ="cypress" />

describe("Get User Request", ()=>{

    it("Get call",()=>
    {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/5')
        .its('status')
        .should('equal',200);
    })

    it('Should fetch a user and reuse data', () => {
          cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
            .then((response) => {
              const userName = response.body.username;  
              cy.log('User Name:', userName);  
              expect(userName).to.not.be.empty;  
            });
        });

        it("PUT Request", () => {
            cy.request({
                method: 'PUT',  
                url: "https://jsonplaceholder.typicode.com/posts/1", 
                body: {  
                    title: "Testing Put Request",
                    body: "This is the call",  
                    userId: 1,
                    id: 1  
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'  
                }
            })
            .then((response) => {
                
                expect(response.status).to.eq(200);  
                expect(response.body).to.have.property('id', 1);  
                expect(response.body.title).to.eq("Testing Put Request"); 
            });
        });
        
});
    

    

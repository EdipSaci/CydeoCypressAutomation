describe('Spartan API test', {baseUrl:'http://100.26.225.229:8000/'}, () =>{

  it.skip('Get a single spartan', () => {
    cy.request('GET','api/spartans/100').then((response)=>{
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal("Terence");
    })
  })

  it.skip('POST one spartan test', () =>{
    cy.request({
      method:'POST',
      url: 'api/spartans',
      body:{
        "gender": "Male",
        "name": "john",
        "phone": 2123456789
      }
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.success).to.equal('A Spartan is Born!');
      expect(response.body.data.name).to.equal('john');
    })
  })
})
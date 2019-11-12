const { zillow } = require('../utils/zillowApi');
console.log('this is zillow' + zillow)
console.log(zillow)


module.exports = {
  GetZestimate(req, res) {
    var parameters = {
      zpid: 1111111
    };

    try {
      zillow.get('GetZestimate', parameters)
        .then( ({response})=> {
          //return results;
          console.log(response)
          console.log(response.links.homedetails)
         
          // results here is an object { message: {}, request: {}, response: {}} 
        })
        res.status(200).json({ message: 'Api ok'});
    } catch (error) {
      console.log(error)
      res.status(400)
    }
  }
}

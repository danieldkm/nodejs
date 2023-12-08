// var soap = require('soap');
import { createClientAsync } from 'soap';
var url = 'https://cgws-hti.getnet.com.br/eCommerceWS/3.0/CommerceService?wsdl';
var args = {
    username: 'value',
    merchantID: 'test',
    currentPassword: 'teste',
    newPassword: 'awd'
};

// createClient(url, {}, function(err, client) {
    
//     client.changeAuthenticationService()
//     // client.MyFunction(args, function(err, result) {
//     //     console.log(result);
//     // });
// });

//   createClientAsync(url).then((client) => {
//     return client.MyFunctionAsync(args);
//   }).then((result) => {
//     console.log(result);
//   });

  // async/await
async  function init() {
    var client = await createClientAsync(url);
    var result = await client.authorizationService({}, (a) => {
        console.log('authorizationService',a)
    });
    console.log(result);

}
init()
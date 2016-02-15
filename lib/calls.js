var request = require('request')
var wwoApiBreck = "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=Breckenridge%20Colorado&key=61a99622a6c7a291196ac67acb103&num_of_days=3&sunset&format=json"
var breckgoods = {};
module.exports = {

  breckCall : function () {
                request(wwoApiBreck, function (error, response, body) {
                  if (!error && response.statusCode == 200) {
                    var body = JSON.parse(body);
                    // console.log(body);
                    breckgoods = {
                      sunrise : body['data']['weather'][0]['astronomy'][0]['sunrise'],
                      sunset : body['data']['weather'][0]['astronomy'][0]['sunset'],
                      bomMaxTempF : body['data']['weather'][0]['bottom'][0]['maxtempF'],
                      bomMinTempF : body['data']['weather'][0]['bottom'][0]['mintempF'],
                      topMaxTempF : body['data']['weather'][0]['top'][0]['maxtempF'],
                      topMinTempF : body['data']['weather'][0]['top'][0]['mintempF']
                    }
                    console.log(breckgoods);
                  }
                })
                console.log(breckgoods.sunset+"2@@@@@@");
                return breckgoods
              }


}

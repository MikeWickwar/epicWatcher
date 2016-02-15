var request = require('request')

module.exports = {

  brekCall : function() {
                var wwoApi = "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=Breckenridge%20Colorado&key=61a99622a6c7a291196ac67acb103&num_of_days=3&sunset&format=json"
                return request(wwoApi, function (error, response, body) {
                  if (!error && response.statusCode == 200) {
                    var body = JSON.parse(body);
                    // console.log(body);
                    var brekgoods = {
                      sunrise : body['data']['weather'][0]['astronomy'][0]['sunrise'],
                      sunset : body['data']['weather'][0]['astronomy'][0]['sunset'],
                      bomMaxTempF : body['data']['weather'][0]['bottom'][0]['maxtempF'],
                      bomMinTempF : body['data']['weather'][0]['bottom'][0]['mintempF'],
                      topMaxTempF : body['data']['weather'][0]['top'][0]['maxtempF'],
                      topMinTempF : body['data']['weather'][0]['top'][0]['mintempF']
                    }
                  }
                })
              }







}
// var breckConditionGetter = $.ajax({
//   url: "http://api.worldweatheronline.com/premium/v1/ski.ashx?q=Breckenridge%20Colorado&key=61a99622a6c7a291196ac67acb103&num_of_days=3&sunset&format=json", // this expires in two months free trial
//   method: "GET",
//   dataType: "json"
// });

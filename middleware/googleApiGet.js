const https = require('https');

const googleApiGet = (options)=>{

	return new Promise ((resolve, reject)=>{
		var apiData;
		try{
			https.request(options, (response)=>{
				console.log("starting https request");
				var body = "";
				response.on('data', (chunk)=>{
					body+= chunk;
				});
				response.on('error', () =>{
					reject("error in https response")
				})
				response.on('end', ()=>{
					apiData = JSON.parse(body);
					console.log("finishing https request");
					resolve(apiData);
				})
			}).end();
		}catch(error){
			console.error("in https try catch block "+error.message);
		}
	});

}

module.exports = googleApiGet;


const myApiFormat = (googleApiSearchResults)=>{
	console.log("Starting to format results");
	return new Promise ((resolve, reject)=>{
		const myResults = [];
		try{
			googleApiSearchResults.forEach((result)=>{
				
				let resultObj = {
					pageUrl: result.image.contextLink,
					imgThumbUrl: result.image.thumbnailLink,
					imgUrl: result.link,
					altText: result.title
				}
				myResults.push(resultObj);
				if(myResults.length > 9){
					console.log("sending back myResults: ", myResults.length);
					resolve(myResults);
				}
			});
		}catch(err){
			reject("googleApiSearchResults error "+err);
			console.error(err);
		}
		
	});
}

module.exports = myApiFormat;
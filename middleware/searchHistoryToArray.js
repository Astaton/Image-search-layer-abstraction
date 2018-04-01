
const searchHistoryToArray = (rawSearchHistoryData)=>{
	return new Promise ((resolve, reject)=>{
		try{
		console.log('In searchHistoryToArray', rawSearchHistoryData);
		//gets rid of the %20 from the cookie data
		const searchHistoryArray = rawSearchHistoryData.split('%20');
		//adds concatenates the array and adds in the final data for JSON format
		const searchHistoryString = '{ "recent searches":['+searchHistoryArray+']}'
		console.log('searchHistoryToArray turned to string', searchHistoryString);
		resolve(JSON.parse(searchHistoryString));
		}catch(err){
			console.error("Error turning cookie data into JSON object");
			reject("Error turning cookie data into JSON object"+err);
		}
	});
	
}

module.exports = searchHistoryToArray;
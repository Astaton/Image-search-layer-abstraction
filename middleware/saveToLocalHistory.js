
const saveToLocalHistory = (searchTermsHistory, searchTerms)=>{
	console.log("starting saveToLocalHistory");
	var searchHistoryArr = '';
	if(searchTermsHistory.length > 0){
		console.log("searchTermsHistory is greater than 0, forming array");
		searchHistoryArr = searchTermsHistory.split('%20');
		console.log('searchHistoryArr length is '+searchHistoryArr.length);
	}
	
	const time = new Date();
	const currentSearch = '{"time":'+JSON.stringify(time)+', '+searchTerms;
	console.log('currentSearch is ',currentSearch);

	if(searchHistoryArr.length >= 25){
		console.log("history too long trimming it down");
		searchHistoryArr.pop();
	}
	if(searchHistoryArr.length === 0){
		console.log("adding to history");
		searchTermsHistory = currentSearch.slice(0, currentSearch.length-3);
		console.log(searchTermsHistory);
		return searchTermsHistory
	}
	console.log("adding to history");
	searchTermsHistory = currentSearch+searchHistoryArr.join('%20');
	console.log(searchTermsHistory);
	return searchTermsHistory
}

module.exports = saveToLocalHistory;
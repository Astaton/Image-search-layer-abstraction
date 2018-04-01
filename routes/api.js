const express = require('express');
const googleApiGet = require('../middleware/googleApiGet.js');
const myApiFormat = require('../middleware/myApiFormat');
const saveToLocalHistory = require('../middleware/saveToLocalHistory');
const searchHistoryToArray = require('../middleware/searchHistoryToArray');
const router = express.Router();
const { URL } = require('url');
const googleApiUrl1 = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCEy1NCqAVo6-S4MpSOT7YGJAMyg9EqiRc&q="
const googleApiUrl2 = "&cx=003316229329504122942:cy_efix6rnc&safe=off&searchType=image&start="



//send style sheets
router.use('/static',express.static('../public'));


router.get('/', (res, req)=>{
	test()
	.then(()=>{
		console.log("back in get");
	})
});

router.get('/recentSearches', (req, res)=>{
	console.log('In recentSearches');
	const searchHistoryArray = searchHistoryToArray(req.cookies.history);
	searchHistoryArray.then((searchHistoryArray)=>{
		console.log("after searchHistoryArray function call", searchHistoryArray);
		res.send('<pre>'+JSON.stringify(searchHistoryArray, null, '\t')+'</pre>');
	})
	.catch((err)=> console.error(err));
});


router.get('/imageSearch/:searchTerms', (req, res)=>{
	const searchTerms = req.params.searchTerms.split(' ').join('%20');
	var history = req.cookies.history;
	const searchTermsForHistory = '"Search":"'+req.params.searchTerms.split(' ').join(', ')+'"}%20';
	console.log("searchTermsForHistory are", searchTermsForHistory);
	if(history){
		console.log("history found");
		res.cookie("history", saveToLocalHistory(history, searchTermsForHistory));
		console.log("cookie sent");
	}
	if(!history){
		console.log("history not found");
		history = "";
		res.cookie("history", saveToLocalHistory(history, searchTermsForHistory));
		console.log("cookie sent");
	}
	const page = req.query.offset;
	const options = new URL(googleApiUrl1+searchTerms+googleApiUrl2+page);
	const apiData = googleApiGet(options);

	apiData.then((apiData)=>{
		console.log("got apiData items length is "+apiData.items.length);
		return myApiFormat(apiData.items);
	})
	.then((myData)=>{
	 	res.send("<pre>"+JSON.stringify(myData, null, '\t')+"</pre>");
	 })
	.catch(error=> console.error("in get catch error "+error));
});



module.exports = router;
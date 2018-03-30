const express = require('express');
const router = express.router();
const googleApiUrl = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCEy1NCqAVo6-S4MpSOT7YGJAMyg9EqiRc&q=hamburger&cx=003316229329504122942:cy_efix6rnc&safe=high&start=1"
const googleApiUrl1 = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCEy1NCqAVo6-S4MpSOT7YGJAMyg9EqiRc&q="
const googleApiUrl1 = "&cx=003316229329504122942:cy_efix6rnc&safe=high&start="
const myApiUrl = "https://ISAL.herokuapp.com/api/imageSearch/{params}?(queries=(offset={pageInt}))"
const myApiUrl1 = "https://ISAL.herokuapp.com/api/imageSearch/";
const myApiUrl2 = "?offset=1"

router.get('/imageSearch/:searchTerms', (req, res)=>{
	const searchTerms = req.params.searchTerms
	console.log("the search terms are"+ searchTerms);
	res.render('../views/error');
});


module.exports = router;
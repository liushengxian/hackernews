
let a = function(){

	let hacker_url = 'https://hacker-news.firebaseio.com/v0/';

	let https = require('https');

	let general_request = (url,callback) =>{
		console.log('req url:',url);
		https.get(url,(res)=>{
			let jsonData = '';

			res.on('data',(d)=>{
				jsonData += d.toString();
			});

			res.on('end',(d)=>{
				let a = JSON.parse(jsonData);
				callback(a);
			})
		});
	};

	let _getItem = (id,callback)=>{
		let req = hacker_url + 'item/' + id + '.json?print=pretty';
		general_request(req,callback);
	};

	let _getUser = (id,callback)=>{
		let req = hacker_url + 'user/'+ id + '.json?print=pretty';
		general_request(req,callback);
	};

	let _getMaxitem = (callback)=>{
		let req = hacker_url+'maxitem.json?print=pretty';
		general_request(req,callback);
	};

	let _getTopStories = (callback)=>{
		let req = hacker_url+'topstories.json?print=pretty';
		general_request(req,callback);
	};

	let _getNewStories = (callback)=>{
		let req = hacker_url+'newstories.json?print=pretty';
		general_request(req,callback);
	};
	let _getBestStories = (callback)=>{
		let req = hacker_url+'beststories.json?print=pretty';
		general_request(req,callback);
	};

	let _getAskStories = (callback)=>{
		let req = hacker_url+'askstories.json?print=pretty';
		general_request(req,callback);
	};

	let _getShowStories = (callback)=>{
		let req = hacker_url+'showstories.json?print=pretty';
		general_request(req,callback);
	};

	let _getJobStories = (callback)=>{
		let req = hacker_url+'jobstories.json?print=pretty';
		general_request(req,callback);
	};

	let _getChangedItems = (callback)=>{
		let req = hacker_url+'updates.json?print=pretty';
		general_request(req,callback);
	};

	module.exports = {
		getUrl: ()=>{
			console.log('======hello get URL !======');
			return hacker_url;
		},
		getItem: _getItem,
		getUser: _getUser,
		getMaxitem: _getMaxitem,
		getTopStories: _getTopStories,
		getNewStories: _getNewStories,
		getBestStories: _getBestStories,
		getAskStories: _getAskStories,
		getShowStories: _getShowStories,
		getJobStories: _getJobStories,
		getChangedItems: _getChangedItems
	};
};

a();

// module.exports = {

// };

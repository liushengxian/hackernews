let store = require('./store.js');

console.log('test store.js!');

console.log('Store Url:'+store.getUrl());

store.getChangedItems((data)=>{
	console.log(data);
});
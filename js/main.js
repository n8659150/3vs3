"use strict";
window.onload = function(){
	function fetchData(name){
		let httpReq = new XMLHttpRequest();
		let url = "data/"+name+".json"
		httpReq.open("GET",url,false);
		httpReq.send();
		return JSON.parse(httpReq.responseText);
	}

	function loadHotNews(sourcename){
		let newsData = fetchData(sourcename);
		for (let i = 0; i < 7; i++){
			let titleElement = "<li><a href='#'>"+newsData[i]["name"]+"</a></li>";
			let dateElement = "<li>"+newsData[i]["date"]+"</li>";
			$("#hot-news-titles").append(titleElement);
			$("#hot-news-dates").append(dateElement);
		}
	}
	function loadBasSchoolArticles(sourcename){
		let articleData = fetchData(sourcename);
		for (let i = 0; i < 8; i++){
			let titleElement = "<li><a href='#'>"+articleData[i]["name"]+"</a></li>";
			let dateElement = "<li>"+articleData[i]["date"]+"</li>";
			$("#bas-school-titles").append(titleElement);
			$("#bas-school-dates").append(dateElement);
		}
	}
	loadHotNews("news-center-hot-news");
	loadBasSchoolArticles("news-center-hot-news");
};

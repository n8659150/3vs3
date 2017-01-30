"use strict";
$(document).ready(function(){
	function fetchData(name){
		let httpReq = new XMLHttpRequest();
		let url = "data/"+name+".json"
		httpReq.open("GET",url,false);
		httpReq.send();
		return JSON.parse(httpReq.responseText);
	}
	function loadHotNews(sourcename){
		let newsData = fetchData(sourcename);
		let titleElements = $("#hot-news-titles").find("a");
		let dateElements = $("#hot-news-dates").find("li");
		for (let i = 0; i < titleElements.length; i++){
			titleElements.eq(i).text(newsData[i]["name"]);
			dateElements.eq(i).text(newsData[i]["date"]);
		}
	}
	function loadBasSchoolArticles(sourcename){
		let articleData = fetchData(sourcename);
		let titleElements = $("#bas-school-titles").find("a");
		let dateElements = $("#bas-school-dates").find("li");
		for (let i = 0; i < titleElements.length; i++){
			titleElements.eq(i).text(articleData[i]["name"]);
			let url = "http://3vs3.qq.com/article/"+i;
			titleElements.eq(i).attr("href",url)
			dateElements.eq(i).text(articleData[i]["date"]);
		}
	}
	loadHotNews("news-center-hot-news");
	loadBasSchoolArticles("news-center-hot-news");
});

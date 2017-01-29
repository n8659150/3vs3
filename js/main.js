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
		let oHotNewsTitles = document.getElementById("hot-news-titles");
		let oHotNewsDates = document.getElementById("hot-news-dates");
		let aHotNewsLists = oHotNewsTitles.getElementsByTagName("a");
		let aHotNewsDateLists = oHotNewsDates.getElementsByTagName("li");
		for (let i = 0; i < aHotNewsLists.length; i++){
			if (newsData[i]["name"] == undefined) {
				return;
			}
			aHotNewsLists[i].innerHTML = newsData[i]["name"];
		}
		for (let j = 0; j < aHotNewsDateLists.length; j++){
			if (newsData[j]["date"] == undefined) {
				return;
			}
			aHotNewsDateLists[j].innerHTML = newsData[j]["date"];
		}
		
	}
	function loadBasSchoolArticles(sourcename){
		let articleData = fetchData(sourcename);
		let oBasSchoolTitles = document.getElementById("bas-school-titles");
		let oBasSchoolDates = document.getElementById("bas-school-dates");
		let aArticleLists = oBasSchoolTitles.getElementsByTagName("a");
		let aArticleDateLists = oBasSchoolDates.getElementsByTagName("li");
		for (let i = 0; i < aArticleLists.length;i++){
			if (articleData[i]["name"] == undefined) {
				return;
			}
			aArticleLists[i].innerHTML = articleData[i]["name"];
		}
		for (let j = 0; j < aArticleDateLists.length;j++){
			if (articleData[j]["date"] == undefined) {
				return;
			}
			aArticleDateLists[j].innerHTML = articleData[j]["date"];
		}
	}
	loadHotNews("news-center-hot-news");
	loadBasSchoolArticles("news-center-hot-news");
};

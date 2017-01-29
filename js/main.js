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
		for (let hotNewsList of aHotNewsLists){
			for (let newsItem of newsData){
				hotNewsList.innerHTML = newsItem["name"];
			}
		}
		for (let hotNewsDateTime of aHotNewsDateLists){
			for (let newsItem of newsData){
				hotNewsDateTime.innerHTML = newsItem["date"];
			}
		}
	}
	function loadBasSchoolArticles(sourcename){
		let articleData = fetchData(sourcename);
		let oBasSchoolTitles = document.getElementById("bas-school-titles");
		let oBasSchoolDates = document.getElementById("bas-school-dates");
		let aArticleLists = oBasSchoolTitles.getElementsByTagName("a");
		let aArticleDateLists = oBasSchoolDates.getElementsByTagName("li");
		for (let articleList of aArticleLists){
			for (let articleItem of articleData){
				articleList.innerHTML = articleItem["name"];
			}
		}
		for (let articleDateTime of aArticleDateLists){
			for (let articleItem of articleData){
				articleDateTime.innerHTML = articleItem["date"];
			}
		}
	}
	loadHotNews("news-center-hot-news");
	loadBasSchoolArticles("news-center-hot-news");
}

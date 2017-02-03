avalon.ready(function(){
		let newsCenterData = avalon.define({
		$id:"newsCenterData",
		data:[]
		});
		let newsCenterNav = avalon.define({
		$id:"newsCenterNav",
		navData:["热门","新闻","公告","活动","赛事"],
		getData:function(source){
			switch(source){
				case 0:
					fetch("data/news-center/hot-news.json")
						.then(function(response){
							return response.json();
						})
						.then(function(json){
							console.log(json)
							newsCenterData.data = json;
						})
						.catch(function(error){
							console.log("oops,error happens:",error);
						})
					break;
				case 1:
					fetch("data/news-center/latest-news.json")
						.then(function(response){
							return response.json();
						})
						.then(function(json){
							console.log(json)
							newsCenterData.data = json;
						})
						.catch(function(error){
							console.log("oops,error happens:",error);
						})
					break;
				case 2:
					fetch("data/news-center/announcement-news.json")
						.then(function(response){
							return response.json();
						})
						.then(function(json){
							console.log(json)
							newsCenterData.data = json;
						})
						.catch(function(error){
							console.log("oops,error happens:",error);
						})
					break;
				case 3:
					fetch("data/news-center/event-news.json")
						.then(function(response){
							return response.json();
						})
						.then(function(json){
							console.log(json)
							newsCenterData.data = json;
						})
						.catch(function(error){
							console.log("oops,error happens:",error);
						})
					break;
				case 4:
					fetch("data/news-center/sportsgame-news.json")
						.then(function(response){
							return response.json();
						})
						.then(function(json){
							console.log(json)
							newsCenterData.data = json;
						})
						.catch(function(error){
							console.log("oops,error happens:",error);
						})
					break;
				default:
					fetch("data/news-center/hot-news.json")
						.then(function(response){
							return response.json();
						})
						.then(function(json){
							console.log(json)
							newsCenterData.data = json;
						})
						.catch(function(error){
							console.log("oops,error happens:",error);
						})
					break;
			}
				
		}
	})	
		avalon.scan(document.body);
		newsCenterData.data = newsCenterNav.getData(0);
	})
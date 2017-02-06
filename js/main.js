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
				// 0 == “热门”栏的下标
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
				// 1 == “新闻”栏的下标
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
				// 2 == “公告”栏的下标
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
				//3 == “活动”栏的下标 
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
				//4 == “赛事”栏的下标
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
	let basSchoolData = avalon.define({
		$id:"basSchoolData",
		data:[]
		});	
	let basSchoolNav = avalon.define({
		$id:"basSchoolNav",
		data:["最新","球员","新手","同人","官方"],
		getData:function(source){
			switch(source){
				// 0 == “最新”栏的下标
				case 0:
					fetch("data/bas-school/latest-news.json")
					.then(function(response){
						return response.json();
					})
					.then(function(json){
						basSchoolData.data = json;
					})
					.catch(function(error){
						console.log("oops,error happens:",error);
					})
					break;
				// 1 == “球员”栏的下标 
				case 1:
					fetch("data/bas-school/player-news.json")
					.then(function(response){
						return response.json();
					})
					.then(function(json){
						basSchoolData.data = json;
					})
					.catch(function(error){
						console.log("oops,error happens:",error);
					})
					break;
				// 2 == “新手”栏的下标
				case 2:
					fetch("data/bas-school/beginner-news.json")
					.then(function(response){
						return response.json();
					})
					.then(function(json){
						basSchoolData.data = json;
					})
					.catch(function(error){
						console.log("oops,error happens:",error);
					})
					break;
				// 3 == “同人”栏的下标
				case 3:
					fetch("data/bas-school/storybook-news.json")
					.then(function(response){
						return response.json();
					})
					.then(function(json){
						basSchoolData.data = json;
					})
					.catch(function(error){
						console.log("oops,error happens:",error);
					})
					break;
				// 4 == “官方”栏的下标
				case 4:
					fetch("data/bas-school/official-news.json")
					.then(function(response){
						return response.json();
					})
					.then(function(json){
						basSchoolData.data = json;
					})
					.catch(function(error){
						console.log("oops,error happens:",error);
					})
					break;
				default:
					fetch("data/bas-school/official-news.json")
						.then(function(response){
							return response.json();
						})
						.then(function(json){
							basSchoolData.data = json;
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
		basSchoolData.data = basSchoolNav.getData(0);
	})
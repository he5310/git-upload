var maxLength = 20;
export function storeSearchHistory(word){
	// 获取储存在缓存中的历史数据
	var searchHistoryList = JSON.parse(localStorage.getItem('searchHistory'));
	if(!searchHistoryList){
		localStorage.setItem('searchHistory','["'+word+'"]')
		return 
	}
	// 如果没有储存过历史记录
	// 将当前搜索的关键字放入到搜索列表的头部
	searchHistoryList.unshift(word)
	// 数组去重参考https://www.zhihu.com/question/29558082?sort=created
	searchHistoryList = Array.from(new Set(searchHistoryList))
	// 判断当前储存的数组长度是否大于最大储存个数,只保留由0到maxLength的值
	if(searchHistoryList.length>maxLength){
		searchHistoryList = searchHistoryList.slice(0,maxLength)
	}
	// 把处理过后的搜索结果储存在localStorage中
	localStorage.setItem('searchHistory',JSON.stringify(searchHistoryList))
}

export function getSearchHistory(){
	return JSON.parse(localStorage.getItem('searchHistory'))
}

export function clearSearchHistory(){
	localStorage.removeItem('searchHistory')
}
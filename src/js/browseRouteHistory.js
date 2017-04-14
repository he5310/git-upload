var maxLength = 100;
export function storeBrowseHistory(stringObj){
	// 获取储存在缓存中的浏览历史历史数据
	var browseHistoryList = JSON.parse(localStorage.getItem('browseHistory'));
	if(!browseHistoryList){
		var arr= [];
		arr.push(stringObj);
		var storeSting = JSON.stringify(arr)
		localStorage.setItem('browseHistory',storeSting)
		return 
	}

	// 如果没有储存过历史记录
	// 将当前搜索的关键字放入到搜索列表的头部
	// console.log(browseHistoryList)
	browseHistoryList.unshift(stringObj)
	// 数组去重参考https://www.zhihu.com/question/29558082?sort=created
	// browseHistoryList = Array.from(new Set(browseHistoryList))

	browseHistoryList.map((item,index)=>{
		if(item.Id==stringObj.Id&&index){
			browseHistoryList.splice(index,1)
		}
	})
	// 判断当前储存的数组长度是否大于最大储存个数,只保留由0到maxLength的值
	if(browseHistoryList.length>maxLength){
		browseHistoryList = browseHistoryList.slice(0,maxLength)
	}
	// 把处理过后的搜索结果储存在localStorage中
	localStorage.setItem('browseHistory',JSON.stringify(browseHistoryList))
}

export function getBrowseHistory(){
	return JSON.parse(localStorage.getItem('browseHistory'))
}

export function clearBrowseHistory(){
	localStorage.removeItem('browseHistory')
}
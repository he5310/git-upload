export function searchStringToObj(search){
	var searchString = search.substring(1,search.length);
	var searchArr = searchString.split('&');
	var result = {};
	searchArr.map(function(item){
		var pieces = item.split('=');
		result[pieces[0]] = pieces[1]
	})
	return result;
}
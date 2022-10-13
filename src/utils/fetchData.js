const apiOptions =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa1072c67amsh175b5522d84306dp1f226ajsn344ff51e6156',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


const fetchData = async (url, options) => {
    const res = await fetch(url,options);
    const data = await res.json();
    return data
}

export {apiOptions, fetchData};
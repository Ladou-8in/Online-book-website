const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '130395070cmshb174f438dbec97dp1092f8jsnbab471e97422',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

fetch('https://hapi-books.p.rapidapi.com/nominees/romance/2020', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
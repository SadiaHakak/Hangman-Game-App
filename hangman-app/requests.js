// .......................   FETCH API .....................
const getPuzzle = (wordCount)=>{
	 return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response)=>{
	 	if(response.status===200){
	 		return response.json()
	 	}else{
	 		throw new Error('unable to fetch data')
	 	}
	 }).then((data)=>{
	 	return data.puzzle
	 })
}









// ..............HTTP REQUESTS PROMISE API..........
// const getPuzzle = (wordCount)=>new Promise((resolve,reject)=>{
// 	  const request = new XMLHttpRequest()
// 	  request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
// 	  request.send()

// 	  request.addEventListener('readystatechange',(e)=>{
// 	  	if(e.target.readyState===4 && e.target.status == 200){
// 	  		const data = JSON.parse(e.target.responseText)
// 	  		resolve(data.puzzle)
// 	  	}else if (e.target.readyState===4){
// 	  		reject('request not completed')
// 	  	}
// 	  })
// })



  // .........................CALL BACK API.............................
 
// function getPuzzle(word,callback){
// 	    const request = new XMLHttpRequest()
// 		request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${word}`)
// 		request.send()

// 		request.addEventListener('readystatechange',(e)=>{
// 	    if(e.target.readyState === 4 && e.target.status ===200){   //ie if request is complete and it is a success
// 		const data = JSON.parse(e.target.responseText)
// 		callback(undefined,data.puzzle)
// 		console.log(data)
// 		}else if(e.target.readyState===4){        ///json parse bcoz what we get back in response is a json file
// 		  callback('you have an error',undefined)
// 	}
// })

// }

// ................................
// ............................... COUNTRY DETAILS ......................d

// const getCountryDetails=(countryCode)=>new Promise((resolve,reject)=>{

// 	        const request2 = new XMLHttpRequest()
			
// 			request2.addEventListener('readystatechange',(e)=>{
// 			if(e.target.readyState === 4 && e.target.status ===200){
// 				const data2 = JSON.parse(e.target.responseText)
// 				const country=data2.find((country)=>{
// 			    return country.alpha2Code === countryCode;
// 		        })
// 				resolve(country)
// 			}else if(e.target.readyState === 4){
// 				reject('you have an error here')
// 			}
// 			}) 

// 			request2.open('GET','http://restcountries.eu/rest/v2/all')
// 			request2.send()
// })


// getCountryDetails('MX').then((country)=>{
//        console.log(country.name)
// },(err)=>{
//      console.log(err)
// })




const getCountryDetails = (countryCode) => {
	 return fetch('http://restcountries.eu/rest/v2/all',{}).then((response)=>{
	 	if (response.status === 200){
	 		return response.json()
	 	}else{
	 		throw new Error('unable to fetch country')
	 	}
	 }).then((data)=>data.find((country)=>{
	 	return country.alpha2Code === countryCode
        
	 }))
}

getCountryDetails('US').then((country)=>{
	console.log(country.name)
}).catch((e)=>{
	console.log(e)
})

// .....................GET LOCATION.......................
// 
 const getLocation= ()=>{
 	return fetch('http://ipinfo.io/json?token=6aa0b12d274891').then((response)=>{
         if(response.status===200){
         	return response.json()
         	console.log(response.json())
         }else{
         	throw new Error('failure')
         }
 	})
 }

 getLocation().then((location)=>{
 	return location.country
 }).then((country)=>{
       return getCountryDetails(country)
 }).then((data)=>{
 	console.log(data.name)
 })
 .catch((e)=>{
 	console.log(e)
 })

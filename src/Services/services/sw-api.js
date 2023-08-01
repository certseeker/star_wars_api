

const retriveData = async() => {
  const result = await fetch('https://swapi.dev/api/starships')
    
  const data = await result.json();
  console.log(data)
  return(data)
}

export default retriveData;

// i can name the process anything, but i have to use async. arrow function in this example. in line 4 I am awaiting the information, it takes some time for data to com in, thus await. 

// The information that we are getting from the database, we are applying that to the data varible. the reuslt hase to be convereted into json.I
// and you are returning the data. 

// lines 4 and 6 will always be the same. line 7 may differ bc it depens on what I am doing with the data, 
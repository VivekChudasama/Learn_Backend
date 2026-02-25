const fetchData = () => {
    const promise = new Promise((resolve , reject) => {
        setTimeout(()=>{
                resolve('Done')
            },1500)
    })
  return promise
}

setTimeout(() => {
    console.log("inside from settimeout")
    fetchData().then(text => {
        console.log("calling featchData function" , text)
        return fetchData()
    }).then(text2 => {
        console.log("this is from text2 :",text2)
    })
}, 2000);

console.log("outside settimeout")
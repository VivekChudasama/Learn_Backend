 user = ["vivek" , "sagar" , "mihir" , "kirtan"]

function checksetImmediate(UserArr){

    console.log("start the execution")

    let i = 0;

    function printName(){
         for (let i=0; i<UserArr.length; i++){
            setImmediate(()=>{
                console.log(`username : ${UserArr[i]}`)
            })
        }
    }
    printName()
}

checksetImmediate(user)

console.log("end of the script")
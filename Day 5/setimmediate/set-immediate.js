const pname = () => console.log('printing the name');


user = ["vivek", "sagar", "mihir", "kirtan"]

function checksetImmediate(UserArr) {
    console.log("start the execution")

    let i = 0;

    function printName() {
        for (let i = 0; i < UserArr.length; i++) {
            setImmediate(() => {
                console.log(`username : ${UserArr[i]}`)
            })
        }
    }
    printName()
}

async function f() {
    checksetImmediate(user)
    
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise;
    console.log(result);
}

f()

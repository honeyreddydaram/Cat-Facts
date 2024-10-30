let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
let para = document.querySelector('#result');
let url = "https://catfact.ninja/fact";

btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    para.innerHTML = fact;
})

async function getFacts(){
    try{
        let response = await axios.get(url);
        return response.data.fact;
    }
    catch(error) {
        console.log("ERROR - ", error);
        return "No Fact Found";
    }
}
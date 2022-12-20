let post_container = document.querySelector(".posts");
let posts;

var data;
async function getdata(){
let html = "";
    data = await fetch("http://localhost:8080/posts")
.then((response) => response.json()).then(d=>d)   
for(el of data){

    console.log()
    html += `
        <div class="post">
            <div class="author-name">
                ${el.authorResponseDto.fullName}
            </div>
            <div class="post-content">
                ${el.content}
            </div>
        </div>
      
      `;}
      post_container.innerHTML = html;
}

getdata();

let form = document.getElementById('postform');
    // form.onsubmit=
    //     (event)=>{
    //         console.log("salam");
    //         event.preventDefault();
    //         fetch('/posts',{
    //             method: "POST",
    //             body:
    //                 JSON.stringfy({
    //                     content: content.value
    //                 }),
    //             headers: { "Content-Type": "application/json" },
    //
    //         })
    //     }
let content = document.getElementById("content");

form.addEventListener('submit',async (event)=>{
 
    event.preventDefault();
    
//    await fetch('http://localhost:8080/posts',{
//         method: "POST",
//         body:
//             JSON.stringify({
//                 content: content.value
//             }),withCredentials:true,
//             // credentials: 'include',
//         headers: { "Content-Type": "application/json" },
//     }).then(res=>res.json()).then((e)=>{
        
//         if(e.status == 403 || e.status == 401){
//             location.replace('login.html')
//         }
//     })

    axios.post('http://localhost:8080/posts', {
        content: content.value
    }, {
        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    }});

document.getElementById('content').value = '';
	getdata();
})

   




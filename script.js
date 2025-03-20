   
   
   // js for writing blogs and storing blogs
   
const title = document.getElementById('title');
const content = document.getElementById('writingpad');
let blog = {}
const savebtn = document.getElementById('save');



savebtn.addEventListener('click', (event) => {

    let  blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blog["title"] = title.value.replace(/&nbsp;/g, ' ').trim(),
    blog["content"] = content.value.replace(/&nbsp;/g, ' ').trim()  
    blogs.push(blog)
    localStorage.setItem("blogs", JSON.stringify(blogs));
    title.innerHTML = '';
    content.innerHTML = '';
    location.reload();
    
    
})
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    title.innerHTML = '';
    content.innerHTML = '';
})



function loadFromLocalStorage(){
    let storedBlogs = JSON.parse(localStorage.getItem('blogs'))
    console.log(storedBlogs)
   
    console.log(storedBlogs);
     for (let index of storedBlogs) {
        const post_container=document.querySelector(".container")

    const artical = document.createElement('article');
    artical.classList.add('post');

    const h3 = document.createElement('h3');
    h3.classList.add("blog_class")
    h3.setAttribute('id', 'blog_title');
   


    const para = document.createElement('p');
    para.classList.add('subtitle');
    para.setAttribute('id', 'blog_content');

    const button=document.createElement("button");
    button.setAttribute("id","delete");
    button.innerHTML="delete"

    // 
    // const deletebtn =document.querySelector(".post");

   
    artical.addEventListener("click",(event)=>{
        // console.log(event.target.id==="delete")
        const deletekey=event.target.previousElementSibling.innerHTML
        console.log(storedBlogs)
        console.log(storedBlogs.indexOf(event.target))

        const index = storedBlogs.findIndex(storedBlogs=> storedBlogs["title"] === deletekey);
        console.log(index)
       
       if(event.target.id=== "delete"){
           
         
        storedBlogs.splice(index, 1);

        localStorage.setItem("blogs", JSON.stringify(storedBlogs));
       
        location.reload();

            
       }
     })
    

    artical.appendChild(h3)
    artical.appendChild(button)
    artical.appendChild(para)

    post_container.appendChild(artical)
   
    h3.innerHTML = index.title
    para.innerHTML = index.content
    
       
     }

}


document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
   

// js for buttons

document.getElementById('boldButton').addEventListener('click', () => formatText('bold'));
document.getElementById('italicButton').addEventListener('click', () => formatText('italic'));
document.getElementById('underlineButton').addEventListener('click', () => formatText('underline'));

function formatText(command) {
  
    document.execCommand(command, false,null);
}
    


    // js for hamburger

        const hamburger = document.getElementById('hamburger');
        const navLinksMobile = document.getElementById('nav-links-mobile');
        const menuItems = document.querySelectorAll('.nav_menu');
        hamburger.addEventListener('click', () => {
         
            navLinksMobile.classList.toggle('active');
        });

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinksMobile.classList.remove('active'); 
            });
        });

        document.addEventListener('DOMContentLoaded', (event) => {
            document.body.classList.add('loaded');
        });






          



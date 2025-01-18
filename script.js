    
const title = document.getElementById('title');
const content = document.getElementById('writingpad');
let blog = {}
const savebtn = document.getElementById('save');
savebtn.addEventListener('click', (event) => {

    let  blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blog["title"] = title.innerHTML.replace(/&nbsp;/g, ' ').trim(),
    blog["content"] = content.innerHTML.replace(/&nbsp;/g, ' ').trim()  
    blogs.push(blog)
    localStorage.setItem("blogs", JSON.stringify(blogs));
    title.innerHTML = '';
    content.innerHTML = '';
    let storedBlogs = JSON.parse(localStorage.getItem('blogs'))
    location.reload();
    
    
})
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    title.innerHTML = '';
    content.innerHTML = '';
})



function loadFromLocalStorage(){
    let storedBlogs = JSON.parse(localStorage.getItem('blogs'))
   
    console.log(storedBlogs);
     for (let index of storedBlogs) {
        const post_container=document.querySelector(".container")

    const artical = document.createElement('article');
    artical.classList.add('post');

    const h3 = document.createElement('h3');
    h3.setAttribute('id', 'blog_title');
   


    const para = document.createElement('p');
    para.classList.add('subtitle');
    para.setAttribute('id', 'blog_content');
    

    artical.appendChild(h3)
    artical.appendChild(para)

    post_container.appendChild(artical)
   
    h3.innerHTML = index.title
    para.innerHTML = index.content
    
       
     }

}


document.addEventListener('DOMContentLoaded', loadFromLocalStorage);


document.getElementById('boldButton').addEventListener('click', () => formatText('bold'));
document.getElementById('italicButton').addEventListener('click', () => formatText('italic'));
document.getElementById('underlineButton').addEventListener('click', () => formatText('underline'));

function formatText(command) {
  
    document.execCommand(command, false,null);
}


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



          



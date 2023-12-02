


var typed = new Typed(".note", {
    strings: ["FullStack Web Developer", "Web Designer",],
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



 let nametag = document.querySelector('.name')
 let emailtag = document.querySelector('.email')
 let subjecttag = document.querySelector('.subject')
 let messagetag = document.querySelector('.message')
 let buttontag = document.querySelector('.submitbutton')

 buttontag.addEventListener('click',()=>{

    const datas = {
    
    
        from_name: nametag.value,
        main_name: nametag.value,
        main_email: emailtag.value,
        main_subject: subjecttag.value,
        main_messages: messagetag.value,
       
        }
        
        
        
        emailjs.send("service_1nhqbi7","template_vvvofnw",datas).then(function(response) {
            alert('Message Sent', response.status, response.text);
         }, function(error) {
            alert('FAILED...', error);
         });


 })



 const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


    


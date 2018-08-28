window.onload=function (){
    var chapters = document.getElementsByClassName("chapter");
    var tabLinks = document.getElementsByClassName("tabLink");
    var currentChapter='blog';
    openTab(currentChapter)
    

    function openTab(tabName) {
            currentChapter=tabName.toLowerCase().split(' ').join('')
            for(let chapter of chapters){
                if(currentChapter!=chapter.id.toLowerCase()){
                    chapter.style.display="none"
                }else{
                    chapter.style.display="block"
                }
            }

            for(let tabLink of tabLinks){
                if(currentChapter!=tabLink.innerHTML.toLowerCase().split(' ').join('')){
                   tabLink.classList.remove('active')
                }else{
                    tabLink.classList.add('active')
                }
            }

    }
    
    for (let i = 0; i < chapters.length; i++) {

        tabLinks[i].addEventListener("click",function(){
            openTab(this.innerHTML);
            
        }) ;
        
    }

    
}
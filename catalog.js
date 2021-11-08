// References to DOM elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book")

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage)

// Buisiness Logic
var currentTime = new Date();
let lastExe = 0;

let currentPaper = 1;

var papers = []

for (let i = 0; i <= numOfPapers; i++) {
    papers.push(document.querySelector("#p"+i+""));
}

function openBook() {
    book.style.transform = "translateX(50%)";
    if(book.clientWidth == 800){prevBtn.style.transform = "translateX(-400px)"}
    if(book.clientWidth == 600){prevBtn.style.transform = "translateX(-300px)"}
    if(book.clientWidth == 300){prevBtn.style.transform = "translateX(-145px)"}
    if(book.clientWidth == 800){nextBtn.style.transform = "translateX(400px)"}
    if(book.clientWidth == 600){nextBtn.style.transform = "translateX(300px)"}
    if(book.clientWidth == 300){nextBtn.style.transform = "translateX(145px)"}
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    currentTime = new Date();
    if (currentTime-lastExe >= 1500) {
        if(currentPaper <= numOfPapers) {         
            switch(currentPaper) {
                case currentPaper:
                    if (currentPaper==1) {
                        openBook();
                    }
                    papers[currentPaper].classList.add("flipped");

                    if(currentPaper<=Math.floor((numOfPapers/2))){
                        setTimeout(function(){papers[currentPaper].style.zIndex = currentPaper
                        currentPaper++;}, 1000)
                    }else if (currentPaper>Math.floor((numOfPapers/2))){
                        papers[currentPaper].style.zIndex = currentPaper
                        currentPaper++;
                    }
                    
                                        
                    if (currentPaper==numOfPapers+1) {
                        closeBook();
                    }
                    break;
                default:
                    throw new Error("unknown state");    
            }               
        }
        lastExe = new Date()
    }
}

function goPrevPage() {
    currentTime = new Date();
    if (currentTime-lastExe >= 1500) {
        if(currentPaper > 1) {
            switch(currentPaper) {
                case currentPaper:
                    if (currentPaper==2) {
                        closeBook(true);
                    }
                    papers[currentPaper-1].classList.remove("flipped");
                    
                    if(currentPaper>Math.floor((numOfPapers/2)+1)){
                        setTimeout(function(){papers[currentPaper-1].style.zIndex = papers.length-(currentPaper)+1;
                            currentPaper--;},1000) 
                    }else {
                        papers[currentPaper-1].style.zIndex = papers.length-(currentPaper)+1;
                        currentPaper--;
                    }
                    
                    if (currentPaper==numOfPapers+1) {
                        openBook()
                    }
                    break;
                default:
                    throw new Error("unkown state");
            }
        }
        lastExe = new Date()
    }
}


const numOfPapers = Number(23);

function createDiv(){
    for (let index = 1; index <= numOfPapers; index++) {
        document.write("<div id='p"+index+"' class='paper' style='z-index:"+(numOfPapers-index+1)+"'><div class='front'><div id='f"+index+"' class='front-content'><img src='data/pages/"+((index*2)-1)+".jpg'></div></div><div class='back'><div id='b"+index+"' class='back-content'><img src='data/pages/"+(index*2)+".jpg'></div></div></div>");
    }
}

createDiv()

function changeBackground(){
    let backColor = generateecolorcode()
document.getElementById("body").style.backgroundColor=backColor;
}
function generateecolorcode(){
    let chars = ["0","1","2","3","4","5","6","7","8","9","a" ,"b","c","d","e","f"]
    let color = "#"
    for(let i = 0 ; i<6 ; i++){
        let randomnumber = Math.random()*16
        let index = Math.floor (randomnumber);
        color = color+chars[index]

    }
    return color
}

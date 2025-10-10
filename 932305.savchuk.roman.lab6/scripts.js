function changePicture(param) {
    const cat = document.getElementById('cat_picture');
    const cat_pic = document.getElementsByClassName('cat');
    const dog = document.getElementById('dog_picture');
    const dog_pic = document.getElementsByClassName('dog');
    cat.style.width = "540px";
    cat.style.padding = "15px";
    cat.style.paddingBottom = "100px";
    cat_pic[0].style.display = "inline";
    dog.style.width = "540px";
    dog.style.padding = "15px";
    dog.style.paddingBottom = "100px";
    dog_pic[0].style.display = "inline";
    if (param == "left") {
        cat.style.width = '1040px';
        dog.style.width = '40px';
        dog.style.padding = "0";
        dog.style.paddingBottom = "100px";
        dog_pic[0].style.display = "none";
    }
    else if (param == "right") {
        dog.style.width = '1040px';
        cat.style.width = '40px';
        cat.style.padding = "0";
        cat.style.paddingBottom = "100px";
        cat_pic[0].style.display = "none";
    }
}
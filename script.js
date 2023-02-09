
//esercizio 7
function changeTitle(newTitle) {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.innerText = newTitle;
}

//esercizio 8
function changePageBackgroundColor(newColor) {
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = newColor;
}

//esercizio 9
function changeAddress(newAddress) {
    let pAddress = document.getElementById("address");
    pAddress.innerText = newAddress;
}

//esercizio 10
function addCSSClassToAnchorTag(className) {
    let links = document.getElementsByTagName("a");
    for(let link of links) {
        link.classList.add(className);
    }
}

//esercizio 11
function manageIMGVisibility(visibility) {
    let table = document.getElementsByTagName("table")[0];
    let imgs = table.getElementsByTagName("img");
    if (!visibility) {
        for(let img of imgs) {
            let classList = img.classList;
            let present= false;
            for(let className of classList) {
                if (className === "hide_img") {
                    preset = true;
                    break;
                }
            }
            if (!present) {
                console.log("sono qui");
                img.classList.add("hide_img");
            }
        }
    } else {
        for(let img of imgs) {
            let classList = img.classList;
            let present= false;
            for(let className of classList) {
                if (className === "hide_img") {
                    preset = true;
                    break;
                }
            }
            if (present) {
                img.classList.remove("hide_img");
            }
        }
    }
}

//esercizio 12
function changeColorPrice(newColor) {
    let table = document.getElementsByTagName("table")[0];
    let columns = table.getElementsByTagName("td");
    for(let i = 0; i < columns.length; i++) {
        if ((i + 1) % 4 === 0) {
            columns[i].style.color = newColor;
        }
    }
}

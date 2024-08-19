document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("card")
    const p = document.getElementById("oasis")
    const img = document.querySelector("#card img")

    const random  = (max,min) => Math.trunc(Math.random() * (max-min) + min);
    console.log(random(1 , 45))

    let major;
    card.addEventListener('click' , () => {
        major = `images/${random(1,23)}.jpg`;
        img.setAttribute("src" , major);
    }, {once:true} );

})
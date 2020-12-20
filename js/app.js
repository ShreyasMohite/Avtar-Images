const avtar = () => {
    let name = document.getElementById("search").value;
    let img = document.querySelector("img");
    img.setAttribute("src", `https://joeschmoe.io/api/v1/${name}`);


}
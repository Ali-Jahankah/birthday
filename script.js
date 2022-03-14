const close = document.querySelector(".close");
const title = document.querySelector(".title");
const footer = document.querySelector(".footer");
const doors = document.querySelector(".doors");
const explain = document.querySelector(".explain");
const sima = document.querySelector(".sima");
const ali = document.querySelector(".ali");


console.log(close)
close.addEventListener("click", () => {
    close.src = "./open.png";


    explain.classList.add("hidden");
    window.setTimeout(() => {
        doors.classList.add("remove");
        sima.classList.remove("hidden", "remove");
        explain.classList.add("remove")
    }, 2000)
    window.setTimeout(() => {
        title.classList.remove("remove");
        footer.classList.remove("remove");
        window.setTimeout(() => {
            ali.classList.add("moving");
            sima.classList.add("hidden")
        }, 4000)
    }, 4000)


})
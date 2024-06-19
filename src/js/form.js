const constant = {
    BASE_URL: "http://localhost:3000/",
    path: "users"
}
import small_render from "./render_page";

const form_cont = document.querySelector("form");

function submit_listener(event) {
    event.preventDefault();
    const formSubject = new FormData(event.target);
    const iter = formSubject.values();

    const name = iter.next().value,
    password = iter.next().value;
    
    const hours = new Date().getHours(),
        minutes = new Date().getMinutes();

    const body_obj = {
        name,
        password,
        date:`${hours}:${minutes}`
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body_obj)
    }
    fetch(`${constant.BASE_URL}${constant.path}`, options).then(resp => console.log(resp)).catch(e => Error(e)).finally(_=>console.log("ready"));

    document.querySelector(".card_list").insertAdjacentHTML("beforeend", small_render(body_obj)); 
}
form_cont.addEventListener("submit", submit_listener);
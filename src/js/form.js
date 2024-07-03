import { constants } from "./constants";
import { small_render } from "./small_render";

const register_form = document.querySelector(".register");


export function handle_form(form) {
    form.addEventListener("submit", () => {
        const form_info = new FormData(form);
        const user_info = {}
        for (const [key, value] of form_info.entries()) {
            user_info[key] = value;
        }
        const date_hours = (new Date).getHours();
        const date_minutes = (new Date).getMinutes();
        const f_t = time =>  time.length === 1 ? `0${time}`: time
        const time = `${f_t(date_hours)}: ${f_t(date_minutes)}`
        user_info.date = time;
    
        small_render(user_info);
    
         const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user_info)
        }
    
        fetch(constants.BASE_ENDPOINT, options)
    })
}

handle_form(register_form);
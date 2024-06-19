import small_render_template from "./../templates/small_render.hbs";
import big_render from "./../templates/big_render.hbs";

// пробував імпортувати константу, але чогось виникає помилка f is not defined
const constant = {
    BASE_URL: "http://localhost:3000/",
    path: "users"
}
const { BASE_URL, path } = constant;


async function general_page_render() {
    const full_data = await fetch(`${BASE_URL}${path}`).then(resp => resp.json());
    document.querySelector(".card_list").insertAdjacentHTML("afterbegin", big_render(full_data));
}
document.addEventListener("DOMContentLoaded", general_page_render);

export default function small_render(data) {
    return small_render_template(data);
}
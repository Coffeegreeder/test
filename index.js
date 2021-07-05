/**
 * Ilya Sheyman, 2021
 */

/*
    task
    1. Напишите функцию подготовки строки, которая заполняет шаблон данными из указанного объекта
    2. Пришлите код целиком, чтобы можно его было проверить
    3. Придерживайтесь code style текущего задания
    4. По необходимости - можете дописать код, методы
    5. Разместите код в гите и пришлите ссылку
*/

class Api
{
    constructor()
    {

    }


    /**
     * Заполняет строковый шаблон template данными из объекта object
     *
     * @author		User Name
     * @version		v.1.0 (dd/mm/yyyy)
     * @param		{object} object
     * @param		{string} template
     * @return		{string}
     */

    get_api_path(object, template)
    {
        /* Здесь ваш код */
        return template.replace(/%(\w+)%/g, (_, elem) => { // удаление символов кроме букв и цифр
            if (object[elem]) {
                return encodeURIComponent(object[elem]);
            } else {
                return elem;
            }
        });
    }
}


let user =
    {
        id		: 20,
        name	: 'John Dow',
        role	: 'QA',
        salary	: 100
    };

let api_path_templates =
    [
        "/api/items/%id%/%name%",
        "/api/items/%id%/%role%",
        "/api/items/%id%/%salary%"
    ];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) => // перебирает содержимое "api_path_templates" и создаёт нумерованный массив
{
    return api.get_api_path(user, api_path_template); // возвращает массив c параметрами object, где данные из "user", и template хранящий нумерацию
});

console.log(JSON.stringify(api_paths));

// Ожидаемый результат
let expected_result = ["/api/items/20/John%20Dow","/api/items/20/QA","/api/items/20/100"];

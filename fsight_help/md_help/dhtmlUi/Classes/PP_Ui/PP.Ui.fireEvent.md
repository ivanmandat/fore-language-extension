# PP.Ui.fireEvent

PP.Ui.fireEvent
-


# PP.Ui.fireEvent


## Синтаксис


PP.Ui.fireEvent(domNode: HTMLElement, e: Object);


## Параметры


domNode. HTML-элемент;


e.
 Параметры вызываемого события.


## Описание


Метод fireEvent вызывает событие
 у DOM-вершины.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценария PP.js и файл стилей PP.css, в теге <body> html-страницы
 элемента <div> с идентификатором «button». В событии onload тега
 <body> необходимо указать вызов функции createButton(). Добавляем
 кнопку на страницу:


var button;
function createButton() {
    // Создаем кнопку
    button = new PP.Ui.Button({
        // Устанавливаем родительский элемент
        ParentNode: document.getElementById("button"),
        // Устанавливаем содержимое кнопки
        Content: "Кнопка",
    });
}
Добавляем обработчик события нажатия кнопки мыши к кнопке и вызываем
 его:


// Создаем сообщение о нажатии кнопки
var msg = "Произошло нажатие по кнопке";
// Добавляем к кнопке обработчик события нажатия кнопки мыши
button.addEvent(button.getDomNode(), 'click', function (sender, args) { console.log(msg) }, false);
// Создаем событие нажатия кнопки мыши
var event = new MouseEvent('click');
// Вызываем событие нажатия кнопки мыши по кнопке
PP.Ui.fireEvent(button.getDomNode(), event);
В результате в консоль будет выведено сообщение о нажатие кнопки мыши:


Произошло нажатие по кнопке


См. также:


[PP.Ui](../Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

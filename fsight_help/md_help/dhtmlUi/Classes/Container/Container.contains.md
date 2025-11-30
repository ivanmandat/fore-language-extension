# Container.contains

Container.contains
-


# Container.contains


## Синтаксис


contains(item: PP.Ui.[Control](../Control/Control.htm));


## Параметры


item. Проверяемый элемент.


## Описание


Метод contains проверяет наличие
 элемента в контейнере.


## Комментарии


Метод возвращает значение true,
 если элемент есть в контейнере, иначе false.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценария PP.js и файл стилей PP.css, в теге <body> html-страницы
 элемента <div> с идентификатором «gridPanel». В событии onload тега
 <body> необходимо указать вызов функции createGridPanel(). Добавим
 на страницу таблицу с компонентами:


var container;
function createGridPanel() {
    // Создаем таблицу с компонентами
    container = new PP.Ui.GridPanel({
        // Устанавливаем родительский элемент
        ParentNode: "gridPanel"
    });
    // Создаем 4 подписи и добавляем их в таблицу
    var label1 = new PP.Ui.Label({ Top: 0, Left: 0, Content: "Элемент 1" });
    var label2 = new PP.Ui.Label({ Top: 0, Left: 1, Content: "Элемент 2" });
    var label3 = new PP.Ui.Label({ Top: 1, Left: 0, Content: "Элемент 3" });
    var label4 = new PP.Ui.Label({ Top: 1, Left: 1, Content: "Элемент 4" });
    container.add(label1);
    container.add(label2);
    container.add(label3);
    container.add(label4);
}
Получаем первый элемент таблицы:


// Получаем первый элемент таблицы
var item = container.getLayoutItems()[0].getItems()[0];
Проверяем, есть ли данный элемент в таблице:


// Проверям, есть ли такой элемент в таблице
if (container.contains(item) === true) {
    console.log("Данный элемент есть в таблице");
} else {
    console.log("Данный элемент в таблице отсутствует");
}
В результате в консоль будет выведен результат проверки на наличие элемента
 в таблице:


Данный элемент есть в таблице


Получаем содержимое всех элементов таблицы с помощью функции:


// Получаем содержимое всех элементов таблицы с помощью функции
var func = function (item) {
    console.log(item.getContent());
}
container.forEachElement(func);
В результате в консоль будет выведено содержимое всех элементов таблицы:


Элемент 1


Элемент 2


Элемент 3


Элемент 4


См. также:


[Container](Container.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

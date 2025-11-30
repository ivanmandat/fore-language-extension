# Конструктор EventArgs

Конструктор EventArgs
-


# Конструктор EventArgs


## Синтаксис


EventArgs(event: Function);


## Параметры


*event.* Объект события.


## Описание


Метод EventArgs создает экземпляр класса [EventArgs](EventArgs.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на файл сценария PP.js и файл стилей PP.css. Добавим на страницу кнопки A и B и обработаем события нажатия на них, выводя в консоли браузера их наименования:


// Создадим кнопку А
var buttonA = new PP.Ui.Button({
    Height: 100,
    Width: 100,
    Content: "A"
});
//Создадим кнопку В
var buttonB = new PP.Ui.Button({
    Height: 100,
    Width: 100,
    Content: "B"
});
// Обработаем событие Click
buttonA.Click.add(function (sender, args) {
    // Создадим объект типа EventArgs
    var newArgs = new PP.EventArgs();
    // Добавим поле Content и запишем в него имя кнопки
    newArgs.Content = "A";
    // Вызовем событие нажатия кнопки B
    buttonB.Click.fire(sender, newArgs);
});
// Добавим обработчик события нажатия кнопки B
buttonB.Click.add(function (sender, args) {
    if (args.Content != "" & args.Content != undefined) {
        console.log("Наименование нажатой кнопки: " + args.Content)
    } else {
        console.log("Наименование нажатой кнопки: " + args.Event.target.textContent)
    }
});
// Добавим обе кнопки к документу
buttonA.addToNode(document.body);
buttonB.addToNode(document.body);

В результате выполнения примера на страницу были добавлены две кнопки, при нажатии на которые в консоль браузера выводятся их наименования:


Наименование нажатой кнопки: A

Наименование нажатой кнопки: B


См. также:


[EventArgs](EventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

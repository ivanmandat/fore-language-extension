# PP.calculateMouseCoords

PP.calculateMouseCoords
-


**


# PP.calculateMouseCoords


## Синтаксис


calculateMouseCoords(event);


## Параметры


*event.* Событие мыши.


## Описание


Метод calculateMouseCoords** вычисляет текущие координаты курсора мыши.


## Комментарии


Метод возвращает JSON-объект со следующими полями: X - абсцисса, Y - ордината текущего положения курсора мыши.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на файл сценария PP.js и файл стилей PP.css. Создадим текстовую область и обработаем событие щелчка по данной области, выводя в ней текущие координаты курсора мыши:


// Создадим текстовую область
var textArea = new PP.Ui.TextArea({
    ParentNode: document.body,
    Width: 250,
    Height: 100,
});
// Обработаем событие Click
textArea.Click.add(function (sender, args) {
    if (PP.isDownOn(textArea.getDomNode(), args.Event)) {
        // Определим текущие координаты мыши, если курсор находится над текстовой областью
        var coord = PP.calculateMouseCoords(args.Event);
        textArea.setContent("Текущие координаты мыши: (" + coord.X + ", " + coord.Y + ")");
    };
});

В результате выполнения примера была создана и размещена на странице текстовая область. При щелчке по данной области в ней были выведены текущие координаты мыши:


![](PP_calculateMouseCoords.png)


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

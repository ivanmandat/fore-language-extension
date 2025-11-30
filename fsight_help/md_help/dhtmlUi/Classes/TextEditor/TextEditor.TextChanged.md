# TextEditor.TextChanged

TextEditor.TextChanged
-


# TextEditor.TextChanged


## Синтаксис


TextChanged: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии;


timeout. Промежуток времени в миллисекундах, через который вызовется событие.


## Описание


Событие TextChanged наступает при изменении текста в текстовой области редактора.


## Пример


Для выполнения примера предполагается наличие на странице компонента [TextEditor](../../Components/TextEditor/TextEditor.htm) с наименованием «textEditor» (см. описание [конструктора TextEditor](Constructor_TextEditor.htm)). Обработаем следующие события: TextChanged, [SelectionChanged](TextEditor.SelectionChanged.htm), [Blur](TextEditor.Blur.htm):


// Объявим флаги вызовов событий
var isTextChanged = false;
var isTextSelected = false;
var isBlured = false;
// Обработаем событие изменения текста
textEditor.TextChanged.add(function (sender, args, timeout) {
    if (!isTextChanged) {
        console.log("Инициировано событие TextChanged");
        isTextChanged = true;
    }
});
// Обработаем событие изменения выделения текста
textEditor.SelectionChanged.add(function (sender, args) {
    if (!isTextSelected) {
        console.log("Инициировано событие SelectionChanged");
        isTextSelected = true;
    }
});
// Обработаем событие потери фокуса
textEditor.Blur.add(function (sender, args) {
    if (!isBlured) {
        console.log("Инициировано событие Blur");
        isBlured = true;
    }
});

Выделим любое слово в редакторе, дважды щёлкнув по нему, после чего изменим его. После этого выделим весь текст и изменим его горизонтальное выравнивание с помощью специальной кнопки на панели настроек текстового редактора. Данное действие позволит сменить фокус с текстовой области на область настроек. В результате в консоли браузера будут выведены сообщения о вызове обработанных ранее событий:


Инициировано событие SelectionChanged


Инициировано событие TextChanged


Инициировано событие Blur


См. также:


[TextEditor](TextEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

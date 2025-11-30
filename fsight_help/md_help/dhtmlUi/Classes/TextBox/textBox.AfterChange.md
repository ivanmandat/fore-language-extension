# TextBox.AfterChange

TextBox.AfterChange
-


**


# TextBox.AfterChange


## Синтаксис


AfterChange: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии;


timeout. Промежуток времени
 в миллисекундах, через который вызовется событие.


## Описание


Событие AfterChange** наступает
 после окончания редактирования [текстового поля](TextBox.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TextBox](../../Components/TextBox/TextBox.htm) с наименованием
 «textBox» (см. «[Пример
 создания компонента TextBox](../../Components/TextBox/TextBox_Example.htm)» ). Обработаем следующие события: [BeforeChange](textBox.BeforeChange.htm),
 [AfterChange](textBox.AfterChange.htm), [AfterTimeout](textBox.AfterTimeout.htm),
 [TextChanged](textBox.textChanged.htm), [Enter](textBox.Enter.htm),
 разрешим редактирование [текстового поля](TextBox.htm) и изменим
 его содержимое:


// Разрешаем редактирование текстового поля
textBox.setEnableEdit(true);
// Обрабатываем событие BeforeChange
textBox.BeforeChange.add(function (sender, args, timeout) {
    console.log("Инициировано событие BeforeChange")
});
// Обрабатываем событие AfterChange
textBox.AfterChange.add(function (sender, args, timeout) {
    console.log("Инициировано событие AfterChange")
});
// Обрабатываем событие AfterTimeout
textBox.AfterTimeout.add(function (sender, args, timeout) {
    console.log("Инициировано событие AfterTimeout")
});
// Обрабатываем событие TextChanged
textBox.TextChanged.add(function (sender, args, timeout) {
    console.log("Инициировано событие TextChanged")
});
// Обрабатываем событие Enter
textBox.Enter.add(function (sender, args, timeout) {
    console.log("Инициировано событие Enter")
});
// Обрабатываем событие ValueChanged
textBox.ValueChanged.add(function (sender, args, timeout) {
    console.log("Инициировано событие ValueChanged");
});
// Изменяем текст текстового поля
textBox.setContent("Текстовое поле");

В результате выполнения примера в консоли браузера были выведены сообщения
 о вызове обработанных событий:


Инициировано событие BeforeChange


Инициировано событие TextChanged


Инициировано событие AfterChange


Инициировано событие ValueChanged


PP.Ui.TextBox {_Events: Object, ImageMouseUp: PP.Delegate,
 ImageMouseDown: PP.Delegate, ImageClick: PP.Delegate, Focus: PP.Delegate…}


Инициировано событие AfterTimeout


После щелчка по [текстовому полю](TextBox.htm) и нажатия клавиши
 ENTER было выведено сообщение о вызове события [Enter](textBox.Enter.htm):


Инициировано событие Enter


[TextBox](TextBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

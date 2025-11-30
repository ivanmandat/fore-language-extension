# PP.checkInterface

PP.checkInterface
-


**


# PP.checkInterface


## Синтаксис


checkInterface(obj, inter);


## Параметры


*obj.* Объект класса для
 проверки;


*inter.* Интерфейс или
 массив интерфейсов, которые необходимо проверить на реализуемость указанным
 классом.


## Описание


Метод checkInterface**
 выбрасывает ошибку, если указанный класс не реализует заданные интерфейсы.


## Комментарии


Если указанный класс не реализует заданные интерфейсы, то метод генерирует
 ошибку следующего вида: «Exception. Source: Message: <Наименование
 класса> is not implemented <Наименование интерфейса>».


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js. Создадим объект класса [PP.Ui.Button](dhtmlUi.chm::/Classes/Button/Button.htm)
 и проверим его на реализацию интерфейсов PP.Ui.IContentEditable и PP.IDataSource:


// Создадим кнопку
var button = new PP.Ui.Button({
    Width: 100,
    Height: 100
});
try {
    // Проверим, реализует ли кнопка интерфейс PP.Ui.IContentEditable
    PP.checkInterface(button, PP.Ui.IContentEditable);
    console.log("Класс PP.Ui.Button реализует интерфейс PP.Ui.IContentEditable");
} catch (error) {
    console.log(error);
};
try {
    // Проверим, реализует ли кнопка интерфейс PP.IDataSource
    PP.checkInterface(button, PP.IDataSource);
    console.log("Класс PP.Ui.Button реализует интерфейс PP.IDataSource");
} catch (error) {
    console.log(error);
};

В результате выполнения примера объект класса [PP.Ui.Button](dhtmlUi.chm::/Classes/Button/Button.htm)
 был проверен на реализацию интерфейсов PP.Ui.IContentEditable и PP.IDataSource.
 При этом выбросилось исключение, поскольку кнопка не реализует интерфейс
 PP.IDataSource. Результаты данной проверки и текст ошибки были выведены
 в консоли браузера:


Класс PP.Ui.Button реализует интерфейс PP.Ui.IContentEditable

Exception. Source:  Message: Button is not implemented IDataSource


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

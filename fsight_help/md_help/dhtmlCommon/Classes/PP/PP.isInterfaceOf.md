# PP.isInterfaceOf

PP.isInterfaceOf
-


**


# PP.isInterfaceOf


## Синтаксис


isInterfaceOf(obj, inter, throwEx: Boolean);


## Параметры


*obj.* Объект класса для проверки;


*inter.* Интерфейс или массив интерфейсов,
 которые необходимо проверить на реализуемость указанным классом;


*throwEx.* Признак генерации ошибки,
 если классом не реализуется хотя бы один интерфейс. Если параметр равен
 значению true, то будет сгенерирована
 ошибка в случае, если классом не реализуется хотя бы один интерфейс, если
 значение false, то ошибки не будет.


## Описание


Метод isInterfaceOf** проверяет,
 реализует ли указанный класс заданные интерфейсы.


## Комментарии


Метод возвращает значение true,
 если указанный класс реализует заданные интерфейсы, и значение false,
 если не реализует.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js. Создадим объект класса [PP.Ui.Button](dhtmlUi.chm::/Classes/Button/Button.htm)
 и проверим его на реализацию интерфейсов PP.Ui.IContentEditable и PP.IDataSource:


// Создадим кнопку
var button = new PP.Ui.Button({
    Width: 100,
    Height: 100
});
// Проверим, реализует ли кнопка интерфейс PP.Ui.IContentEditable
var isInterfaceOf = PP.isInterfaceOf(button, PP.Ui.IContentEditable);
console.log("Класс PP.Ui.Button " + (!isInterfaceOf ? "не " : "") + "реализует интерфейс PP.Ui.IContentEditable");
// Проверим, реализует ли кнопка интерфейс PP.IDataSource
ckeckInterface = PP.isInterfaceOf(button, PP.IDataSource, false);
console.log("Класс PP.Ui.Button " + (!ckeckInterface ? "не " : "") + "реализует интерфейс PP.IDataSource");

В результате выполнения примера объект класса [PP.Ui.Button](dhtmlUi.chm::/Classes/Button/Button.htm)
 был проверен на реализацию интерфейсов PP.Ui.IContentEditable и PP.IDataSource.
 Результаты данной проверки были выведены в консоли браузера:


Класс PP.Ui.Button реализует интерфейс PP.Ui.IContentEditable

Класс PP.Ui.Button не реализует интерфейс PP.IDataSource


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

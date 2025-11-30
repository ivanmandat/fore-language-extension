# IWebBrowserBox.OleObject

IWebBrowserBox.OleObject
-


# IWebBrowserBox.OleObject


## Синтаксис


OleObject: Variant;


## Описание


Свойство OleObject возвращает
 веб-страницу, загруженную в компонент, в виде OLE-объекта.


## Комментарии


Работа с полученным OLE-объектом осуществляется с помощью методов [Invoke](ForeSys.chm::/Class/Variant/Variant.Invoke.htm),
 [GetProperty](ForeSys.chm::/Class/Variant/Variant.GetProperty.htm)
 ([GetPropertyEx](ForeSys.chm::/Class/Variant/Variant.GetPropertyEx.htm))
 и [SetProperty](ForeSys.chm::/Class/Variant/Variant.SetProperty.htm)
 ([SetPropertyEx](ForeSys.chm::/Class/Variant/Variant.SetPropertyEx.htm)).
 Данные методы позволяют работать со свойствами и методами объекта WebBrowser,
 лежащего в основе компонента [WebBrowserBox](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/WebBrowserBox.htm).
 Также поддерживаются свойства/методы интерфейса IWebBrowser2, используемые
 при работе с экземплярами браузера Internet Explorer. Описание WebBrowser/IWebBrowser2
 представлено в MSDN.


## Пример


WebBrowserBox1.OleObject.Invoke("GoBack",
 nil);


Выполнение данного кода приведет к тому, что для Web страницы, отображенной
 в компоненте WebBrawserBox1 будет выполнена команда «Назад».


WebBrowserBox1.OleObject.Invoke("GoForward",
 nil);


Выполнение данного кода приведет к тому, что для Web страницы, отображенной
 в компоненте WebBrawserBox1 будет выполнена команда «Вперед».


WebBrowserBox1.OleObject.Invoke("Stop",
 nil);


Выполнение данного кода приведет к тому, что для Web страницы, отображенной
 в компоненте WebBrawserBox1 будет выполнена команда «Стоп».


Для приведенных выше примеров тип переменной «nil» - Array (массив).


URL:=WebBrowserBox1.OleObject.GetProperty("LocationURL")
 As string


Выполнение данного кода приведет к тому, что в переменной URL (тип String),
 будет находиться адрес страницы, отображаемой в компоненте WebBrowserBox1.


См. также:


[IWebBrowserBox](IWebBrowserBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

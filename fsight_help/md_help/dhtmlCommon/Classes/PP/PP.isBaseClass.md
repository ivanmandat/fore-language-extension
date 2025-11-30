# PP.isBaseClass

PP.isBaseClass
-


**


# PP.isBaseClass


## Синтаксис


isBaseClass(child: Function, base: Array|Function);


## Параметры


*child.* Дочерний класс;


*base.* Родительский класс или массив
 родительских классов.


## Описание


Метод isBaseClass** проверяет,
 наследуется ли указанный класс хотя бы от одного из заданных родительских
 классов.


## Комментарии


Метод возвращает значение true,
 если указанный класс наследуется хотя бы от одного из заданных родительских
 классов, и значение false, если
 не наследуется ни от одного класса.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js. Проверим, наследуются ли классы [PP.Ui.Button](dhtmlUi.chm::/Classes/Button/Button.htm)
 и [PP.Color](Color/Color.htm) от класса [PP.Ui.Control](dhtmlUi.chm::/Classes/Control/Control.htm):


// Проверим, является ли класс PP.Ui.Control родителем для PP.Ui.Button
var isBaseClass = PP.isBaseClass(PP.Ui.Button, PP.Ui.Control);
console.log("Класс PP.Ui.Button " + (isBaseClass ? "" : "не ") + "наследуется от класса PP.Ui.Control");
// Проверим, является ли класс PP.Ui.Control родителем для PP.Color
isBaseClass = PP.isBaseClass(PP.Color, PP.Ui.Control);
console.log("Класс PP.Color " + (isBaseClass ? "" : "не ") + "наследуется от класса PP.Ui.Control");

В результате выполнения примера в консоли браузера были выведены уведомления
 о том, наследуются ли классы [PP.Ui.Button](dhtmlUi.chm::/Classes/Button/Button.htm)
 и [PP.Color](Color/Color.htm) от класса [PP.Ui.Control](dhtmlUi.chm::/Classes/Control/Control.htm):


Класс PP.Ui.Button наследуется от класса PP.Ui.Control

Класс PP.Color не наследуется от класса PP.Ui.Control


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

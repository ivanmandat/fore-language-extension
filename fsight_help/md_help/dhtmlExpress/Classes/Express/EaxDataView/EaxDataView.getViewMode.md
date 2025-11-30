# EaxDataView.getViewMode

EaxDataView.getViewMode
-


**


# EaxDataView.getViewMode


## Синтаксис


getViewMode();


## Описание


Метод getViewMode** возвращает значение флага «Режим просмотра» для рабочей области экспресс-отчета.


## Комментарии


Если экспресс-отчет открыт в режиме просмотра, то метод возвращает значение true, в противном случае - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим значение флага «Режим просмотра»:


// Получаем объект класса EaxDataView
var dataView = expressBox.getDataView();
console.log(dataView.getViewMode());

В результате выполнения примера в консоли браузера будет выведен следующий текст:


false


См. также:


[ EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

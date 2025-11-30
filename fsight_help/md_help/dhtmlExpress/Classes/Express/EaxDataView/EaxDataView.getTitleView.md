# EaxDataView.getTitleView

EaxDataView.getTitleView
-


**


# EaxDataView.getTitleView


## Синтаксис


getTitleView();


## Описание


Метод getTitleView** возвращает заголовок экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим значение флага «Режим просмотра» через представление заголовка экспресс-отчета:


// Получаем объект класса EaxDataView
var dataView = expressBox.getDataView();
console.log(dataView.getTitleView().getViewMode());

В результате выполнения примера в консоли браузера будет выведено значение false, поскольку экспресс-отчет открыт в режиме редактирования:


false


См. также:


[ EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

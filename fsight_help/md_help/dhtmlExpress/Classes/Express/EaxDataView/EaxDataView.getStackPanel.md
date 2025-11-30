# EaxDataView.getStackPanel

EaxDataView.getStackPanel
-


# EaxDataView.getStackPanel


## Синтаксис


getStackPanel();


## Описание


Метод getStackPanel возвращает контейнер для представлений данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее получим текущее количество элементов в контейнере для представлений данных:


// Получаем объект класса EaxDataView
var dataView = expressBox.getDataView();
console.log("Elements count: " + dataView.getStackPanel().getCount());

В результате выполнения примера будет выведено количество элементов в контейнере для представления данных:


Elements count: 1


См. также:


[ EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

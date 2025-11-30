# ExpressView.getPropertyBarView

ExpressView.getPropertyBarView
-


# ExpressView.getPropertyBarView


## Синтаксис


getPropertyBarView();


## Описание


Метод getPropertyBarView возвращает представление панели свойств.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Получим представление панели свойств экспресс-отчёта и выведем в консоль режим отображения мастеров на данной панели:


// Получаем представление области данных экспресс-отчёта
var propertyBarView = expressBox.getPropertyBarView();
// Возвращает режим отображения мастеров
console.log("Mode: " + propertyBarView.getMode());

В результате выполнения данного примера будет выведен режим отображения мастеров «Selection».


См. также:


[ExpressView](ExpressView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

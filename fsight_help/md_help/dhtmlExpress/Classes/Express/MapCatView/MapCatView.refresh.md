# MapCatView.refresh

MapCatView.refresh
-


**


# MapCatView.refresh


## Синтаксис


refresh();


## Описание


Метод refresh** обновляет вкладку «Карта» на ленте инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим вкладку «Карта»:


// Получим представление вкладки «Карта»
var mapCategory = expressBox.getRibbonView().getMapCategory();
mapCategory.refresh();

В результате выполнения примера будет обновлена вкладка «Карта» на панели инструментов экспресс-отчета.


См. также:


[MapCatView](MapCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

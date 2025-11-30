# MainCatView.setVisiblePropBar

MainCatView.setVisiblePropBar
-


**


# MainCatView.setVisiblePropBar


## Синтаксис


setVisiblePropBar(value);


## Параметры


*value.* Значение, управляющее состоянием кнопки «Боковая панель».


## Описание


Метод setVisiblePropBar** управляет состоянием кнопки «Боковая панель» на вкладке ленты инструментов «Главная» - нажимает её и отжимает.


## Комментарии


Если в качестве значения параметра value указано true, то кнопка «Боковая панель» будет нажата, иначе - отжата.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). В приведенном ниже примере программно нажимается кнопка «Боковая панель»:


// Получим представление вкладки «Главная»
var category = expressBox.getRibbonView().getMainCategory();
// Откроем доступ к кнопке «Боковая панель»
category.setVisiblePropBar(true);

До выполнения примера кнопка «Боковая панель» была не нажата:


![](../../../MainCatView.setVisiblePropBar_1.gif)


А в результате выполнения примера кнопка «Боковая панель» на вкладке ленты инструментов «Главная» будет нажата:


![](../../../MainCatView.setVisiblePropBar_2.gif)


См. также:


[MainCatView](MainCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

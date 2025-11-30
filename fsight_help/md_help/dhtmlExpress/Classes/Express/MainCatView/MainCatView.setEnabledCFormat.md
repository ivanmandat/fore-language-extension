# MainCatView.setEnabledCFormat

MainCatView.setEnabledCFormat
-


**


# MainCatView.setEnabledCFormat


## Синтаксис


setEnabledCFormat(value);


## Параметры


*value .*Значение, задающее доступ к кнопке: если равно true, то кнопка «Условное форматирование» будет доступна на вкладке, иначе - не доступна.


## Описание


Метод setEnabledCFormat** управляет доступом к кнопке «Условное форматирование» на вкладке «Главная» ленты инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Откроем доступ к кнопке «Условное форматирование» на вкладке «Главная»:


// Получим представление вкладки «Главная»
var category = expressBox.getRibbonView().getMainCategory();
// Откроем доступ к кнопке «Условное форматирование»
category.setEnabledCFormat(true);

До выполнения примера кнопка «Условное форматирование» была неактивной:


![](../../../MainCatView.setEnabledCFormat_1.gif)


После выполнения примера данная кнопка станет активной:


![](../../../MainCatView.setEnabledCFormat_2.gif)


См. также:


[MainCatView](MainCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

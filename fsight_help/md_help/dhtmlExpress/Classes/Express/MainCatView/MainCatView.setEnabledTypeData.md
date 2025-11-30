# MainCatView.setEnabledTypeData

MainCatView.setEnabledTypeData
-


**


# MainCatView.setEnabledTypeData


## Синтаксис


setEnabledTypeData(value);


## Параметры


*value .*Значение, задающее доступ к кнопке: если равно true, то кнопка «Преобразовать данные» будет доступна на вкладке, иначе - не доступна.


## Описание


Метод setEnabledTypeData** управляет доступом к кнопке «Преобразовать данные» на вкладке «Главная» ленты инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Закроем доступ к кнопке «Преобразовать данные» на вкладке «Главная»:


// Получим представление вкладки «Главная»
var category = expressBox.getRibbonView().getMainCategory();
// Откроем доступ к кнопке «Преобразовать данные»
category.setEnabledTypeData(false);

До выполнения примера кнопка «Преобразовать данные» была активной:


![](../../../MainCatView.setEnabledTypeData_2.png)


После выполнения примера данная кнопка станет неактивной:


![](../../../MainCatView.setEnabledTypeData_1.png)


См. также:


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

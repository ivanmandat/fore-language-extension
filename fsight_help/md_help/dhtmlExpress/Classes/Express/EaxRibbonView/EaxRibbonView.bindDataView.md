# EaxRibbonView.bindDataView

EaxRibbonView.bindDataView
-


**


# EaxRibbonView.bindDataView


## Синтаксис


bindDataView(dataView);


## Параметры


*data**View.* Представление данных.


## Описание


Метод bindDataView** устанавливает связь представления данных с лентой инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxRibbon](../../../Components/Express/EaxRibbon/EaxRibbon.htm) с наименованием «eaxRibbon» и компонента [EaxGrid](../../../Components/Express/EaxGrid/EaxGrid.htm) с наименованием «eaxGrid» (см. «[Пример создания компонента EaxRibbon](../../../Components/Express/EaxRibbon/EaxRibbon_Example.htm)»). Установим связь представления данных с лентой инструментов:


// Устанавливаем связь представления данных с лентой инструментов экспресс-отчета
eaxRibbon.bindView(eaxGrid);

После выполнения примера представление данных будет связано с лентой инструментов экспресс-отчета.


См. также:


[EaxRibbonView](EaxRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

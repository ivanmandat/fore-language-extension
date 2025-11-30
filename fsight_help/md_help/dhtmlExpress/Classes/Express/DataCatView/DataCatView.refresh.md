# DataCatView.refresh

DataCatView.refresh
-


**


# DataCatView.refresh


## Синтаксис


refresh(propName);


## Параметры


*propName.* Наименование элемента для обновления, задаваемого с помощью перечисления PP.Exp.Ui.[EaxPropertyViews](../../../Enums/EaxPropertyViews.htm). Необязательный параметр.


## Описание


Метод refresh** обновляет представление вкладки «Данные» на ленте инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Далее обновим представление вкладки «Данные»:


// Получим представление панели ленты инструментов «Данные»
var dataRibbonCategory = expressBox.getRibbonView().getDataRibbonCategory();
dataRibbonCategory.refresh();

В результате выполнения примера будут обновлены представление и данные вкладки «Диаграмма».


См. также:


[DataCatView](DataCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

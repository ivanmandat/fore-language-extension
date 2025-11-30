# EaxRibbonView.refresh

EaxRibbonView.refresh
-


**


# EaxRibbonView.refresh


## Синтаксис


refresh(ctrlType: [PP.Exp.Ui.ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm));


## Параметры


*ctrlType.* Тип элемента управления. Указывается с помощью перечисления [PP.Exp.Ui.ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm).


## Описание


Метод refresh** обновляет указанный элемент управления на ленте инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обновим вкладку «Главная» на ленте инструментов:


// Получим представление ленты инструментов экспресс-отчета
var ribbon = expressBox.getRibbonView();
// Обновим вкладку «Данные»
ribbon.refresh(PP.Exp.Ui.ControlType.RibbonData);

В результате выполнения примера будет обновлена вкладка «Главная» на ленте инструментов экспресс-отчета.


См. также:


[EaxRibbonView](EaxRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

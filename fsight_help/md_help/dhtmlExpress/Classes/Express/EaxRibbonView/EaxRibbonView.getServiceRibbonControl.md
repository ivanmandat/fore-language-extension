# EaxRibbonView.getServiceRibbonControl

EaxRibbonView.getServiceRibbonControl
-


# EaxRibbonView.getServiceRibbonControl


## Синтаксис


getServiceRibbonControl ();


## Описание


Метод getServiceRibbonControl возвращает кнопку главного меню «Сервис».


## Пример


Для выполнения примера предполагается наличие на странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Скроем кнопку «Сервис» главного меню:


serviceButton = expressBox.getRibbonView().getServiceRibbonControl();
serviceButton.hide();

После выполнения примера кнопка «Сервис» главного меню была скрыта.


См. также:


[EaxRibbonView](EaxRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

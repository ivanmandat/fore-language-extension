# EaxRibbonView.getMainButton

EaxRibbonView.getMainButton
-


**


# EaxRibbonView.getMainButton


## Синтаксис


getMainButton();


## Описание


Метод getMainButton** возвращает кнопку приложения на ленте инструментов экспресс-отчёта.


## Комментарии


Для экспресс-отчёта кнопка приложения имеет название «Отчёт».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Получим информацию о текущих css-классах кнопки «Отчёт» :


// Получим представление ленты инструментов экспресс-отчета
var ribbon = expressBox.getRibbonView();
// Выведем информацию о css-классах кнопки приложения
console.log(ribbon.getMainButton().getClass());

В результате выполнения данного примера будет выведена информация о css-классах кнопки приложения на ленте инструментов экспресс-отчета:


" PPNoSelect H H Main Released".


См. также:


[EaxRibbonView](EaxRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

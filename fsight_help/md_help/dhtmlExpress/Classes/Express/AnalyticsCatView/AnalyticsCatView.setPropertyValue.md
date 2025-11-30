# AnalyticsCatView.setPropertyValue

AnalyticsCatView.setPropertyValue
-


# AnalyticsCatView.setPropertyValue


## Синтаксис


setPropertyValue(propertyName, value);


## Параметры


propertyName. Тип значения.
 Может принимать следующие значения:


	- PP.Exp.Ui.EaxPropertyViews.GridSelection;


	- PP.Exp.Ui.EaxPropertyViews.SourceOpened;


	- PP.Exp.Ui.EaxPropertyViews.DataSourceOpened;


	- PP.Exp.Ui.EaxPropertyViews.EnableAnalyticsTimeSeries;


	- PP.Exp.Ui.EaxPropertyViews.EnableAnalyticsValidation.


value. Object. Устанавливаемое
 значение.


## Описание


Метод setPropertyValue управляет
 видимостью кнопок.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Откроем в отчете вкладку «Расширенная
 аналитика» и введем в консоли следующий код:


// Получим ленту инструментов
ribbon = expressBox.getRibbonView();
// Получим вкладку Расширенная аналитика
analyticCat = ribbon.getAnalyticsCategory();
// Установим видимость кнопки «Анализ временных рядов»
analyticCat.setPropertyValue(PP.Exp.Ui.EaxPropertyViews.EnableAnalyticsTimeSeries, false);
В результате выполнения кнопка «Анализ временных рядов» стала доступна.


См. также:


[AnalyticsCatView](AnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# AdvAnalyticsCatView.setPropertyValue

AdvAnalyticsCatView.setPropertyValue
-


# AdvAnalyticsCatView.setPropertyValue


## Синтаксис


setPropertyValue(propertyName, value);


## Параметры


propertyName. Тип значения.
 Может принимать следующие значения:


	- PP.Prx.Property.GridSelection;


	- PP.Prx.Ui.RibbonProperty.EnableAnalyticsTimeSeries;


	- PP.Prx.Ui.RibbonProperty.EnableAnalyticsDataMining;


	- PP.Prx.Ui.RibbonProperty.EnableAnalyticsValidation.


value. Object. Устанавливаемое
 значение.


## Описание


Метод setPropertyValue управляет
 видимостью кнопок.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Откроем в отчете вкладку «Расширенная
 аналитика» и введем в консоли следующий код:


// Получим ленту инструментов
ribbon = reportBox.getRibbonView();
// Получим вкладку Расширенная аналитика
analyticCat = ribbon.getAnalyticsCategory();
// Установим видимость кнопок анализа данных
analyticCat.setPropertyValue(PP.Prx.Ui.RibbonProperty.EnableAnalyticsDataMining, false);
В результате выполнения кнопки анализа данных стали недоступны.


См. также:


[AdvAnalyticsCatView](AdvAnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

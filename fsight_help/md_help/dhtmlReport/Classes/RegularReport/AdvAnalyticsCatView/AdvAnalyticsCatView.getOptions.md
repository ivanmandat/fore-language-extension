# AdvAnalyticsCatView.getOptions

AdvAnalyticsCatView.getOptions
-


# AdvAnalyticsCatView.getOptions


## Синтаксис


getOptions();


## Описание


Метод getOptions возвращает
 настройки вкладки.


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
// Получим настройки вкладки
analyticCat.getOptions();
// -> Object {obInst: Object, sheets: Object, dataSources: Object, slices: Object, tableSources: Object…}
В результате выполнения примера были получены настройки вкладки.


См. также:


[AdvAnalyticsCatView](AdvAnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

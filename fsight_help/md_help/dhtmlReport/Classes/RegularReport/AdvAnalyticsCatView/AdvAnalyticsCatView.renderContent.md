# AdvAnalyticsCatView.renderContent

AdvAnalyticsCatView.renderContent
-


# AdvAnalyticsCatView.renderContent


## Синтаксис


renderContent();


## Описание


Метод renderContent отрисовывает
 элементы вкладки.


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
// Отрисуем элементы вкладки, если они еще не были отрисованы
analyticCat.getContentRendered() ? console.log("Элементы уже отрисованы") : analyticCat.renredContent();
В результате выполнения элементы вкладки будут отрисованы, если не были
 отрисованы ранее.


См. также:


[AdvAnalyticsCatView](AdvAnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

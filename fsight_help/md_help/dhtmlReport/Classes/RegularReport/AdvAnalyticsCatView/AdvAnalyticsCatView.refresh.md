# AdvAnalyticsCatView.refresh

AdvAnalyticsCatView.refresh
-


# AdvAnalyticsCatView.refresh


## Синтаксис


refresh();


## Описание


Метод refresh обновляет вкладку.


## Комментарии


Метод аналогичен методу [refreshAll](AdvAnalyticsCatView.refreshAll.htm).


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
// Обновим вкладку
analyticCat.refresh();
В результате выполнения примера вкладка была обновлена.


См. также:


[AdvAnalyticsCatView](AdvAnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

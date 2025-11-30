# AdvAnalyticsCatView.Source

AdvAnalyticsCatView.Source
-


# AdvAnalyticsCatView.Source


## Синтаксис


Source : [PP.Prx.Report](../Report/Report.htm);


## Описание


Свойство Source определяет источник
 вкладки.


## Комментарии


Значение свойства устанавливается через JSON и при помощи метода setSource, а возвращается при помощи
 метода getSource.


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
// Получим источник вкладки
analyticCat.getSource();
// -> PP.Prx.Report {_Controls: Object, _IsDataChanged: false, _AutoRecalc: true, _ForceShowControls: false, _Selection: Object…}
В результате выполнения примера был получен отчет, на данных которого
 построена вкладка.


См. также:


[AdvAnalyticsCatView](AdvAnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

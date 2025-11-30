# AdvAnalyticsCatView.DataView

AdvAnalyticsCatView.DataView
-


# AdvAnalyticsCatView.DataView


## Синтаксис


DataView: Array of [PP.Prx.Ui.DataArea](../DataArea/DataArea.htm);


## Описание


Свойство DataView определяет
 представление данных, связанное с вкладкой.


## Комментарии


Значение свойства устанавливается через JSON и при помощи метода setDataView, а возвращается при
 помощи метода getDataView.


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
// Получим представление данных
analyticCat.getDataView();
// -> [PP.Prx.Ui.DataArea]
В результате выполнения примера было получено представление данных,
 связанное с вкладкой ленты инструментов.


См. также:


[AdvAnalyticsCatView](AdvAnalyticsCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

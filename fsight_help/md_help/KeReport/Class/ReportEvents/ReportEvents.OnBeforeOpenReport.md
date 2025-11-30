# ReportEvents.OnBeforeOpenReport

ReportEvents.OnBeforeOpenReport
-


# ReportEvents.OnBeforeOpenReport


## Синтаксис


OnBeforeOpenReport(Report: [IPrxReport](../../Interface/IPrxReport/IPrxReport.htm);
 Var Cancel: Boolean);


## Параметры


Report. Регламентный отчёт,
 сгенерировавший событие;


Cancel. Признак отмены открытия
 отчёта.


## Описание


Метод OnBeforeOpenReport
 реализует событие, происходящее перед открытием регламентного отчёта.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Регламентный отчёт
	 открыт не будет;


	- False. Регламентный
	 отчёт будет открыт.


Если в событии OnBeforeOpenReport
 поменять отметку в измерении среза данных, к которому привязан элемент
 управления, то отчет ([ReportEvents.OnAfterExecuteReport](ReportEvents.OnAfterExecuteReport.htm),
 [ReportEvents.OnBeforeExecuteReport](ReportEvents.OnBeforeExecuteReport.htm))
 и его листы ([ReportEvents.OnAfterRecalcSheet](ReportEvents.OnAfterRecalcSheet.htm),
 [ReportEvents.OnBeforeRecalcSheet](ReportEvents.OnBeforeRecalcSheet.htm))
 будут вычисляться дважды. Для обхода данной особенности используйте алгоритм:


	- Отключите вычисление листа(ов), к которому(ым) привязан элемент
	 управления. Для этого свойство [IPrxControl.AutoRecalc](../../Interface/IPrxControl/IPrxControl.AutoRecalc.htm)
	 должно принять значение False.


	- Если используется [аналитическая
	 область данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm), то выключаем вычисление таблицы.
	 Для этого свойство [IPivot.EventsEnabled](kepivot.chm::/interface/ipivot/IPivot.EventsEnabled.htm)
	 должно принять значение False.


	- Измените отметку в измерении среза данных.


	- Если используется [аналитическая
	 область данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm), то включаем вычисление таблицы.
	 Для этого свойство [IPivot.EventsEnabled](kepivot.chm::/interface/ipivot/IPivot.EventsEnabled.htm)
	 должно принять значение True.


	- Включите вычисление листа(ов), к которому(ым) привязан элемент
	 управления. Для этого свойство [IPrxControl.AutoRecalc](../../Interface/IPrxControl/IPrxControl.AutoRecalc.htm)
	 должно принять True.


Примечание.
 Если используется [область
 данных](UiReport.chm::/desktop/AreaData/UiReport_AreaData.htm), то пункты 2 и 4 следует пропустить.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

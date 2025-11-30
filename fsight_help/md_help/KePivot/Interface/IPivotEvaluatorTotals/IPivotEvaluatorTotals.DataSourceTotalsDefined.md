# IPivotEvaluatorTotals.DataSourceTotalsDefined

IPivotEvaluatorTotals.DataSourceTotalsDefined
-


# IPivotEvaluatorTotals.DataSourceTotalsDefined


## Синтаксис


DataSourceTotalsDefined: Boolean;


## Описание


Свойство DataSourceTotalsDefined возвращает признак наличия настроенной агрегации для фактов источника данных.


## Комментарии


Свойство возвращает значение True, если для фактов источника данных настроена [агрегация, рассчитываемая на сервере](KeCubes.chm::/Interface/IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm). Для агрегации используется любой метод, кроме Count и CountDistinct.


Для включения агрегированных данных в качестве итога, рассчитываемого в таблице, необходимо добавить итог с типом PivotEvaluatorElementType.DataSource.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета с идентификатором «EXPRESS_REPORT».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    OLAP: IEaxAnalyzer;

	    Pivot: IPivot;

	    Totals: IPivotEvaluatorTotals;

	Begin

	    MB := MetabaseClass.Active;

	    OLAP := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Pivot := OLAP.Pivot;

	    Totals := Pivot.Evaluator.Totals;

	    If Totals.DataSourceTotalsDefined Then

	        Totals.RowTypes := Totals.RowTypes + PivotEvaluatorElementType.DataSource;

	    End If;

	    Pivot.Refresh;

	    (OLAP As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет изменен список, рассчитываемых в экспресс-отчете, итогов. Если для фактов источника данных экспресс-отчета имеются настройки для серверной агрегации, то в список итогов, рассчитываемых в экспресс-отчете по строкам, будет включен общий итог. Метод расчета общего итога соответствует методу, установленному в настройках агрегации для фактов источника данных.


См. также:


[IPivotEvaluatorTotals](IPivotEvaluatorTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

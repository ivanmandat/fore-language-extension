# IChartAxis.AutoScale

IChartAxis.AutoScale
-


# IChartAxis.AutoScale


## Синтаксис


AutoScale: [ChartAutoScaleMode](../../Enums/ChartAutoScaleMode.htm);


## Описание


Свойство AutoScale определяет
 режим автомасштабирования оси. По умолчанию масштабируемая шкала не используется.


## Пример


	Sub UserProc;

	Var

	    Metabase : IMetabase;

	    MetabaseObject : IMetabaseObject;

	    Report : IPrxReport;

	    Sheet : ITabSheet;

	    Chart : IChart;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("REPORT").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Sheet := Report.ActiveSheet.Table;

	    Chart := Sheet.Objects.Item(0).Extension As IChart;

	    Chart.AxisY.AutoScale := 1 As ChartAutoScaleMode;

	    Chart.AxisY.AutoScaleParameter := 5;

	    Report.MetabaseObject.Save;

	End Sub UserProc;


На листе регламентного отчета с идентификатором «REPORT» должна быть
 расположена диаграмма.


После выполнения примера к оси Y будет применена кластеризация с заданным
 параметром.


См. также:


[IChartAxis](IChartAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

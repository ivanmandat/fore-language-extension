# IChart.TickLabelSpacing

IChart.TickLabelSpacing
-


# IChart.TickLabelSpacing


## Синтаксис


TickLabelSpacing: Integer;


## Описание


Свойство TickLabelSpacing определяет
 число категорий между подписями делений.


## Комментарии


По умолчанию данное свойство имеет значение 1, то есть подписи отображаются
 для каждого деления оси, при значении 2 - подписи отображаются для каждого
 второго деления, при значении 3 - для каждого третьего деления и т. д.


Примечание.
 Свойство TickLabelSpacing будет
 игнорироваться при наличии исключенных вручную подписей посредством [IPrxChart.ExcludedPoints](KeReport.chm::/Interface/IPrxChart/IPrxChart.ExcludedPoints.htm).


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Tick;

	Var

	    Chart : IChart;

	Begin

	    Chart.TickLabelSpacing := 2;

	End Sub Tick;


После выполнения примера подписи будут отображаться для каждого второго
 деления.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

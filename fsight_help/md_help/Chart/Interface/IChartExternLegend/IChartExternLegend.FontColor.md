# IChartExternLegend.FontColor

IChartExternLegend.FontColor
-


# IChartExternLegend.FontColor


## Синтаксис


FontColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство FontColor определяет
 цвет шрифта внешней легенды диаграмм.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Report». В отчете
 присутствуют объекты: диаграмма и внешняя легенда.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    rep: IPrxReport;

	    legend: IPrxChartLegend;

	    chartlegend: IChartExternLegend;

	    objects: ITabObjects;

	    FColor: IGxColor;

	Begin

	    mb := MetabaseClass.Active;

	    rep := mb.ItemById("OBJ42859").Edit As IPrxReport;

	    objects := (rep.ActiveSheet As IprxTable).TabSheet.Objects;

	    legend := (objects.Item(1)) As IPrxChartLegend;

	    chartlegend := legend As IChartExternLegend;

	    chartlegend.AddChart(objects.Item(2) As ichart);

	    FColor:= New GxColor.CreateARGB(210,120,130,240);

	    chartlegend.FontColor:= FColor;

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера цвет шрифта внешней легенды диаграмм поменяется
 на голубой.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

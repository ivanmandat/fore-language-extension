# IChartExternLegend.SymbolSize

IChartExternLegend.SymbolSize
-


# IChartExternLegend.SymbolSize


## Синтаксис


SymbolSize: [IGxSizeF](ModDrawing.chm::/Interface/IGxSizeF/IGxSizeF.htm);


## Описание


Свойство SymbolSize определяет
 размер значка элементов легенды диаграмм.


## Пример


Для выполнения примера добавьте ссылки на системные сборки «Chart»,
 «Drawing», «Metabase», «Report» и «Tab». Предполагается наличие регламентного
 отчета с идентификатором «Report».
 В отчете присутствуют объекты: диаграмма и внешняя легенда.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    rep: IPrxReport;

	    legend: IPrxChartLegend;

	    chartlegend: IChartExternLegend;

	    objects: ITabObjects;

	    SSize: IGxSizeF;

	Begin

	    mb := MetabaseClass.Active;

	    rep := mb.ItemById("OBJ_1").Edit As IPrxReport;

	    objects := (rep.ActiveSheet As IprxTable).TabSheet.Objects;

	    legend := (objects.Item(1)) As IPrxChartLegend;

	    chartlegend := legend As IChartExternLegend;

	    chartlegend.AddChart(objects.Item(2) As ichart);

	    chartlegend.UseSerieIcon:= False;

	    SSize:= New GxSizeF.Create (3,3);

	    chartlegend.SymbolSize:= SSize;

	    (rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера
 в легенде будут использованы значки элемента легенды размером 3 на 3 миллиметра.


См. также:


[IChartExternLegend](IChartExternLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

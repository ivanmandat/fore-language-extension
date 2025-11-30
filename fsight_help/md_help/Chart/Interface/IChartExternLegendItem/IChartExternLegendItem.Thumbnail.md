# IChartExternLegendItem.Thumbnail

IChartExternLegendItem.Thumbnail
-


# IChartExternLegendItem.Thumbnail


## Синтаксис


Thumbnail(Size: [IGxSizeF](ModDrawing.chm::/Interface/IGxSizeF/IGxSizeF.htm)):
 [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Параметры


Size. Размер пиктограммы.


## Описание


Свойство Thumbnail возвращает
 пиктограмму элемента внешней легенды диаграмм. Свойство доступно только
 для чтения.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Report». В отчете
 присутствуют объекты: диаграмма и внешняя легенда.


			Sub UserProc;

Var

    sizef: IGxSizeF;

    image: IgxImage;

    mb: IMetabase;

    rep: IPrxReport;

    legend: IPrxChartLegend;

    chartlegend: IChartExternLegend;

    items: IChartExternLegendItems;

    item: IChartExternLegendItem;

Begin

    mb := MetabaseClass.Active;

    rep := mb.ItemById("OBJ12399").Open(Null) As IPrxReport;

    legend := (rep.ActiveSheet As IprxTable).TabSheet.Objects.Item(2).Extension As IPrxChartLegend;

    chartlegend := legend As IChartExternLegend;

    items := chartlegend.InternalItems;

    item := Items.Item(0);

    sizef := New GxSizeF.Create(12, 12);

    image := item.Thumbnail(sizef);

    image.SaveToFile("c:\123.bmp");

End Sub UserProc;


После выполнения примера в файл будет сохранена пиктограмма с заданными
 размерами.


См. также:


[IChartExternLegendItem](IChartExternLegendItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

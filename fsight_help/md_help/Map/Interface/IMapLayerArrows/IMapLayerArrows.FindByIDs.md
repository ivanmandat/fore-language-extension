# IMapLayerArrows.FindByIDs

IMapLayerArrows.FindByIDs
-


# IMapLayerArrows.FindByIDs


## Синтаксис


FindByIDs(OriginID: Integer; DestID: Integer): [IMapArrow](../IMapArrow/IMapArrow.htm);


## Параметры


OriginID. Идентификатор территории,
 которая будет являться для стрелки исходной точкой;


DestID. Идентификатор территории,
 которая будет являться для стрелки конечной точкой.


## Описание


Метод FindByIDs осуществляет
 поиск стрелки по заданным идентификаторам соединяемых территорий.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REPORT, на листе которого расположена карта.


Добавьте ссылки на системные сборки: Drawing, Map, Metabase, Report,
 Tab.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    MetabaseObject: IMetabaseObject;

	    Report: IPrxReport;

	    Sheets: IPrxSheets;

	    SheetT: IPrxTable;

	    Map: IMap;

	    Arrows: IMapLayerArrows;

	    Arrow: IMapArrow;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("REPORT").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Sheets := Report.Sheets;

	    SheetT := Sheets.Item(0) As IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    Arrows := Map.Layers.FindByName("Regions").Arrows;

	    // Найдём стрелку по заданным идентификаторам соединяемых территорий

	    Arrow := Arrows.FindByIDs(98,46);

	    Arrow.Pen := GxColor.FromName("Red") As IGxPen;

	    // Найдём стрелку по заданным наименованиям соединяемых территорий

	    Arrow := Arrows.FindByNames("Амурская область","Московская область");

	    Arrow.Pen := GxColor.FromName("Blue") As IGxPen;

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера у найденных стрелок будет изменен цвет на заданные.


См. также:


[IMapLayerArrows](IMapLayerArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

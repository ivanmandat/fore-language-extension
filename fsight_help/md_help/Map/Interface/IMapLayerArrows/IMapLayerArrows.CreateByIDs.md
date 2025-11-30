# IMapLayerArrows.CreateByIDs

IMapLayerArrows.CreateByIDs
-


# IMapLayerArrows.CreateByIDs


## Синтаксис


CreateByIDs(OriginID: Integer; DestID: Integer):
 [IMapArrow](../IMapArrow/IMapArrow.htm);


## Параметры


OriginID. Идентификатор территории,
 которая будет являться для стрелки исходной точкой;


DestID. Идентификатор территории,
 которая будет являться для стрелки конечной точкой.


## Описание


Метод CreateByIDs добавляет
 в коллекцию стрелку по заданным идентификаторам соединяемых территорий.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REPORT, на листе которого расположена карта.


Добавьте ссылки на системные сборки: Map, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    MetabaseObject: IMetabaseObject;

	    Report: IPrxReport;

	    Sheets: IPrxSheets;

	    SheetT: IPrxTable;

	    Map: IMap;

	    Arrows: IMapLayerArrows;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("Report").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Sheets := Report.Sheets;

	    SheetT := Sheets.Item(0) As  IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    Arrows := Map.Layers.FindByName("Regions").Arrows;

	    // Добавим в коллекцию стрелку по заданным идентификаторам соединяемых территорий

	    Arrows.CreateByIDs(98,46);

	    // Добавим в коллекцию стрелку по заданным наименованиям соединяемых территорий

	    Arrows.CreateByNames("Амурская область","Московская область");

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера будут созданы и добавлены в коллекцию стрелки
 по заданным идентификаторам и наименованиям соединяемых территорий. Данные
 стрелки будут отображены на карте.


См. также:


[IMapLayerArrows](IMapLayerArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

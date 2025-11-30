# IMapLayerArrows.Remove

IMapLayerArrows.Remove
-


# IMapLayerArrows.Remove


## Синтаксис


Remove(Index: Integer);


## Параметры


Index. Индекс стрелки в коллекции.


## Описание


Метод Remove удаляет стрелку
 из коллекции по заданному индексу.


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

	    Arrow: IMapArrow;

	    Index: Integer;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("Report").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Sheets := Report.Sheets;

	    SheetT := Sheets.Item(0) As IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    Arrows := Map.Layers.FindByName("Regions").Arrows;

	    Arrow := Arrows.FindByIDs(98,46);

	    Index := Arrows.GetIndex(Arrow);

	    Arrows.Remove(Index);

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера из коллекции будет удалена стрелка по заданному
 индексу.


См. также:


[IMapLayerArrows](IMapLayerArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

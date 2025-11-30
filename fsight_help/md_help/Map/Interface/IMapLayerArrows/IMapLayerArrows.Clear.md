# IMapLayerArrows.Clear

IMapLayerArrows.Clear
-


# IMapLayerArrows.Clear


## Синтаксис


Clear;


## Описание


Метод Clear очищает коллекцию
 стрелок.


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

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("REPORT").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Sheets := Report.Sheets;

	    SheetT := Sheets.Item(0) As  IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    Map.Layers.FindByName("Regions").Arrows.Clear;

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера коллекция стрелок, имеющихся на карте, будет
 очищена.


См. также:


[IMapLayerArrows](IMapLayerArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

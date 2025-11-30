# IMapLayerArrows.GetIndex

IMapLayerArrows.GetIndex
-


# IMapLayerArrows.GetIndex


## Синтаксис


GetIndex(Value: [IMapArrow](../IMapArrow/IMapArrow.htm)):
 Integer;


## Параметры


Value. Стрелка коллекции стрелок.


## Описание


Метод GetIndex возвращает индекс
 стрелки в коллекции. Свойство принимает значение «-1», если индекс не
 найден.


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

	    Index: Integer;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("Report").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Sheets := Report.Sheets;

	    SheetT := Sheets.Item(0) As IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    Arrows := Map.Layers.FindByName("Regions").Arrows;

	    Index := Arrows.GetIndex(Arrows.FindByIDs(98,46));

	    Debug.WriteLine(Index);

	    Report.MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен индекс стрелки.


См. также:


[IMapLayerArrows](IMapLayerArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

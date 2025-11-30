# IMapColorCollection.Count

IMapColorCollection.Count
-


# IMapColorCollection.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count определяет количество
 цветов в коллекции.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REPORT, на листе которого расположена карта.


Добавьте ссылки на системные сборки: Drawing, Map, Metabase, Report,
 Tab.


	Sub UserProc;

	Var

	    Metabase : IMetabase;

	    MetabaseObject: IMetabaseObject;

	    Report: IPrxReport;

	    Sheets: IPrxSheets;

	    SheetT : IPrxTable;

	    Map : IMap;

	    BarVisual : IMapBarVisual;

	    Collection : IMapColorCollection;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("REPORT").Edit;

	    Report := MetabaseObject As IPrxReport;

	    Sheets := PrxReport.ActiveReport.Sheets;

	    SheetT := Sheets.Item(0) As  IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    BarVisual := Map.Layers.FindByName("Regions").Visuals.Item(0) As IMapBarVisual;

	    Collection := BarVisual.Color.Values;

	    Collection.Count := 2;

	    Collection.Item(0) := GxColor.FromName("Red");

	    Collection.Item(1) := GxColor.FromName("Blue");

	    MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера для заливки столбикового показателя будет определен
 заданный набор цветов.


См. также:


[IMapColorCollection](IMapColorCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

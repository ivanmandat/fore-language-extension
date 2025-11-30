# IMapColorCollection.Remove

IMapColorCollection.Remove
-


# IMapColorCollection.Remove


## Синтаксис


Remove(Index: Integer; [Count: Integer = 1]);


## Параметры


Index. Индекс цвета в коллекции,
 с которого будет начато удаление;


Count. Количество удаляемых
 цветов, начиная с цвета, индекс которого указан. По умолчанию удаляется
 один.


## Описание


Метод Remove удаляет заданное
 количество цветов из коллекции. В случае если не задан параметр Count, будет удален один
 цвет по заданному индексу.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REPORT, на листе которого расположена карта.


Добавьте ссылки на системные сборки: Map, Metabase, Report, Tab.


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

	    Collection.Remove(1,3);

	    MetabaseObject.Save;

	End Sub UserProc;


После выполнения примера из набора цветов будет удалено три, начиная
 с цвета, индекс которого равен «1».


См. также:


[IMapColorCollection](IMapColorCollection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

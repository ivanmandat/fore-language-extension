# IMapLayerArrows.Count

IMapLayerArrows.Count
-


# IMapLayerArrows.Count


## Синтаксис


Count : Integer;


## Описание


Свойство Count возвращает размер
 коллекции стрелок.


## Пример


Для выполнения примера предполагается наличие регламентного отчёта с
 идентификатором REPORT, на листе которого расположена карта.


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

	    Count: Integer;

	Begin

	    Metabase := MetabaseClass.Active;

	    MetabaseObject := Metabase.ItemById("Report").Bind;

	    Report := MetabaseObject As IPrxReport;

	    Sheets := Report.Sheets;

	    SheetT := Sheets.Item(0) As  IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    Arrows := Map.Layers.FindByName("Regions").Arrows;

	    Count := Arrows.Count;

	    Debug.WriteLine(Count.ToString);

	    // Получим стрелку по индексу и поменяем её цвет

	    Arrow := Arrows.Item(1);

	    Arrow.Pen := GxColor.FromName("Blue") As IGxPen;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено количество стрелок,
 имеющихся на карте. Цвет стрелки с индексом «1» будет изменен на синий.


См. также:


[IMapLayerArrows](IMapLayerArrows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

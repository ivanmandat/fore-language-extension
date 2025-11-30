# IMapArrow.DestID

IMapArrow.DestID
-


# IMapArrow.DestID


## Синтаксис


DestID: Integer;


## Описание


Свойство DestID определяет идентификатор
 территории, которая является для стрелки конечной точкой.


## Пример


Данный модуль подключается к регламентному отчету, на листе которого
 расположена карта.


Добавьте ссылки на системные сборки: Map, Report, Tab.


	Sub Arrow;

	Var

	    Map : IMap;

	    Arrow : IMapArrow;

	    Sheets: IPrxSheets;

	    SheetT : IPrxTable;

	Begin

	    Sheets := PrxReport.ActiveReport.Sheets;

	    SheetT := Sheets.Item(0) As  IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    Arrow := Map.Layers.FindByName("Regions").Arrows.Item(1);

	    // Получим идентификатор территории, которая является для стрелки конечной точкой

	    SheetT.TabSheet.CellValue(1,1) := Arrow.DestID;

	    // Получим наименование территории, которая является для стрелки конечной точкой

	    SheetT.TabSheet.CellValue(1,1) := Arrow.DestName;

	End Sub Arrow;


После выполнения примера в соответствующие ячейки листа будут записаны
 идентификатор и наименование региона, который для стрелки является конечной
 точкой.


См. также:


[IMapArrow](IMapArrow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

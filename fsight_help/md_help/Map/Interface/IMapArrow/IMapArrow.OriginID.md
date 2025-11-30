# IMapArrow.OriginID

IMapArrow.OriginID
-


# IMapArrow.OriginID


## Синтаксис


OriginID: Integer;


## Описание


Свойство OriginID определяет
 идентификатор территории, которая является для стрелки начальной точкой.


## Пример


Данный модуль подключается к регламентному отчету, на листе которого
 расположена карта.


Добавьте ссылки на системные сборки: Map, Report, Tab.


	Sub Arrow;

	Var

	    Sheets: IPrxSheets;

	    SheetT : IPrxTable;

	    Map : IMap;

	    Arrow : IMapArrow;

	Begin

	    Sheets := PrxReport.ActiveReport.Sheets;

	    SheetT := Sheets.Item(0) As  IPrxTable;

	    Map := SheetT.TabSheet.Objects.Item(0).Extension As IMap;

	    Arrow := Map.Layers.FindByName("Regions").Arrows.Item(1);

	    // Получим идентификатор территории, которая является для стрелки начальной точкой

	    SheetT.TabSheet.CellValue(1,1) := Arrow.OriginID;

	    // Получим наименование территории, которая является для стрелки начальной точкой

	    SheetT.TabSheet.CellValue(2,2) := Arrow.OriginName;

	End Sub Arrow;


После выполнения примера в соответствующие ячейки листа будут записаны
 идентификатор и наименование региона, который для стрелки является начальной
 точкой.


См. также:


[IMapArrow](IMapArrow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

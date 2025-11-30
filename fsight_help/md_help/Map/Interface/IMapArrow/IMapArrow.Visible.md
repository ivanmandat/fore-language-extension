# IMapArrow.Visible

IMapArrow.Visible
-


# IMapArrow.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет
 признак видимости стрелки.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Стрелка будет отображена на карте;


	- False. Стрелка не будет
	 отображена на карте.


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

	    Arrow.Visible := False;

	    Map.Refresh;

	End Sub Arrow;


После выполнения примера стрелка не будет отображена на карте.


См. также:


[IMapArrow](IMapArrow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

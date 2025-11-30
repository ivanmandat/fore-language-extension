# ITabSearchResult.Range

ITabSearchResult.Range
-


# ITabSearchResult.Range


## Синтаксис


Range: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство Range возвращает объект,
 содержащий ячейку с искомыми данными.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    CellSearch: ITabCellSearch;

	    Result: ITabSearchResult;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Rep:=MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    CellSearch:=Tab.CreateCellSearch;

	    CellSearch.Text:="123";

	    Result:=CellSearch.Execute;

	    If Result<>Null Then

	        s:=Result.Range.Address;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск по ячейкам значения
 «123», и в случае удачного поиска в переменной «s» будет содержаться адрес
 найденной ячейки.


См. также:


[ITabSearchResult](ITabSearchResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

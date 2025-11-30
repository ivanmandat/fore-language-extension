# ITabSearchResult.CurrentRow

ITabSearchResult.CurrentRow
-


# ITabSearchResult.CurrentRow


## Синтаксис


CurrentRow: Integer;


## Описание


Свойство CurrentRow возвращает
 номер строки найденной ячейки.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    CellSearch: ITabCellSearch;

	    Result: ITabSearchResult;

	    i,j: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Rep:=MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    CellSearch:=Tab.CreateCellSearch;

	    CellSearch.Text:="123";

	    Result:=CellSearch.Execute;

	    If Result<>Null Then

	        i:=Result.CurrentRow;

	        j:=Result.CurrentColumn;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск по ячейкам значения
 «123», и в случае удачного поиска в переменной «i» будет содержаться номер
 строки, а в «j» - номер столбца найденной ячейки.


См. также:


[ITabSearchResult](ITabSearchResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

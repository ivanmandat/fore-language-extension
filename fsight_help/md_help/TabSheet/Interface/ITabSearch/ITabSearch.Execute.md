# ITabSearch.Execute

ITabSearch.Execute
-


# ITabSearch.Execute


## Синтаксис


Execute: [ITabSearchResult](../ITabSearchResult/ITabSearchResult.htm);


## Описание


Метод Execute выполняет поиск
 и возвращает результат в случае удачного поиска.


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
 «123» и в случае удачного поиска в переменной «s» будет содержаться адрес
 найденной ячейки.


См. также:


[ITabSearch](ITabSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

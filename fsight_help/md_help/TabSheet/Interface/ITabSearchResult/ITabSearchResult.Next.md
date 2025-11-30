# ITabSearchResult.Next

ITabSearchResult.Next
-


# ITabSearchResult.Next


## Синтаксис


Next: Boolean;


## Описание


Метод Next осуществляет дальнейший
 поиск, и возвращает True в случае
 нахождения следующего значения.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    CellSearch: ITabCellSearch;

	    Result: ITabSearchResult;

	    s: String;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    Rep:=MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    CellSearch:=Tab.CreateCellSearch;

	    CellSearch.Text:="123";

	    Result:=CellSearch.Execute;

	    If Result<>Null Then

	        i:=i+1;

	        s:=s+Result.Range.Address+" ";

	        Repeat

	        If Result.Next Then

	            i:=i+1;

	            s:=s+Result.Range.Address+" ";

	        Else

	            Break

	        End If;

	        Until False;

	        Else

	        s:="Значение не найдено"

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск по ячейкам значения
 «123». При положительном результате поиска переменная «i» будет содержать
 количество найденных ячеек, переменная «s» будет содержать адреса найденных
 ячеек, разделенные пробелом.


См. также:


[ITabSearchResult](ITabSearchResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

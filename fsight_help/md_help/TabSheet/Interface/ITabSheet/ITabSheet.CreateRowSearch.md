# ITabSheet.CreateRowSearch

ITabSheet.CreateRowSearch
-


# ITabSheet.CreateRowSearch


## Синтаксис


CreateRowSearch: [ITabRowSearch](../ITabRowSearch/ITabRowSearch.htm);


## Описание


Метод CreateRowSearch позволяет
 создать объект, осуществляющий поиск строки в таблице.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    RowSearch: ITabRowSearch;

	    Result: ITabSearchResult;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab := Rep.ActiveSheet.Table;

	    RowSearch := Tab.CreateRowSearch;

	    RowSearch.AddCondition(0, "2", False, True);

	    RowSearch.AddCondition(1, "4", False, True);

	    Result := RowSearch.Execute;

	    If Result <> Null Then

	        i:=Result.CurrentRow;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск строки, содержащей
 в первом столбце значение "2" и во втором - "4". В
 случае удачного поиска в переменной "i" будет содержаться номер
 найденной строки.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ITabSheet.CreateColumnSearch

ITabSheet.CreateColumnSearch
-


# ITabSheet.CreateColumnSearch


## Синтаксис


CreateColumnSearch: [ITabColumnSearch](../ITabColumnSearch/ITabColumnSearch.htm);


## Описание


Метод CreateColumnSearch позволяет
 создать объект, осуществляющий поиск столбца в таблице.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    ColumnSearch: ITabColumnSearch;

	    Result: ITabSearchResult;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Rep := MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab := (Rep.ActiveSheet As IPrxTable).TabSheet;

	    ColumnSearch := Tab.CreateColumnSearch;

	    ColumnSearch.AddCondition(0, "1", False, True);

	    ColumnSearch.AddCondition(1, "10", False, True);

	    Result := ColumnSearch.Execute;

	    If Result <> Null Then

	        i := Result.CurrentColumn;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск столбца, содержащего
 в первой строке значение "1" и во второй - "10. В случае
 удачного поиска в переменной "i" будет содержаться номер найденного
 столбца.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

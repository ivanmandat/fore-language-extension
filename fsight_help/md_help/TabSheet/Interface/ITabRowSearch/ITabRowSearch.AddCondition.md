# ITabRowSearch.AddCondition

ITabRowSearch.AddCondition
-


# ITabRowSearch.AddCondition


## Синтаксис


AddCondition(Column: Integer; Text: String; CaseSensitive:
 Boolean WholeWordsOnly: Boolean);


## Параметры


Column - номер столбца, по
 которому задается условие поиска.


Text - текст, который будет
 искаться в ячейках.


CaseSensitive - параметр, определяющий
 будет ли учитываться регистр символов при поиске.


WholeWordsOnly - параметр,
 определяющий будет ли искаться слово
 целиком.


## Описание


Метод AddCondition осуществляет
 добавление условия поиска.


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


[ITabRowSearch](ITabRowSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

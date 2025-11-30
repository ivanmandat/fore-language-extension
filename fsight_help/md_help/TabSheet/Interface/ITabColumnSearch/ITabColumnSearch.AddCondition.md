# ITabColumnSearch.AddCondition

ITabColumnSearch.AddCondition
-


# ITabColumnSearch.AddCondition


## Синтаксис


AddCondition(Row: Integer; Text: String; CaseSensitive:
 Boolean; WholeWordsOnly: Boolean);


## Параметры


Row - номер строки, по которой
 задается условие поиска.


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


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiTabSheet с наименованием «UiTabSheet1». «UiTabSheet1» является источником
 данных для компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    ColumnSearch: ITabColumnSearch;

	    Result: ITabSearchResult;

	    i: Integer;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    ColumnSearch := TSheet.CreateColumnSearch;

	    ColumnSearch.AddCondition(0, "1", False, True);

	    ColumnSearch.AddCondition(1, "10", False, True);

	    Result := ColumnSearch.Execute;

	    If Result <> Null Then

	        i := Result.CurrentColumn;

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет осуществлен поиск столбца, содержащего в
 первой строке значение "1" ,а во второй - "10. В случае
 удачного поиска в переменной «i» будет содержаться номер найденного столбца.


См. также:


[ITabColumnSearch](ITabColumnSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ITabCellSearch.WholeWordsOnly

ITabCellSearch.WholeWordsOnly
-


# ITabCellSearch.WholeWordsOnly


## Синтаксис


WholeWordsOnly: Boolean;


## Описание


Свойство WholeWordsOnly определяет,
 будет ли искаться слово целиком.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента TabSheetBox и компонента UiTabSheet с наименованием «UiTabSheet1», который является
 источником данных для компонента TabSheetBox.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    CellSearch: ITabCellSearch;

    Result: ITabSearchResult;

    i, j: Integer;

Begin

    TSheet := UiTabSheet1.TabSheet;

    CellSearch := TSheet.CreateCellSearch;

    CellSearch.Text := "цен";

    CellSearch.WholeWordsOnly := True;

    Result := CellSearch.Execute;

    If Result <> Null Then

        i := Result.CurrentRow;

        j := Result.CurrentColumn;

    End If;

End Sub Button1OnClick;


При нажатии кнопки будет осуществлен поиск по ячейкам значения «цен».
 Искаться будет только слово целиком. В случае удачного поиска в переменной
 «i» будет содержаться номер строки, а в «j» - номер столбца найденной
 ячейки.


См. также:


[ITabCellSearch](ITabCellSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

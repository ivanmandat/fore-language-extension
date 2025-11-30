# ITabCellSearch.RequiredStyle

ITabCellSearch.RequiredStyle
-


# ITabCellSearch.RequiredStyle


## Синтаксис


RequiredStyle: [ITabCellStyle](../ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство RequiredStyle определяет, по ячейкам с каким стилем будет производиться поиск.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента UiTabSheet с наименованием «UiTabSheet1», который является источником данных для компонента TabSheetBox.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        TSheet: ITabSheet;

        CellSearch: ITabCellSearch;

        Result: ITabSearchResult;

        i, j: Integer;

        Style: ITabCellStyle;

    Begin

        TSheet := UiTabSheet1.TabSheet;

        CellSearch := TSheet.CreateCellSearch;

        Style := New TabCellStyle.Create;

        Style.BackgroundColor := GxColor.FromName("Red");

        CellSearch.RequiredStyle := Style;

        Result := CellSearch.Execute;

        If Result <> Null Then

            i := Result.CurrentRow;

            j := Result.CurrentColumn;

        End If;

    End Sub Button1OnClick;


При нажатии на кнопку будет осуществлен поиск по ячейкам, имеющим красный фон. В случае удачного поиска в переменной «i» будет содержаться номер строки, а в «j» - номер столбца найденной ячейки.


См. также:


[ITabCellSearch](ITabCellSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

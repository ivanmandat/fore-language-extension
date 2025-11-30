# ITabCellSearch.Target

ITabCellSearch.Target
-


# ITabCellSearch.Target


## Синтаксис


Target: [TabCellSearchTarget](../../Enums/TabCellSearchTarget.htm);


## Описание


Свойство Target определяет,
 по каким свойствам ячейки будет осуществляться поиск.


## Комментарии


Свойство может принимать множественные значения, при этом поиск
 будет производиться по всем указанным в Target
 свойствам. По умолчанию значение свойства Target
 равно Value.


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней следующих компонентов:


	- кнопки с наименованием Button1;


	- компонента TabSheetBox;


	- компонента UiTabSheet
	 с наименованием UiTabSheet1, который является источником данных для
	 компонента TabSheetBox.


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        TSheet: ITabSheet;

        CellSearch: ITabCellSearch;

        Result: ITabSearchResult;

        i, j: Integer;

    Begin

        TSheet := UiTabSheet1.TabSheet;

        CellSearch := TSheet.CreateCellSearch;

        CellSearch.Target := TabCellSearchTarget.Formula Or TabCellSearchTarget.Text;

        Result := CellSearch.Execute;

        If Result <> Null Then

            i := Result.CurrentRow;

            j := Result.CurrentColumn;

        End If;

        End Sub Button1OnClick;


При нажатии кнопки будет осуществлен поиск по ячейкам, содержащим формулы
 и текст. В случае удачного поиска в переменной «i»
 будет содержаться номер строки, а в «j»
 - номер столбца найденной ячейки.


См. также:


[ITabCellSearch](ITabCellSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IPivotTable.DataRights

IPivotTable.DataRights
-


# IPivotTable.DataRights


## Синтаксис


DataRights(Row: Integer; Column: Integer): [CubeDataRights](KeCubes.chm::/Enums/CubeDataRights.htm);


## Параметры


Row. Индекс строки ячейки;


Column. Индекс столбца ячейки.


## Описание


Свойство доступно только для чтения.


Свойство DataRights возвращает
 права доступа на данные указанной ячейки.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox. В «UiErAnalyzer1» должен быть загружен экспресс-отчет.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    EaxAn: IEaxAnalyzer;

	    Pivot: IPivot;

	    Table: IPivotTable;

	    Col, Row: Integer;

	Begin

	    EaxAn := UiErAnalyzer1.ErAnalyzer;

	    Pivot := EaxAn.Pivot;

	    Pivot.CalculateDataRights := True;

	    Table := Pivot.ObtainTable;

	    Table.Edit;

	    For Col := 0 To Table.ColumnCount - 1 Do

	        For Row := 0 To Table.RowCount - 1 Do

	            If Table.DataRights(Row, Col) = CubeDataRights.ReadWrite Then

	                Table.Cell(Row, Col) := Math.RandBetweenI(0, 5);

	            End If;

	        End For;

	    End For;

	    Table.Post;

	    Pivot.Refresh;

	End Sub Button1OnClick;


После выполнения примера права доступа на данные в таблице будут рассчитаны.
 Данные в ячейках будут изменены, если к ним есть доступ для чтения и изменения.


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

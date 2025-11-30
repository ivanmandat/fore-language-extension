# ILanerTable.DataRights

ILanerTable.DataRights
-


# ILanerTable.DataRights


## Синтаксис


DataRights(Row: Integer; Column: Integer): [CubeDataRights](KeCubes.chm::/Enums/CubeDataRights.htm);


## Параметры


Row.
 Индекс строки;


Column.
 Индекс столбца.


## Описание


Свойство DataRights возвращает
 права доступа на данные указанной ячейки.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, MathFin, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Tbl: ILanerTable;

	    Col, Row: Integer;

	Begin

	    EaxAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := EaxAn.Laner;

	    Tbl := Laner.Execute;

	    Tbl.Edit;

	    For Col := 0 To Tbl.ColumnCount - 1 Do

	        For Row := 0 To Tbl.RowCount - 1 Do

	            If Tbl.DataRights(Row, Col) = CubeDataRights.ReadWrite Then

	                Tbl.Cell(Row, Col) := Math.RandBetweenI(0, 5);

	            End If;

	        End For;

	    End For;

	End Sub Button1OnClick;


После выполнения примера данные в ячейках таблицы будут изменены, если
 к ним есть доступ для чтения и изменения.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

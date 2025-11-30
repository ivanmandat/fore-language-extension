# ILanerTable.CellType

ILanerTable.CellType
-


# ILanerTable.CellType


## Синтаксис


CellType(Row: Integer; Column: Integer): [LnCellType](../../Enums/LnCellType.htm);


## Параметры


Row. Индекс
 строки;


Column.
 Индекс столбца.


## Описание


Свойство CellType возвращает
 тип указанной ячейки.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAnalyzer: IEaxAnalyzer;

	    Laner: ILaner;

	    Table: ILanerTable;

	    i: Integer;

	Begin

	    ErAnalyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAnalyzer.Laner;

	    Table := Laner.Execute;

	    i := Table.CellType(4, 0);

	    Select Case i

	        Case 0: WinApplication.InformationBox("Обыкновенная ячейка");

	        Case 1: WinApplication.InformationBox("Ячейка - источник данных для результирующего совмещенного ряда");

	    End Select;

	End Sub Button1OnClick;


После выполнения примера будет выведено сообщение о типе первой ячейки
 в таблице данных.


См. также:


[ILanerTable](ILanerTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

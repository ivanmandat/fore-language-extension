# ITabSheet.CellAddress

ITabSheet.CellAddress
-


# ITabSheet.CellAddress


## Синтаксис


CellAddress(Row: Integer; Column: Integer): String;


## Параметры


Row. Номер строки;


Column. Номер столбца.


## Описание


Свойство CellAddress возвращает
 адрес ячейки, координаты которой передаются в качестве входных параметров
 Row и Column.


## Комментарии


Допустимое значение параметра Row находится в диапазоне [0, [RowsCount](ITabSheet.RowsCount.htm)).
 Допустимое значение параметра Column находится в диапазоне [0, [ColumnsCount](ITabSheet.ColumnsCount.htm)).


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события «OnCellClick» для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


			Sub TabSheetBox1OnCellClick(Sender: Object; Args: ITabCellEventArgs);

Var

    TSheet: ITabSheet;

Begin

    TSheet := Args.TabSheet.Source.GetTabSheet;

    Debug.WriteLine(TSheet.CellAddress(Args.Row, Args.Column));

 End Sub TabSheetBox1OnCellClick;


После выполнения примера при нажатии на ячейку в таблице, в консоли
 будет выведен адрес выделенной ячейки.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

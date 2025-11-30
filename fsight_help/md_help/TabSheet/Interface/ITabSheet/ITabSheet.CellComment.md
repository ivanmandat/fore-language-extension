# ITabSheet.CellComment

ITabSheet.CellComment
-


# ITabSheet.CellComment


## Синтаксис


CellComment(Row: Integer; Column: Integer): String;


## Параметры


Row. Индекс строки. Допустимое
 значение параметра находится в диапазоне [0, [RowsCount](ITabSheet.RowsCount.htm)).


Column. Индекс столбца. Допустимое
 значение параметра находится в диапазоне [0, [ColumnsCount](ITabSheet.ColumnsCount.htm)).


## Описание


Свойство CellComment определяет
 комментарий к ячейке, находящейся в строке Row
 и столбце Column.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Rep:=MB.ItemById("Reg_rep").Bind As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    s:=Tab.CellComment(3,3);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться примечание
 к ячейке «D3».


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

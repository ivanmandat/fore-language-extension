# IEaxGrid.RowName

IEaxGrid.RowName
-


# IEaxGrid.RowName


## Синтаксис


RowName(Row: Integer): String;


## Параметры


Row. Номер
 строки.


## Описание


Свойство RowName возвращает
 наименование заголовка строки таблицы экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    s := Grid.RowName(Grid.TabSheet.RowsCount-1);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 заголовка последней строки таблицы. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

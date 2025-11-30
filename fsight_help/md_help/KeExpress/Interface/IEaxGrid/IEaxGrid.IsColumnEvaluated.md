# IEaxGrid.IsColumnEvaluated

IEaxGrid.IsColumnEvaluated
-


# IEaxGrid.IsColumnEvaluated


## Синтаксис


IsColumnEvaluated(Column: Integer): Boolean;


## Параметры


Column.
 Индекс столбца.


## Описание


Свойство IsColumnEvaluated возвращает
 True, если столбец с индексом,
 передаваемым посредством параметра Column,
 является вычисляемым.


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

	    If Grid.IsColumnEvaluated(Grid.TabSheet.ColumnsCount-1) Then

	        s := "Evaluated";

	    Else

	        s := "Don't Evaluated";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Evaluated»,
 если последний столбец таблицы является вычисляемым. Идентификатор экспресс-отчета
 - EXPRESS_REPORT.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

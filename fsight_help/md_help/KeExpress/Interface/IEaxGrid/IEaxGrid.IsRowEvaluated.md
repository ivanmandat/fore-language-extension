# IEaxGrid.IsRowEvaluated

IEaxGrid.IsRowEvaluated
-


# IEaxGrid.IsRowEvaluated


## Синтаксис


IsRowEvaluated(Row: Integer): Boolean;


## Параметры


Row. Номер
 строки.


## Описание


Свойство IsRowEvaluated возвращает
 True, если строка с индексом,
 передаваемым посредством параметра Row,
 является вычисляемой.


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

	    If Grid.IsRowEvaluated(Grid.TabSheet.RowsCount-1) Then

	        s := "Evaluated";

	    Else

	        s := "Don't Evaluated";

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Evaluated»,
 если последняя строка таблицы является вычисляемой. Идентификатор экспресс-отчета
 - EXPRESS_REPORT.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

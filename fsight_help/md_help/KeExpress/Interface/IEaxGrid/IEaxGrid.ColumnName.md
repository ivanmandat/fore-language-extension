# IEaxGrid.ColumnName

IEaxGrid.ColumnName
-


# IEaxGrid.ColumnName


## Синтаксис


ColumnName(Column: Integer): String;


## Параметры


Column. Номер столбца.


## Описание


Свойство ColumnName возвращает
 наименование заголовка столбца таблицы экспресс-отчета, индекс которой
 передается посредством параметра Column.


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

	    s := Grid.ColumnName(Grid.TabSheet.ColumnsCount-1);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 заголовка последнего столбца таблицы. Идентификатор экспресс-отчета -
 EXPRESS_REPORT.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IEaxAnalyzeCore.Grid

IEaxAnalyzeCore.Grid
-


# IEaxAnalyzeCore.Grid


## Синтаксис


Grid: [IEaxGrid](../IEaxGrid/IEaxGrid.htm);


## Описание


Свойство Grid возвращает объект,
 содержащий таблицу экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	Begin

	    MB:=MetabaseClass.Active;

	    Expr:=MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Grid:=Expr.Grid;

	End Sub UserProc;


После выполнения примера в переменной «Grid» будет содержаться таблица
 экспресс-отчета. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

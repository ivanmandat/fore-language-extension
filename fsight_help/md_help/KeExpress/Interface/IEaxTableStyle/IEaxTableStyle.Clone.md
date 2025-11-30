# IEaxTableStyle.Clone

IEaxTableStyle.Clone
-


# IEaxTableStyle.Clone


## Синтаксис


Clone: [IEaxTableStyle](IEaxTableStyle.htm);


## Описание


Метод Clone создает копию оформления
 таблицы экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style, CloneStyle: IEaxTableStyle;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    CloneStyle := Style.Clone;

	End Sub UserProc;


После выполнения примера в переменной «CloneStyle» будет содержаться
 копия оформления таблицы экспресс-отчета. Идентификатор экспресс-отчета
 - EXPRESS_REPORT.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

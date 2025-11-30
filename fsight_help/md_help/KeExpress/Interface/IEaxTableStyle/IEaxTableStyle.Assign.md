# IEaxTableStyle.Assign

IEaxTableStyle.Assign
-


# IEaxTableStyle.Assign


## Синтаксис


Assign(Value: [IEaxTableStyle](IEaxTableStyle.htm));


## Описание


Метод Assign осуществляет установку
 стиля оформления таблицы экспресс-отчета в соответствии со стилем оформления,
 передаваемого посредством параметра Value.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr, Expr1: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Expr1 := MB.ItemById("EXPRESS_REPORT1").Bind As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    Style.Assign(Expr1.Grid.Style);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера стиль оформления таблицы экспресс-отчета с
 идентификатором EXPRESS_REPORT будет установлен в соответствии со стилем
 оформления экспресс-отчета с идентификатором EXPRESS_REPORT1.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

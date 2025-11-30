# IEaxAnalyzer.Name

IEaxAnalyzer.Name
-


# IEaxAnalyzer.Name


## Синтаксис


Name: String;


## Описание


Свойство Name возвращает наименование
 экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    s := Expr.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 экспресс-отчета. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxAnalyzer](IEaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IEaxAnalyzer.Options

IEaxAnalyzer.Options
-


# IEaxAnalyzer.Options


## Синтаксис


Options: [IEaxAnalyzerOptions](../IEaxAnalyzerOptions/IEaxAnalyzerOptions.htm);


## Описание


Свойство Options возвращает
 параметры экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Option: IEaxAnalyzerOptions;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Option := Expr.Options;

	End Sub UserProc;


После выполнения примера в переменной «Option» будут содержаться параметры
 экспресс-отчета. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxAnalyzer](IEaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

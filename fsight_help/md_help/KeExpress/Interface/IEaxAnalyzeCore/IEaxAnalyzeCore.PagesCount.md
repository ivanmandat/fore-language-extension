# IEaxAnalyzeCore.PagesCount

IEaxAnalyzeCore.PagesCount
-


# IEaxAnalyzeCore.PagesCount


## Синтаксис


PagesCount: Integer;


## Описание


Свойство PagesCount возвращает
 количество страниц, которое получится при печати с текущими настройками
 параметров страницы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    i := Expr.PagesCount;

	End Sub UserProc;


После выполнения примера в переменной будет содержаться количество страниц,
 полученных при печати экспресс-отчета. Идентификатор экспресс-отчета -
 EXPRESS_REPORT.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

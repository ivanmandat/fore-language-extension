# IEaxAnalyzeCore.TitleBar

IEaxAnalyzeCore.TitleBar
-


# IEaxAnalyzeCore.TitleBar


## Синтаксис


TitleBar: [IEaxTitle](../IEaxTitle/IEaxTitle.htm);


## Описание


Свойство TitleBar возвращает
 параметры заголовка экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Title: IEaxTitle;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Title := Expr.TitleBar;

	End Sub UserProc;


После выполнения примера в переменной «Title» будут содержаться параметры
 заголовка экспресс-отчета. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

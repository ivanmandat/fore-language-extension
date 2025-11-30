# IExAnalyzerExporter.AutoHeight

IExAnalyzerExporter.AutoHeight
-


# IExAnalyzerExporter.AutoHeight


## Синтаксис


AutoHeight: Boolean;


## Описание


Свойство AutoHeight определяет
 признак автоматического подгона высоты строк при экспорте в формат HTML
 (*.html).


## Комментарии


Если свойству установлено значение True,
 то при экспорте будет осуществляться автоматический подгон высоты строк.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    ExpExspr: IExAnalyzerExporter;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    ExpExspr := New ExAnalyzerExporter.Create;

	    ExpExspr.ExAnalyzer := Expr;

	    ExpExspr.AutoHeight := True;

	    ExpExspr.ExportToFile("c:\"+ Expr.Name + ".HTML", "HTML");

	End Sub UserProc;


После выполнения примера экспресс-отчет будет экспортирован в формат
 HTML. При экспорте будет производиться автоматический подгон высоты строк.
 Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IExAnalyzerExporter](IExAnalyzerExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

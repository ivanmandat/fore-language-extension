# IEaxAnalyzeCore.PageSettings

IEaxAnalyzeCore.PageSettings
-


# IEaxAnalyzeCore.PageSettings


## Синтаксис


PageSettings: [IGxPageSettings](ModDrawing.chm::/Interface/IGxPageSettings/IGxPageSettings.htm);


## Описание


Свойство PageSettings возвращает
 настройки страниц экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    PageSet: IGxPageSettings;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    PageSet := Expr.PageSettings;

	End Sub UserProc;


После выполнения примера в переменной «PageSet» будут содержаться настройки
 страниц экспресс-отчета. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

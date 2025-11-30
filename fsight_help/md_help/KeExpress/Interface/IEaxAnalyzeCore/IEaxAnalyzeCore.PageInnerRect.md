# IEaxAnalyzeCore.PageInnerRect

IEaxAnalyzeCore.PageInnerRect
-


# IEaxAnalyzeCore.PageInnerRect


## Синтаксис


PageInnerRect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);


## Описание


Свойство PageInnerRect возвращает
 объект, содержащий внутреннюю область страницы с учетом полей.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    w, h: Double;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    h := Expr.PageInnerRect.Height;

	    w := Expr.PageInnerRect.Width;

	End Sub UserProc;


После выполнения примера в переменных «w» и «h» будет содержаться ширина
 и высота рабочей области страницы за вычетом полей. Идентификатор экспресс-отчета
 - EXPRESS_REPORT.


См. также:


[IEaxAnalyzeCore](IEaxAnalyzeCore.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

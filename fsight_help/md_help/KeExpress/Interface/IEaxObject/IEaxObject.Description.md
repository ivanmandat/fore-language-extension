# IEaxObject.Description

IEaxObject.Description
-


# IEaxObject.Description


## Синтаксис


Description: String;


## Описание


Свойство Description возвращает
 описание объекта экспресс-отчета.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Object: IEaxObject;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Object := Expr.ViewOrder(0);

	    s := Object.Description;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться описание
 первого объекта экспресс-отчета. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

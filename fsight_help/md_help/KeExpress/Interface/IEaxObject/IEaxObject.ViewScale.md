# IEaxObject.ViewScale

IEaxObject.ViewScale
-


# IEaxObject.ViewScale


## Синтаксис


ViewScale: Double;


## Описание


Свойство ViewScale определяет
 масштаб отображения окна объекта в экспресс-отчете.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Object: IEaxObject;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Object := Expr.ViewOrder(0);

	    Object.ViewScale := 1.5;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для первого объекта экспресс-отчета будет установлен
 масштаб отображения - 150%. Идентификатор экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

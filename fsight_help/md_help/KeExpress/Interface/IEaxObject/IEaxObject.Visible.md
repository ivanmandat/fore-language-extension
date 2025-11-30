# IEaxObject.Visible

IEaxObject.Visible
-


# IEaxObject.Visible


## Синтаксис


Visible: Boolean;


## Описание


Свойство Visible определяет,
 будет ли объект отображаться в окне экспресс-отчета и печататься на принтере.


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

	    Object.Visible := False;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера объект с индексом «0» не будет отображаться
 в окне экспресс-отчета и не будет печататься на принтере. Идентификатор
 экспресс-отчета - EXPRESS_REPORT.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

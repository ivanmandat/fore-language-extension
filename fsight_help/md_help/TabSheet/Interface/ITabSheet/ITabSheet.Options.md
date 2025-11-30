# ITabSheet.Options

ITabSheet.Options
-


# ITabSheet.Options


## Синтаксис


Options: [ITabOptions](../ITabOptions/ITabOptions.htm);


## Описание


Свойство Options возвращает
 объект, содержащий параметры таблицы.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Rep: IPrxReport;

	    Tab: ITabSheet;

	    Opt: ITabOptions;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("Reg_rep").Edit;

	    Rep:=MObj As IPrxReport;

	    Tab:=Rep.ActiveSheet.Table;

	    Opt:=Tab.Options;

	    Opt.AutoPercentEntry:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет включена опция «Автоматический ввод процентов»
 активного листа регламентного отчета.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

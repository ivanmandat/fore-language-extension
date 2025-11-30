# ITabOptions.CopyFormulasOnRowColumnInsertion

ITabOptions.CopyFormulasOnRowColumnInsertion
-


# ITabOptions.CopyFormulasOnRowColumnInsertion


## Синтаксис


CopyFormulasOnRowColumnInsertion: Boolean;


## Описание


Свойство CopyFormulasOnRowColumnInsertion
 определяет состояние опции «Копировать формулы при вставке строк/столбцов».


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

	    Opt.CopyFormulasOnRowColumnInsertion:=True;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет включена опция «Копировать формулы при
 вставке строк/столбцов» активного листа регламентного отчета. Идентификатор
 регламентного отчета - «Reg_rep».


См. также:


[ITabOptions](ITabOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

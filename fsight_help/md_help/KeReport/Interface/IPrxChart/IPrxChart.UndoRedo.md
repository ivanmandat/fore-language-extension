# IPrxChart.UndoRedo

IPrxChart.UndoRedo
-


# IPrxChart.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo определяет
 параметры стека изменений (отмены/повтора) диаграммы регламентного отчета.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Report: IPrxReport;

	    OBJUnRed: IUndoRedo;

	Begin

	    MB := MetabaseClass.Active;

	    MObj:= MB.ItemById("REPORT").Edit;

	    Report := MObj As IPrxReport;

	    OBJUnRed:= ((Report.ActiveSheet as ITabSheet).Objects.Item(0).Extension As IPrxChart).UndoRedo;

	    OBJUnRed.Enabled:= True;

	    OBJUnRed.Limit:= 100;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для диаграммы будет доступен стек изменений
 с ограничением по количеству операций отмены/повтора = 100 действий.


См. также:


[IPrxChart](IPrxChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

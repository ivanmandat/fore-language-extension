# IPrxReport.UndoRedo

IPrxReport.UndoRedo
-


# IPrxReport.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo определяет
 параметры стека изменений (отмены/повтора) регламентного отчета.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «Report».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    UnRed: IUndoRedo;

Begin

    MB := MetabaseClass.Active;

    MObj:= MB.ItemById("Report").Edit;

    Report := MObj As IPrxReport;

    UnRed:= Report.UndoRedo;

    UnRed.Enabled:= True;

    UnRed.Limit:= 100;

    MObj.Save;

End Sub UserProc;


После выполнения примера для стека отчета будет установлено ограничение
 по количеству операций отмены/повтора = 100 действий.


См. также:


[IPrxReport](IPrxReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

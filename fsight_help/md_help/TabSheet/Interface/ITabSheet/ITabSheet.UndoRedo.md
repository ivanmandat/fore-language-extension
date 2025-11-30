# ITabSheet.UndoRedo

ITabSheet.UndoRedo
-


# ITabSheet.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo определяет параметры стека изменений (отмены/повтора) таблицы.


## Пример


Для выполнения примера предполагается наличие регламентного отчета с идентификатором «Report».


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    TUnRed: IUndoRedo;

Begin

    MB:= MetabaseClass.Active;

    MObj:= MB.ItemById("Report").Edit;

    Report:= MObj As IPrxReport;

    TUnRed:= (Report.ActiveSheet As ITabSheet).UndoRedo;

    TUnRed.Enabled:= True;

    TUnRed.Limit:= 100;

    MObj.Save;

End Sub UserProc;


После выполнения примера для таблицы будет доступен стек изменений с ограничением по количеству операций отмены/повтора = 100 действий.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

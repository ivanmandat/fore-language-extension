# IAdhocReport.UndoRedo

IAdhocReport.UndoRedo
-


# IAdhocReport.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo определяет
 параметры стека изменений (отмены/повтора) аналитической панели.


## Пример


Для выполнения примера предполагается наличие аналитической панели с
 идентификатором «OBJ_ADHOC».


Добавьте ссылки на системные сборки «Metabase», «Adhoc».


			Sub UserProc;

Var

    mb: IMetabase;

    repObj: IMetabaseObject;

    report: IAdhocReport;

    UnRed: IUndoRedo;

Begin

    mb := MetabaseClass.Active;

    repObj := mb.ItemById("OBJ_ADHOC").Edit;

    report := repObj As IAdhocReport;

    // Задаем стек изменений

    UnRed := report.UndoRedo;

    // Задаем параметры стека изменений: доступность и количество изменений.

    UnRed.Enabled := True;

    UnRed.Limit := 20;

    // Сохраняем изменения.

    repObj.Save;

End Sub UserProc;


После выполнения примера для стека изменений отчета будет установлено
 ограничение по количеству операций отмены/повтора = 20 действий.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

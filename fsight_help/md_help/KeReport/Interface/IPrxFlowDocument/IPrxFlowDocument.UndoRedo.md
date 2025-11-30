# IPrxFlowDocument.UndoRedo

IPrxFlowDocument.UndoRedo
-


# IPrxFlowDocument.UndoRedo


## Синтаксис


UndoRedo: [IUndoRedo](ForeSys.chm::/Interface/IUndoRedo/IUndoRedo.htm);


## Описание


Свойство UndoRedo определяет
 параметры стека изменений (отмены/повтора) объекта регламентного отчета
 - «Форматированный текст».


## Пример


Для выполнения примера предполагается наличие текстового блока в регламентном
 отчете с идентификатором «REGULAR_REPORT». Подключите системные сборки:
 Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Report: IPrxReport;

    DUnRed: IUndoRedo;

    TS: ITabSheet;

    FlowDocument: IPrxFlowDocument;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("REGULAR_REPORT").Edit;

    Report := MObj As IPrxReport;

    TS := (Report.ActiveSheet As IPrxTable).TabSheet;

    FlowDocument := TS.Objects.Item(0).Extension As IPrxFlowDocument;

    DUnRed := FlowDocument.UndoRedo;

    DUnRed.Enabled := True;

    DUnRed.Limit := 3;

    MObj.Save;

End Sub UserProc;


После выполнения примера для текстового блока будет доступен стек изменений
 с ограничением по количеству операций отмены/повтора = 3 действия.


См. также:


[IPrxFlowDocument](IPrxFlowDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

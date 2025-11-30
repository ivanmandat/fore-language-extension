# IPrxReportOptions.ControlPanelPosition

IPrxReportOptions.ControlPanelPosition
-


# IPrxReportOptions.ControlPanelPosition


## Синтаксис


ControlPanelPosition: [PrxControlPanelPosition](../../Enums/PrxControlPanelPosition.htm);


## Описание


Свойство ControlPanelPosition
 определяет положение панели элементов управления.


## Комментарии


Для определения видимости панели элементов управления используйте свойство
 [IPrxReportOptions.ControlPanelVisible](IPrxReportOptions.ControlPanelVisible.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REPORT».


Добавьте ссылку на системные сборки Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    MOBj: IMetabaseObject;

    Report: IPrxReport;

    Options: IPrxReportOptions;

Begin

    MB := MetabaseClass.Active;

    MOBj := MB.ItemById("REPORT").Edit;

    Report := MOBj As IPrxReport;

    Options := Report.Options;

    Options.ControlPanelVisible := True;

    Options.ControlPanelPosition := PrxControlPanelPosition.Left;

    MOBj.Save;

End Sub UserProc;


После выполнения примера панель «Элементы
 управления» будет располагаться вертикально по левой границе отчета.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

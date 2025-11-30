# IPrxReportOptions.FootnotePanelOptions

IPrxReportOptions.FootnotePanelOptions
-


# IPrxReportOptions.FootnotePanelOptions


## Синтаксис


FootnotePanelOptions: [ITabFootnotesPanelOptions](TabSheet.chm::/Interface/ITabFootnotesPanelOptions/ITabFootnotesPanelOptions.htm);


## Описание


Свойство FootnotePanelOptions
 возвращает параметры расположения панели со сносками.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «REGULAR_REPORT».


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    FootnotePanel: ITabFootnotesPanelOptions;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    FootnotePanel := Report.Options.FootnotePanelOptions;

    FootnotePanel.Position := BarDockingEdge.Bottom;

    FootnotePanel.PercentHeight := 15;

    Report.MetabaseObject.Save;

End Sub UserProc;


При выполнении примера будут изменены параметры расположения панели
 со сносками: панель будет располагаться ниже таблицы и занимать пятнадцать
 процентов от доступной области таблицы.


См. также:


[IPrxReportOptions](IPrxReportOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IEaxGrid.FootnotePanelOptions

IEaxGrid.FootnotePanelOptions
-


# IEaxGrid.FootnotePanelOptions


## Синтаксис


FootnotePanelOptions: [ITabFootnotesPanelOptions](TabSheet.chm::/Interface/ITabFootnotesPanelOptions/ITabFootnotesPanelOptions.htm);


## Описание


Свойство FootnotePanelOptions
 возвращает параметры расположения панели со сносками.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    FootnotePanel: ITabFootnotesPanelOptions;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    FootnotePanel := Express.Grid.FootnotePanelOptions;

	    FootnotePanel.Position := BarDockingEdge.Bottom;

	    FootnotePanel.PercentHeight := 15;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будут изменены параметры расположения панели
 со сносками: панель будет располагаться ниже таблицы и занимать пятнадцать
 процентов от доступной области таблицы.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

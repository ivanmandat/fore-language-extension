# IEaxGrid.CreateAttachmentsPluginContext

IEaxGrid.CreateAttachmentsPluginContext
-


# IEaxGrid.CreateAttachmentsPluginContext


## Синтаксис


CreateAttachmentsPluginContext(Row: Integer; Column:
 Integer): [IEaxAttachmentsPluginContext](../IEaxAttachmentsPluginContext/IEaxAttachmentsPluginContext.htm);


## Параметры


Row. Индекс строки ячейки;


Column. Индекс столбца ячейки.


## Описание


Метод CreateAttachmentsPluginContext
 создаёт контекст для работы с вложениями ячейки.


## Комментарии


Полученный контекст указывается в качестве значения свойства [IUiCommandExecutionContext.Data](UiLib.chm::/Interface/IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm)
 при работе с командой [ShowAttachmentsDialog](UiLib.chm::/Interface/IUiCommandTarget/Command/ShowAttachmentsDialog.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT. Источник данных для экспресс-отчёта
 имеет настройки для работы со вложениями.


Добавьте ссылки на системные сборки: Express, Metabase, Ui.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    EaxContext: IEaxAttachmentsPluginContext;

	    Grid: IEaxGrid;

	Begin

	    MB := MetabaseClass.Active;

	    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Grid := Eax.Grid;

	    EaxContext := Eax.Grid.CreateAttachmentsPluginContext(5, 5);

	    Context.Data := EaxContext;

	    Target.Execute("ShowAttachmentsDialog", Context);

	    (Eax As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера для указанной ячейки будет вызван диалог работы
 с вложениями. После завершения работы со вложениями экспресс-отчёт будет
 сохранён.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

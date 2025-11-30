# ShowAttachmentsDialog

ShowAttachmentsDialog
-


# Команда ShowAttachmentsDialog


## Назначение


Вызов стандартного диалога для работы с вложениями ячейки.


## Параметры использования


Параметры команды передаются в свойстве [IUiCommandExecutionContext.Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IEaxAttachmentsPluginContext](KeExpress.chm::/Interface/IEaxAttachmentsPluginContext/IEaxAttachmentsPluginContext.htm)
		 Контекст, определяющий для какой ячейки вызывается диалог.
		 Контекст создаётся с помощью метода [IEaxGrid.CreateAttachmentsPluginContext](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.CreateAttachmentsPluginContext.htm).


## Особенности применения


Команда применяется для ячейки таблицы, в которой располагается аналитическая
 область данных. Источник, на котором построена аналитическая область данных,
 должен иметь настройки для работы с вложениями ([IStandardCubeDestination.AttachmentsStorage](KeCubes.chm::/Interface/IStandardCubeDestination/IStandardCubeDestination.AttachmentsStorage.htm)).


Результатом выполнения команды будет логическое значение True,
 если в диалоге была нажата кнопка «Закрыть» и False,
 если диалог был закрыт с помощью кнопки с крестиком в заголовке или по
 клавише ESC.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором «EXPRESS_REPORT». Источник данных для экспресс-отчёта
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


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

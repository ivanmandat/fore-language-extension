# ShowExportPropSetup

ShowExportPropSetup
-


# Команда ShowExportPropSetup


## Назначение


Вызов диалога настройки параметров экспорта в задаче вычисления регламентного отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm). Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат следующие значения:


 Тип значения
 Описание


 Элемент 1: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
 Регламентный отчет, для работы с которым настроена задача вычисления регламентного отчета.


 Элемент 2: String
 Формат сохранения результатов вычисления отчета. Допустимые значения:


- rtf. Документ в формате RTF.

- xls. Книга Excel.

- pdf. Документ PDF.

- emf. Файл в формате EMF.

- mht. Веб-страница полностью.

- ppreport. Экспортированный регламентный отчет в формате ppreport.

- ods. Электронная таблица OpenDocument.


 Элемент 3: [IPrxReportExporter](KeReport.chm::/Interface/IPrxReportExporter/IPrxReportExporter.htm)
 Параметры экспорта.


## Особенности применения


Команда может применяться только для задач вычисления регламентного отчета. Результатом выполнения команды будет логическое значение True, если была нажата кнопка «ОК» и False, если была нажата кнопка «Отмена». Если была нажата кнопка «ОК», то измененные параметры экспорта автоматически будут сохранены в задаче.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера запланированных задач с идентификатором «TASK_CONTAINTER». Первая задача контейнера осуществляет вычисление регламентного отчета.


			Sub UserProc;

Var

    MB: IMetabase;

    TaskContainer: IScheduledTasksContainer;

    ReportTask: ICalculateReportScheduledTask;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

Begin

    MB := MetabaseClass.Active;

    TaskContainer := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

    ReportTask := TaskContainer.Tasks.Item(0).Bind As ICalculateReportScheduledTask;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[3];

    Data[0] := ReportTask.SourceReport;

    Data[1] := ReportTask.FormatTag;

    Data[2] := New PrxReportExporter.Create;

    Context.Data := Data;

    Target.Execute("ShowExportPropSetup", Context);

End Sub UserProc;


При выполнении примера будет выведен диалог настройки параметров экспорта для задачи вычисления регламентного отчета. После изменения и нажатия кнопки «ОК» параметры экспорта будут сохранены в задаче.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

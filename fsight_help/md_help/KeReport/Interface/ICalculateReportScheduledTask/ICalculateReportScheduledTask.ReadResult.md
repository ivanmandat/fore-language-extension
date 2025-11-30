# ICalculateReportScheduledTask.ReadResult

ICalculateReportScheduledTask.ReadResult
-


# ICalculateReportScheduledTask.ReadResult


## Синтаксис


ReadResult(TaskResult: [IScheduledTaskResult](KeFore.chm::/Interface/IScheduledTaskResult/IScheduledTaskResult.htm);
 [Report: [IPrxReport](../IPrxReport/IPrxReport.htm) = Null]):
 [IPrxReport](../IPrxReport/IPrxReport.htm);


## Параметры


TaskResult. Задача контейнера;


Report. Отчёт, в который будет
 загружен результат вычисления задачи.


## Описание


Метод ReadResult получает результат
 вычисления задачи в виде отчёта и также позволяет загрузить результат
 в указанный отчёт.


## Комментарии


Данный метод используется, если не был указан формат сохранения результата
 вычисления задачи. Формат сохранения указывается в свойстве [ICalculateReportScheduledTask.FormatTag](ICalculateReportScheduledTask.FormatTag.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором TASK_CONTAINER. Первая задача
 контейнера осуществляет вычисление регламентного отчёта.


Добавьте ссылки на системные сборки: Fore, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    obj: IMetabaseObject;

	    Cont: IScheduledTasksContainer;

	    Exe: ICalculateReportScheduledTask;

	    Report: IPrxReport;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим задачу из контейнера

	    Cont := MB.ItemById("TASK_CONTAINER").Bind As IScheduledTasksContainer;

	    Exe := Cont.Tasks.Item(0).Bind As ICalculateReportScheduledTask;

	    // Получим результат

	    Report := Exe.ReadResult(Exe.GetResults.Item(0));

	    If Report = Null Then

	        Debug.WriteLine("Нет результата.");

	        Else

	        Debug.WriteLine(Report);

	    End If;

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен результат
 выполнения задачи.


См. также:


[ICalculateReportScheduledTask](ICalculateReportScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

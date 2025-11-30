# ICalculateReportScheduledTask.Printer

ICalculateReportScheduledTask.Printer
-


# ICalculateReportScheduledTask.Printer


## Синтаксис


Printer: String;


## Описание


Свойство Printer определяет
 принтер, на котором будет распечатан регламентный отчет после вычисления.


## Комментарии


В качестве значения данного свойства необходимо указать наименование
 принтера в следующем формате: <Server>\<Printer>.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором «TASK_CONTAINTER». Первая задача
 контейнера осуществляет вычисление регламентного отчета. Также предполагается
 наличие в локальной сети сервера печати «PrinSrv», к которому подключен
 принтер с наименованием «HP_Floor1».


			Sub UserProc;

Var

    MB: IMetabase;

    TaskContainer: IScheduledTasksContainer;

    CalcReportTask: ICalculateReportScheduledTask;

Begin

    MB := MetabaseClass.Active;

    TaskContainer := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

    CalcReportTask := TaskContainer.Tasks.Item(0).Edit As ICalculateReportScheduledTask;

    CalcReportTask.Printer := "PrinSrv\HP_Floor1";

    (CalcReportTask As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будут изменены параметры задачи вычисления регламентного
 отчета. После выполнения задачи вычисленные отчет будет печататься на
 указанном принтере.


См. также:


[ICalculateReportScheduledTask](ICalculateReportScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

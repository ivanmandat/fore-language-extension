# IMDCalculationScheduledTask.LoadCalculationArgs

IMDCalculationScheduledTask.LoadCalculationArgs
-


# IMDCalculationScheduledTask.LoadCalculationArgs


## Синтаксис


LoadCalculationArgs(Value: [IMDCalculationCalculateArgs](../IMDCalculationCalculateArgs/IMDCalculationCalculateArgs.htm)):
 [IMDCalculationCalculateArgs](../IMDCalculationCalculateArgs/IMDCalculationCalculateArgs.htm);


## Параметры


Value. Параметры выполнения
 многомерного расчета на сервере БД.


## Описание


Метод LoadCalculationArgs возвращает
 параметры выполнения многомерного расчета.


## Комментарии


В качестве параметра Value
 необходимо передавать объект, создать которой можно при помощи метода
 [IMDCalculationInstance.CreateCalculateArgs](../IMDCalculationInstance/IMDCalculationInstance.CreateCalculateArgs.htm).


Для установки параметров многомерного расчета используйте свойство [IMDCalculationScheduledTask.SetCalculationArgs](IMDCalculationScheduledTask.SetCalculationArgs.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 запланированных задач с идентификатором Scheduled_Tasks_Cont. В данном
 контейнере должна располагаться только задача выполнения многомерного
 расчета на сервере БД.


Добавьте ссылки на системные сборки: Cube, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    ScheduledTaskCont: IScheduledTasksContainer;

    TaskObj: IMetabaseObject;

    MDCalc: IMDCalculation;

    MDCalcTask: IMDCalculationScheduledTask;

    MDCalcDescr: IMetabaseObjectDescriptor;

    CalcArgs: IMDCalculationCalculateArgs;

    MDTabInst: IMDCalculationInstance;

Begin

    Mb := MetabaseClass.Active;

    ScheduledTaskCont := MB.ItemById("Scheduled_Tasks_Cont").Bind As IScheduledTasksContainer;

    TaskObj := ScheduledTaskCont.Tasks.Item(0).Edit;

    MDCalcTask := TaskObj As IMDCalculationScheduledTask;

    MDCalc := MDCalcTask.SourceCalculation;

    MDCalcDescr := MDCalc As IMetabaseObjectDescriptor;

    MDTabInst := MDCalcDescr.Open(Null) As IMDCalculationInstance;

    CalcArgs := MDTabInst.CreateCalculateArgs;

    CalcArgs := MDCalcTask.LoadCalculationArgs(CalcArgs);

    CalcArgs.CleanType := MDCalculateArgsCleanType.Existing;

    CalcArgs.UpdateType := MDCalculateArgsUpdateType.NotNull;

    CalcArgs.Recursion := TriState.OnOption;

    MDCalcTask.SetCalculationArgs(CalcArgs);

    TaskObj.Save;

End Sub UserProc;


После выполнения примера для задачи будут изменены параметры выполнения
 многомерного расчета на сервере БД.


См. также:


[IMDCalculationScheduledTask](IMDCalculationScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

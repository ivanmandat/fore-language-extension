# IMDCalculationScheduledTask.SourceCalculation

IMDCalculationScheduledTask.SourceCalculation
-


# IMDCalculationScheduledTask.SourceCalculation


## Синтаксис


SourceCalculation: [IMDCalculation](../IMDCalculation/IMDCalculation.htm);


## Описание


Свойство SourceCalculation определяет
 многомерный расчет на сервере БД, который необходимо выполнить.


## Комментарии


Для получения параметров многомерного расчета в уже существующей задаче
 используйте свойство [IMDCalculationScheduledTask.LoadCalculationArgs](IMDCalculationScheduledTask.LoadCalculationArgs.htm).


Для установки параметров многомерного расчета используйте свойство [IMDCalculationScheduledTask.SetCalculationArgs](IMDCalculationScheduledTask.SetCalculationArgs.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 запланированных задач с идентификатором Scheduled_Tasks_Cont и многомерного
 расчета на сервере БД с идентификатором MDCalc.


Добавьте ссылки на системные сборки: Cube, Fore, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CreateInfo: IMetabaseObjectCreateInfo;

    ScheduledTaskContObjD: IMetabaseObjectDescriptor;

    TaskObj: IMetabaseObject;

    Properties: IScheduledTaskProperties;

    PeriodTimeOnly: IScheduledTaskPeriodOneTimeOnly;

    MDCalc: IMDCalculation;

    MDCalcTask: IMDCalculationScheduledTask;

    MDCalcDescr: IMetabaseObjectDescriptor;

    CalcArgs: IMDCalculationCalculateArgs;

    MDTabInst: IMDCalculationInstance;

Begin

    Mb := MetabaseClass.Active;

    // Создаем задачу

    CreateInfo := MB.CreateCreateInfo;

    CreateInfo.Permanent := True;

    ScheduledTaskContObjD := MB.ItemById("Scheduled_Tasks_Cont");

    CreateInfo.Parent := ScheduledTaskContObjD;

    CreateInfo.ClassId := MetabaseObjectClass.KE_CLASS_TASK_CALCULATEMDCALCULATION;

    CreateInfo.Id := MB.GenerateId("MDCalcScheduledTask");

    CreateInfo.Name := "Выполнение многомерного расчета на сервере БД";

    TaskObj := MB.CreateObject(CreateInfo).Edit;

    MDCalcTask := TaskObj As IMDCalculationScheduledTask;

    // Задаем выполняемый многомерный расчет

    MDCalcDescr := MB.ItemById("MDCalc");

    MDCalc := MDCalcDescr.Bind As IMDCalculation;

    MDCalcTask.SourceCalculation := MDCalc;

    // Задаем параметры выполнения расчета

    MDTabInst := MDCalcDescr.Open(Null) As IMDCalculationInstance;

    CalcArgs := MDTabInst.CreateCalculateArgs;

    CalcArgs.CleanType := MDCalculateArgsCleanType.Existing;

    CalcArgs.UpdateType := MDCalculateArgsUpdateType.NotNull;

    CalcArgs.Recursion := TriState.OnOption;

    MDCalcTask.SetCalculationArgs(CalcArgs);

    // Задаем периодичность выполнения

    Properties := MDCalcTask.Properties;

    PeriodTimeOnly := Properties.CreatePeriod(ScheduledTaskPeriodType.OneTimeOnly) As IScheduledTaskPeriodOneTimeOnly;

    PeriodTimeOnly.StartMode := TaskPeriodOneTimeStartMode.Immediate; //Немедленно

    Properties.Period := PeriodTimeOnly;

    // Сохраняем задачу

    TaskObj.Save;

End Sub UserProc;


После выполнения примера в контейнере запланированных задач будет создана
 задача по выполнению многомерного расчета на сервере БД. Для созданной
 задачи будет задана периодичность выполнения и установлены параметры выполнения
 расчета.


См. также:


[IMDCalculationScheduledTask](IMDCalculationScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

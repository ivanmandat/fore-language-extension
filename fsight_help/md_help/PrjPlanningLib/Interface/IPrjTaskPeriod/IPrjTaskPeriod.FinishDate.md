# IPrjTaskPeriod.FinishDate

IPrjTaskPeriod.FinishDate
-


# IPrjTaskPeriod.FinishDate


## Синтаксис


FinishDate: [DateTime](foresys.chm::/class/datetime/datetime.htm);


## Описание


Свойство FinishDate определяет
 дату окончания задачи.


## Комментарии


При определении планируемого срока выполнения задачи данное свойство
 актуально, если используется [ручной
 тип планирования](../../Enums/PrjTaskWorkOutTypes.htm) и свойство [IPrjProject.UseStartDate](../IPrjProject/IPrjProject.UseStartDate.htm)
 принимает значение True.


## Пример


Для выполнения примера добавьте ссылку на системную сборку ProjectPlanning.


Sub UserProc;

Var

    Project: IPrjProject;

    Tasks: IPrjTaskCollection;

    Task: IPrjTask;

    Plan, FPeriod: IPrjTaskPeriod;

Begin

    Project := New PrjProject.Create;

    // Зададим дату начала проекта

    Project.StartDate := DateTime.Parse("20.02.2020");

    Project.UseStartDate := True;

    // Получим коллекцию задач проекта

    Tasks := Project.Tasks;

    // Добавим задачу

    Task := Tasks.Add;

    Task.WorkOutType := PrjTaskWorkOutTypes.ManualPlanning;

    Task.Key := 1;

    Task.Name := "№1";

    // Зададим продолжительность
 и дату окончания выполнения задачи

    Plan := Task.PlanPeriod;

    Plan.FinishDate := DateTime.Parse("29.02.2020");

    Plan.Duration := 7;

    // Выполним расчёт

    Project.Plan;

    FPeriod := Task.ForecastPeriod;

    Debug.WriteLine("Выполнение задачи " + Task.Name + " с " +

    FPeriod.StartDate.ToString + " по " + FPeriod.FinishDate.ToString +

    " (длительность: " + FPeriod.Duration.ToString + " дней)");

End Sub UserProc;


В результате выполнения примера будет выполнен расчёт проекта. Дата
 начала задачи будет определена с учётом заданной продолжительности и даты
 окончания задачи.


В консоль будет выведен результат расчёта:


Выполнение задачи №1 с 23.02.2020 00:00:00 по 29.02.2020
 00:00:00 (длительность: 7 дней)


См. также:


[IPrjTaskPeriod](IPrjTaskPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

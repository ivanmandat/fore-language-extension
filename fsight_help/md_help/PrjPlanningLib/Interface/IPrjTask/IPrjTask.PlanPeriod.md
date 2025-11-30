# IPrjTask.PlanPeriod

IPrjTask.PlanPeriod
-


# IPrjTask.PlanPeriod


## Синтаксис


PlanPeriod: [IPrjTaskPeriod](../IPrjTaskPeriod/IPrjTaskPeriod.htm);


## Описание


Свойство PlanPeriod определяет
 планируемый срок выполнения задачи.


## Комментарии


Если задан [фактический](IPrjTask.FactPeriod.htm) срок выполнения
 задачи, то планируемый срок не учитывается.


Данное свойство актуально, если используется [ручной
 тип планирования](../../Enums/PrjTaskWorkOutTypes.htm) и определены хотя бы два параметра из трех: продолжительность
 срока выполнения задачи, дата начала выполнения задачи, дата окончания
 задачи. Для определения параметров используйте свойства интерфейса [IPrjTaskPeriod](../IPrjTaskPeriod/IPrjTaskPeriod.htm). При
 расчёте проекта [прогнозируемый](IPrjTask.ForecastPeriod.htm)
 срок выполнения задачи будет совпадать с планируемым.


## Пример


Для выполнения примера добавьте ссылку на системную сборку ProjectPlanning.


		Sub UserProc;

		Var

		    Project: IPrjProject;

		    Tasks: IPrjTaskCollection;

		    Task: IPrjTask;

		    Depend: IPrjTaskDependency;

		    Plan, FPeriod: IPrjTaskPeriod;

		    i: Integer;

		Begin

		    Project := New PrjProject.Create;

		    // Зададим дату начала проекта

		    Project.StartDate := DateTime.Parse("20.02.2020");

		    // Получим коллекцию задач проекта

		    Tasks := Project.Tasks;

		    // Добавим первую задачу

		    Task := Tasks.Add;

		    Task.WorkOutType := PrjTaskWorkOutTypes.ManualPlanning;

		    Task.Key := 1;

		    Task.Name := "№1";

		    // Зададим планируемый срок выполнения задачи

		    Plan := Task.PlanPeriod;

		    Plan.StartDate := DateTime.Parse("22.02.2020");

		    Plan.Duration := 13;

		    // Добавим вторую задачу

		    Task := Tasks.Add;

		    Task.Key := 2;

		    Task.Name := "№2";

		    Task.PlanPeriod.Duration := 11;

		    Depend := Task.Dependencies.Add;

		    Depend.PredecessorTaskKey := 1;

		    Depend.Lag := 2;

		    // Выполним расчёт

		    Project.Plan;

		    Debug.WriteLine("Дата начала проекта: " + Project.StartDate.ToString);

		    For i := 0 To Tasks.Count - 1 Do

		        Task := Tasks.Item(i);

		        FPeriod := Task.ForecastPeriod;

		        Debug.WriteLine("  Выполнение задачи " + Task.Name + " с " +

		        FPeriod.StartDate.ToString + " по " + FPeriod.FinishDate.ToString +

		        " (длительность: " + FPeriod.Duration.ToString + " дней)");

		    End For;

		    Debug.WriteLine("Прогнозируемая дата окончания проекта: " + Project.EndDate.ToString);

		End Sub UserProc;


В результате выполнения примера будет выполнен расчёт проекта с учётом
 заданных условий:


	- дата начала первой задачи задана вручную и отличается от даты
	 начала проекта;


	- дата начала второй задачи зависит от даты окончания первой задачи
	 со смещением на два дня вперед.


В консоль будет выведен результат расчёта:


Дата начала проекта: 20.02.2020 00:00:00


  Выполнение задачи №1 с 22.02.2020 00:00:00
 по 05.03.2020 00:00:00 (длительность: 13 дней)


  Выполнение задачи №2 с 08.03.2020 00:00:00
 по 18.03.2020 00:00:00 (длительность: 11 дней)


Прогнозируемая дата окончания проекта: 18.03.2020
 00:00:00


См. также:


[IPrjTask](IPrjTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

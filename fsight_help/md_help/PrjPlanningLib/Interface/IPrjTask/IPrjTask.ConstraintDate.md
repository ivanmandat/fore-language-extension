# IPrjTask.ConstraintDate

IPrjTask.ConstraintDate
-


# IPrjTask.ConstraintDate


## Синтаксис


ConstraintDate: [DateTime](foresys.chm::/class/datetime/datetime.htm);


## Описание


Свойство ConstraintDate определяет
 дату ограничения выполнения задачи.


## Комментарии


Данное свойство актуально при использовании определенного [типа
 ограничения задачи по времени](../../Enums/PrjTaskConstraintType.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку ProjectPlanning.


Sub UserProc;

Var

    Project: IPrjProject;

    Tasks: IPrjTaskCollection;

    Task: IPrjTask;

    Depend: IPrjTaskDependency;

    FPeriod: IPrjTaskPeriod;

    i: Integer;

Begin

    Project := New PrjProject.Create;

    // Зададим дату начала проекта

    Project.StartDate := DateTime.Parse("20.02.2020");

    Project.UseStartDate := True;

    // Получим коллекцию задач проекта

    Tasks := Project.Tasks;

    // Добавим первую задачу

    Task := Tasks.Add;

    Task.Key := 1;

    Task.Name := "№1";

    Task.PlanPeriod.Duration := 7;

    Task.ConstraintType := PrjTaskConstraintType.StartNoEarlierThan;

    Task.ConstraintDate := DateTime.Parse("25.02.2020");

    // Добавим вторую задачу

    Task := Tasks.Add;

    Task.Key := 2;

    Task.Name := "№2";

    Task.PlanPeriod.Duration := 10;

    Depend := Task.Dependencies.Add;

    Depend.PredecessorTaskKey := 1;

    Depend.Type := PrjTaskDependencyType.FinishToFinish;

    // Выполним расчёт

    Project.Plan;

    For i := 0 To Tasks.Count - 1 Do

        Task := Tasks.Item(i);

        FPeriod := Task.ForecastPeriod;

        Debug.WriteLine("Выполнение задачи " + Task.Name + " с " +

        FPeriod.StartDate.ToString + " по " + FPeriod.FinishDate.ToString +

        " (длительность: " + FPeriod.Duration.ToString + " дней)");

    End For;

End Sub UserProc;


В результате выполнения примера будет выполнен расчёт проекта с учётом
 заданных условий:


	- выполнение первой задачи начинается не раньше заданной даты;


	- дата окончания второй задачи совпадает с датой окончания первой
	 задачи.


В консоль будет выведен результат расчёта:


Выполнение задачи №1 с 25.02.2020 00:00:00 по 02.03.2020
 00:00:00 (длительность: 7 дней)


Выполнение задачи №2 с 22.02.2020 00:00:00 по 02.03.2020
 00:00:00 (длительность: 10 дней)


См. также:


[IPrjTask](IPrjTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

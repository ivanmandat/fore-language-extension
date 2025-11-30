# IPrjProject.Contradictions

IPrjProject.Contradictions
-


# IPrjProject.Contradictions


## Синтаксис


Contradictions: [IPrjContradictionsCollection](../IPrjContradictionsCollection/IPrjContradictionsCollection.htm);


## Описание


Свойство Contradictions возвращает
 коллекцию расхождений срока выполнения задачи.


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

		    Contradiction: IPrjContradiction;

		    Collection: IPrjContradictionsCollection;

		    Dependency: String;

		Begin

		    Project := New PrjProject.Create;

		    // Получим коллекцию задач проекта

		    Tasks := Project.Tasks;

		    // Добавим первую задачу

		    Task := Project.Tasks.Add;

		    Task.Key := 1;

		    Task.Name := "Задача №1";

		    // Зададим планируемый срок выполнения задачи

		    Plan := Task.PlanPeriod;

		    Plan.Duration := 3;

		    Plan.StartDate := DateTime.Parse("08.02.2020");

		    Plan.FinishDate := DateTime.Parse("10.02.2020");

		    // Зададим ограничение по времени выполнения задачи

		    Task.ConstraintType := PrjTaskConstraintType.MustFinishOn;

		    Task.ConstraintDate := DateTime.Parse("10.02.2020");

		    // Добавим вторую задачу

		    Task := Project.Tasks.Add;

		    Task.Key := 2;

		    Task.Name := "Задача №2";

		    // Зададим планируемый срок выполнения задачи

		    Plan := Task.PlanPeriod;

		    Plan.Duration := 3;

		    Plan.StartDate := DateTime.Parse("11.02.2020");

		    Plan.FinishDate := DateTime.Parse("13.02.2020");

		    // Зададим ограничение по времени выполнения задачи

		    Task.ConstraintType := PrjTaskConstraintType.MustStartOn;

		    Task.ConstraintDate := DateTime.Parse("17.02.2020");

		    // Зададим связь между задачами

		    Depend := Task.Dependencies.Add;

		    Depend.PredecessorTaskKey := 1;

		    Depend.Type := PrjTaskDependencyType.FinishToStart;

		    // Выполним расчёт

		    Project.Plan;

		    // Выведем в консоль плановые и прогнозируемые сроки выполнения задач

		    For i := 0 To Tasks.Count - 1 Do

		        Task := Tasks.Item(i);

		        FPeriod := Task.ForecastPeriod;

		        Plan := Task.PlanPeriod;

		        Debug.WriteLine(Task.Name + ":");

		        Debug.WriteLine("  План: " + Plan.StartDate.ToString + " - " + Plan.FinishDate.ToString);

		        Debug.WriteLine("  Прогноз: " + FPeriod.StartDate.ToString + " - " + FPeriod.FinishDate.ToString);

		    End For;

		    Debug.WriteLine("=========");

		    // Определим расхождение срока выполнения задачи

		    Collection := Project.Contradictions;

		    If Collection.Count <> 0 Then

		        For i := 0 To Project.Contradictions.Count - 1 Do

		            Contradiction := Collection.Item(i);

		            Select Case  Contradiction.Dependency.Type As Integer

		                Case 0: Dependency := "окончание-начало";

		                Case 1: Dependency := "начало-начало";

		                Case 2:  Dependency := "финиш-финиш";

		                Case 3: Dependency := "начало-окончание";

		            End Select;

		            Debug.WriteLine("Задача-предшественник: " + Contradiction.Predecessor.Name);

		            Debug.WriteLine("Связь между задачами: " + Dependency);

		            Debug.WriteLine("Связанная задача: " + Contradiction.Follower.Name);

		            Debug.WriteLine("Расхождение срока: " + Contradiction.Difference.ToString + " дней");

		        End For;

		    End If;

		End Sub UserProc;


В результате выполнения примера будет выполнен расчёт проекта с учётом
 заданных условий:


	- первая задача должна быть завершена 10.02.2020;


	- вторая задача должна начаться 17.02.2020;


	- дата начала выполнения второй задачи зависит от даты окончания
	 первой задачи.


В консоль будут выведены планируемые и прогнозируемые сроки выполнения
 задач и параметры расхождения срока:


Задача №1:


  План: 08.02.2020 00:00:00 - 10.02.2020
 00:00:00


  Прогноз: 08.02.2020 00:00:00 - 10.02.2020
 00:00:00


Задача №2:


  План: 11.02.2020 00:00:00 - 13.02.2020
 00:00:00


  Прогноз: 17.02.2020 00:00:00 - 19.02.2020
 00:00:00


=========


Задача-предшественник: Задача №1


Связь между задачами: окончание-начало


Связанная задача: Задача №2


Расхождение срока: 6 дней


См. также:


[IPrjProject](IPrjProject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

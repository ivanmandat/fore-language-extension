# IPrjTask.ParentKey

IPrjTask.ParentKey
-


# IPrjTask.ParentKey


## Синтаксис


ParentKey: Integer;


## Описание


Свойство ParentKey определяет
 ключ родительской задачи.


## Комментарии


Родительская задача предназначена для объединения дочерних задач и набора
 других родительских задач по смыслу. Срок выполнения родительской задачи
 формируется с начала выполнения первой дочерней задачи до окончания выполнения
 последней дочерней задачи.


Примечание.
 Родительская задача не используется в качестве [задачи-предшественника](../IPrjTaskDependency/IPrjTaskDependency.PredecessorTaskKey.htm)
 для своих дочерних задач при настройке [связей](../IPrjTaskDependency/IPrjTaskDependency.htm)
 между ними.


## Пример


Для выполнения примера добавьте ссылку на системную сборку ProjectPlanning.


		Sub UserProc;

		Var

		    Project: IPrjProject;

		    Tasks: IPrjTaskCollection;

		    Task: IPrjTask;

		    Depend: IPrjTaskDependency;

		    Fact, FPeriod: IPrjTaskPeriod;

		    i: Integer;

		Begin

		    Project := New PrjProject.Create;

		    // Получим коллекцию задач проекта

		    Tasks := Project.Tasks;

		    // Добавим первую задачу (родительскую)

		    Task := Tasks.Add;

		    Task.Key := 1;

		    Task.Name := "№1";

		    // Зададим планируемую дату начала задачи

		    Task.PlanPeriod.StartDate := DateTime.Parse("07.02.2020");

		    // Добавим вторую задачу (дочернюю)

		    Task := Tasks.Add;

		    Task.Key := 2;

		    Task.Name := "№2";

		    Task.ParentKey := 1;

		    // Зададим фактический срок выполнения задачи

		    Fact := Task.FactPeriod;

		    Fact.StartDate := DateTime.Parse("21.02.2020");

		    Fact.FinishDate := DateTime.Parse("28.02.2020");

		    // Добавим третью задачу (дочернюю)

		    Task := Tasks.Add;

		    Task.Key := 3;

		    Task.Name := "№3";

		    Task.ParentKey := 1;

		    // Зададим продолжительность задачи

		    Task.PlanPeriod.Duration := 12;

		    // Зададим тип связи со второй задачей

		    Depend := Task.Dependencies.Add;

		    Depend.PredecessorTaskKey := 2;

		    Depend.Type := PrjTaskDependencyType.StartToFinish;

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


	- первая задача является родительской для второй и третьей задачи;


	- срок выполнения первой задачи включает в себя сроки выполнения
	 второй и третьей задачи;


	- прогнозируемый срок выполнения второй задачи совпадает с заданным
	 фактическим сроком;


	- дата окончания третьей задачи зависит от даты начала второй
	 задачи.


В консоль будет выведен результат расчёта:


Выполнение задачи №1 с 09.02.2020 00:00:00 по 28.02.2020
 00:00:00 (длительность: 20 дней)


Выполнение задачи №2 с 21.02.2020 00:00:00 по 28.02.2020
 00:00:00 (длительность: 8 дней)


Выполнение задачи №3 с 09.02.2020 00:00:00 по 20.02.2020
 00:00:00 (длительность: 12 дней)


См. также:


[IPrjTask](IPrjTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

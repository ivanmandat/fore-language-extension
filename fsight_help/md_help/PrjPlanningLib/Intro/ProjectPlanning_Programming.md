# Общие принципы программирования с использованием сборки ProjectPlanning

Общие принципы программирования с использованием сборки ProjectPlanning
-


# Общие принципы программирования с использованием сборки ProjectPlanning


Сборка ProjectPlanning предназначена
 для выполнения календарно-сетевого планирования.


Процесс выполнения календарно-сетевого планирования состоит из следующих
 этапов:


![](Process.png)


На этапе создания проекта формируется модель реализации проекта на основе
 календарного плана. На этапе добавления задач проекта определяется структура
 взаимосвязанных задач, их продолжительность и сроки выполнения по календарному
 плану. На этапе выполнения расчёта определяются прогнозируемые сроки выполнения
 задач и оптимизация продолжительности проекта.


Для создания проекта используйте метод [PrjProject.Create](../Class/PrjProject/PrjProject.htm).


Для добавления задачи используйте метод [IPrjTaskCollection.Add](../Interface/IPrjTaskCollection/IPrjTaskCollection.Add.htm).


Для выполнения расчёта прогнозируемых сроков выполнения задач используйте
 метод [IPrjProject.Plan](../Interface/IPrjProject/IPrjProject.Plan.htm).


## Пример


Рассмотрим пример создания проекта, добавления задач и расчёта прогнозируемых
 сроков выполнения задач.


Для выполнения примера добавьте ссылку на системную сборку ProjectPlanning.


		Sub UserProc;

		Var

		    Project: IPrjProject;

		    Calendar: IPrjCalendarOptions;

		    DTar: Array Of DateTime;

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

		    // Получим настройки календаря

		    Calendar := Project.CalendarOptions;

		    Calendar.IncludeWeekend := False;

		    // Зададим два праздничных дня

		    DTar := New DateTime[2];

		    DTar[0] := DateTime.Parse("23.02.2020");

		    DTar[1] := DateTime.Parse("08.03.2020");

		    Calendar.ExcludedDates := DTar;

		    // Получим коллекцию задач проекта

		    Tasks := Project.Tasks;

		    // Добавим первую задачу

		    Task := Tasks.Add;

		    Task.Key := 1;

		    Task.Name := "№1";

		    Task.PlanPeriod.Duration := 8;

		    // Добавим вторую задачу

		    Task := Tasks.Add;

		    Task.Key := 2;

		    Task.Name := "№2";

		    Task.PlanPeriod.Duration := 10;

		    Depend := Task.Dependencies.Add;

		    Depend.PredecessorTaskKey := 3;

		    Depend.Type := PrjTaskDependencyType.FinishToFinish;

		    // Добавим третью задачу

		    Task := Tasks.Add;

		    Task.Key := 3;

		    Task.Name := "№3";

		    Task.PlanPeriod.Duration := 12;

		    Depend := Task.Dependencies.Add;

		    Depend.PredecessorTaskKey := 1;

		    Depend.Type := PrjTaskDependencyType.FinishToStart;

		    // Выполним расчёт

		    Project.Plan;

		    Debug.WriteLine("Дата начала проекта: " + Project.StartDate.ToString);

		    For i := 0 To Tasks.Count - 1 Do

		        Task := Tasks.Item(i);

		        FPeriod := Task.ForecastPeriod;

		        Debug.WriteLine(" Выполнение задачи " + Task.Name + " с " +

		        FPeriod.StartDate.ToString + " по " + FPeriod.FinishDate.ToString +

		        " (длительность: " + FPeriod.Duration.ToString + " дней)");

		    End For;

		    Debug.WriteLine("Прогнозируемая дата окончания проекта: " + Project.EndDate.ToString);

		End Sub UserProc;


В результате выполнения примера будет выполнен расчёт проекта с учётом
 заданных условий:


	- суббота и воскресенье являются выходными днями и не учитываются
	 при расчёте;


	- 23 февраля и 8 марта являются праздничными днями и не учитываются
	 при расчёте;


	- дата начала проекта совпадает с датой начала выполнения первой
	 задачи;


	- дата окончания выполнения второй задачи совпадает с датой окончания
	 третьей задачи;


	- дата начала выполнения третьей задачи зависит от даты окончания
	 первой задачи.


В консоль будет выведен результат расчёта:


Дата начала проекта: 20.02.2020 00:00:00


  Выполнение задачи №1 с 20.02.2020 00:00:00
 по 02.03.2020 00:00:00 (длительность: 8 дней)


  Выполнение задачи №2 с 05.03.2020 00:00:00
 по 18.03.2020 00:00:00 (длительность: 10 дней)


  Выполнение задачи №3 с 03.03.2020 00:00:00
 по 18.03.2020 00:00:00 (длительность: 12 дней)


Прогнозируемая дата окончания проекта: 18.03.2020
 00:00:00


См. также:


[Введение
 в сборку ProjectPlanning](ProjectPlanning_Introduction.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

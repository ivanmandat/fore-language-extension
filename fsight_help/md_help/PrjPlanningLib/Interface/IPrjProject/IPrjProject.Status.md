# IPrjProject.Status

IPrjProject.Status
-


# IPrjProject.Status


## Синтаксис


Status: [IPrjStatus](../IPrjStatus/IPrjStatus.htm);


## Описание


Свойство Status возвращает найденные
 ошибки или предупреждения при построении плана проекта.


## Комментарии


Для проверки плана проекта на наличие ошибок или предупреждений используйте
 метод [IPrjProject.CheckConstraints](IPrjProject.CheckConstraints.htm).


Для работы с возникшей ошибкой или предупреждением при построении плана
 проекта используйте интерфейс [IPrjStatusItem](../IPrjStatusItem/IPrjStatusItem.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку ProjectPlanning.


		Sub UserProc;

		Var

		    Project: IPrjProject;

		    Tasks: IPrjTaskCollection;

		    Task: IPrjTask;

		    Depend: IPrjTaskDependency;

		    Status: IPrjStatus;

		    Error: IPrjStatusItem;

		    Errors: IPrjStatusCollection;

		    Key: Integer;

		Begin

		    Project := New PrjProject.Create;

		    // Зададим дату начала проекта

		    Project.StartDate := DateTime.Parse("20.02.2020");

		    Project.UseStartDate := True;

		    // Получим коллекцию задач проекта

		    Tasks := Project.Tasks;

		    // Создадим первую задачу

		    Task := Tasks.Add;

		    Task.Key := 1;

		    Task.Name := "№1";

		    // Создадим вторую задачу

		    Task := Tasks.Add;

		    Task.Key := 2;

		    Task.Name := "№2";

		    Task.ParentKey := 2; // ключ родительской задачи

		    Depend := Task.Dependencies.Add;

		    Depend.PredecessorTaskKey := 2;

		    // Проверим проект на наличие ошибок

		    If Project.CheckConstraints = True Then

		        Debug.WriteLine("Ошибок нет");

		        Else

		            Status := Project.Status;

		            // Получим первую найденную ошибку

		            Errors := Status.Errors;

		            Error := Errors.Item(0);

		            // Выведем в консоль ключ задачи с ошибкой,
		 код и сообщение об ошибке

		            For Each Key In Error.Keys Do

		                Debug.WriteLine("Ключ задачи с ошибкой: " + Key.ToString);

		            End For;

		            Debug.WriteLine("Код ошибки: " + Error.Code.ToString);

		            Debug.WriteLine("Сообщение: " + Error.Message);

		    End If;

		End Sub UserProc;


В результате выполнения примера в консоль будет выведен ключ первой
 найденной задачи с ошибкой, код и сообщение об ошибке при построении плана
 проекта:


Ключ задачи с ошибкой: 2


Код ошибки: 1


Сообщение: Работа 2 не может быть сама себе родителем


См. также:


[IPrjProject](IPrjProject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

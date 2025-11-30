# ITask.Result

ITask.Result
-


# ITask.Result


## Синтаксис


Result: Variant;


## Описание


Свойство Result возвращает результат выполнения задачи.


## Комментарии


В данном свойстве можно получить результат задачи, которая выполняет действие, реализованное в методе [ITaskAction.Action](../ITaskAction/ITaskAction.Action.htm). Для получения результата работы специализированных задач используйте соответствующие свойства:


-
[IDalCommandTask.Result](Dal.chm::/Interface/IDalCommandTask/IDalCommandTask.Result.htm) - результат задачи, предназначенной для работы с базой данных с помощью SQL-запросов.


## Пример


Пример использования данного свойства приведен в описании метода [ITask.ContinueWith](ITask.ContinueWith.htm).


См. также:


[ITask](ITask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

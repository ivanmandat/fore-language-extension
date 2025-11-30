# IDalCommandTask.Result

IDalCommandTask.Result
-


# IDalCommandTask.Result


## Синтаксис


Result: [IDalCommand](../IDalCommand/IDalCommand.htm);


## Описание


Свойство Result возвращает результат выполнения задачи.


## Комментарии


Результатом выполнения задачи является команда, используя свойства и методы которой, можно получить фактические значения. У полученной команды для использования будут доступны следующие свойства и методы:


-
[Execute](../IDalCommand/IDalCommand.Execute.htm) - без выполнения возвращает результирующее количество обработанных записей (используется, если [ExecuteType](IDalCommandTask.ExecuteType.htm) = [DalCommandExecuteType.Execute](../../Enums/DalCommandExecuteType.htm)).


-
[CreateCursor](../IDalCommand/IDalCommand.CreateCursor.htm) - без выполнения возвращает результирующий курсор с данными (используется, если [ExecuteType](IDalCommandTask.ExecuteType.htm) = [DalCommandExecuteType.CreateCursor](../../Enums/DalCommandExecuteType.htm)).


-
[Params](../IDalCommand/IDalCommand.Params.htm) - используется для получения выходных параметров, содержащих результаты работы хранимой процедуры.


-
[Connection](../IDalCommand/IDalCommand.Connection.htm) - соединение, в рамках которого выполнялась задача.


-
[SQL](../IDalCommand/IDalCommand.SQL.htm) - текст SQL-запроса, который был выполнен в рамках задачи.


-
[DescribeCursor](../IDalCommand/IDalCommand.DescribeCursor.htm) - тот же курсор, какой доступен при выполнении метода [CreateCursor](../IDalCommand/IDalCommand.CreateCursor.htm).


Остальные свойства/методы команды, являющейся результатом выполнения задачи, не поддерживаются.


## Пример


Пример использования данного свойства приведен в описании метода [IDalCommand2.CreateTask](../IDalCommand2/IDalCommand2.CreateTask.htm).


См. также:


[IDalCommandTask](IDalCommandTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

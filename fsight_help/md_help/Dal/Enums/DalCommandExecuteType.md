# DalCommandExecuteType

DalCommandExecuteType
-


# DalCommandExecuteType


## Описание


Перечисление DalCommandExecuteType содержит варианты предназначения задачи, которая работает с базой данных с помощью SQL-запросов.


Используется следующими свойствами и методами:


-
[IDalCommand2.CreateTask](../Interface/IDalCommand2/IDalCommand2.CreateTask.htm)


-
[IDalCommandTask.ExecuteType](../Interface/IDalCommandTask/IDalCommandTask.ExecuteType.htm)


## Допустимые значения


 Значение
 Краткое описание


 0
 Execute. Задача предназначена для изменения данных (выполнение команд Update, Insert) либо для выполнения хранимых процедур.


 1
 CreateCursor. Задача предназначена для извлечения данных (выполнение команды Select) и создания курсора, позволяющего просмотреть полученные данные.


См. также:


[Перечисления сборки Dal](Dal_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

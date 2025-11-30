# Выполнение SQL-запросов с проверкой на ошибки выполнения: Сборка Dal

Выполнение SQL-запросов с проверкой на ошибки выполнения: Сборка Dal
-


# Выполнение SQL-запросов с проверкой на ошибки выполнения


Если [команда](Dal_Command.htm) используется для выполнения SQL-запроса с несколькими наборами значений параметров, то при вызове метода [IDalCommand.Execute](../Interface/IDalCommand/IDalCommand.Execute.htm) или [IDalCommand.ExecuteWithoutLast](../Interface/IDalCommand/IDalCommand.ExecuteWithoutLast.htm) будут обработаны все наборы в диапазоне от нуля до [IDalCommand.CurrentParamsRow](../Interface/IDalCommand/IDalCommand.CurrentParamsRow.htm). После выполнения команды указатель [IDalCommand.CurrentParamsRow](../Interface/IDalCommand/IDalCommand.CurrentParamsRow.htm) будет сброшен в ноль. Это позволяет повторно пройти по всем наборам, установить новые значения и повторно выполнить команду. Если во время SQL-запроса произошла ошибка, то указатель [IDalCommand.CurrentParamsRow](../Interface/IDalCommand/IDalCommand.CurrentParamsRow.htm) все равно будет сброшен в ноль. Из-за этого нет возможности определить, какой именно набор вызвал ошибку выполнения запроса. Для выполнения команды без сброса указателя обрабатываемых наборов значений был разработан интерфейс [IDalCommandEx](../Interface/IDalCommandEx/IDalCommandEx.htm). Для выполнения команды в данном интерфейсе также созданы два метода: [ExecuteEx](../Interface/IDalCommandEx/IDalCommandEx.ExecuteEx.htm) и [ExecuteWithoutLastEx](../Interface/IDalCommandEx/IDalCommandEx.ExecuteWithoutLastEx.htm). При установке в данных методах входному параметру значения False, после выполнения не будет сброшен указатель наборов значений параметров [IDalCommand.CurrentParamsRow](../Interface/IDalCommand/IDalCommand.CurrentParamsRow.htm). Используя метод [IDalCommandEx.SetCurrentParamsRow](../Interface/IDalCommandEx/IDalCommandEx.SetCurrentParamsRow.htm) можно будет перемещаться по наборам значений параметров, создать отдельную команду и проверить выполнение с выбранным набором значений.


Пример подобной проверки приведен в описании метода [IDalCommandEx.ExecuteEx](../Interface/IDalCommandEx/IDalCommandEx.ExecuteEx.htm).


См. также:


[Введение](Dal_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

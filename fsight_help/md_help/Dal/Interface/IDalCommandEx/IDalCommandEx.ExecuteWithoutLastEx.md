# IDalCommandEx.ExecuteWithoutLastEx

IDalCommandEx.ExecuteWithoutLastEx
-


# IDalCommandEx.ExecuteWithoutLastEx


## Синтаксис


ExecuteWithoutLastEx(ClearParamSetsOnError: Boolean): Integer;


## Параметры


ClearParamSetsOnError. Параметр, определяющий, будет ли сбрасываться счетчик обработанных наборов значений параметров после выполнения метода.


## Описание


Метод ExecuteWithoutLastEx выполняет команду со всеми наборами параметров, кроме последнего, и возвращает число обработанных записей.


## Комментарии


Если в качестве параметра ClearParamSetsOnError передается значение True, то метод отработает также, как и метод [IDalCommand.ExecuteWithoutLast](../IDalCommand/IDalCommand.ExecuteWithoutLast.htm).


Если параметру ClearParamSetsOnError установить значение False, то после выполнения метода не будет сброшен счетчик обработанных наборов значений параметров, который доступен в свойстве [IDalCommand.CurrentParamsRow](../IDalCommand/IDalCommand.CurrentParamsRow.htm). Если во время выполнения команды возникли какие-либо ошибки, то получив значение [IDalCommand.CurrentParamsRow](../IDalCommand/IDalCommand.CurrentParamsRow.htm) можно узнать сколько наборов было обработано. С помощью метода [SetCurrentParamsRow](IDalCommandEx.SetCurrentParamsRow.htm) можно будет пройти по наборам параметров и выполнить отдельную команду с выбранными значениями. Таким образом можно определить набор значений, который вызывает ошибку выполнения SQL-запроса.


## Пример


Пример выполнения команды без сброса счетчика используемых значений параметров представлен на примере метода [ExecuteEx](IDalCommandEx.ExecuteEx.htm).


См. также:


[IDalCommandEx](IDalCommandEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

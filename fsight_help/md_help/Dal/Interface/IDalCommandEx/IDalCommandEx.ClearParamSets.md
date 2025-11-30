# IDalCommandEx.ClearParamSets

IDalCommandEx.ClearParamSets
-


# IDalCommandEx.ClearParamSets


## Синтаксис


ClearParamSets;


## Описание


Метод ClearParamSets сбрасывает счетчик использованных наборов значений параметров.


## Комментарии


При вызове данного метода свойству [IDalCommand.CurrentParamsRow](../IDalCommand/IDalCommand.CurrentParamsRow.htm) будет установлено значение ноль. После этого наборы значений можно изменить и повторно выполнить команду. Для перехода между наборами может использоваться метод [IDalCommand.NextParamsRow](../IDalCommand/IDalCommand.NextParamsRow.htm), либо [IDalCommandEx.SetCurrentParamsRow](IDalCommandEx.SetCurrentParamsRow.htm).


## Пример


Пример использования приведен в описании метода [ExecuteEx](IDalCommandEx.ExecuteEx.htm).


См. также:


[IDalCommandEx](IDalCommandEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IDalCommandEx

IDalCommandEx
-


# IDalCommandEx


## Описание


Интерфейс IDalCommandEx предназначен
 для работы с базой данных с помощью SQL-запросов на случай возникновения
 исключительной ситуации.


## Комментарии


Используя методы данного интерфейса, можно выполнить команду, не сбрасывая
 [счетчик обработанных
 наборов](../IDalCommand/IDalCommand.CurrentParamsRow.htm) значений параметров. Если во время выполнения возникли ошибки,
 то, используя метод [SetCurrentParamsRow](IDalCommandEx.SetCurrentParamsRow.htm),
 можно получить необходимый набор значений параметров и выполнить отдельную
 команду только для этого набора. Таким образом, можно определить тот набор
 значений, использование которого приводит к возникновению ошибок во время
 выполнения SQL-запроса.


## Методы


		 Имя метода
		 Краткое описание


		 [![](../../Sub_Image.gif)](IDalCommandEx.ClearParamSets.htm)
		 [ClearParamSets](IDalCommandEx.ClearParamSets.htm)
		 Метод ClearParamSets
		 сбрасывает счетчик использованных наборов значений параметров.


		 ![](../../Sub_Image.gif)
		 [ExecuteEx](IDalCommandEx.ExecuteEx.htm)
		 Метод ExecuteEx выполняет
		 команду на сервере БД и возвращает число обработанных записей.


		 ![](../../Sub_Image.gif)
		 [ExecuteWithoutLastEx](IDalCommandEx.ExecuteWithoutLastEx.htm)
		 Метод ExecuteWithoutLastEx
		 выполняет команду со всеми наборами параметров, кроме последнего,
		 и возвращает число обработанных записей.


		 ![](../../Sub_Image.gif)
		 [SetCurrentParamsRow](IDalCommandEx.SetCurrentParamsRow.htm)
		 Метод SetCurrentParamsRow
		 устанавливает текущий набор значений параметров.


См. также:


[Интерфейсы сборки Dal](../Dal_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

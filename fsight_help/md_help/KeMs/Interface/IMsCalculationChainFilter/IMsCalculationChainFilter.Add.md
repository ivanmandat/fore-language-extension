# IMsCalculationChainFilter.Add

IMsCalculationChainFilter.Add
-


# IMsCalculationChainFilter.Add


## Синтаксис


		Add(Entry: [IMsCalculationChainEntry](../IMsCalculationChainEntry/IMsCalculationChainEntry.htm));


## Параметры


Entry. Добавляемый элемент.


## Описание


Метод Add добавляет новый
 элемент в коллекцию.


## Комментарии


Для получения элемента из коллекции используйте свойство [IMsCalculationChainFilter.Item](IMsCalculationChainFilter.Item.htm).


Если в коллекцию добавлен:


	- родительский элемент.
	 Все его дочерние элементы будут добавлены в коллекцию;


	- дочерний элемент. Все
	 его родительские элементы будут добавлены в коллекцию без дополнительных
	 дочерних элементов. Например, в цепочке расчёта метамодели есть папка
	 «Циклы», содержащая модели
	 «Страны», «Города»
	 и «Показатели». Если в коллекцию
	 рассчитываемых элементов будет добавлена модель «Показатели»,
	 то в коллекцию также будет добавлена папка «Циклы».
	 Модели «Страны» и «Города» не будут рассчитаны задачей.


## Пример


Использование метода приведено в примере для [IMsProblemCalculationSettings.EntriesFilter](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.EntriesFilter.htm).


См. также:


[IMsCalculationChainFilter](IMsCalculationChainFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

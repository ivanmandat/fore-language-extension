# IMsCalculationChainMultiDimIterator.MultiThreaded

IMsCalculationChainMultiDimIterator.MultiThreaded
-


# IMsCalculationChainMultiDimIterator.MultiThreaded


## Синтаксис


MultiThreaded: Boolean;


## Описание


Свойство MultiThreaded определяет
 признак использования многопоточного расчёта многомерного итератора.


## Комментарии


Многопоточный расчёт доступен на системах с многоядерными процессорами
 и используется для ускорения расчёта многомерного итератора, если расчёт
 выполняется в течение длительного времени.


Для определения числа потоков используйте свойство [IMsProblemCalculationSettings.AvailableThreads](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.AvailableThreads.htm).
 По умолчанию число потоков равно числу ядер процессора.


Допустимые значения:


	- True. Используется многопоточный
	 расчёт многомерного итератора;


	- False. Используется
	 однопоточный расчёт многомерного итератора.


Примечание.
 Если задано значение свойства [IMsProblemCalculationSettings.AvailableThreads](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.AvailableThreads.htm),
 то оно не влияет на число используемых потоков для расчёта многомерного
 итератора при значении False.


## Пример


Использование свойства приведено в примере для [IMsProblemCalculationSettings.AvailableThreads](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.AvailableThreads.htm).


См. также:


[IMsCalculationChainMultiDimIterator](IMsCalculationChainMultiDimIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

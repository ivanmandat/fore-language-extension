# IAlgorithmSettings.MultiThreadedCalc

IAlgorithmSettings.MultiThreadedCalc
-


# IAlgorithmSettings.MultiThreadedCalc


## Синтаксис


MultiThreadedCalc: Boolean;


## Описание


Свойство MultiThreadedCalc определяет
 использование многопоточного расчёта алгоритма для ускорения расчёта [блоков
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm) и [блоков
 контроля](CalculationAlgorithm.chm::/Desktop/Control_Block/Control_Block.htm).


## Комментарии


Многопоточный расчёт алгоритма используется для уменьшения нагрузки
 на расчёт блока расчёта/блока контроля, если расчёт алгоритма выполняется
 за секунду и меньше, и доступен на системах с многоядерными процессорами:
 число потоков равно числу ядер процессора. Если блок расчёта/блок контроля
 содержит формулы, вычисления которых выполняются в течение длительного
 времени, и количество итераций в формулах превышает число потоков, то
 при многопоточном расчёте будет увеличена производительность и скорость
 расчёта блока за счёт параллельного расчёта итераций.


Допустимые значения:


	- True. При расчёте алгоритма
	 выполняется многопоточный расчёт;


	- False. При расчёте алгоритма
	 выполняется однопоточный расчёт.


Для получения подробной информации о многопоточном расчёте обратитесь
 к разделу «[Расчёт
 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm)».


## Пример


Использование свойства приведено в примере для [IAlgorithmSettings.CheckArithmeticErrors](IAlgorithmSettings.CheckArithmeticErrors.htm).


См. также:


[IAlgorithmSettings](IAlgorithmSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

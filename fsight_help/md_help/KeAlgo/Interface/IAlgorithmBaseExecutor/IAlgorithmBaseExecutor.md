# IAlgorithmBaseExecutor

IAlgorithmBaseExecutor
-


# IAlgorithmBaseExecutor


Сборка: Algo;


## Описание


Интерфейс IAlgorithmBaseExecutor
 является базовым интерфейсом для [расчёта
 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm).


## Иерархия наследования


           IAlgorithmBaseExecutor


## Комментарии


Для получения базовых настроек, используемых при расчёте, приведите
 алгоритм, описываемый интерфейсом [ICalcAlgorithm](../ICalcAlgorithm/ICalcAlgorithm.htm),
 к интерфейсу IAlgorithmBaseExecutor.


Интерфейс является базовым для интерфейса [IAlgorithmCalculationExecutor](../IAlgorithmCalculationExecutor/IAlgorithmCalculationExecutor.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ErrorState](IAlgorithmBaseExecutor.ErrorState.htm)
		 Свойство ErrorState
		 определяет способ обработки ошибок, которые могут возникнуть при
		 расчёте алгоритма.


		 ![](../../Property_Image.gif)
		 [MsProblem](IAlgorithmBaseExecutor.MsProblem.htm)
		 Свойство MsProblem
		 возвращает [задачу
		 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem.htm), которая используется при
		 расчёте алгоритма.


		 ![](../../Property_Image.gif)
		 [ParamValues](IAlgorithmBaseExecutor.ParamValues.htm)
		 Свойство ParamValues возвращает
		 настройки начала и окончания периодов расчёта алгоритма,
		 коллекцию [параметров
		 алгоритма расчёта](CalculationAlgorithm.chm::/Desktop/Work/Set_up_calculation_parameters.htm).


См. также:


[Интерфейсы
 сборки Algo](../KeAlgo_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

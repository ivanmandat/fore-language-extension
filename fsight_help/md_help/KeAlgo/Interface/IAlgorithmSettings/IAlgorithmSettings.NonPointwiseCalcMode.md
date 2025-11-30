# IAlgorithmSettings.NonPointwiseCalcMode

IAlgorithmSettings.NonPointwiseCalcMode
-


# IAlgorithmSettings.NonPointwiseCalcMode


## Синтаксис


NonPointwiseCalcMode: [MsNonPointwiseCalcMode](KeMs.chm::/Enums/MsNonPointwiseCalcMode.htm);


## Описание


Свойство NonPointwiseCalcMode
 определяет способ расчёта [блоков
 агрегации](CalculationAlgorithm.chm::/Desktop/Aggregation_block/Aggregation_block.htm) при использовании поточечного расчёта алгоритма.


## Комментарии


Если свойство [IAlgorithmSettings.PointwiseCalc](IAlgorithmSettings.PointwiseCalc.htm)
 принимает значение True и в алгоритме
 расчёта содержатся блоки агрегации, то расчёт агрегации для одной календарной
 точки невозможен. Блоки агрегации могут рассчитываться до или после поточечного
 расчёта, либо не рассчитываться.


Примечание.
 При использовании поточечного расчёта алгоритма порядок расчёта блоков
 агрегации зависит от выбранного способа расчёта.


Для получения подробной информации о способах расчёта блоков агрегации
 при поточечном расчёте обратитесь к разделу «[Расчёт
 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm)».


## Пример


Использование свойства приведено в примере для [IAlgorithmSettings.CheckArithmeticErrors](IAlgorithmSettings.CheckArithmeticErrors.htm).


См. также:


[IAlgorithmSettings](IAlgorithmSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

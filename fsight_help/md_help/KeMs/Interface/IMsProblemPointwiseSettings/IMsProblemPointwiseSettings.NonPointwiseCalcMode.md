# IMsProblemPointwiseSettings.NonPointwiseCalcMode

IMsProblemPointwiseSettings.NonPointwiseCalcMode
-


# IMsProblemPointwiseSettings.NonPointwiseCalcMode


## Синтаксис


NonPointwiseCalcMode: [MsNonPointwiseCalcMode](../../Enums/MsNonPointwiseCalcMode.htm);


## Описание


Свойство NonPointwiseCalcMode
 определяет способ расчёта [моделей
 матричной агрегации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregation.htm) при использовании поточечного расчёта
 задачи.


## Комментарии


Если свойство [IMsProblemPointwiseSettings.Active](IMsProblemPointwiseSettings.Active.htm)
 принимает значение True и в задаче
 содержатся модели матричной агрегации, то расчёт агрегации для одной календарной
 точки невозможен. Рассчитать модели матричной агрегации можно только до
 или после поточечного расчёта, либо не рассчитывать.


Примечание.
 При использовании поточечного расчёта задачи порядок расчёта моделей зависит
 от выбранного способа расчёта.


Способы расчёта моделей матричной агрегации при поточечном расчёте задачи
 аналогичны способам расчёта [блоков
 агрегации](CalculationAlgorithm.chm::/Desktop/Aggregation_block/Aggregation_block.htm) при [поточечном
 расчёте алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm). Для получения подробной информации
 обратитесь к разделу «[Расчёт
 алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm)».


## Пример


Использование свойства приведено в примере для [IMsProblemPointwiseSettings.Active](IMsProblemPointwiseSettings.Active.htm).


См. также:


[IMsProblemPointwiseSettings](IMsProblemPointwiseSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

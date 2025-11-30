# IMsProblem.PointwiseSettings

IMsProblem.PointwiseSettings
-


# IMsProblem.PointwiseSettings


## Синтаксис


PointwiseSettings: [IMsProblemPointwiseSettings](../IMsProblemPointwiseSettings/IMsProblemPointwiseSettings.htm);


## Описание


Свойство PointwiseSettings возвращает
 параметры поточечного расчёта задачи.


## Комментарии


Поточечный расчёт выполняется только для задачи типа «[Задача
 многопоточной трансформации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem_2.htm)», которая содержит модели
 вида «[Детерминированное
 уравнение](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm)».


При поточечном расчёте задачи выполняется последовательный расчёт уравнения
 модели в каждой точке данных: сначала уравнение рассчитывается по первой
 точке данных, затем по второй точке и так далее. Такой расчёт можно использовать,
 если данные по текущей календарной точке зависят от данных, рассчитанных
 по предыдущей календарной точке. Если в задаче содержатся [модели
 матричной агрегации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregation.htm), то при поточечном расчёте задачи
 невозможен расчёт агрегации для одной календарной точки. Рассчитать модели
 матричной агрегации можно только до или после поточечного расчёта, либо
 не рассчитывать. Для определения способа расчёта моделей матричной агрегации
 используйте свойство [IMsProblemPointwiseSettings.NonPointwiseCalcMode](../IMsProblemPointwiseSettings/IMsProblemPointwiseSettings.NonPointwiseCalcMode.htm).


Для получения подробной информации о поточечном расчёте обратитесь к
 разделу «[Детерминированное
 уравнение](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm#calc)». Поточечный расчёт задачи аналогичен [поточечному
 расчёту алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm).


Примечание.
 При сохранении задачи моделирования заданные параметры поточечного расчёта
 сохраняются в качестве значений по умолчанию и используются при повторном
 расчёте задачи. Для однократного использования заданных параметров поточечного
 расчёта используйте свойство [IMsProblemCalculationSettings.PointwiseSettings](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.PointwiseSettings.htm).


## Пример


Использование свойства приведено в примере для [IMsProblemPointwiseSettings.Active](../IMsProblemPointwiseSettings/IMsProblemPointwiseSettings.Active.htm).


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsProblemPointwiseSettings

IMsProblemPointwiseSettings
-


# IMsProblemPointwiseSettings


Сборка: Ms;


## Описание


Интерфейс IMsProblemPointwiseSettings
 используется для настройки поточечного расчёта задачи моделирования.


## Иерархия наследования


           IMsProblemPointwiseSettings


## Комментарий


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
 используйте свойство [IMsProblemPointwiseSettings.NonPointwiseCalcMode](IMsProblemPointwiseSettings.NonPointwiseCalcMode.htm).


Для получения подробной информации о поточечном расчёте обратитесь к
 разделу «[Детерминированное
 уравнение](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm#calc)». Поточечный расчёт задачи аналогичен [поточечному
 расчёту алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Perform_calculations.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](IMsProblemPointwiseSettings.Active.htm)
		 Свойство Active определяет
		 признак использования поточечного расчёта задачи.


		 ![](../../Property_Image.gif)
		 [NonPointwiseCalcMode](IMsProblemPointwiseSettings.NonPointwiseCalcMode.htm)
		 Свойство NonPointwiseCalcMode
		 определяет способ расчёта [моделей
		 матричной агрегации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregation.htm) при использовании поточечного
		 расчёта задачи.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

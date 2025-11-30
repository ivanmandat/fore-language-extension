# IMsProblemCalculationSettings.PointwiseSettings

IMsProblemCalculationSettings.PointwiseSettings
-


# IMsProblemCalculationSettings.PointwiseSettings


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
 Заданные параметры поточечного расчёта используются только для текущего
 расчёта задачи. Для сохранения параметров и их повторного использования
 при расчёте задачи используйте свойство [IMsProblem.PointwiseSettings](../IMsProblem/IMsProblem.PointwiseSettings.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие контейнера моделирования
 с идентификатором CONT_MODEL, содержащего задачу моделирования типа «[Задача
 многопоточной трансформации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem_2.htm)» с идентификатором PROBLEM.
 В задаче моделирования должна содержаться метамодель, в цепочке расчёта
 которой содержатся модели вида «[Детерминированное
 уравнение](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm)» и модели матричной агрегации.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    RubrDescr, Descr: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    Settings: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

    Pointwise: IMsProblemPointwiseSettings;

Begin

    MB := MetabaseClass.Active;

    // Получим контейнер моделирования

    RubrDescr := MB.ItemById("CONT_MODEL");

    Descr := RubrDescr.EditDescriptor;

    // Получим задачу моделирования типа «Задача многопоточной трансформации»

    Problem := MB.ItemByIdNamespace("PROBLEM", Descr.Key).Edit As IMsProblem;

    // Зададим настройки поточечного расчёта задачи

    Settings := Problem.CreateCalculationSettings;

    Pointwise := Settings.PointwiseSettings;

    Pointwise.Active := True;

    Pointwise.NonPointwiseCalcMode := MsNonPointwiseCalcMode.CalcAfter;

    // Рассчитаем задачу моделирования

    Calc := Problem.Calculate(Settings);

    Calc.Run;

End Sub UserProc;


В результате выполнения примера будет выполнен поточечный расчёт задачи.
 Если в задаче содержатся модели матричной агрегации, то они будут рассчитаны
 после поточечного расчёта детерминированных уравнений.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Задача моделирования

Задача моделирования
-


# Задача моделирования


При создании и работе с задачей моделирования следует учитывать следующие
 особенности:


	- класс объекта «[Задача
	 моделирования](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_4_Problem/uimodelling_problem.htm)» - MetabaseObjectClass.KE_CLASS_MSPROBLEM;


	- обязательно необходимо указывать родительский контейнер, так
	 как задача моделирования может располагаться только внутри контейнера;


	- при создании задача моделирования не содержит сценариев и рассчитывается
	 по сценарию «Факт».


Для работы с задачей моделирования через язык Fore предназначен интерфейс
 [IMsProblem](../Interface/IMsProblem/IMsProblem.htm). Используя
 его свойства и методы можно настроить параметры задачи и произвести ее
 расчет.


Прежде всего, для работы с задачей моделирования необходимо задать рассчитываемую
 метамодель (свойство [IMsProblem.MetaModel](../Interface/IMsProblem/IMsProblem.MetaModel.htm))
 и определить тип задачи (свойство [IMsProblem.Details](../Interface/IMsProblem/IMsProblem.Details.htm)).
 От выбора типа задачи во многом зависят параметры ее расчета. Для всех
 типов задач базовым является интерфейс [IMsProblemDetails](../Interface/IMsProblemDetails/IMsProblemDetails.htm),
 определяющий периоды прогнозирования и идентификации задачи. Для работы
 с конкретным типом задачи необходимо использовать один из дочерних интерфейсов
 [IMsProblemDetails](../Interface/IMsProblemDetails/IMsProblemDetails.htm):


	- [IMsControlProblem](../Interface/IMsControlProblem/IMsControlProblem.htm).
	 Задача оптимального управления. Состоит в отыскании таких значений
	 управляющих переменных, при которых будет выполнено условие оптимизации
	 значения целевой функции;


	- [IMsLinearDecompositionProblem](../Interface/IMsLinearDecompositionProblem/IMsLinearDecompositionProblem.htm).
	 Forward-looking прогнозирование. Отличается от остальных задач тем,
	 что в ее уравнения могут входить переменные с лагами не только в предыдущие
	 моменты времени (t-lag), но и в последующие (t+lag);


	- [IMsForecastingProblem](../Interface/IMsForecastingProblem/IMsForecastingProblem.htm).
	 Задача прогнозирования. Модели рассчитываются последовательно в каждой
	 точке сценария: сначала рассчитываются все модели по первой точке
	 сценария, затем происходит расчет всех моделей по второй точке сценария
	 и т.д.;


	- [IMsTransformationProblem](../Interface/IMsTransformationProblem/IMsTransformationProblem.htm).
	 Задача трансформации. Модели рассчитываются последовательно по всем
	 точкам сценария: сначала рассчитывается первая модель по всем точкам
	 сценария, затем происходит расчет второй модели по всем точкам сценария
	 и т.д.


Примечание.
 В примере, представленном ниже, предполагается наличие объектов, которые
 указаны в разделе описания переменных.


Например, создание объекта ControlProblem для определения параметров
 задачи оптимального уравнения:


	Sub UserProc;

	Var

	    Problem: IMsProblem;

	    ControlProblem: IMsTransformationProblem;

	Begin

	    ControlProblem := New MsTransformationProblem.Create;

	    Problem.Details := ControlProblem;

	End Sub UserProc;


Программирование параметров расчета задачи зависит от ее типа. Более
 подробную информацию об этом можно найти в описании соответствующих интерфейсов.


## Создание и расчет задачи моделирования


После [создания
 метамодели](KeMs_Programming_MetaModel.htm#metamodel_create) «Метамодель для расчета сальдо» следует создать задачу
 моделирования, с помощью которой будет осуществлен расчет цепочки по сценарию
 «Факт».


Для выполнения модуля по созданию и расчету задачи необходимо добавить
 ссылки на сборки: Metabase, Ms.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    KMDesc: IMetabaseObjectDescriptor;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Problem: IMsProblem;

	    TranfProblem: IMsTransformationProblem;

	    CalcSett: IMsProblemCalculationSettings;

	    Calculation: IMsProblemCalculation;

	Begin

	    MB := MetabaseClass.Active;

	    KMDesc := MB.ItemById("MODEL_SPACE");

	    // Создание задачи моделирования

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSPROBLEM;

	    CrInfo.Id := "PROBLEM_BALANCE";

	    CrInfo.Name := "Задача расчета сальдо";

	    CrInfo.Parent := KMDesc;

	    MObj := MB.CreateObject(CrInfo).Edit;

	    Problem := MObj As IMsProblem;

	    // Установка рассчитываемой метамодели

	    Problem.MetaModel := MB.ItemByIdNamespace("META_MODEL_BALANCE", KMDesc.Key).Bind As IMsMetaModel;

	    // Настройка типа расчета задачи: задача трансформации

	    TranfProblem := New MsTransformationProblem.Create;

	    Problem.Details := TranfProblem;

	    MObj.Save;

	    Debug.WriteLine("Создана задача '" + MObj.Name + "' с идентификатором '" + MObj.Id + "'");

	    // Расчет задачи

	    CalcSett := Problem.CreateCalculationSettings;

	    CalcSett.FactIncluded := True;

	    Calculation := Problem.Calculate(CalcSett);

	    Calculation.SaveHistory := True;

	    Calculation.Run;

	End Sub UserProc;


После выполнения модуля будет создана задача трансформации «Задача расчета
 сальдо» с идентификатором PROBLEM_BALANCE, информация об этом будет выведена
 в окно консоли. Задача будет рассчитана по сценарию «Факт» в векторном
 режиме. История расчета будет сохранена.


О выводе результатов расчета рассказано с разделе «[Просмотр
 значений переменной](KeMs_Programming_result_view.htm)».


См. также:


[Общие принципы программирования с использованием
 сборки Ms](KeMs_Programming.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

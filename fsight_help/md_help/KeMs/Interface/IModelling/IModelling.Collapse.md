# IModelling.Collapse

IModelling.Collapse
-


# IModelling.Collapse


## Синтаксис


Collapse(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


         Method:
 [MsCollapseType](../../Enums/MsCollapseType.htm);


         TargetFrequency:
 [MsFrequency](../../Enums/MsFrequency.htm);


         [MissingData:
 [MissingDataMethod](StatLib.chm::/Enums/MissingDataMethod.htm)
 =16;]


         [NumberOfPoints:
 Integer = 1;]


         [SpecifiedValue:
 Double = 0;]


         [AdditionalSeries:
 [ITimeSeries](../ITimeSeries/ITimeSeries.htm) = Null]): Variant;


## Параметры


Input. Исходная переменная;


Method. Метод агрегации;


TargetFrequency. Результирующая
 динамика;


MissingData. Метод обработки
 пропусков;


NumberOfPoints. Дополнительный
 параметр для метода обработки пропусков;


SpecifiedValue. Значение, которым
 будут заполняться пропуски методом MissingDataMethod.SpecifiedValue
 «Указанное значение»;


AdditionalSeries. Ряд, который
 используется для заполнении пропусков методами MissingDataMethod.Pattern
 «По шаблону» и MissingDataMethod.Overlay
 «Значениями заданного ряда».


## Описание


Метод Collapse
 осуществляет агрегацию значений переменной.


## Комментарии


Параметр NumberOfPoints может
 принимать только положительные значения. Используется для следующих методов
 обработки пропусков:


	- MissingDataMethod.NPointsAverage.
	 «Среднее по N соседним точкам».
	 Параметр определяет количество соседних точек;


	- PreviousGrowthRate,
	 SucceedingGrowthRate. «Темп роста к предыдущему периоду»,
	 «Темп роста к следующему периоду».
	 Параметр определяет число периодов.


Метод выполняет агрегацию данных с нижнего уровня на верхний и необходим
 при расчёте задачи, требующей агрегации данных. Например, данные, рассчитанные
 по месяцам, необходимо просуммировать для квартальной динамики.


При агрегации данных учитываются настройки календарной динамики: смещение
 начала периода относительно его начала/конца.


[![](../../opened.gif)![](../../closed.gif)Пример агрегации
 данных с дневной на недельную динамику](javascript:TextPopup(this))


	Рассматриваемый период: первые две недели мая 2012 г.


	Метод агрегации: сумма.


	Настройки календарной динамики: исходная переменная содержит недельную
	 и дневную динамки; смещение начала недели не применяется; дневная
	 динамика содержит дни с понедельника по пятницу. Результат агрегации:


			 Неделя
			 Дата начала периода
			 День недели


			 Исходное значение


			 Рассчитанное значение


			 1-я неделя
			 7 мая 2012
			 Понедельник

			 0,50


			 7 мая 2012
			 Понедельник
			 0,10


			 8 мая 2012
			 Вторник
			 0,10


			 9 мая 2012
			 Среда
			 0,10


			 10 мая 2012
			 Четверг
			 0,10


			 11 мая 2012
			 Пятница
			 0,10


			 2-я неделя
			 14 мая 2012
			 Понедельник

			 1,00


			 14 мая 2012
			 Понедельник
			 0,20


			 15 мая 2012
			 Вторник
			 0,20


			 16 мая 2012
			 Среда
			 0,20


			 17 мая 2012
			 Четверг
			 0,20


			 18 мая 2012
			 Пятница
			 0,20


	Настройки календарной динамики: исходная переменная содержит недельную
	 и дневную динамки; начало недели смещено на три дня вперед; дневная
	 динамика содержит дни с понедельника по пятницу. Результат агрегации:


			 Неделя
			 Дата начала периода
			 День недели


			 Исходное значение


			 Рассчитанное значение


			 1-я неделя
			 2 мая 2012
			 Среда

			 0,50


			 2 мая 2012
			 Среда
			 0,10


			 3 мая 2012
			 Четверг
			 0,10


			 4 мая 2012
			 Пятница
			 0,10


			 7 мая 2012
			 Понедельник
			 0,10


			 8 мая 2012
			 Вторник
			 0,10


			 2-я неделя
			 9 мая 2012
			 Среда

			 1,00


			 9 мая 2012
			 Среда
			 0,20


			 10 мая 2012
			 Четверг
			 0,20


			 11 мая 2012
			 Пятница
			 0,20


			 14 мая 2012
			 Понедельник
			 0,20


			 15 мая 2012
			 Вторник
			 0,20


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D_Q и квартальной динамикой, рассчитываемая методом
 детерминированного уравнения и содержащая не менее одного фактора.


Добавьте ссылки на системные сборки: Metabase, Ms.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    ModelSpace, ModelObj: IMetabaseObject;

	    Transf: IMsFormulaTransform;

	    Formula: IMsFormula;

	    Model: IMsModel;

	    Determ: IMsDeterministicTransform;

	    TransVar: IMsFormulaTransformVariable;

	    Slice: IMsFormulaTransformSlice;

	    TermInfo: IMsFormulaTermInfo;

	    Expr: IExpression;

	Begin

	    // Получаем текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    ModelSpace := Mb.ItemById("MS").Bind;

	    // Получаем модель

	    ModelObj := Mb.ItemByIdNamespace("MODEL_D_Q", ModelSpace.Key).Edit;

	    Model := ModelObj As IMsModel;

	    // Получаем параметры модели

	    Transf := Model.Transform;

	    // Получаем метод расчета модели

	    Formula := Transf.FormulaItem(0);

	    Determ := Formula.Method As IMsDeterministicTransform;

	    // Получаем первый фактор модели

	    TransVar := Transf.Inputs.Item(0);

	    // Получаем срез, соответствующий фактору

	    Slice := TransVar.Slices.Item(0);

	    // Создаем терм на основе первого фактора

	    TermInfo := Transf.CreateTermInfo;

	    TermInfo.Slice := Slice;


	    // Получаем выражение для расчета модели

	    Expr := Determ.Expression;

	    // Задаем выражение для расчета модели

	    Expr.AsString := "Collapse(" + TermInfo.TermInnerText + ", MsCollapseType.Total, " +

	        "MsFrequency.Annual, MissingDataMethod.NPointsAverage, 4)";

	    // Проверяем корректность выражения

	    If Expr.Valid

	        // Если выражение корректное, то сохраняем изменения

	        Then ModelObj.Save;

	        // Если выражение некорректное, то выводим сообщение в окно консоли

	        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

	    End If;

	End Sub UserProc;


В результате выполнения примера модель будет агрегировать данные первой
 входной переменной с квартальной динамики на годовую с применением обработки
 пропусков методом «Среднее по N соседним
 точкам», где N = 4.


## Пример использования в выражениях


Выражение 1:


collapse({Brazil|BCA}, MsCollapseType.Total, MsFrequency.Annual,
 MissingDataMethod.NPointsAverage, 4)


Результат: для временного ряда «Brazil|BCA»
 будет произведена агрегация данных на годовую динамику методом суммирования
 с применением обработки пропусков методом «Среднее
 по N соседним точкам», где N = 4.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Collapse(X1,MsCollapseType.Average,MsFrequency.Annual,
 MissingDataMethod.LinTrend)


Результат: для фактора «X1»
 будет произведена агрегация данных на годовую динамику методом вычисления
 среднего значения с применением метода обработки пропусков «Линейный
 тренд».


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [агрегация](UiDw.chm::/Workbook/CalculatedSeries/Aggregation/UiDw_cs_TotalCollapseFrequency.htm) |
 Контейнер моделирования: модели «[Коллапс
 (векторный расчет)](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_Collaps.htm)», «[Коллапс
 (поточечный расчет)](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_Collaps_point.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IModelling.Interpolate

IModelling.Interpolate
-


# IModelling.Interpolate


## Синтаксис


		Interpolate(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


		            Method:
		 [MsInterpolateType](../../Enums/MsInterpolateType.htm);


		            TargetFrequency:
		 [MsFrequency](../../Enums/MsFrequency.htm);


		            [Power:
		 Integer = 3;]


		            [Period:
		 [IMsPeriod](../IMsPeriod/IMsPeriod.htm) = Null;]


		            [MissingData:
		 [MissingDataMethod](StatLib.chm::/Enums/MissingDataMethod.htm)
		 =16;]


		            [NumberOfPoints:
		 Integer = 1;]


		            [SpecifiedValue:
		 Double = 0;]


		            [AdditionalSeries:
		 [ITimeSeries](../ITimeSeries/ITimeSeries.htm) = Null]):
		 Variant;


## Параметры


Input. Исходная переменная;


Method. Метод интерполяции;


TargetFrequency. Результирующая
 динамика;


Power.
 Степень полинома. Параметр используется при полиноминальной интерполяции;


Period. Период, на котором
 рассчитывается метод;


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


Метод Interpolate
 осуществляет интерполяцию значений переменной.


## Комментарии


Особенности задания параметров:


	- Period. Если значение
	 параметра Null, то метод рассчитывается
	 на всём временном периоде;


	- NumberOfPoints. Параметр
	 может принимать только положительные значения. Используется для следующих
	 методов обработки пропусков:


		- MissingDataMethod.NPointsAverage.
		 «Среднее по N соседним точкам».
		 Параметр определяет количество соседних точек;


		- PreviousGrowthRate,
		 SucceedingGrowthRate.
		 «Темп роста к предыдущему периоду»,
		 «Темп роста к следующему периоду».
		 Параметр определяет число периодов.


Для интерполяции по шаблону используйте метод [IModelling.InterpolateP](IModelling.InterpolateP.htm).


При интерполяции данных учитываются настройки календарной динамики:
 смещение начала периода относительно его начала/конца.


[![](../../opened.gif)![](../../closed.gif)Пример интерполяции
 данных с недельной на дневную динамику](javascript:TextPopup(this))


	Рассматриваемый период: первые две недели мая 2012 г.


	Метод интерполяции: равномерная.


	Настройки календарной динамики: исходная переменная содержит недельную
	 и дневную динамки; смещение начала недели не применяется; дневная
	 динамика содержит дни с понедельника по пятницу. Результат дезагрегации:


			 Неделя
			 Дата начала периода
			 День недели


			 Исходное значение


			 Рассчитанное значение


			 1-я неделя
			 7 мая 2012
			 Понедельник
			 1


			 7 мая 2012
			 Понедельник

			 0,20


			 8 мая 2012
			 Вторник

			 0,20


			 9 мая 2012
			 Среда

			 0,20


			 10 мая 2012
			 Четверг

			 0,20


			 11 мая 2012
			 Пятница

			 0,20


			 2-я неделя
			 14 мая 2012
			 Понедельник
			 2


			 14 мая 2012
			 Понедельник

			 0,40


			 15 мая 2012
			 Вторник

			 0,40


			 16 мая 2012
			 Среда

			 0,40


			 17 мая 2012
			 Четверг

			 0,40


			 18 мая 2012
			 Пятница

			 0,40


	Настройки календарной динамики: исходная переменная содержит недельную
	 и дневную динамки; начало недели смещено на три дня вперед; дневная
	 динамика содержит дни с понедельника по пятницу. Результат дезагрегации:


			 Неделя
			 Дата начала периода
			 День недели


			 Исходное значение


			 Рассчитанное значение


			 1-я неделя
			 2 мая 2012
			 Среда
			 1


			 2 мая 2012
			 Среда

			 0,20


			 3 мая 2012
			 Четверг

			 0,20


			 4 мая 2012
			 Пятница

			 0,20


			 7 мая 2012
			 Понедельник

			 0,20


			 8 мая 2012
			 Вторник

			 0,20


			 2-я неделя
			 9 мая 2012
			 Среда
			 2


			 9 мая 2012
			 Среда

			 0,40


			 10 мая 2012
			 Четверг

			 0,40


			 11 мая 2012
			 Пятница

			 0,40


			 14 мая 2012
			 Понедельник

			 0,40


			 15 мая 2012
			 Вторник

			 0,40


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D и годовой динамикой, рассчитываемая методом
 детерминированного уравнения и содержащая хотя бы один фактор.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub
		 UserProc;

		Var

		    Mb: IMetabase;

		    ModelSpace, ModelObj: IMetabaseObject;

		    Transf: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Model: IMsModel;

		    Determ: IMsDeterministicTransform;

		    TransVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		    TermInfo: IMsFormulaTermInfo;

		    Expr: IExpression;

		Begin

		    // Получаем текущий
		 репозиторий

		    Mb := MetabaseClass.Active;

		    // Получаем контейнер
		 моделирования

		    ModelSpace := Mb.ItemById("MS").Bind;

		    // Получаем модель

		    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

		    Model := ModelObj As
		 IMsModel;

		    // Получаем параметры
		 модели

		    Transf := Model.Transform;

		    // Получаем метод
		 расчета модели

		    Formula := Transf.FormulaItem(0);

		    Determ := Formula.Method As
		 IMsDeterministicTransform;

		    // Получаем первый
		 фактор модели

		    TransVar := Transf.Inputs.Item(0);

		    // Получаем срез,
		 соответствующий фактору

		    Slice := TransVar.Slices.Item(0);

		    // Создаем терм на
		 основе первого фактора

		    TermInfo := Transf.CreateTermInfo;

		    TermInfo.Slice := Slice;

		    // Получаем выражение
		 для расчета модели

		    Expr := Determ.Expression;

		    // Задаем выражение
		 для расчета модели

		    Expr.AsString := "Interpolate("
		 + TermInfo.TermInnerText + ", MsInterpolateType.Polynomial,
		 " +

		        "MsFrequency.Quarterly,
		 3, Null, MissingDataMethod.NPointsAverage, 5)";

		    // Проверяем корректность
		 выражения

		    If
		 Expr.Valid

		        //
		 Если выражение корректное, то сохраняем изменения

		        Then
		 ModelObj.Save;

		        //
		 Если выражение некорректное, то выводим сообщение в окно консоли

		        Else
		 Debug.WriteLine("Модель не сохранена:
		 ошибка в формуле");

		    End If;

		End Sub
		 UserProc;


В результате выполнения примера модель будет дезагрегировать данные
 первой входной переменной с годовой динамики на квартальную на всём периоде
 с применением обработки пропусков методом «Среднее
 по N соседним точкам», где N = 5.


## Пример использования в выражениях


Выражение 1:


Interpolate({Brazil|BCA}, MsInterpolateType.Polynomial,
 MsFrequency.Quarterly, 3, SetPeriod("01.01.2000", "01.01.2015"),
 MissingDataMethod.NPointsAverage, 5)


Результат: данные ряда «Brazil|BCA»
 будут дезагрегированы на квартальную динамику на периоде с 2000 по 2015
 год. Будет использована интерполяция полиномом третей степени с применением
 обработки пропусков методом «Среднее
 по N соседним точкам», где N = 5.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Interpolate(X1, MsInterpolateType.Linear, MsFrequency.Quarterly,
 3, Null, MissingDataMethod.LinTrend)


Результат: данные фактора «X1»
 будут дезагрегированы на квартальную динамику на всём периоде методом
 линейной интерполяции с применением обработки пропусков методом «Линейный тренд».


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | [Методы
 интерполяции](Lib.chm::/03_Transformations/UiModelling_Interpolation.htm) | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Интерполяция](UiDw.chm::/Workbook/CalculatedSeries/Aggregation/UiDw_cs_ProportionalInterpolation.htm)
 | Контейнер моделирования: модель «[Интерполяция](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_Interpolation.htm)»,
 [редактирование
 регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

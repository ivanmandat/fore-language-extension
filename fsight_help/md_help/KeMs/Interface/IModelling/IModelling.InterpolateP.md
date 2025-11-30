# IModelling.InterpolateP

IModelling.InterpolateP
-


# IModelling.InterpolateP


## Синтаксис


		InterpolateP(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


		             TargetFrequency:
		 [MsFrequency](../../Enums/MsFrequency.htm);


		             Pattern:
		 [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


		             [PatternType:
		 [MsPatternType](../../Enums/MsPatternType.htm) = 0;]


		             [Period:
		 [IMsPeriod](../IMsPeriod/IMsPeriod.htm) = Null]): Variant;


## Параметры


Input. Исходная переменная;


TargetFrequency. Результирующая
 динамика;


Pattern. Шаблонная переменная,
 по которой будет выполняться интерполяция;


PatternType. Вид шаблона, по
 которому производится интерполяция;


Period. Период, на котором
 рассчитывается метод.


## Описание


Метод InterpolateP осуществляет
 интерполяцию по шаблону значений переменной.


## Комментарии


Особенности задания параметров:


	- Input. Для определения
	 исходной динамики для параметра используйте свойство [IMsFormulaTransformSlice.Level](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.Level.htm);


	- Pattern. Параметр должен
	 содержать результирующую динамику;


	- PatternType. Необязательный
	 параметр. Значение по умолчанию MsPatternType.Average
	 - среднее по элементам;


	- Period. Если
	 значение параметра Null, то
	 метод рассчитывается на всём временном периоде.


При дезагрегации данных учитываются настройки календарной динамики:
 смещение начала периода относительно его начала/конца.


[![](../../opened.gif)![](../../closed.gif)Пример дезагрегации
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


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 детерминированного уравнения с годовой динамикой с идентификатором MODEL_D.
 Данная модель должна содержать несколько факторов. Каждый фактор должен
 содержать годовую и квартальную динамику.


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

		    InputTerm, PatternTerm: IMsFormulaTermInfo;

		    Expr: IExpression;

		Begin

		    Mb := MetabaseClass.Active;

		    ModelSpace := Mb.ItemById("CONT_MODEL").Bind;

		    ModelObj := Mb.ItemByIdNamespace("M_DETERM", ModelSpace.Key).Edit;

		    Model := ModelObj As IMsModel;

		    Transf := Model.Transform;

		    Formula := Transf.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    TransVar := Transf.Inputs.Item(0);

		    Slice := TransVar.Slices.Item(0);

		    InputTerm := Transf.CreateTermInfo;

		    InputTerm.Slice := Slice;

		    TransVar := Transf.Inputs.Item(1);

		    Slice := TransVar.Slices.Item(0);

		    PatternTerm := Transf.CreateTermInfo;

		    Slice.Level := DimCalendarLevel.Quarter;

		    PatternTerm.Slice := Slice;

		    Expr := Determ.Expression;

		    Expr.References := "Ms";

		    Expr.AsString := "InterpolateP(" + InputTerm.TermInnerText + ",MsFrequency.Quarterly," +

		        PatternTerm.TermInnerText + ",MsPatternType.First,SetPeriod(" +

		        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" + "))";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		   End If;

		End Sub UserProc;


В результате выполнения примера модель будет интерполировать данные
 первой входной переменной с годовой динамики на квартальную на периоде
 с 2000 по 2015 год. Для интерполяции будет использоваться шаблон, заданный
 второй входной переменной.


## Пример использования в выражениях


Выражение 1:


InterpolateP({Brazil|BCA[t]},MsFrequency.Quarterly,{China|BCA[t]})


Результат: данные ряда «Brazil|BCA»
 будут дезагрегированы на квартальную динамику по шаблону, заданному рядом
 «China|BCA» на всём временном
 периоде.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


InterpolateP(X1,MsFrequency.Monthly,X2,MsPatternType.Last,
 SetPeriod("01.01.2000","01.01.2015"))


Результат: данные фактора «X1»
 будут дезагрегированы на месячную динамику по последнему элементу
 шаблона, заданного фактором «X2»
 на периоде с 2000 по 2015 год.


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

# IModelling.Fill

IModelling.Fill
-


# IModelling.Fill


## Синтаксис


Fill(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


     Method: [MsFillMethod](../../Enums/MsFillMethod.htm);


     [NumberOfPoints: Integer
 = 1;]


     [SpecifiedValue: Double
 = 0;]


     [AdditionalSeries:
 [ITimeSeries](../ITimeSeries/ITimeSeries.htm) = Null;]


     [FillBound: [MsFillBoundType](../../Enums/MsFillBoundType.htm)
 = 2;]


     [EndsFill: Boolean
 = false]): Variant;


## Параметры


Input. Моделируемая переменная;


Method. Метод обработки пропусков;


NumberOfPoints. Дополнительный
 параметр для метода обработки пропусков, определяющий число точек или
 периодов (в зависимости от используемого метода);


SpecifiedValue. Значение для
 заполнения пропусков;


AdditionalSeries. Переменная,
 значения которой будут использоваться для обработки пропусков;


FillBound. Период заполнения
 пропусков;


EndsFill. Заполнение пропусков
 на границе периода.


## Описание


Метод Fill
 заполняет пустые значения ряда с помощью различных методов обработки пропусков.


## Комментарии


Особенности задания параметров:


	- NumberOfPoints. В Fore:
	 необязательный параметр, значение по умолчанию - «1». Параметр может
	 принимать только положительные значения. Параметр актуален для следующих
	 методов обработки пропусков:


		- NPointsAverage.
		 Среднее по N соседним
		 точкам. InterpolateParam
		 определяет N - количество
		 соседних точек;


		- PreviousGrowthRate.
		 SucceedingGrowthRate.
		 Темп роста к предыдущему/следующему периоду. InterpolateParam
		 определяет число периодов;


	- SpecifiedValue. Параметр
	 используется для метода «Указанное
	 значение». В Fore: необязательный параметр, значение по умолчанию
	 - «0»;


	- AdditionalSeries. Параметр
	 предназначен для методов «По шаблону»
	 и «Значениями заданного ряда». В
	 Fore: необязательный параметр, по умолчанию переменная не задана;


	- FillBound. В Fore:
	 необязательный параметр, по умолчанию пропуски заполняются до конца
	 периода прогнозирования;


	- EndsFill. Необязательный
	 параметр. Допустимые значения:


		- True. Выполняется
		 заполнение пропусков на границах периода;


		- False. Значение
		 по умолчанию. Не выполняется заполнение пропусков на границах
		 периода.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


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

    Mb := MetabaseClass.Active;

    ModelSpace := Mb.ItemById("MS").Bind;

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    TermInfo.Type := MsFormulaTermType.Pointwise;

    Expr := Determ.Expression;

    Expr.References := "Ms;Stat";

    Expr.AsString := "Fill(" + TermInfo.TermInnerText +

        ", MsFillMethod.NPointAverage, 4, 0, Null, MsFillBoundType.EndIdentify, True)";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет осуществлять преобразование
 первой входной переменной с использованием метода обработки пропусков
 «Среднее по четырем соседним точкам»
 до конца периода прогнозирования с заполнением пропусков на границе периода.


## Пример использования в выражениях


Выражение 1:


Fill({Brazil|BCA}, MsFillMethod.Pattern, 0, 0, {China|BCA}, MsFillBoundType.EndIdentify)


Результат: для заполнения пустых значения на периоде идентификации для
 временного ряда «Brazil|BCA»
 будет применена интерполяция по шаблону, заданному временным рядом «China|BCA».


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Fill(X1,MsFillMethod.Value)


Результат: для заполнения пустых точек фактора «X1»
 будет применено произвольное значение из интервала [минимальное значение
 ряда «X1»; максимальное значение
 ряда «X1»].


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)
 | [Методы
 обработки пропусков](Lib.chm::/03_Transformations/UiModelling_Fill_Gaps.htm) |База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [методы
 обработки пропусков](UiDw.chm::/Workbook/CalculatedSeries/Transformations/UiDw_cs_MissingData_Geometric.htm) | Контейнер моделирования: модель
 «[Обработка
 пропусков](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_Working_Lost.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

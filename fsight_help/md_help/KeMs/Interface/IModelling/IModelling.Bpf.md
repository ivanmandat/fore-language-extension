# IModelling.Bpf

IModelling.Bpf
-


# IModelling.Bpf


## Синтаксис


Bpf(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


    Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


    Lag: Integer;


    Low: Double;


    High: Double;


    [Output: [MsBPFOutputType](../../Enums/MsBPFOutputType.htm)
 = 0]): Variant;


## Параметры


Input. Исходная переменная;


Period. Период, на котором
 рассчитывается метод;


Lag. Опережение/лаг;


Low. Нижнее значение периода
 цикличности;


High. Верхнее значение периода
 цикличности;


Output. Выгружаемая компонента.


## Описание


Метод Bpf моделирует значения
 переменной фильтром [Бакстера-Кинга](Lib.chm::/02_Time_series_analysis/UiModelling_BaxterKingFilter.htm).


## Комментарии


Если параметр Period принимает
 значение Null, то метод рассчитывается
 на всём временном периоде.


Значения опережения/лага и границ периода цикличности устанавливаются
 в зависимости от календарной динамики исходной переменной. Базовые значения:


		 Динамика
		 Опережение/лаг
		 Нижняя граница
		 Верхняя граница


		 Годовая
		 3
		 2
		 8


		 Полугодовая
		 6
		 3
		 16


		 Квартальная
		 12
		 6
		 32


		 Месячная
		 36
		 18
		 96


		 Недельная
		 156
		 78
		 416


		 5-дневная
		 783
		 391,5
		 2088


		 7-дневная
		 1095
		 547,5
		 2920


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную. Модель должна иметь годовую
 динамику.


Добавьте ссылки на системные сборки: Metabase, Ms.


	Sub UserBpf;

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

	    // Получаем репозиторий

	    Mb := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    ModelSpace := Mb.ItemById("MS").Bind;

	    // Получаем модель

	    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

	    Model := ModelObj As IMsModel;

	    // Получаем параметры расчета модели

	    Transf := Model.Transform;

	    Formula := Transf.FormulaItem(0);

	    Determ := Formula.Method As IMsDeterministicTransform;

	    // Получаем первую входную переменную

	    TransVar := Transf.Inputs.Item(0);

	    Slice := TransVar.Slices.Item(0);

	    TermInfo := Transf.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    // Задаем режим передачи переменной в расчет

	    TermInfo.Type := MsFormulaTermType.Pointwise;

	    // Получаем выражение расчета модели

	    Expr := Determ.Expression;

	    Expr.References := "Ms";

	    // Задаем выражение расчета модели

	    Expr.AsString := "Bpf(" + TermInfo.TermInnerText +", SetPeriod(" +

	        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

	        "), 3, 2, 8,MsBPFOutputType.NonCyclicalSeries)";

	    // Проверяем корректность выражения

	    If Expr.Valid

	        // Если выражение задано корректно, то сохраняем модель

	        Then ModelObj.Save;

	        // Если выражение некорректное, то выводим сообщение в окно консоли

	        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

	    End If;

	End Sub UserBpf;


В результате выполнения примера модель будет рассчитывать значения на
 основе первой входной переменной фильтром Бакстера-Кинга на периоде с
 2000 по 2015 год. В моделируемую переменную будет выгружаться нециклическая
 составляющая входной переменной.


## Пример использования в выражениях


Выражение 1:


Bpf({Чикаго - население[t]}, NULL, 3, 2, 8, MsBPFOutputType.NonCyclicalSeries)


Результат: для временного ряда «Чикаго
 - население» будет применен фильтр Бакстера-Кинга на всем временном
 периоде. Параметры фильтра: фильтр рассчитывается на всем периоде данных,
 значения опережения/лага и границ периода сезонности заданы для годовых
 данных, после расчёта будет выгружаться несезонная компонента исходного
 ряда.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Bpf(X1, SetPeriod("01.01.2000", "01.01.2015"),
 13, 6, 32, MsBPFOutputType.NonCyclicalSeries)


Результат: для фактора «X1»
 будет применен фильтр Бакстера-Кинга на периоде с 2000 по 2015 год. Параметры
 фильтра: указан период расчета, значения опережения/лага и границ периода
 сезонности заданы для квартальных данных, после расчёта будет выгружаться
 сезонная компонента исходного ряда.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | Метод «[Фильтр
 Бакстера-Кинга](Lib.chm::/02_Time_series_analysis/UiModelling_BaxterKingFilter.htm)» | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Фильтр
 Бакстера-Кинга](UiDw.chm::/Workbook/CalculatedSeries/Smoothing/UiDw_cs_BandpassFilter.htm) | Контейнер моделирования: модель «[Фильтр
 Бакстера-Кинга](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_BaxterKingFilter.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

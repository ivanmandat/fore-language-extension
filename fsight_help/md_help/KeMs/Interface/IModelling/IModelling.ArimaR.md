# IModelling.ArimaR

IModelling.ArimaR
-


# IModelling.ArimaR


## Синтаксис


ArimaR(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


       Period:
 [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


       NotSeasonalIAR:
 Integer;


       NotSeasonalIMA:
 Integer;


       NotSeasonalDIFF:
 Integer;


       ConstantValue:
 Variant;


       [SeasonalAR:
 Integer = 0;]


       [SeasonalMA:
 Integer = 0;]


       [SeasonalDiff:
 Integer = 1;]


       [SeasonalPeriod:
 Integer = 0;]


       [MaxIteration:
 Integer = 500;]


       [Precision:
 Double = 0.0001;]


       [Casewise:
 [MsCasewise](../../Enums/MsCasewise.htm) = 0]): Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


NotSeasonalIAR. Порядок несезонной
 авторегрессии;


NotSeasonalIMA. Порядок несезонного
 скользящего среднего;


NotSeasonalDIFF. Порядок несезонной
 разности;


ConstantValue.
 Константа, используемая в расчетах;


SeasonalAR. Порядок сезонной
 авторегрессии;


SeasonalMA. Порядок сезонного
 скользящего среднего;


SeasonalDiff. Порядок сезонной
 разности;


SeasonalPeriod. Продолжительность
 сезонного периода;


MaxIteration. Максимальное
 число итераций, за которое должен осуществляться поиск оптимального решения;


Precision. Точность вычислений;


Casewise. Метод обработки пропусков.


## Описание


Метод ArimaR моделирует значения
 переменной методом ARIMA с помощью пакета R.


## Комментарии


Для использования данного метода в репозитории должна быть настроена
 интеграция с R. Для настройки интеграции обратитесь к статье «[Как настроить
 интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Особенности задания параметров:


	- ConstantValue. Значение
	 константы может быть задано пользователем, либо оценено автоматически.
	 Для автоматической оценки значений используйте метод [IModelling.Estimate](IModelling.Estimate.htm).
	 Если модель должна быть рассчитана без константы используйте метод
	 [IModelling.None](IModelling.None.htm);


	- Period. Если значение
	 параметра Null, то метод рассчитывается
	 на всём временном периоде


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


В репозитории должна быть настроена интеграция с R. Для настройки интеграции
 обратитесь к статье «[Как
 настроить интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Добавьте ссылки на системные сборки: Metabase, Ms.


	Sub UserArimaR;

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

	    Expr.AsString := "ArimaR(" + TermInfo.TermInnerText + ", SetPeriod(" +

	        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

	        "), 0, 1, 0, Estimate, 1, 1, 0, 1, 600, 0.001, MsCasewise.Yes)";

	    // Проверяем корректность выражения

	    If Expr.Valid

	        // Если выражение задано корректно, то сохраняем модель

	        Then ModelObj.Save;

	        // Если выражение некорректное, то выводим сообщение в окно консоли

	        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

	    End If;

	End Sub UserArimaR;


В результате выполнения примера модель будет рассчитывать значение первой
 входной переменной методом ARIMA. Для метода будут заданы: период расчёта,
 порядки авторегрессии и скользящего среднего. Константа будет оцениваться
 автоматически. Пропуски будут обработаны методом Casewise. Расчёт
 будет выполняться с помощью пакета R.


## Пример использования в выражениях


Выражение 1:


ArimaR({Чикаго - население[t]}, SetPeriod(2000,
 2015), 0, 1, 1, Estimate)


Результат: для временного ряда «Чикаго
 - население» будет рассчитан метод ARIMA по следующим параметрам:
 период расчета - 2000-2015, порядок несезонной авторегрессии - «0», порядок
 несезонного скользящего среднего - «1», порядок несезонной разности -
 «1», значение константы оценено автоматически при помощи метода [IModelling.Estimate](IModelling.Estimate.htm). Расчёт выполняется
 с помощью пакета R.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


ArimaR(X1,Null, 0, 0, 1, 2.7, 0, 0, 1, 0, 500, 0.0001,
 MsCasewise.Yes)


Результат: для фактора «X1»
 будет рассчитан метод ARIMA по следующим параметрам: порядки несезонной
 авторегрессии и несезонного скользящего среднего не заданы, порядок несезонной
 разности - «1», значение константы - «2,7», пропуски будут обработаны
 методом Casewise. Расчёт выполняется с помощью пакета R.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm) |
 Метод «[ARIMA](Lib.chm::/02_Time_series_analysis/UiModelling_ARIMA.htm)»
 | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [ARIMA](UiDw.chm::/Workbook/CalculatedSeries/Forecast/UiDw_cs_ARIMA.htm) |
 Контейнер моделирования: модель «[ARIMA](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/1_Arima/uimodelling_model_specification_arima.htm)»,
 [редактирование
 регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

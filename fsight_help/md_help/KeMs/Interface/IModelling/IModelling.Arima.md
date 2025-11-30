# IModelling.Arima

IModelling.Arima
-


# IModelling.Arima


## Синтаксис


Arima(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


       Period:
 [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


       NotSeasonalIAR:
 String;


       NotSeasonalIMA:
 String;


       NotSeasonalDIFF:
 Integer;


       ConstantValue:
 Variant;


       [SeasonalAR:
 String = "";]


       [SeasonalMA:
 String = "";]


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
 Константа, используемая в расчётах;


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


Метод Arima осуществляет моделирование
 значений переменной методом ARIMA.


## Комментарии


Особенности задания параметров:


	- ConstantValue. Значение
	 константы может быть задано пользователем либо оценено автоматически.
	 Для автоматической оценки значений используйте метод [IModelling.Estimate](IModelling.Estimate.htm).
	 Если модель должна быть рассчитана без константы, то используйте метод
	 [IModelling.None](IModelling.None.htm);


	- NotSeasonalIAR, NotSeasonalIMA, SeasonalAR,
	 SeasonalMA. Параметры задаются
	 в строковом виде. Укажите номера или диапазоны порядка авторегрессии/скользящего
	 среднего, разделяя их запятыми. Диапазон порядка авторегрессии/скользящего
	 среднего указывается через знак «-». Например: SeasonalAR
	 = "1-3,5";


	- NotSeasonalIMA, SeasonalMA. Если задан порядок
	 скользящего среднего (сезонного/несезонного), то можно использовать
	 ретрополяцию при оценке его коэффициентов. Параметры ретрополяции
	 указываются один раз в параметре NotSeasonalIMA
	 и используются для обоих видов скользящего среднего. По умолчанию
	 ретрополяция используется. Если ретрополяцию необходимо отключить,
	 то параметр NotSeasonalIMA
	 должен содержать строку «backcast.No». Например: NotSeasonalIMA
	 = "1-4;backcast.No";


	- Period. Если значение
	 параметра Null, то метод рассчитывается
	 на всём временном периоде.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы один фактор.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserArima;

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

    Expr.AsString := "Arima(" + TermInfo.TermInnerText + ", SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "), " + """" + "" + """" + "," + """" + "1" + """" + ", 0, Estimate," +

        """" + "1" + """," + """" + "1" + """" + ",0, 1, 600, 0.001, MsCasewise.Yes) ";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserArima;


В результате выполнения примера модель будет рассчитывать значение первой
 входной переменной методом ARIMA. Для метода будут заданы: период расчёта,
 порядки авторегрессии и скользящего среднего. Константа будет оцениваться
 автоматически. Пропуски будут обработаны методом Casewise.


## Пример использования в выражениях


Выражение 1:


Arima({Brazil|BCA[t]}, SetPeriod("2001",
 "2016"), "1-3", "1,4;backcast.No", 0, Estimate)


Результат: для ряда «Brazil|BCA»
 будет рассчитан метод ARIMA по следующим параметрам: порядок несезонной
 авторегрессии - «1-3», порядок несезонного скользящего среднего - «1,4»,
 ретрополяция для оценивания коэффициентов сезонного среднего не используется,
 порядок несезонной разности - «0», значение константы оценено автоматически
 при помощи метода [IModelling.Estimate](IModelling.Estimate.htm).
 Расчёт ведется без обработки пропусков на периоде с 2001 по 2016 год.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Arima(X1,Null,"","",1,2.7,"","",1,0,500,0.0001,
 MsCasewise.Yes)


Результат: для фактора «X1»
 будет рассчитан метод ARIMA по следующим параметрам: порядки несезонной
 авторегрессии и несезонного скользящего среднего не заданы, порядок несезонной
 разности - «1», значение константы - «2,7», расчёт ведется на всём периоде
 без учета пропущенных значений.


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

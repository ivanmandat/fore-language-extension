# IModelling.OlsR

IModelling.OlsR
-


# IModelling.OlsR


## Синтаксис


OlsR(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


     Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


     ConstantValue: Variant;


     AROrder: Integer;


     MAOrder: Integer;


     Casewise: [MsCasewise](../../Enums/MsCasewise.htm);


     Explanatories: Array):
 Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


ConstantValue. Константа, используемая
 в расчётах;


AROrder. Порядок авторегрессии;


MAOrder. Порядок скользящего
 среднего;


Casewise. Метод обработки пропусков;


Explanatories. Объясняющие
 переменные.


## Описание


Метод OlsR осуществляет моделирование
 переменной линейной регрессией (оценка МНК) с помощью пакета R.


## Комментарий


Используйте метод OlsR только
 при векторном режиме расчёта.


Для использования данного метода в репозитории должна быть настроена
 интеграция с R. Для настройки интеграции обратитесь к статье «[Как настроить
 интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Особенности задания параметров:


	- Period. Если значение
	 параметра Null, то метод рассчитывается
	 на всём временном периоде;


	- ConstantValue. Значение
	 константы может быть задано пользователем либо оценено автоматически.
	 Для автоматической оценки значений используйте метод [IModelling.Estimate](IModelling.Estimate.htm).
	 Если модель должна быть рассчитана без константы, то используйте метод
	 [IModelling.None](IModelling.None.htm);


	- AROrder, MAOrder.
	 Параметры задаются в строковом виде. Укажите номера или диапазоны
	 порядка авторегрессии/скользящего среднего, разделяя их запятыми.
	 Диапазон порядка авторегрессии/скользящего среднего указывается через
	 знак «-». Например: AROrder
	 = "1-3,5";


	- MAOrder. Если задан
	 порядок скользящего среднего, то можно использовать ретрополяцию при
	 оценке его коэффициентов. По умолчанию ретрополяция используется.
	 Если ретрополящию необходимо отключить, то параметр MAOrder
	 должен содержать строку «backcast.No». Например: MAOrder =
	 "1-4;backcast.No";


	- Explanatories. Термы,
	 соответствующие переменным, указываются через запятую. Необходимо
	 помнить, что число объясняющих переменных (m)
	 должно удовлетворять неравенству: 0
	 < m < n-1 для модели с константой и 0
	 < m < n для модели без константы, где n
	 - число наблюдений в моделируемой переменной.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одно входной переменной.


В репозитории должна быть настроена интеграция с R. Для настройки интеграции
 обратитесь к статье «[Как
 настроить интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserOlsR;

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

    Inp_1, Inp_2: String;

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

    // Получаем внутреннее представление переменной в виде текста

    Inp_1 := TermInfo.TermInnerText;

    // Получаем вторую входную переменную

    TransVar := Transf.Inputs.Item(1);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем внутреннее представление переменной в виде текста

    Inp_2 := TermInfo.TermInnerText;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms";

    // Задаем выражение расчета модели

    Expr.AsString := "OlsR(" + Inp_1 + ", SetPeriod(2000,2015), Estimate, 1," +

        "1, MsCasewise.Yes, " + Inp_2 + ")";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserOlsR;


В результате выполнения примера модель будет выполнять моделирование
 первой входной переменной с помощью линейной регрессии (оценка МНК) на
 заданном периоде. Значение константы будет оценено автоматически. Будет
 применена обработка пропусков методом Casewise. Расчёт будет выполнятся
 с помощью пакета R.


## Пример использования в выражениях


Выражение 1:


OlsR({Чикаго - население[t]}, Null, None, 0, 0,
 MsCasewise.Yes, {Мехико - население[t]})


Результат: временной ряд «Чикаго -
 население» будет смоделирован методом линейной регрессии (оценка
 МНК) на всем периоде по следующим параметрам: константа не используется,
 порядки авторегрессии и скользящего среднего не заданы, объясняющая переменная
 - временной ряд «Мехико - население»,
 выполняется обработка пропусков методом Casewise. Расчёт выполняется с
 помощью пакета R.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


OlsR(X1, SetPeriod(2000, 2015), Estimate, 1, 2,
 MsCasewise.Yes, X2, X3)


Результат: фактор «X1» будет
 смоделирован методом линейной регрессии (оценка МНК) по следующим параметрам:
 период расчета - 2000-2015, константа оценена методом [IModelling.Estimate](IModelling.Estimate.htm),
 порядок авторегрессии - «1», порядок скользящего среднего «2», объясняющие
 переменные - факторы «X2» и «X3», выполняется обработка пропусков
 методом Casewise. Расчёт выполняется с помощью пакета R.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm) |
 [Метод
 наименьших квадратов](Lib.chm::/01_Regression_models/UiModelling_LinearRegr_LSM.htm) | База данных временных рядов:
 [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Линейная
 регрессия](UiDw.chm::/Workbook/CalculatedSeries/Regression/UiDw_cs_LinearRegression.htm) | Контейнер моделирования: модель «[Линейная
 регрессии (оценка МНК)](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/8_Linear_regression/uimodelling_model_specification_linaer_reg.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

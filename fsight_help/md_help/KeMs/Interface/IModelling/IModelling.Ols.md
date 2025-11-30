# IModelling.Ols

IModelling.Ols
-


# IModelling.Ols


## Синтаксис


		Ols(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


		    Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


		    ConstantValue: Variant;


		    AROrder: String;


		    MAOrder: String;


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


Метод Ols осуществляет моделирование
 переменной линейной регрессией (оценка МНК).


## Комментарий


Метод Ols следует использовать
 только при векторном режиме расчёта.


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


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одного фактора.


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

		    Inp_1, Inp_2: String;

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

		    Inp_1 := TermInfo.TermInnerText;

		    TransVar := Transf.Inputs.Item(1);

		    Slice := TransVar.Slices.Item(0);

		    TermInfo := Transf.CreateTermInfo;

		    TermInfo.Slice := Slice;

		    TermInfo.Type := MsFormulaTermType.Pointwise;

		    Inp_2 := TermInfo.TermInnerText;

		    Expr := Determ.Expression;

		    Expr.References := "Ms";

		    Expr.AsString := "Ols(" + Inp_1 + ", SetPeriod(" +

		        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

		        "), Estimate, """ + "1" + """, """ + "" + """, MsCasewise.Yes, " + Inp_2 + ")";

		    If Expr.Valid Then

		        ModelObj.Save;

		    Else

		        Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserProc;


В результате выполнения примера модель будет выполнять моделирование
 первой входной переменной с помощью линейной регрессии (оценка МНК) на
 периоде с 2000 по 2015 год. Значение константы будет оценено автоматически.
 Расчёт выполняется с применением обработки пропусков методом Casewise.


## Пример использования в выражениях


Выражение 1:


Ols({Brazil|BCA[t]},SetPeriod("01.01.2002",
 "01.01.2015"), None,"","", MsCasewise.Yes,{China|BCA})


Результат: ряд «Brazil|BCA»
 будет смоделирован методом линейной регрессии (оценка МНК) на периоде
 с 2002 по 2016 год по следующим параметрам: константа не используется,
 порядки авторегрессии и скользящего среднего не заданы, объясняющая переменная
 - показатель «China|BCA», расчёт
 выполняется с применением обработки пропусков методом Casewise.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Ols(X1, Null, Estimate, "1", "2;backcast.No",
 MsCasewise.Yes, X2, X3)


Результат: фактор «X1» будет
 смоделирован методом линейной регрессии (оценка МНК) по следующим параметрам:
 константа оценена методом [IModelling.Estimate](IModelling.Estimate.htm),
 порядок авторегрессии - «1», порядок скользящего среднего «2», для оценивания
 коэффициентов скользящего среднего ретрополяция не используется, объясняющие
 переменные - факторы «X2» и «X3», расчёт выполняется с применением
 обработки пропусков методом Casewise.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


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

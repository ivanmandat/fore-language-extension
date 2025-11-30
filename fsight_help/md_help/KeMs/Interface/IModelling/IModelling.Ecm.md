# IModelling.Ecm

IModelling.Ecm
-


# IModelling.Ecm


## Синтаксис


		Ecm(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


		    Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm)


		    Method: [ECMType](StatLib.chm::/Enums/ECMType.htm);


		    EndogenousVariableAROrder:
		 Integer;


		    ExogenousVariableAROrder:
		 Integer;


		    Casewise: [MsCasewise](../../Enums/MsCasewise.htm);


		    Explanatories: Array):
		 Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


Method. Тип модели коррекции
 ошибок;


EndogenousVariableAROrder.
 Порядок авторегрессии эндогенной (моделируемой) переменной;


ExogenousVariableAROrder. Порядок
 авторегрессии экзогенных переменных;


Casewise. Метод обработки пропусков;


Explanatories. Экзогенные (объясняющие)
 переменные.


## Описание


Метод Ecm осуществляет преобразование
 переменной с помощью [модели
 коррекции ошибок](Lib.chm::/02_Time_series_analysis/UiModelling_ErrCorrModel.htm).


## Комментарии


Особенности задания параметров:


	- Period. Если значение
	 параметра Null, то метод рассчитывается
	 на всём временном периоде;


	- Explanatories. Переменные
	 указываются через запятую. Необходимо помнить, что число экзогенных
	 переменных (m) должно удовлетворять
	 неравенству: 0 < m < n-1
	 для модели с константой и 0 <
	 m < n для модели без константы в коинтеграционном уравнении,
	 где n - число наблюдений
	 в моделируемой переменной.


Данный метод следует использовать только при векторном режиме расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая несколько факторов.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub ProcEcm;

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

		    Expr.References := "Ms;Stat";

		    Expr.AsString := "Ecm(" + Inp_1 + ",SetPeriod(" +

		        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

		        "), ECMType.NoTrendNoIntercept, 1, 0, MsCasewise.Yes, " + Inp_2 + ")";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub ProcEcm;


В результате выполнения примера модель будет выполнять преобразование
 первой входной переменной с помощью модели коррекции ошибок. Расчёт выполняется
 на периоде с 2000 по 2015 год с применением обработки пропусков методом
 Casewise.


## Пример использования в выражениях


Выражение 1:


Ecm({Brazil|BCA[t]},SetPeriod("01.01.2002","01.01.2016"),ECMType.NoTrendIntercept,1,0,
 MsCasewise.Yes,{Afghanistan|BCA},{Canada|BCA})


Результат: для ряда «Brazil|BCA»
 будет рассчитана модель коррекции ошибок по следующим параметрам: модель
 без тренда в авторегрессии и с константой в коинтеграционном уравнении,
 порядок авторегрессии эндогенной переменной - «1», порядок авторегрессии
 экзогенных переменных - «0», экзогенные (объясняющие) переменные - показатели
 «Afghanistan|BCA» и «Canada|BCA».
 Расчёт выполняется на периоде с 2002 по 2016 год с применением обработки
 пропусков методом Casewise.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Ecm(X1,ECMType.TrendIntercept,0,1, MsCasewise.Yes,X2,X3)


Результат: для фактора «X1»
 будет рассчитана модель коррекции ошибок по следующим параметрам: модель
 с линейным трендом в авторегрессии и с константой в коинтеграционном уравнении,
 порядок авторегрессии эндогенной переменной - «0», порядок авторегрессии
 экзогенных переменных - «1», экзогенные (объясняющие) переменные - факторы
 «X2» и «X3».
 Расчёт выполняется на всём периоде с применением обработки пропусков методом
 Casewise.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | Метод расчёта [модели
 коррекции ошибок](Lib.chm::/02_Time_series_analysis/UiModelling_ErrCorrModel.htm) | База данных временных рядов:
 [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Модель
 коррекции ошибок](UiDw.chm::/Workbook/CalculatedSeries/Regression/UiDw_cs_ErrorCorrectionModel.htm) | Контейнер моделирования: «[Модель
 коррекции ошибок](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_Error_control.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

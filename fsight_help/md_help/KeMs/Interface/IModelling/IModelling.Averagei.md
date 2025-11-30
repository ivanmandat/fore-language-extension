# IModelling.AverageI

IModelling.AverageI
-


# IModelling.AverageI


## Синтаксис


		AverageI(Parameters: Array): Variant;


## Параметры


Parameters. Переменная.


## Описание


Метод AverageI
 возвращает среднее значение точек указанной переменной, если она содержит
 только целые значения.


## Комментарии


Если в Parameters указано больше
 одной переменной, то будет вычисляться среднее значение соответствующих
 точек переменных. Например, среднее значение точек за 2018 год по всем
 переменным.


Переменные в Parameters должны
 быть указаны через запятую.


Для метода доступно задание периода расчёта. Для этого используйте метод
 [IModelling.SetPeriod](IModelling.SetPeriod.htm),
 указав его в любом месте входного массива.


Для расчёта метода без учёта пустых значений используйте параметр IgnoreMissing, указав его в любом
 месте входного массива. Допустимые значения параметра:


	- True. По умолчанию.
	 Расчёт ведётся без учёта пустых значений;


	- False. Расчёт ведётся
	 с учётом пустых значений.


Для расчёта среднего значения точек переменной, содержащей не только
 целые значения, используйте метод [IModelling.Average](IModelling.Average.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одной входной переменной.


Первая входная переменная должна содержать только целые значения.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserAverageI;

		Var

		    Mb: IMetabase;

		    ModelSpace, ModelObj: IMetabaseObject;

		    Transf: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Model: IMsModel;

		    Determ: IMsDeterministicTransform;

		    TransVar: IMsFormulaTerm;

		    Inp_1: String;

		    Expr: IExpression;

		Begin

		    Mb := MetabaseClass.Active;

		    // Получаем модель

		    ModelSpace := Mb.ItemById("MS").Bind;

		    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

		    Model := ModelObj As IMsModel;

		    Transf := Model.Transform;

		    Formula := Transf.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    // Получаем первую входную переменную

		    TransVar := Determ.Operands.Item(0);

		    Inp_1 := TransVar.TermToInnerText;

		    // Получаем вторую входную переменную

		    TransVar := Determ.Operands.Item(1);

		    // Задаём формулу расчёта

		    Expr := Determ.Expression;

		    Expr.References := "Ms";

		    Expr.AsString := TransVar.TermToInnerText + "+AverageI(" + Inp_1 + ")";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserAverageI;


В результате выполнения примера модель будет рассчитывать значения второй
 входной переменной, увеличенные на среднее значение первой входной переменной.


## Пример использования в выражениях


Выражение 1:


AverageI({Brazil|BCA},False)


Результат: рассчитано среднее значение наблюдений ряда «Brazil|BCA»
 с учётом пустых значений. Если ряд содержит вещественные значения,
 то возникнет ошибка.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


AverageI(X1, SetPeriod(2000,2010))


Результат: рассчитано среднее значение точек фактора «X1»
 за период с 2000 по 2010 год.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


Выражение 3:


AverageI(1, 2, 1, 7)


Результат: 3.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)
 | База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер
 моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

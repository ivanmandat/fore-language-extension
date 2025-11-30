# IModelling.Variance

IModelling.Variance
-


# IModelling.Variance


## Синтаксис


		Variance(Parameters: Array): Variant;


## Параметры


Parameters. Переменная.


## Описание


Метод Variance возвращает дисперсию
 переменной.


## Комментарии


Если в Parameters указано больше
 одной переменной, то будет вычисляться дисперсия для соответствующих точек
 переменных. Например, дисперсия для точек за 2018 год по всем переменным.


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


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одной входной переменной.


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

		    Inp_1: String;

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

		    TermInfo.Type := MsFormulaTermType.Serie;

		    Inp_1 := TermInfo.TermInnerText;

		    TransVar := Transf.Inputs.Item(1);

		    Slice := TransVar.Slices.Item(0);

		    TermInfo := Transf.CreateTermInfo;

		    TermInfo.Slice := Slice;

		    TermInfo.Type := MsFormulaTermType.Pointwise;

		    Expr := Determ.Expression;

		    Expr.References := "Ms";

		    Expr.AsString := TermInfo.TermInnerText + "+Variance(" + Inp_1 + ")";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserProc;


В результате выполнения примера модель будет рассчитывать значения второй
 входной переменной, увеличенные на дисперсию первой входной переменной.


## Пример использования в выражениях


Выражение 1:


Variance({Brazil|BCA}, False, SetPeriod(2000,2010))


Результат: рассчитана дисперсия ряда «Brazil|BCA» с
 учётом пустых значений за период с 2000 по 2010 год.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Variance(X1)


Результат: рассчитана дисперсия фактора «X1».


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


Выражение 3:


Variance(1, 2, 3, 4)


Результат: 1,67.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm) |
 [Дисперсия](Lib.chm::/05_Statistics/UIModelling_dispers.htm) |
 База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm) |
 Контейнер моделирования: [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

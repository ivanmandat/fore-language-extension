# IModelling.Subtract

IModelling.Subtract
-


# IModelling.Subtract


## Синтаксис


		Subtract(Parameters: Array): Variant;


## Параметры


Parameters. Переменные, разность
 которых необходимо найти.


## Комментарии


Переменные в Parameters должны
 быть указаны через запятую.


Для метода доступно задание периода расчёта. Для этого используйте метод
 [IModelling.SetPeriod](IModelling.SetPeriod.htm),
 указав его в любом месте входного массива.


Для расчёта метода без учёта пустых значений используйте параметр IgnoreMissing, указав его в любом
 месте входного массива. Допустимые значения параметра:


	- True. Расчёт ведется
	 без учета пустых значений;


	- False. По умолчанию.
	 Расчет ведется с учетом пустых значений.


## Описание


Метод Subtract
 возвращает разность соответствующих точек для двух и более переменных.


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

		    TermInfo.Type := MsFormulaTermType.Serie;

		    Inp_1 := TermInfo.TermInnerText;

		    TransVar := Transf.Inputs.Item(1);

		    Slice := TransVar.Slices.Item(0);

		    TermInfo := Transf.CreateTermInfo;

		    TermInfo.Slice := Slice;

		    TermInfo.Type := MsFormulaTermType.Pointwise;

		    Inp_2 := TermInfo.TermInnerText;

		    Expr := Determ.Expression;

		    Expr.References := "Ms";

		    Expr.AsString := "Subtract(" + Inp_1 + "," + Inp_2 + ", SetPeriod(2000,2010), True)";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserProc;


В результате выполнения примера модель будет рассчитывать разность соответствующих
 точек для первой и второй входных переменных без учёта пустых значений за
 период с 2000 по 2010 год.


## Пример использования в выражениях


Выражение 1:


Subtract({Brazil|BCA},{China|BCA},{Sudan|BCA})


Результат: разность соответствующих наблюдений рядов «Brazil|BCA»,
 «China|BCA» и «Sudan|BCA».


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Subtract(X1,X2,True)


Результат: разность соответствующих точек факторов «X1»
 и «X2» без учёта пустых значений.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


Выражение 3:


Subtract(4,2,5,-3)


Результат: 0.


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

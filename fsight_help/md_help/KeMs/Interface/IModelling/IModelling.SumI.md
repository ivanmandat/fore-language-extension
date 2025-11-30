# IModelling.SumI

IModelling.SumI
-


# IModelling.SumI


## Синтаксис


		SumI(Parameters: Array): Variant;


## Параметры


Parameters. Переменные, сумму
 которых необходимо найти.


## Описание


Метод SumI
 возвращает сумму соответствующих точек для двух и более переменных, если
 они содержат только целые значения.


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


Для расчёта суммы соответствующих точек для переменных, содержащих не
 только целые значения, используйте метод [IModelling.Sum](IModelling.Sum.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одной входной переменной.


Первая и вторая входные переменные должны содержать только целые значения.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserSumI;

		Var

		    Mb: IMetabase;

		    ModelSpace, ModelObj: IMetabaseObject;

		    Transf: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Model: IMsModel;

		    Determ: IMsDeterministicTransform;

		    Term: IMsFormulaTerm;

		    Inp_1, Inp_2: String;

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

		    Term := Determ.Operands.Item(0);

		    Inp_1 := Term.TermToInnerText;

		    // Получаем вторую входную переменную

		    Term := Determ.Operands.Item(1);

		    Inp_2 := Term.TermToInnerText;

		    // Задаем выражение для расчёта

		    Expr := Determ.Expression;

		    Expr.References := "Ms";

		    Expr.AsString := "SumI(" + Inp_1 + "," + Inp_2 + ", True)";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserSumI;


В результате выполнения примера модель будет рассчитывать сумму соответствующих
 точек для первой и второй входных переменных без учёта пустых значений.


## Пример использования в выражениях


Выражение 1:


SumI({Brazil|BCA},{China|BCA},{Sudan|BCA})


Результат: сумма соответствующих наблюдений рядов «Brazil|BCA»,
 «China|BCA» и «Sudan|BCA».
 Если какой-либо из рядов содержит вещественные значения, то возникнет
 ошибка.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


SumI(X1,X2,True)


Результат: сумма соответствующих точек факторов «X1»
 и «X2» без учёта пустых значений.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


Выражение 3:


SumI(4,2,5,-3)


Результат: 8.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)
 | База данных временных рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

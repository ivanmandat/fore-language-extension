# IModelling.MinI

IModelling.MinI
-


# IModelling.MinI


## Синтаксис


		MinI(Inputs: Array): Variant;


## Параметры


Inputs. Переменная.


## Описание


Метод MinI
 возвращает минимальное значение среди точек переменной, если она содержит
 только целые значения.


## Комментарии


Если в Inputs указано больше
 одной переменной, то будет вычисляться минимальное значение соответствующих
 точек переменных. Например, минимальное значение точек за 2018 год по
 всем переменным.


Переменные в Inputs должны
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


Для получения минимального значения переменной, содержащей не только
 целые значения, используйте метод [IModelling.Min](IModelling.Min.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одной входной переменной.


Первая входная переменная должна содержать только целые значения.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserMinI;

		Var

		    Mb: IMetabase;

		    ModelSpace, ModelObj: IMetabaseObject;

		    Transf: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Model: IMsModel;

		    Determ: IMsDeterministicTransform;

		    Term: IMsFormulaTerm;

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

		    Term := Determ.Operands.Item(0);

		    Inp_1 := Term.TermToInnerText;

		    // Получаем вторую входную переменную

		    Term := Determ.Operands.Item(1);

		    Expr := Determ.Expression;

		    Expr.References := "Ms";

		    Expr.AsString := Term.TermToInnerText + "+MinI(" + Inp_1 + ")";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserMinI;


В результате выполнения примера модель будет рассчитывать значения второй
 входной переменной, увеличенные на минимальное значение первой входной
 переменной.


## Пример использования в выражениях


Выражение 1:


MinI({Brazil|BCA},{Peru|BCA})


Результат: минимальное значение соответствующих наблюдений рядов «Brazil|BCA» и «Peru|BCA».
 Если какой-либо из рядов содержит вещественные значения, то возникнет
 ошибка.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


MinI(X1, SetPeriod(2000,2010), false)


Результат: минимальное значение точек фактора «X1»
 с учётом пустых значений за период с 2000 по 2010 год.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


Выражение 3:


MinI(1, 2, 3, 4)


Результат: 1.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm) |
 База данных временных рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

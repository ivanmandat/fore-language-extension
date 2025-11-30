# IModelling.MaxI

IModelling.MaxI
-


# IModelling.MaxI


## Синтаксис


		MaxI(Inputs: Array): Variant;


## Параметры


Inputs. Переменная.


## Описание


Метод MaxI
 возвращает максимальное значение среди точек переменной, если она содержит
 только целые значения.


## Комментарии


Если в Inputs указано больше
 одной переменной, то будет вычисляться максимальное значение соответствующих
 точек переменных. Например, максимальное значение точек за 2018 год по
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


Для получения максимального значения переменной, содержащей не только
 целые значения, используйте метод [IModelling.Max](IModelling.Max.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одной входной переменной.


Первая входная переменная должна содержать только целые значения.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserMaxI;

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

		    Expr.AsString := Term.TermToInnerText + "+MaxI(" + Inp_1 + ")";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserMaxI;


В результате выполнения примера модель будет рассчитывать значения второй
 входной переменной, увеличенные на максимальное значение первой входной
 переменной.


## Пример использования в выражениях


Выражение 1:


MaxI({Brazil|BCA}, SetPeriod(2000,2010))


Результат: максимальное значение наблюдений ряда «Brazil|BCA» за
 период с 2000 по 2010 год. Если какой-либо из рядов содержит вещественные
 значения, то возникнет ошибка.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


MaxI(False, X1, X2)


Результат: максимальное значение соответствующих точек факторов «X1» и «X2»
 с учётом пустых значений.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


Выражение 3:


MaxI(1, 2, 3, 4)


Результат: 4.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm) |
 База данных временных рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

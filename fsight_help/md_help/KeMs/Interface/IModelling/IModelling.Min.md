# IModelling.Min

IModelling.Min
-


# IModelling.Min


## Синтаксис


		Min(Inputs: Array): Variant;


## Параметры


Inputs. Переменная.


## Описание


Метод Min
 возвращает минимальное значение среди точек переменной.


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

		    Expr.AsString := TermInfo.TermInnerText + "+Min(" + Inp_1 + ", False, SetPeriod(2000,2010))";

		    If Expr.Valid

		        Then ModelObj.Save;

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserProc;


В результате выполнения примера модель будет рассчитывать значения второй
 входной переменной, увеличенные на минимальное значение первой входной
 переменной, с учётом пустых значений за период с 2000 по 2010 год.


## Пример использования в выражениях


Выражение 1:


Min({Brazil|BCA},{Peru|BCA})


Результат: минимальное значение соответствующих наблюдений рядов «Brazil|BCA» и «Peru|BCA».


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Min(X1)


Результат: минимальное значение точек фактора «X1».


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


Выражение 3:


Min(1, 2, 3, 4)


Результат: 1.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)
 | База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер
 моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)|
 База данных временных рядов:


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

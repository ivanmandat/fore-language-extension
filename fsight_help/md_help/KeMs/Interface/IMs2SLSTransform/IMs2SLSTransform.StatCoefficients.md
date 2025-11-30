# IMs2SLSTransform.StatCoefficients

IMs2SLSTransform.StatCoefficients
-


# IMs2SLSTransform.StatCoefficients


## Синтаксис


		StatCoefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
		 [IModelCoefficients](StatLib.chm::/Interface/IModelCoefficients/IModelCoefficients.htm);


## Параметры


Coord. Срез моделируемой переменной,
 для которого осуществляется расчёт.


## Описание


Свойство StatCoefficients возвращает
 значения статистических характеристик, рассчитанных для коэффициентов
 идентифицированного уравнения.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере создана
 модель с идентификатором NEW_2SLS, использующая для расчёта метод линейной
 регрессии (оценка методом инструментальных переменных).


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    SLS2: IMs2SLSTransform;

		    Calc: IMsModelCalculation;

		    Period: IMsModelPeriod;

		    Coord: IMsFormulaTransformCoord;

		    Coef: ICoefficients;

		    a: Array Of Double;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Model := MB.ItemByIdNamespace("New_2SLS", MB.ItemById("MODEL_SPACE").Key).Bind As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Trans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Trans.Transform(Selector);

		    SLS2 := Formula.Method As IMs2SLSTransform;

		    Calc := Model.CreateCalculation;

		    Period := Calc.Period;

		    Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

		    Period.IdentificationEndDate := DateTime.ComposeDay(2000, 12, 31);

		    Period.ForecastStartDate := DateTime.ComposeDay(2001, 01, 01);

		    Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

		    Coord := Trans.CreateCoord(VarTrans);

		    SLS2.Identify(Calc As IMsMethodCalculation, Coord);

		    Coef := SLS2.StatCoefficients(Coord).Coefficients;

		    Debug.WriteLine("Значения");

		    a := Coef.Estimate;

		    For i := 0 To a.Length - 1 Do

		        Debug.WriteLine(a[i]);

		    End For;

		    Debug.WriteLine("Вероятность");

		    a := Coef.Probability;

		    For i := 0 To a.Length - 1 Do

		        Debug.WriteLine(a[i]);

		    End For;

		    Debug.WriteLine("Стандартная ошибка");

		    a := Coef.StandardError;

		    For i := 0 To a.Length - 1 Do

		        Debug.WriteLine(a[i]);

		    End For;

		    Debug.WriteLine("Значение Т-статистики");

		    a := Coef.TStatistic;

		    For i := 0 To a.Length - 1 Do

		        Debug.WriteLine(a[i]);

		    End For;

		End Sub UserProc;


В результате выполнения примера осуществляется идентификация коэффициентов
 уравнения модели. В окно консоли будут выведены значения статистических
 характеристик, рассчитанных для коэффициентов.


См. также:


[IMs2SLSTransform](IMs2SLSTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsLinearRegressionTransform.StatCoefficients

IMsLinearRegressionTransform.StatCoefficients
-


# IMsLinearRegressionTransform.StatCoefficients


## Синтаксис


StatCoefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 [IModelCoefficients](StatLib.chm::/Interface/IModelCoefficients/IModelCoefficients.htm);


## Параметры


Coord. Срез моделируемой переменной, для которого
 осуществляется расчет.


## Описание


Свойство StatCoefficients возвращает
 значения статистических характеристик, рассчитанных для коэффициентов
 идентифицированного уравнения.


## Пример


Для выполнения примера предполагается наличие в контейнере моделирования
 модели, использующей для расчета метод линейной регрессии.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Model: IMsModel;

    Trans: IMsFormulaTransform;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Linear: IMsLinearRegressionTransform;

    Calc: IMsModelCalculation;

    Coord: IMsFormulaTransformCoord;

    PairArr: Array Of Double;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("NEW_LINREG", MB.ItemById("KONT_MODEL").Key).Bind;

    Model := MObj As IMsModel;

    Trans := Model.Transform;

    VarTrans := Trans.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    Linear := Formula.Method As IMsLinearRegressionTransform;

    Calc := Model.CreateCalculation;

    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2000, 12, 31);

    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2001, 01, 01);

    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    Coord := Trans.CreateCoord(VarTrans);

    //идентификация уравнения

    Linear.Identify(Calc As IMsMethodCalculation, Coord);

    Coef := Linear.StatCoefficients(Coord).Coefficients;

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


После выполнения примера осуществляется идентификация коэффициентов
 уравнения модели. В окно консоли будут выведены значения статистических
 характеристик, рассчитанных для коэффициентов.


См. также:


[IMsLinearRegressionTransform](IMsLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsLinearRegressionTransform.AutoSelection

IMsLinearRegressionTransform.AutoSelection
-


# IMsLinearRegressionTransform.AutoSelection


## Синтаксис


AutoSelection: [ILinearRegressionAutoSelection](StatLib.chm::/Interface/ILinearRegressionAutoSelection/ILinearRegressionAutoSelection.htm);


## Описание


Свойство AutoSelection возвращает
 настройки, используемые для автоподбора комбинации факторов, при которых
 значения коэффициентов идентифицированного уравнения будут оптимальными.


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

    Period: IMsModelPeriod;

    AutoSel: ILinearRegressionAutoSelection;

    Coord: IMsFormulaTransformCoord;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemByIdNamespace("New_LinReg", MB.ItemById("KONT_MODEL").Key).Edit;

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

    Period := Calc.Period;

    Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

    Period.IdentificationEndDate := DateTime.ComposeDay(2000, 12, 31);

    Period.ForecastStartDate := DateTime.ComposeDay(2001, 01, 01);

    Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    AutoSel := Linear.AutoSelection;

    AutoSel.Criterion := CriterionType.SumOfSquareError;

    AutoSel.Min := 1;

    AutoSel.Max := 3;

    AutoSel.IsActive := True;

    Coord := Trans.CreateCoord(VarTrans);

    Linear.Identify(Calc As IMsMethodCalculation, Coord);

    MObj.Save;

End Sub UserProc;


После выполнения примера будет осуществлена идентификация коэффициентов
 уравнения модели. При идентификации будет осуществлен подбор комбинации
 факторов, при котором значения коэффициентов будут оптимальными.


См. также:


[IMsLinearRegressionTransform](IMsLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

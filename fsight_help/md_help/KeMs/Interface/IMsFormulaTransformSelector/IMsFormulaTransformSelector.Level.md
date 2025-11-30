# IMsFormulaTransformSelector.Level

IMsFormulaTransformSelector.Level
-


# IMsFormulaTransformSelector.Level


## Синтаксис


Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);


## Описание


Свойство Level определяет уровень
 календарного измерения среза переменной.


## Пример


Для выполнения примера предполагается наличие в контейнере моделирования
 с идентификатором OBJ_TRANSFORMATION модели с идентификатором OBJ_MODEL.
 Для переменных входящих в модель, должна быть определена годовая динамика.


			Sub UserProc;

Var

    MB: IMetabase;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    VarTrans: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    LinReg: IMsLinearRegressionTransform;

    Coord: IMsFormulaTransformCoord;

    Calc: IMsModelCalculation;

    CalcRes: IMsModelCalculationResult;

Begin

    MB := MetabaseClass.Active;

    Model := MB.ItemByIdNamespace("OBJ_MODEL", MB.ItemById("OBJ_TRANSFORMATION").Key).Bind As IMsModel;

    Transform := Model.Transform;

    VarTrans := Transform.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Output.Item(0).Transform.CreateSelector;

    Selector.Slice := Slice;

    Selector.Level := DimCalendarLevel.Year;

    Formula := Model.Transform.Transform(Selector);

    LinReg := Formula.Method As IMsLinearRegressionTransform;

    Coord := Model.Transform.CreateCoord(VarTrans);

    Calc := Model.CreateCalculation;

    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2007, 12, 31);

    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2008, 01, 01);

    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    CalcRes := LinReg.Execute(Calc As IMsMethodCalculation, Coord);

End Sub UserProc;


После выполнения примера будет осуществлен расчет модели с идентификатором
 OBJ_MODEL. Расчет осуществляется по измерению «Факт» моделируемой переменной.
 Если в переменной имеются дополнительные измерения, то расчет будет производиться
 по первым элементам этих измерений.


См. также:


[IMsFormulaTransformSelector](IMsFormulaTransformSelector.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsFormulaTransformCoord.Dimension

IMsFormulaTransformCoord.Dimension
-


# IMsFormulaTransformCoord.Dimension


## Синтаксис


Dimension(Index: Integer): [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Параметры


Index. Индекс дополнительного
 измерения.


## Описание


Свойство Dimension возвращает
 данные дополнительного измерения по индексу.


## Пример


Для выполнения примера предполагается наличие в контейнере моделирования
 модели, использующей для расчета метод линейной регрессии. Моделируемая
 переменная содержит одно дополнительное измерение.


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

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Model := MB.ItemByIdNamespace("MODEL_1", MB.ItemById("KONT_MODEL").Key).Bind As IMsModel;

    Transform := Model.Transform;

    VarTrans := Transform.Outputs.Item(0);

    Tree := VarTrans.SlicesTree(VarTrans);

    Slice := Tree.CreateSlice(1);

    Selector := Model.Output.Item(0).Transform.CreateSelector;

    Selector.Slice := Slice;

    Formula := Model.Transform.Transform(Selector);

    LinReg := Formula.Method As IMsLinearRegressionTransform;

    Coord := Model.Transform.CreateCoord(VarTrans);

    Calc := Model.CreateCalculation;

    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2007, 12, 31);

    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2008, 01, 01);

    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    i := Coord.Dimension(0).Attributes.Item(0).LookupValue("Брянская область");

    If i <> -1 Then

        Coord.Item(0) := i;

        LinReg.Identify(Calc As IMsMethodCalculation, Coord);

        Debug.WriteLine(LinReg.Summary(Coord).R2.ToString);

    End If;

End Sub UserProc;


После выполнения примера в данных первого дополнительного измерения
 переменной, будет осуществлен поиск по первому атрибуту значения «Брянская
 область», и в случае удачного поиска, по данному элементу будет произведена
 идентификация коэффициентов уравнения модели.


См. также:


[IMsFormulaTransformCoord](IMsFormulaTransformCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

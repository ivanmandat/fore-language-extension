# IMsLinearRegressionTransform.Coefficients

IMsLinearRegressionTransform.Coefficients
-


# IMsLinearRegressionTransform.Coefficients


## Синтаксис


Coefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 Array;


## Параметры


Coord. Срез моделируемой переменной,
 для которого осуществляется расчет.


## Описание


Свойство Coefficients определяет
 массив значений коэффициентов уравнения модели. Если в уравнении присутствует
 константа, то значение константы указывается в последнем элементе массива.
 Для сохранения коэффициентов необходимо данному свойству присвоить массив
 значений, для сброса коэффициентов - присвоить значение Null.


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

    Coef: Array Of Double;

    Ar: Array[0..1] Of Integer;

    i: Integer;

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

    Ar[0] := 2;

    Ar[1] := 3;

    Linear.AutoRegressionOrder := Ar;

    Calc := Model.CreateCalculation;

    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2000, 12, 31);

    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2001, 01, 01);

    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    Coord := Trans.CreateCoord(VarTrans);

    //идентификация нового уравнения

    Linear.Identify(Calc As IMsMethodCalculation, Coord);

    //получаем расчитанные коэффициенты

    Coef := Linear.Coefficients(Coord);

    //если не сохранены - сохраняем

    If Not Linear.IsCoefficientsSaved(Coord) Then

        Linear.Coefficients(Coord) := Coef;

    End If;

    //выводим в консоль

    For i := 0 To Coef.Length - 1 Do

        Debug.WriteLine(Coef[i]);

    End For;

    MObj.Save;

End Sub UserProc;


После выполнения примера будут изменены параметры модели и рассчитаны
 новые коэффициенты уравнения. Несохраненные значения коэффициентов будут
 сохранены и выведены в окно консоли.


См. также:


[IMsLinearRegressionTransform](IMsLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

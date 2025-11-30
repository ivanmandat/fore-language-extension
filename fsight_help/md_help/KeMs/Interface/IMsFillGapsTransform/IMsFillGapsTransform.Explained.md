# IMsFillGapsTransform.Explained

IMsFillGapsTransform.Explained
-


# IMsFillGapsTransform.Explained


## Синтаксис


		Explained: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство Explained возвращает
 моделируемый ряд.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере создана
 модель с идентификатором MODEL, использующая для расчёта метод обработки
 пропусков.


Добавьте ссылки на системные сборки: Metabase, Ms.


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

		    FillGaps: IMsFillGapsTransform;

		    Calc: IMsModelCalculation;

		    Exp: Array Of Double;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("MODEL", MB.ItemById("MODEL_SPACE").Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    FillGaps := Formula.Method As IMsFillGapsTransform;

		    Calc := Model.CreateCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.ComposeDay(1990, 01, 01);

		    Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2000, 12, 31);

		    Calc.Period.ForecastStartDate := DateTime.ComposeDay(2001, 01, 01);

		    Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 01, 01);

		    Exp := FillGaps.Explained.Serie(Calc As IMsMethodCalculation);

		    For i := 0 To Exp.Length - 1 Do

		        Debug.WriteLine(Exp[i]);

		    End For;

		End Sub UserProc;


В результате выполнения примера будет получен моделируемый ряд модели.
 Значения моделируемого ряда будут выведены в консоль среды разработки.


См. также:


[IMsFillGapsTransform](IMsFillGapsTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

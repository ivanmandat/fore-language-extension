# IMsCompositeFormulaTerm.ChangeLag

IMsCompositeFormulaTerm.ChangeLag
-


# IMsCompositeFormulaTerm.ChangeLag


## Синтаксис


		ChangeLag(Value: Integer);


## Параметры


Value. Значение, на которое
 необходимо изменить текущее значение лага.


## Описание


Метод ChangeLag осуществляет
 изменение значения лага.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования, содержащего модель с идентификатором NEW_LINREG. Для расчёта
 модели используется метод линейной регрессии.


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

		    LinReg: IMsLinearRegressionTransform;

		    TransVar: IMsFormulaTransformVariable;

		    ComposForm: IMsCompositeFormulaTermList;

		    ComposTerm: IMsCompositeFormulaTerm;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemByIdNamespace("New_LinReg",MB.ItemById("KONT_MODEL").Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Formula.Kind := MsFormulaKind.LinearRegression;

		    LinReg := Formula.Method As IMsLinearRegressionTransform;

		    TransVar := Model.Transform.Inputs.Item(0);

		    ComposForm := LinReg.Explanatories;

		    ComposTerm := ComposForm.Item(0);

		    ComposTerm.Inversion:= MsInversion.Normalization;

		    ComposTerm.InversionLag:= MsInversionLag.PrecidingValue;

		    ComposTerm.ChangeLag(-5);

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера будет изменён лаг и параметры начального
 преобразования для первого составного терма модели. Значение лага будет
 увеличено на 5.


См. также:


[IMsCompositeFormulaTerm](IMsCompositeFormulaTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

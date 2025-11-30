# IMsBinaryRegressionTransform.FittedTermSet

IMsBinaryRegressionTransform.FittedTermSet
-


# IMsBinaryRegressionTransform.FittedTermSet


## Синтаксис


		FittedTermSet: [IMsFormulaTermSet](../IMsFormulaTermSet/IMsFormulaTermSet.htm);


## Описание


Свойство FittedTermSet
 возвращает набор рядов, в которые будут выгружаться данные модельного
 ряда при расчёте задачи.


## Комментарии


Размерность набора FittedTermSet
 должна совпадать с размерностью набора объясняемой переменной, заданной
 в свойстве [IMsBinaryRegressionTransform.Explained](IMsBinaryRegressionTransform.Explained.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере содержится модель
 с идентификатором BINREG, использующая для расчёта метод бинарной регрессии.
 Размерность набора объясняемой переменной модели равняется единице. Также
 в данном контейнере присутствует переменная FITTED.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    SpaceDescr: IMetabaseObjectDescriptor;

		    MObj: IMetabaseObject;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    VarTrans: IMsFormulaTransformVariable;

		    Tree: IMsFormulaTransformSlicesTree;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Binary: IMsBinaryRegressionTransform;

		    Var_out: IMsVariable;

		    pF_out: IMsFormulaTransformVariable;

		Begin

		    MB := MetabaseClass.Active;

		    SpaceDescr := mb.ItemById("CONT_MODEL");

		    MObj := MB.ItemByIdNamespace("BinReg", SpaceDescr.Key).Edit;

		    Model := MObj As IMsModel;

		    Trans := Model.Transform;

		    VarTrans := Trans.Outputs.Item(0);

		    Tree := VarTrans.SlicesTree(VarTrans);

		    Slice := Tree.CreateSlice(1);

		    Selector := Model.Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Model.Transform.Transform(Selector);

		    Binary := Formula.Method As IMsBinaryRegressionTransform;

		    // Определение переменной для выгрузки модельного ряда

		    Var_out := mb.ItemByIdNamespace("FITTED", SpaceDescr.Key).Bind As IMsVariable;

		    pF_out := Trans.Outputs.Add(Var_out As IVariableStub);

		    Binary.FittedTermSet.Clear;

		    Binary.FittedTermSet.Add(pF_out.Slices.Add(Null));

		    MObj.Save;

		End Sub UserProc;


В результате выполнения примера при расчёте задачи данные модельного
 ряда будут выгружаться в переменную FITTED.


См. также:


[IMsBinaryRegressionTransform](IMsBinaryRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

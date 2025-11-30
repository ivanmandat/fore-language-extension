# IMsBinaryRegressionTransform.ForecastTermSet

IMsBinaryRegressionTransform.ForecastTermSet
-


# IMsBinaryRegressionTransform.ForecastTermSet


## Синтаксис


ForecastTermSet: [IMsFormulaTermSet](../IMsFormulaTermSet/IMsFormulaTermSet.htm);


## Описание


Свойство ForecastTermSet
 возвращает набор рядов, в которые будут выгружаться прогнозные данные
 при расчёте задачи.


## Комментарии


Размерность набора должна совпадать с размерностью набора объясняемой
 переменной [IMsBinaryRegressionTransform.Explained](IMsBinaryRegressionTransform.Explained.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере содержится модель
 с идентификатором BINREG, использующая для расчёта метод бинарной регрессии.
 Размерность набора объясняемой переменной модели равняется единице. Также
 в данном контейнере присутствует переменная FORECAST.


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

	    // Определение переменной для выгрузки прогнозных
	 данных

	    Var_out := mb.ItemByIdNamespace("FORECAST", SpaceDescr.Key).Bind As IMsVariable;

	    pF_out := Trans.Outputs.Add(Var_out As IVariableStub);

	    Binary.ForecastTermSet.Clear;

	    Binary.ForecastTermSet.Add(pF_out.Slices.Add(Null));

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера при расчёте задачи прогнозные данные
 будут выгружаться в переменную FORECAST.


См. также:


[IMsBinaryRegressionTransform](IMsBinaryRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

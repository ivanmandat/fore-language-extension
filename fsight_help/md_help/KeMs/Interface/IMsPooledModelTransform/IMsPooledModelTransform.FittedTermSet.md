# IMsPooledModelTransform.FittedTermSet

IMsPooledModelTransform.FittedTermSet
-


# IMsPooledModelTransform.FittedTermSet


## Синтаксис


FittedTermSet: [IMsFormulaTermSet](../IMsFormulaTermSet/IMsFormulaTermSet.htm);


## Описание


Свойство FittedTermSet возвращает
 параметры переменной, в которую будут выгружены данные модельного ряда
 после расчета модели.


## Комментарии


По умолчанию переменная не задана. Размерности
 данной и объясняемой переменной должны совпадать. Параметры объясняемой
 переменной возвращает свойство [IMsPooledModelTransform.Explained](IMsPooledModelTransform.Explained.htm).


Параметры, возвращаемые FittedTermSet,
 представлены в виде набора термов.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором «OBJ_MS». В данном контейнере должна присутствовать
 модель с идентификатором «MODEL», использующая для расчета метод регрессии
 на панельных данных. В контейнере моделирования должны содержаться переменные,
 размерность и измерения которых совпадают с моделируемой переменной. Идентификаторы
 данных переменных: «VAR_FITTED_POOLED», «VAR_FORECAST_POOLED», «VAR_RESIDUALS_POOLED»,
 «VAR_LO_LEVEL_POOLED», «VAR_UP_LEVEL_POOLED».


Также необходимо добавить ссылки на системные сборки «Metabase», «Ms».


			Sub UsepProc;

    Var

    Mb: IMetabase;

    MsDescr: IMetabaseObjectDescriptor;

    Model: IMsModel;

    ModelTransform: IMsFormulaTransform;

    Variable: IVariableStub;

    ModelFormula: IMsFormula;

    PooledModel: IMsPooledModelTransform;

    TermSet: IMsFormulaTermSet;

Begin

    Mb := MetabaseClass.Active;

    MsDescr := Mb.ItemById("OBJ_MS");

    Model := MB.ItemByIdNamespace("MODEL", MsDescr.Key).Edit As IMsModel;

    ModelTransform := Model.Transform;

    ModelFormula := ModelTransform.FormulaItem(0);

    PooledModel := ModelFormula.Method As IMsPooledModelTransform;

    Variable := MB.ItemByIdNamespace("VAR_FITTED_POOLED", MsDescr.Key).Bind As IVariableStub;

    TermSet := PooledModel.FittedTermSet;

    FillOutputSeries(Variable, TermSet, ModelTransform);

    Variable := MB.ItemByIdNamespace("VAR_FORECAST_POOLED", MsDescr.Key).Bind As IVariableStub;

    TermSet := PooledModel.ForecastTermSet;

    FillOutputSeries(Variable, TermSet, ModelTransform);

    Variable := MB.ItemByIdNamespace("VAR_RESIDUALS_POOLED", MsDescr.Key).Bind As IVariableStub;

    TermSet := PooledModel.ResidualsTermSet;

    FillOutputSeries(Variable, TermSet, ModelTransform);

    Variable := MB.ItemByIdNamespace("VAR_LO_LEVEL_POOLED", MsDescr.Key).Bind As IVariableStub;

    TermSet := PooledModel.LowerConfidenceLevelTermSet;

    FillOutputSeries(Variable, TermSet, ModelTransform);

    Variable := MB.ItemByIdNamespace("VAR_UP_LEVEL_POOLED", MsDescr.Key).Bind As IVariableStub;

    TermSet := PooledModel.UpperConfidenceLevelTermSet;

    FillOutputSeries(Variable, TermSet, ModelTransform);

    (Model As IMetabaseObject).Save;

End Sub UsepProc;

Sub FillOutputSeries(Stub: IVariableStub; Var TermSet: IMsFormulaTermSet; ModelTransform: IMsFormulaTransform);

Var

    ModelligVar: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    i: Integer;

    Slice: IMsFormulaTransformSlice;

Begin

    ModelligVar := ModelTransform.Outputs.Add(Stub);

    TermSet.Clear;

    Tree := ModelligVar.SlicesTree(Null);

    For i := 1 To Tree.Count Do

        Slice := Tree.CreateSlice(i);

        TermSet.Add(Slice);

    End For;

End Sub FillOutputSeries;


После выполнения примера при расчете модели результаты будут выгружаться
 в следующие переменные:


	- данные модельного ряда - «VAR_FITTED_POOLED»;


	- данные прогнозного ряда - «VAR_FORECAST_POOLED»;


	- данные ряда остатков - «VAR_RESIDUALS_POOLED»;


	- данные нижней доверительной границы - «VAR_LO_LEVEL_POOLED»;


	- данные верхней доверительной границы - «VAR_UP_LEVEL_POOLED».


См. также:


[IMsPooledModelTransform](IMsPooledModelTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

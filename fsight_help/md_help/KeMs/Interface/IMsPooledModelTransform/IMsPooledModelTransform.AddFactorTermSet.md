# IMsPooledModelTransform.AddFactorTermSet

IMsPooledModelTransform.AddFactorTermSet
-


# IMsPooledModelTransform.AddFactorTermSet


## Синтаксис


AddFactorTermSet: [IMsFormulaTermSet](../IMsFormulaTermSet/IMsFormulaTermSet.htm);


## Описание


Свойство AddFactorTermSet возвращает набор рядов, которые используются в качестве добавляемых факторов.


## Комментарии


Добавляемый фактор используется для корректировки прогноза. Он не включаются в сгенерированное наименование модели.


По умолчанию добавляемый фактор отсутствует.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера моделирования с идентификатором «CONT_MODEL», содержащим модель регрессии на панельных данных с идентификатором «MODEL». Также в контейнере должна присутствовать переменная с идентификатором «VAR_ADD».


Добавьте ссылки на системные сборки «Metabase», «Ms», «Cubes».


			Sub UserProc;

Var

    mb: IMetabase;

    ContModelKey: Integer;

    Model: IMsModel;

    Variable: IVariableStub;

    Transform: IMsFormulaTransform;

    Formula: IMsFormula;

    Method: IMsPooledModelTransform;

    AddFactorTS: IMsFormulaTermSet;

    TransVar: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    i: Integer;

    Slice: IMsFormulaTransformSlice;

Begin

    mb := MetabaseClass.Active;

    ContModelKey := mb.ItemById("CONT_MODEL").Key;

    Model := mb.ItemByIdNamespace("MODEL", ContModelKey).Edit As IMsModel;

    Variable := MB.ItemByIdNamespace("VAR_ADD", ContModelKey).Bind As IVariableStub;

    Transform := Model.Transform;

    Formula := Transform.FormulaItem(0);

    Method := Formula.Method As IMsPooledModelTransform;

    AddFactorTS := Method.AddFactorTermSet;

    AddFactorTS.Clear;

    Transform.Inputs.Add(Variable);

    TransVar := Transform.Inputs.FindById("VAR_ADD");

    Tree := TransVar.SlicesTree(Null);

    For i := 1 To Tree.Count Do

        Slice := Tree.CreateSlice(i);

        AddFactorTS.Add(Slice);

    End For;

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для корректировки прогноза в модели будет использоваться добавляемый фактор «VAR_ADD».


См. также:


[IMsPooledModelTransform](IMsPooledModelTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

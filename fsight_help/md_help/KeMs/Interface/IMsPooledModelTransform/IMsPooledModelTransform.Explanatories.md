# IMsPooledModelTransform.Explanatories

IMsPooledModelTransform.Explanatories
-


# IMsPooledModelTransform.Explanatories


## Синтаксис


Explanatories: [IMsCompositeFormulaTermSetList](../IMsCompositeFormulaTermSetList/IMsCompositeFormulaTermSetList.htm);


## Описание


Свойство Explanatories возвращает массив объясняющих переменных (факторов).


## Комментарии


Размерности моделируемой и объясняющих переменных в модели должны совпадать.


Переменные, возвращаемые Explanatories, представлена в виде набора составных термов.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера моделирования с идентификатором «OBJ_MS». В данном контейнере должна присутствовать модель с идентификатором «MODEL», использующая для расчета метод регрессии на панельных данных.


Также необходимо добавить ссылки на системные сборки «Metabase», «Ms», «Stat».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        MsDescr: IMetabaseObjectDescriptor;

        Model: IMsModel;

        ModelTransform: IMsFormulaTransform;

        ModelFormula: IMsFormula;

        PooledModel: IMsPooledModelTransform;

        Explanatories: IMsCompositeFormulaTermSetList;

        i, j: Integer;

        Expl: IMsCompositeFormulaTermSet;

        CompTerm: IMsCompositeFormulaTerm;

    Begin

        Mb := MetabaseClass.Active;

        MsDescr := Mb.ItemById("OBJ_MS");

        Model := MB.ItemByIdNamespace("MODEL", MsDescr.Key).Edit As IMsModel;

        ModelTransform := Model.Transform;

        ModelFormula := ModelTransform.FormulaItem(0);

        PooledModel := ModelFormula.Method As IMsPooledModelTransform;

        Explanatories := PooledModel.Explanatories;

        Debug.WriteLine("Термы объясняющих рядов:");

        For i := 0 To Explanatories.Count - 1 Do

            Expl := Explanatories.Item(i);

            Debug.WriteLine("  Переменная " + (i + 1).ToString + ":");

            For j := 0 To Expl.Count - 1 Do

                CompTerm := Expl.Item(j);

                If Expl.Included Then

                    Debug.WriteLine("    " + CompTerm.ExpressionText);

                End If;

            End For;

        End For;

    End Sub UserProc;


После выполнения примера наборы термов объясняющих рядов будут выведены в окно консоли.


См. также:


[IMsPooledModelTransform](IMsPooledModelTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

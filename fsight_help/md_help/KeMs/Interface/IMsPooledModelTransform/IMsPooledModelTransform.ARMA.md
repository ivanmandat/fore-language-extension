# IMsPooledModelTransform.ARMA

IMsPooledModelTransform.ARMA
-


# IMsPooledModelTransform.ARMA


## Синтаксис


ARMA: [ISlARMA](StatLib.chm::/Interface/ISlARMA/ISlARMA.htm);


## Описание


Свойство ARMA возвращает параметры авторегрессии и скользящего среднего.


## Комментарии


По умолчанию порядки авторегрессии и скользящего среднего не заданы.


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

        Weights: IMsFormulaTermSet;

        ARMA: ISlARMA;

        OrderAR: Array[2] Of Integer;

    Begin

        Mb := MetabaseClass.Active;

        MsDescr := Mb.ItemById("OBJ_MS");

        Model := MB.ItemByIdNamespace("MODEL", MsDescr.Key).Edit As IMsModel;

        ModelTransform := Model.Transform;

        ModelFormula := ModelTransform.FormulaItem(0);

        PooledModel := ModelFormula.Method As IMsPooledModelTransform;

        PooledModel.CrossSection := PooledModelCrossSectionType.FixedEffect;

        PooledModel.ConstantMode := InterceptMode.ManualEstimate;

        PooledModel.ConstantValue := 0.78;

        PooledModel.ConfidenceLevel := 0.75;

        PooledModel.MissingData.Method := MissingDataMethod.SampleAverage;

        Weights := PooledModel.Weights;

        Weights.Clear;

        ARMA := PooledModel.ARMA;

        OrderAR[0] := 1;

        OrderAR[1] := 3;

        ARMA.OrderAR := OrderAR;

        (Model As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера будут изменены некоторые параметры расчета модели. Список измененных параметров и их новые значения:


-
тип модели - модель с фиксированными эффектами;


-
режим задания константы - значение определяется пользователем;


-
значение константы - «0,78»;


-
значимость доверительных границ - «0,75»;


-
метод обработки пропусков - среднее по выборке;


-
веса не будут участвовать в расчете модели;


-
задан порядок авторегрессии.


Все изменения в параметрах расчёта модели будут сохранены.


См. также:


[IMsPooledModelTransform](IMsPooledModelTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

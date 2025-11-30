# IMsMatrixAggregationTransform.Aggregator

IMsMatrixAggregationTransform.Aggregator
-


# IMsMatrixAggregationTransform.Aggregator


## Синтаксис


Aggregator(Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)):
 [IBasicMatrixAggregator](KeMatrix.chm::/Interface/IBasicMatrixAggregator/IBasicMatrixAggregator.htm);


## Параметры


Dimension. Агрегируемое измерение.


## Описание


Свойство Aggregator возвращает
 параметры агрегации для указанного измерения.


## Комментарии


Для задания фильтра агрегации используйте свойство [IMsMatrixAggregationTransform.Filter](IMsMatrixAggregationTransform.Filter.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «MODEL_MATRIXAGGREGATION». Данная модель должна рассчитывать любой из
 доступных методов. Также источник данных модели должен содержать измерение,
 основанное на табличном справочнике НСИ с идентификатором «MDM_DICT_GEOLOCATION».
 Данный справочник должен содержать три или более уровня и атрибут логического
 типа с идентификатором «ISCAPITAL».


Добавьте ссылки на системные сборки: Dimensions, Matrix, Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    pMsKey: Integer;

    pModel: IMsModel;

    pTransform: IMsFormulaTransform;

    pFormula: IMsFormula;

    pMethod: IMsMatrixAggregationTransform;

    pInfo: IMsFormulaTermInfo;

    pAggregator: IBasicMatrixAggregator;

    pLevelAgg: IBasicMatrixLevelAggregator;

    pDimModel: IDimensionModel;

    pDimInstance: IDimInstance;

    pDimLevels: IDimLevels;

    pAggDimSel, pFilterSelection: IDimSelection;

    pFilter: IMsAggregationFilter;

    pAdvancedFilterCondition: IMsDimIteratorAdvancedFilterCondition;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    pMsKey := mb.GetObjectKeyById("MS");

    // Получаем модель

    pModel := mb.ItemByIdNamespace("MODEL_MATRIXAGGREGATION", pMsKey).Edit As IMsModel;

    // Получаем параметры расчета модели

    pTransform := pModel.Transform;

    // Получаем метод расчета модели

    pFormula := pTransform.FormulaItem(0);

    // Изменяем метод расчета модели на матричную агрегацию

    pFormula.Kind := MsFormulaKind.MatrixAggregation;

    // Получаем параметры расчета матричной агрегации

    pMethod := pFormula.Method As IMsMatrixAggregationTransform;

    // Создаем терм

    pInfo := pTransform.CreateTermInfo;

    pInfo.Slice := pTransform.Outputs.Item(0).Slices.Item(0);

    // Получаем отметку, заданную по измерению, которое основано на справочнике «MDM_DICT_GEOLOCATION»

    pAggDimSel := pInfo.Slice.Selection.FindById("MDM_DICT_GEOLOCATION");

    pAggDimSel.SelectAll;

    // Задаем терм, соответствующий моделируемой
 переменной

    pMethod.Result.TermInfo := pInfo;

    // Получаем справочник «MDM_DICT_GEOLOCATION»

    pDimInstance := pAggDimSel.Dimension;

    pDimModel := pDimInstance.Dimension;

    // Получаем календарные динамики справочника

    pDimLevels := pDimModel.Levels;

    // Получаем настройки агрегации

    pAggregator := pMethod.Aggregator(pDimModel);

    // Получаем настройки агрегации для указанной динамики справочника

    pLevelAgg := pAggregator.LevelAggregation(pDimLevels.Item(pDimLevels.Count - 2));

    // Указываем календарную динамику агрегации

    pLevelAgg.Include(pDimLevels.Item(pDimLevels.Count - 1)) := True;

    // Задаем метод агрегации

    pLevelAgg.Operation := BasicAggregatorOperation.Count;

    // Указываем, что неагрегированные данные не сохраняются

    pLevelAgg.PreserveExistingData := False;

    // Добавляем фильтр для измерения агрегации

    pFilter := pMethod.Filter.Add(pDimModel);

    // Оставляем в агрегации только первые шесть элементов справочника

    pFilterSelection := pDimInstance.CreateSelection;

    For i := 0 To 5 Do

        pFilterSelection.SelectElement(i, False);

    End For;

    pFilter.AggregationSelection := pFilterSelection;

    // Добавляем расширенную фильтрацию

    pFilter.AdvancedFilter.Clear;

    pAdvancedFilterCondition := pFilter.AdvancedFilter.Add;

    // Указываем, что агрегируются только те элементы, у которых значение

    // атрибута «ISCAPITAL» равняется True

    pAdvancedFilterCondition.Attribute := pDimModel.Attributes.FindById("ISCAPITAL");

    pAdvancedFilterCondition.Operator_ := MsAdvancedFilterConditionOperator.Equal;

    pAdvancedFilterCondition.Value := True;

    // Сохраняем изменения

    (pModel As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера модель будет настроена на расчет матричной
 агрегации.


См. также:


[IMsMatrixAggregationTransform](IMsMatrixAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

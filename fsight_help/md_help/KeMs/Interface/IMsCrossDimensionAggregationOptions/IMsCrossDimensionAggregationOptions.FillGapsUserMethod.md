# IMsCrossDimensionAggregationOptions.FillGapsUserMethod

IMsCrossDimensionAggregationOptions.FillGapsUserMethod
-


# IMsCrossDimensionAggregationOptions.FillGapsUserMethod


## Синтаксис


FillGapsUserMethod: [IForeMethod](kefore.chm::/interface/iforemethod/iforemethod.htm);


## Описание


Свойство FillGapsUserMethod
 определяет пользовательский метод обработки пропусков.


## Комментарии


Первым параметром пользовательского метода должен передаваться ряд,
 представленный интерфейсом [ITimeSeries](../ITimeSeries/ITimeSeries.htm).
 Остальные параметры опциональные их значения задаются через свойство [IMsCrossDimensionAggregationOptions.FillGapsUserMethodParams](IMsCrossDimensionAggregationOptions.FillGapsUserMethodParams.htm).
 Метод должен возвращать значение [ITimeSeries](../ITimeSeries/ITimeSeries.htm),
 приведённое к типу Variant.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором OBJ_RUBRICATOR, в контейнере
 моделирования которой содержится модель расширенной агрегации с идентификатором
 MODEL_AGGR. Также в репозитории должна присутствовать область глобальных
 параметров с идентификатором SHARED_P, содержащая следующий метод с ключом
 «1»:


	Public Function FillGaps(Input: ITimeSeries; SpecValue: Double): Variant;

	Var

	    i: Integer;

	Begin

	    For i := Input.StartIndex To Input.EndIndex Do

	        If Double.IsNan(Input.Item(i)) Then

	            Input.Item(i) := SpecValue;

	        End If;

	    End For;

	    Return Input;

	End Function FillGaps;


Добавьте ссылки на системные сборки: Cubes, Fore, Metabase, Ms.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Rubr: IRubricator;

	    MsDescr: IMetabaseObjectDescriptor;

	    Model: IMsModel;

	    ModelFormula: IMsFormula;

	    CrossDimAggr: IMsCrossDimensionAggregationTransform;

	    AggrOptions: IMsCrossDimensionAggregationOptions;

	    Shp: ISharedParams;

	    ShMethod: IForeMethod;

	    MetodParams: IMsUserMethodParams;

	Begin

	    Mb := MetabaseClass.Active;

	    Rubr := Mb.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

	    MsDescr := Rubr.ModelSpace;

	    Model := Mb.ItemByIdNamespace("MODEL_AGGR", MsDescr.Key).Edit As IMsModel;

	    ModelFormula := Model.Transform.FormulaItem(0);

	    CrossDimAggr := ModelFormula.Method As IMsCrossDimensionAggregationTransform;

	    AggrOptions := CrossDimAggr.Options;

	    Shp := mb.ItemById("SHARED_P").Edit As ISharedParams;

	    ShMethod := Shp.Methods.FindByKey(1);

	    AggrOptions.FillGapsUserMethod := ShMethod;

	    MetodParams := AggrOptions.FillGapsUserMethodParams;

	    MetodParams.Item(1).Value := 10;

	    AggrOptions.UseFillGaps := True;

	    (Model As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера модель расчёта расширенной агрегации
 будет использовать пользовательский метод обработки пропусков.


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty

IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty
-


# IMsCrossDimensionAggregationOptions.SkipIfWholeWeightIsEmpty


## Синтаксис


		SkipIfWholeWeightIsEmpty: Boolean;


## Описание


Свойство SkipIfWholeWeightIsEmpty
 определяет признак исключения ряда из агрегации, если все веса для него
 пустые.


## Комментарии


Допустимые значения:


	- True. Ряд будет исключён
	 из агрегации, если все веса для него пустые;


	- False. По умолчанию.
	 Ряд учитывается при расчёте агрегации независимо от значения весов.


Веса учитываются, если расчёт ведётся методом взвешенной агрегации,
 например, взвешенная сумма. Если имеются пустые значения веса, то результат
 агрегации будет пустой.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором TSDB, в контейнере моделирования
 которой содержится модель расширенной агрегации с идентификатором
 MODEL_AGGR. Модель рассчитывается методом взвешенной агрегации.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Rubr: IRubricator;

		    MsDescr: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    ModelFormula: IMsFormula;

		    CrossDimAggr: IMsCrossDimensionAggregationTransform;

		    AggrOptions: IMsCrossDimensionAggregationOptions;

		Begin

		    Mb := MetabaseClass.Active;

		    Rubr := Mb.ItemById("TSDB").Bind As IRubricator;

		    MsDescr := Rubr.ModelSpace;

		    // Получаем модель расширенной агрегации

		    Model := Mb.ItemByIdNamespace("MODEL_AGGR", MsDescr.Key).Edit As IMsModel;

		    ModelFormula := Model.Transform.FormulaItem(0);

		    CrossDimAggr := ModelFormula.Method As IMsCrossDimensionAggregationTransform;

		    // Меняем параметры расчёта агрегации

		    AggrOptions := CrossDimAggr.Options;

		    // Исключаем из агрегации ряды со всеми пустыми весами

		    AggrOptions.SkipIfWholeWeightIsEmpty := True;

		    // Задаем значения для заполнения пропусков в данных порога расчета агрегации

		    AggrOptions.TreatEmptyCompositionRelevanceAs := 0;

		    // Исключаем из агрегации ряды, которые имеют пропуски в значениях весов

		    AggrOptions.TreatEmptyWeightsAs := 0;

		    // Указываем, что рассчитываем агрегацию на общем периоде данных

		    AggrOptions.UseCommon := True;

		    { Накладываем ограничение на минимальное количество наблюдений

		    в общем периоде данных - пять значений}

		    AggrOptions.UseNumObservations := True;

		    AggrOptions.NumObservations := 5;

		    // Сохраняем изменения параметров модели

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будут изменены параметры расчёта расширенной
 агрегации:


	- ряды со всеми пустыми весами будут исключены из расчёта агрегации;


	- ряды, которые имеют пропуски в значениях весов, будут исключены
	 из расчёта агрегации;


	- для заполнения пропусков в данных порога расчёта агрегации будет
	 использоваться значение «0»;


	- агрегация будет рассчитываться на общем периоде данных;


	- минимальное количество наблюдений в общем периоде - пять.


См. также:


[IMsCrossDimensionAggregationOptions](IMsCrossDimensionAggregationOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

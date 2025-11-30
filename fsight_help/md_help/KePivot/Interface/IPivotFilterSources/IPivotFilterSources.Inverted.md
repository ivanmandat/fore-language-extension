# IPivotFilterSources.Inverted

IPivotFilterSources.Inverted
-


# IPivotFilterSources.Inverted


## Синтаксис


Inverted: Boolean;


## Описание


Свойство Inverted определяет
 признак применения фильтра в инвертированном режиме.


## Комментарии


Допустимые значения:


	- True. Фильтрация будет
	 применяться в инвертированном режиме: будут скрываться все элементы,
	 для которых есть значения в фильтре;


	- False. По умолчанию.
	 Фильтрация будет выполняться в стандартном режиме: будут скрываться
	 все элементы, для которых отсутствуют значения в фильтре.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, построенного на кубе, и фильтра с идентификатором
 FILTER. Структура и отметка фильтра и куба идентичны.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, Matrix,
 Metabase, Pivot.


			Sub UserProc;

Var

    Mb: IMetabase;

    MbObj: IMetabaseObject;

    ObjParams: IMetabaseObjectParamValues;

    ObjParamsEx: IMetabaseObjectParamValuesEx;

    Eax: IEaxAnalyzer;

    Pvt: IPivot;

    Filter: IPivotFilterSettings;

    FltrSources: IPivotFilterSources;

    FltrSource: IPivotFilterSource;

    CubeSelSet: IDimSelectionSet;

    Cube: ICubeInstance;

    Dest: ICubeInstanceDestination;

Begin

    // Получим репозиторий

    Mb := MetabaseClass.Active;

    // Получим куб, используемый в качестве фильтра

    MbObj := MB.ItemById("FILTER") As IMetabaseObject;

    ObjParams := MbObj.Params.CreateEmptyValues;

    ObjParamsEx := ObjParams As IMetabaseObjectParamValuesEx;

    ObjParamsEx.StateOptions := 2;

    Cube := MbObj.Open(ObjParams) As ICubeInstance;

    Dest := Cube.Destinations.Item(0);

    // Получим отметку куба

    CubeSelSet := Dest.CreateDimSelectionSet;

    // Получим экспресс-отчёт

    Eax := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    // Получим настройки отображения таблицы данных отчёта

    Pvt := Eax.Pivot;

    // Определим параметры фильтрации

    Filter := Pvt.Filter As IPivotFilterSettings;

    // Зададим использование внешнего фильтра

    FltrSources := Filter.FilterSources;

    CubeSelSet := Pvt.Selection;

    Pvt.BeginUpdate;

    FltrSources.Clear;

    // Включим использование фильтра в инвертированном режиме

    FltrSources.Enable := True;

    FltrSources.Inverted := True;

    // Добавим фильтр

    FltrSource := FltrSources.Add;

    // Добавим источник для фильтрации

    FltrSource.DataSource := Dest As IMatrixDataSource;

    // Получим отметку, по которой будет проходить фильтрация

    FltrSource.Selection := CubeSelSet;

    FltrSource.Enable := True;

    Pvt.EndUpdate;

    // Сохраним отчёт

    (Eax As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в отчёте останутся только те значения
 элементов, для которых отсутствуют значения в фильтре.


См. также:


[IPivotFilterSources](IPivotFilterSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

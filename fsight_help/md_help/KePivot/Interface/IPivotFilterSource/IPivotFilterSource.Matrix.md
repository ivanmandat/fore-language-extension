# IPivotFilterSource.Matrix

IPivotFilterSource.Matrix
-


# IPivotFilterSource.Matrix


## Синтаксис


Matrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство Matrix возвращает результирующую
 матрицу, по которой будет проходить фильтрация.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, построенного на кубе, и фильтра с идентификатором
 FILTER. Структура и отметка фильтра и куба идентичны.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, Matrix, Metabase, Pivot.


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

		    Mat, Mat1: IMatrix;

		    MatIt: IMatrixIterator;

		    i: Integer;

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

		    // Включим использование фильтра

		    FltrSources.Enable := True;

		    // Добавим фильтр

		    FltrSource := FltrSources.Add;

		    // Добавим источник для фильтрации

		    FltrSource.DataSource := Dest As IMatrixDataSource;

		    // Получим отметку, по которой будет проходить фильтрация

		    FltrSource.Selection := CubeSelSet;

		    Pvt.EndUpdate;

		    // Выведем матрицу данных отчёта

		    Mat := Pvt.Matrix;

		    Debug.WriteLine("====== Matrix ======");

		    Debug.WriteLine("Количество значений: " + Mat.Count.ToString);

		    Debug.WriteLine("Количество измерений: " + Mat.DimensionCount.ToString);

		    For i := 0 To Mat.DimensionCount - 1 Do

		            Debug.WriteLine(i.ToString + ") '" + Mat.Dimensions.Item(i).Dimension.Name + "' отмечено элементов " + Mat.Dimensions.Item(i).SelectedCount.ToString);

		    End For;

		    MatIt := Mat.CreateIterator;

		    MatIt.Move(IteratorDirection.First);

		    While MatIt.Valid Do

		        Debug.WriteLine("(" + MatIt.CoordsAsString + ") " + MatIt.Value);

		        MatIt.Move(IteratorDirection.Next);

		    End While;

		    // Выведем матрицу данных фильтр

		    Mat1 := FltrSource.Matrix;

		    Debug.WriteLine("====== Matrix ======");

		    Debug.WriteLine("Количество значений: " + Mat1.Count.ToString);

		    Debug.WriteLine("Количество измерений: " + Mat1.DimensionCount.ToString);

		    For i := 0 To Mat1.Dimensions.Count - 1 Do

		            Debug.WriteLine(i.ToString + ") '" + Mat1.Dimensions.Item(i).Dimension.Name + "' отмечено элементов " + Mat1.Dimensions.Item(i).SelectedCount.ToString);

		    End For;

		    MatIt := Mat1.CreateIterator;

		    MatIt.Move(IteratorDirection.First);

		    While matit.Valid Do

		        Debug.WriteLine("(" + MatIt.CoordsAsString + ") " + MatIt.Value);

		        MatIt.Move(IteratorDirection.Next);

		    End While;

		    // Сохраним отчёт

		    (Eax As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены количества
 значений, количества измерений, наименования измерений, количество элементов
 в отметке, матрицы данных для экспресс-отчёта и фильтра. В самом отчёте
 останутся только те значения элементов, для которых есть значения в фильтре.


См. также:


[IPivotFilterSource](IPivotFilterSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

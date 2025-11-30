# ICubeCacheSaver.GetItemsFromMemory

ICubeCacheSaver.GetItemsFromMemory
-


# ICubeCacheSaver.GetItemsFromMemory


## Синтаксис


GetItemsFromMemory(


[Destkey: Integer = -1;]


[ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm):
 = Null]): [ICubeCacheItems](../ICubeCacheItems/ICubeCacheItems.htm);


## Параметры


Destkey. Ключ варианта отображения
 куба.


ParamValues. Набор значений
 параметров.


## Описание


Метод GetItemsFromMemory в соответствии
 с указанными параметрами получает экземпляры кеша из памяти компьютера.


## Комментарии


Кеш сохраняется в память компьютера, если [расчёт
 куба](../ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.PerformExecuteO.htm) производится в режиме поддержки блокировок - [CubeInstanceDestinationExecutorOptions.RWMutex](../../Enums/CubeInstanceDestinationExecutorOptions.htm).


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 STD_CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MDesc, CacheDesc: IMetabaseObjectDescriptor;

	    CubeInst: ICubeInstance;

	    CubeDest: ICubeInstanceDestination;

	    SelSet: IDimSelectionSet;

	    Sel: IDimSelection;

	    Executor: ICubeInstanceDestinationExecutor;

	    Matr: IMatrix;

	    CacheSaver: ICubeCacheSaver;

	    Items: ICubeCacheItems;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_CUBE");

	    // Открытие куба

	    CubeInst := MDesc.Open(Null) As ICubeInstance;

	    CubeDest := CubeInst.Destinations.DefaultDestination;

	    SelSet := CubeDest.CreateDimSelectionSet;

	    // Полная отметка по всем измерениям

	    For Each Sel In SelSet Do

	        Sel.SelectAll;

	    End For;

	    // Подготовка и расчёт куба

	    Executor := CubeDest.CreateExecutorO(CubeInstanceDestinationExecutorOptions.RWMutex);

	    Executor.PrepareExecute(SelSet);

	    Executor.PerformExecute;

	    // Результирующая матрица с данными

	    Matr := Executor.Matrix;

	    CacheDesc := GetCache(MDesc);

	    If CacheDesc <> Null Then

	        CacheSaver := CacheDesc.Bind As ICubeCacheSaver;

	        // Сохранение матрицы в кеш

	        CacheSaver.SaveCacheCustom(CubeDest.Key, Null, SelSet, Matr, "Full selection");

	        // Экземпляры кеша в памяти

	        Items := CacheSaver.GetItemsFromMemory;

	        ShowCacheItems(Items);

	    End If;

	End Sub UserProc;


	Function GetCache(MObj: IMetabaseObjectDescriptor): IMetabaseObjectDescriptor;

	Var

	    Desc: IMetabaseObjectDescriptor;

	Begin

	    For Each Desc In MObj.Children Do

	        If Desc.ClassId = MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER Then

	            Return Desc;

	        End If;

	    End For;

	    Return Null;

	End Function GetCache;


	Sub ShowCacheItems(Items: ICubeCacheItems);

	Var

	    Item: ICubeCacheItem;

	    DimSS: IDimSelectionSet;

	    DimS: IDimSelection;

	    i, c: Integer;

	Begin

	    Debug.WriteLine("Количество экземпляров кеша: " + Items.Count.ToString);

	    c := Items.Count;

	    For i := 0 To c - 1 Do

	        Item := Items.Item(i);

	        Debug.WriteLine("Хеш-код экземпляра кеша: " + Item.Hash + ". Дата последнего изменения: " + Item.Date.ToString);

	        Debug.Write("Вариант отображения (ключ): " + Item.DestinationKey.ToString + ". " +

	            "Пользовательская метка: " + Item.CustomValue);

	        If IsNull(Item.ParamValues) = False Then

	            Debug.WriteLine(". Параметров: " + Item.ParamValues.Count.ToString + '.');

	        Else

	            Debug.WriteLine(". Параметров нет.");

	        End If;

	    End For;

	    DimSS := Item.SelectionSet;

	    Debug.WriteLine("Отметка, по которой был сохранён экземпляр кеша.");

	    Debug.WriteLine("Измерения:");

	    Debug.Indent;

	    For Each DimS In DimSS Do

	        Debug.WriteLine(DimS.Dimension.Name + ". Отмечено: " + DimS.SelectedCount.ToString);

	    End For;

	    Debug.Unindent;

	End Sub ShowCacheItems;


При выполнении примера будет произведён расчёт куба по полной отметке
 и в режиме блокировки матрицы с результатами. После расчёта полученная
 матрица будет сохранена в кеш. При этом кешированные данные также будут
 загружены в память компьютера. Информация об экземплярах кеша из памяти
 будет выведена в консоль среды разработки.


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

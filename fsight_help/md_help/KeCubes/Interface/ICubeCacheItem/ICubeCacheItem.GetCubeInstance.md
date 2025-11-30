# ICubeCacheItem.GetCubeInstance

ICubeCacheItem.GetCubeInstance
-


# ICubeCacheItem.GetCubeInstance


## Синтаксис


GetCubeInstance: [ICubeInstance](../ICubeInstance/ICubeInstance.htm);


## Описание


Метод GetCubeInstance возвращает
 открытый экземпляр куба, для которого сохранён кеш.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 STD_CUBE. Для куба закеширован какой-либо набор данных.


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc, CacheDesc: IMetabaseObjectDescriptor;

	    CubeInst: ICubeInstance;

	    DestInst: ICubeInstanceDestination;

	    CacheSaver: ICubeCacheSaver;

	    Items: ICubeCacheItems;

	    Item: ICubeCacheItem;

	    Matr: IMatrix;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_CUBE");

	    // Получение хранилища кеша

	    CacheDesc := GetCache(MDesc);

	    If CacheDesc <> Null Then

	        CacheSaver := CacheDesc.Edit As ICubeCacheSaver;

	        // Экземпляры кеша из СУБД

	        Items := CacheSaver.GetItemsFromDatabase;

	        If Items.Count > 0 Then

	            Item := Items.Item(0);

	            CubeInst := Item.GetCubeInstance;

	            Debug.WriteLine("Cube: " + (CubeInst.Cube As IMetabaseObject).Name);

	            DestInst := Item.GetCubeInstanceDestination;

	            Debug.WriteLine("Destination: " + DestInst.Name);

	            Item.LoadMatrix;

	            Matr := Item.GetMatrix;

	            Debug.WriteLine("Matrix count values: " + Matr.Count.ToString);

	        End If;

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


При выполнении примера для указанного куба будут получены экземпляры
 кеша. По первому экземпляру кеша в консоль среды разработки будет выведена
 информация о кубе и варианте отображения куба, для которых производилось
 кеширование, а также количество элементов в матрице, которая сохранена
 в кеше.


См. также:


[ICubeCacheItem](ICubeCacheItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

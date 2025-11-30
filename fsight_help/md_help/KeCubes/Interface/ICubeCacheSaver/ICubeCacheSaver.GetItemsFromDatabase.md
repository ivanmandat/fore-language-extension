# ICubeCacheSaver.GetItemsFromDatabase

ICubeCacheSaver.GetItemsFromDatabase
-


# ICubeCacheSaver.GetItemsFromDatabase


## Синтаксис


GetItemsFromDatabase(


[Destkey: Integer = -1;]


[ParamValues: [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm):
 = Null]): [ICubeCacheItems](../ICubeCacheItems/ICubeCacheItems.htm);


## Параметры


Destkey. Ключ варианта отображения
 куба.


ParamValues. Набор значений
 параметров.


## Описание


Метод GetItemsFromDatabase в
 соответствии с указанными параметрами получает экземпляры кеша из хранилища
 кеша в СУБД.


## Комментарии


Если для указанного варианта отображения куба или набора значений параметров
 отсутствуют кешированные данные, то метод вернёт пустую коллекцию экземпляров
 кеша.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 STD_CUBE. Для куба закеширован какой-либо набор данных.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc, CacheDesc: IMetabaseObjectDescriptor;

	    CacheSaver: ICubeCacheSaver;

	    Items: ICubeCacheItems;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_CUBE");

	    // Получение хранилища кеша

	    CacheDesc := GetCache(MDesc);

	    If CacheDesc <> Null Then

	        CacheSaver := CacheDesc.Bind As ICubeCacheSaver;

	        // Экземпляры кеша
	 из СУБД

	        Items := CacheSaver.GetItemsFromDatabase;

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


При выполнении примера для указанного куба будут получены экземпляры
 кеша. Информация об экземплярах будет выведена в консоль среды разработки.


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

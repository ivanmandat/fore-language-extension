# ICubeCacheItem.SetCustomValue

ICubeCacheItem.SetCustomValue
-


# ICubeCacheItem.SetCustomValue


## Синтаксис


SetCustomValue(Value: Variant);


## Параметры


Value. Пользовательская метка,
 которую необходимо установить.


## Описание


Метод SetCustomValue устанавливает
 пользовательскую метку для текущего экземпляра кеша.


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

	    Item: ICubeCacheItem;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_CUBE");

	    // Получение хранилища кеша

	    CacheDesc := GetCache(MDesc);

	    If CacheDesc <> Null Then

	        CacheSaver := CacheDesc.Bind As ICubeCacheSaver;

	        // Экземпляры кеша из СУБД

	        Items := CacheSaver.GetItemsFromDatabase;

	        If Items.Count > 0 Then

	            Item := Items.Item(0);

	            Debug.WriteLine(Item.CustomValue);

	            If Item.Busy Then

	                Debug.WriteLine("Запись кеша заблокирована другой операцией");

	            Else

	                // Изменение метки для экземпляра кеша

	                Item.SetCustomValue("Change date: " + DateTime.Today.ToString);

	            End If;

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
 кеша. Значение пользовательской метки для первого экземпляра будет выведено
 в консоль среды разработки. После этого пользовательская метка будет изменена.


См. также:


[ICubeCacheItem](ICubeCacheItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

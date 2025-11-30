# ICubeCacheSaver.PartitionDimensionKey

ICubeCacheSaver.PartitionDimensionKey
-


# ICubeCacheSaver.PartitionDimensionKey


## Синтаксис


PartitionDimensionKey(DestinationKey: Integer):
 Integer;


## Параметры


DestinationKey. Ключ открытого
 экземпляра куба.


## Описание


Свойство PartitionDimensionKey
 для указанного экземпляра куба определяет ключ измерения, у которого будет
 делиться отметка при параллельном обновлении кеша.


## Комментарии


Если измерение определено, то при обновлении кеша отметка будет разделена
 на части. Обработка ячеек с данными, которые соответствуют элементам отдельных
 частей, будут обрабатываться параллельно в отдельном потоке. Количество
 частей, на которые делится отметка, определяется автоматически и зависит
 от характеристик компьютера. Для обновления кеша используйте метод [ICubeInstanceDestination.UpdateCacheBySelection](../ICubeInstanceDestination/ICubeInstanceDestination.UpdateCacheBySelection.htm).


Для сброса измерения укажите «-1» в качестве значения свойства PartitionDimensionKey.


Примечание.
 Параллельное обновление кеша доступно только для стандартных кубов.


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного
 куба с идентификатором STD_CUBE. Куб в своей структуре имеет измерение
 с идентификатором CALENDAR. У куба включена возможность кеширования данных
 в хранилище закешированных данных куба.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc, CacheDesc: IMetabaseObjectDescriptor;

	    Cache: ICubeCacheSaver;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_CUBE");

	    CacheDesc := GetCache(MDesc);

	    If CacheDesc <> Null Then

	        Cache := CacheDesc.Edit As ICubeCacheSaver;

	        // Открытие куба

	        CubeInst := MDesc.Open(Null) As ICubeInstance;

	        Dest := CubeInst.Destinations.DefaultDestination;

	        // Установка измерения для параллельного обновления кеша

	        Cache.PartitionDimensionKey(Dest.Key) := MB.GetObjectKeyById("CALENDAR");

	        (Cache As IMetabaseObject).Save;

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


При выполнении примера в настройках кеша для куба будет задано измерение,
 отметка которого будет использоваться при параллельном обновлении кеша.


См. также:


[ICubeCacheSaver](ICubeCacheSaver.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

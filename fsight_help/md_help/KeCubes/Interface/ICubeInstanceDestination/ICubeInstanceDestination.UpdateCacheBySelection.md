# ICubeInstanceDestination.UpdateCacheBySelection

ICubeInstanceDestination.UpdateCacheBySelection
-


# ICubeInstanceDestination.UpdateCacheBySelection


## Синтаксис


UpdateCacheBySelection(Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Selection. Отметка, в соответствии
 с которой будет обновлён кеш.


## Описание


Метод UpdateCacheBySelection
 обновляет кеш открытого экземпляра куба по заданной отметке.


## Комментарии


Метод UpdateCacheBySelection,
 в отличие от метода [UpdateCache](ICubeInstanceDestination.UpdateCache.htm), позволяет
 производить параллельное обновление кеша в нескольких потоках. Количество
 потоков определяется автоматически и зависит от характеристик компьютера,
 на котором производится обновление, размера передаваемое отметки. Измерение,
 отметка которого будет разделена для параллельной обработки в потоках,
 должно быть определено в свойстве [ICubeCacheSaver.PartitionDimensionKey](../ICubeCacheSaver/ICubeCacheSaver.PartitionDimensionKey.htm).


Примечание.
 Для работы метода требуется предварительная настройка [пула
 соединений](Setup.chm::/UiWebSetup/01_BIServer/PoolConnections.htm).


Если в качестве значения параметра Selection
 передаётся значение Null, то кеш
 обновляется по полной отметке куба.


Примечание.
 Параллельное обновление кеша доступно только для стандартных кубов.


## Пример


Для выполнения примера в репозитории предполагается наличие стандартного
 куба с идентификатором STD_CUBE. Куб в своей структуре имеет измерение
 с идентификатором CALENDAR. У куба включена возможность кеширования данных
 в хранилище закешированных данных куба. Также в настройках кеша куба измерение
 CALENDAR установлено для использования при параллельном обновлении кеша.


Добавьте ссылки на системные сборки: Cubes, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc, CacheDesc: IMetabaseObjectDescriptor;

	    Cache: ICubeCacheSaver;

	    CubeInst: ICubeInstance;

	    Dest: ICubeInstanceDestination;

	    Sels: IDimSelectionSet;

	    Sel: IDimSelection;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("STD_CUBE");

	    CacheDesc := GetCache(MDesc);

	    If CacheDesc <> Null Then

	        Cache := CacheDesc.Edit As ICubeCacheSaver;

	        // Открытие куба

	        CubeInst := MDesc.Open(Null) As ICubeInstance;

	        Dest := CubeInst.Destinations.DefaultDestination;

	        // Создание отметки

	        Sels := Dest.CreateDimSelectionSet;

	        For Each Sel In Sels Do

	            If Sel.Dimension.Ident = "CALENDAR" Then

	                Sel.SelectAll;

	            Else

	                Sel.SelectElement(0, False);

	                Sel.SelectElement(1, False);

	                Sel.SelectElement(2, False);

	            End If;

	        End For;

	        // Обновление кеша по отметке

	        Dest.UpdateCacheBySelection(Sels);

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


При выполнении примера будет обновлён кеш куба по предопределённой отметке
 куба. Для параллельного обновления кеша отметка измерения CALENDAR будет
 разделена на части.


См. также:


[ICubeInstanceDestination](ICubeInstanceDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

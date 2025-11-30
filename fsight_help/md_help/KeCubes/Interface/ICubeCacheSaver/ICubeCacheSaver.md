# ICubeCacheSaver

ICubeCacheSaver
-


# ICubeCacheSaver


Сборка: Cubes;


## Описание


Интерфейс ICubeCacheSaver содержит
 свойства и методы, используемые для работы с хранилищем закешированных
 данных указанного куба.


## Комментарии


При переходе к более новым релизам «Форсайт. Аналитическая платформа»
 может потребоваться обновление структуры хранилища закешированных данных
 куба. Для этого потребуется открыть на редактирование объект, описываемый
 интерфейсом ICubeCacheSaver и пересохранить его.


[![](../../Opened.gif)![](../../Closed.gif)Код для обновления
 хранилища](javascript:TextPopup(this))


		Sub UpdateCacheSaver;

		Var

		    MB: IMetabase;

		    MDesc, CacheDesc: IMetabaseObjectDescriptor;

		    CacheSaver: ICubeCacheSaver;

		Begin

		    MB := MetabaseClass.Active;

		    MDesc := MB.ItemById("<ID>");

		    CacheDesc := GetCache(MDesc);

		    If CacheDesc <> Null Then

		        CacheSaver := CacheDesc.Edit As ICubeCacheSaver;

		        (CacheSaver As IMetabaseObject).Save;

		    End If;

		End Sub UpdateCacheSaver;


		Function GetCache(MObj: IMetabaseObjectDescriptor): IMetabaseObjectDescriptor;

		Var

		    MDescs: IMetabaseObjectDescriptors;

		    MDesc: IMetabaseObjectDescriptor;

		Begin

		    MDescs := MObj.Children;

		    For Each MDesc In MDescs Do

		        If MDesc.ClassId = MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER Then

		            Return MDesc;

		        End If;

		    End For;

		    Return Null;

		End Function GetCache;


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CheckSelection](ICubeCacheSaver.CheckSelection.htm)
		 Свойство CheckSelection
		 определяет признак проверки отметки, по которой был сохранен кеш.


		 ![](../../Property_Image.gif)
		 [Database](ICubeCacheSaver.Database.htm)
		 Свойство Database определяет
		 базу данных, в которую необходимо сохранить кеш куба.


		 ![](../../Property_Image.gif)
		 [Global](ICubeCacheSaver.Global.htm)
		 Свойство Global определяет
		 признак использования общего кеша для куба при работе нескольких
		 пользователей.


		 ![](../../Property_Image.gif)
		 [PartitionDimensionKey](ICubeCacheSaver.PartitionDimensionKey.htm)
		 Свойство PartitionDimensionKey
		 для указанного экземпляра куба определяет ключ измерения, у которого
		 будет делиться отметка при параллельном обновлении кеша.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](ICubeCacheSaver.Clear.htm)
		 Метод Clear осуществляет
		 очистку кеша для заданного [варианта
		 отображения](../ICubeModelDestination/ICubeModelDestination.htm) куба.


		 ![](../../Sub_Image.gif)
		 [ClearAllGlobalCaches](ICubeCacheSaver.ClearAllGlobalCaches.htm)
		 Метод ClearAllGlobalCaches
		 удаляет из глобального кеша кешированные данные всех кубов.


		 ![](../../Sub_Image.gif)
		 [ClearGlobalCache](ICubeCacheSaver.ClearGlobalCache.htm)
		 Метод ClearGlobalCache
		 удаляет из глобального кеша все кешированные данные для текущего
		 куба.


		 ![](../../Sub_Image.gif)
		 [FindAndLoadCache](ICubeCacheSaver.FindAndLoadCache.htm)
		 Метод FindAndLoadCache
		 ищет и загружает кеш куба для указанного варианта отображения
		 куба с указанными значениями параметров в указанную матрицу и
		 возвращает признак существования соответствующего кеша в базе
		 данных.


		 ![](../../Sub_Image.gif)
		 [GetGlobalCache](ICubeCacheSaver.GetGlobalCache.htm)
		 Метод GetGlobalCache
		 возвращает матрицу данных куба, полученную из кеша в соответствии
		 с передаваемыми параметрами кеширования куба.


		 ![](../../Sub_Image.gif)
		 [GetGlobalWriteLock](ICubeCacheSaver.GetGlobalWriteLock.htm)
		 Метод GetGlobalWriteLock
		 возвращает объект, управляющий блокировкой кешированных данных
		 на запись для указанных параметров куба.


		 ![](../../Sub_Image.gif)
		 [GetItemsFromDatabase](ICubeCacheSaver.GetItemsFromDatabase.htm)
		 Метод GetItemsFromDatabase
		 в соответствии с указанными параметрами получает экземпляры кеша
		 из хранилища кеша в СУБД.


		 ![](../../Sub_Image.gif)
		 [GetItemsFromMemory](ICubeCacheSaver.GetItemsFromMemory.htm)
		 Метод GetItemsFromMemory
		 в соответствии с указанными параметрами получает экземпляры кеша
		 из памяти компьютера.


		 ![](../../Sub_Image.gif)
		 [SaveCache](ICubeCacheSaver.SaveCache.htm)
		 Метод SaveCache выполняет
		 сохранение кеша для заданного [варианта
		 отображения](../ICubeModelDestination/ICubeModelDestination.htm) куба по заданным параметрам.


		 ![](../../Sub_Image.gif)
		 [SaveCacheCustom](ICubeCacheSaver.SaveCacheCustom.htm)
		 Метод SaveCacheCustom
		 выполняет сохранение кеша в соответствии с указанными параметрами
		 и заданной пользовательской меткой.


		 ![](../../Sub_Image.gif)
		 [SaveCube](ICubeCacheSaver.SaveCube.htm)
		 Метод SaveCube выполняет
		 сохранение кеша для заданного [варианта
		 отображения](../ICubeModelDestination/ICubeModelDestination.htm) куба с параметрами по умолчанию.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Работа с глобальным кешем в Fore

Работа с глобальным кешем в Fore
-


# Работа с глобальным кешем в Fore


	Работа с глобальным кешем в Fore включает в себя следующие действия:


		- [Кеширование объектов](#caching). При включении
		 кеширования для кубов/справочников создаётся объект кеша, в котором
		 хранятся записи с данными.


		- [Создание
		 и обновление записей в кеше](#update). При обновлении данных куба/справочника
		 в СУБД соответствующее действие необходимо произвести и с записями
		 в объекте кеша.


		- [Загрузка записей
		 в оперативную память](#load). Осуществляется загрузка кешированных
		 данных в глобальный кеш для их последующего использования при
		 работе с кубами/справочниками в инструментах платформы.


	 Рассмотрим подробнее выполнение указанных действий в языке
	 Fore.


## Кеширование объектов


	В репозитории «Объект кеша» представляет собой скрытый дочерний
	 объект куба или справочника. Объект кеша создаётся у куба/справочника
	 при включении кеширования и удаляется при отключении в [визуальном
	 интерфейсе](Cache_In_Blob.htm#settings). Класс объекта кеша - [MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER](KeSom.chm::/Enums/MetabaseObjectClass.htm),
	 наименование - Объект кеша. Для работы с объектом кеша в Fore предназначены
	 следующие интерфейсы:


		- [ICubeCacheSaver](KeCubes.chm::/Interface/ICubeCacheSaver/ICubeCacheSaver.htm)
		 - для работы с объектом кеша кубов;


		- [IMetabaseObjectInstanceCacheKeeper](KeSom.chm::/Interface/IMetabaseObjectInstanceCacheKeeper/IMetabaseObjectInstanceCacheKeeper.htm)
		 - для работы с объектом кеша справочников.


	Создание объекта кеша:


		Кубы Справочники


				Sub CreateCacheSaverForCube(CubeId: String);

				Var

				    MB: IMetabase;

				    MDesc: IMetabaseObjectDescriptor;

				    CacheSaver: ICubeCacheSaver;

				    CrInfo: IMetabaseObjectCreateInfo;

				Begin

				    MB := MetabaseClass.Active;

				    MDesc := MB.ItemById(CubeId);

				    CrInfo := MB.CreateCreateInfo;

				    // Класс создаваемого объекта - KE_CLASS_CUBE_CACHE_SAVER

				    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER;

				    // В качестве родительского выступает сам объект

				    CrInfo.Parent := MDesc;

				    CrInfo.Permanent := True;

				    // Создание объекта кеша

				    CacheSaver := MB.CreateObject(CrInfo).Edit As ICubeCacheSaver;

				    // Указание базы данных

				    CacheSaver.Database := MB.SpecialObject(MetabaseSpecialObject.DefaultDatabase).Bind As IDatabase;

				    // Сохранение настроек

				    (CacheSaver As IMetabaseObject).Save;

				End Sub CreateCacheSaverForCube;


				Sub CreateCacheSaverForDim(DimId: String);

				Var

				    MB: IMetabase;

				    MDesc: IMetabaseObjectDescriptor;

				    CacheKeeper: IMetabaseObjectInstanceCacheKeeper;

				    CrInfo: IMetabaseObjectCreateInfo;

				Begin

				    MB := MetabaseClass.Active;

				    MDesc := MB.ItemById(DimId);

				    CrInfo := MB.CreateCreateInfo;

				    // Класс создаваемого объекта - KE_CLASS_CUBE_CACHE_SAVER

				    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBE_CACHE_SAVER;

				    // В качестве родительского выступает сам объект

				    CrInfo.Parent := MDesc;

				    CrInfo.Permanent := True;

				    // Создание объекта кеша

				    CacheKeeper := MB.CreateObject(CrInfo).Edit As IMetabaseObjectInstanceCacheKeeper;

				    // Указание базы данных

				    CacheKeeper.Database := MB.SpecialObject(MetabaseSpecialObject.DefaultDatabase).Bind;

				    (CacheKeeper As IMetabaseObject).Save;

				End Sub CreateCacheSaverForDim;


	Для проверки наличия объекта кеша у куба/справочника может использоваться
	 универсальная функция:


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


	Функция вернёт описание объекта кеша, если он создан и Null,
	 если куб/справочник еще не был кеширован.


## Создание и обновление записей в кеше


	После того, как для куба/справочника включено кеширование и создан
	 объект кеша, необходимо в него поместить данные. Кубы могут быть кешированы
	 целиком, по заданной отметке или набору параметров, если куб параметрический.
	 Справочники кешируются целиком или по набору параметров. При кешировании
	 в объекте кеша создаются отдельные записи, которые содержат матрицу
	 с данными в сжатом виде. В дальнейшем записи извлекаются и загружаются
	 в память для быстрого доступа к данным.


	Для кубов интерфейс [ICubeCacheSaver](KeCubes.chm::/Interface/ICubeCacheSaver/ICubeCacheSaver.htm)
	 предоставляет три метода для создания записей в кеше: [SaveCache](KeCubes.chm::/Interface/ICubeCacheSaver/ICubeCacheSaver.SaveCache.htm),
	 [SaveCacheCustom](KeCubes.chm::/Interface/ICubeCacheSaver/ICubeCacheSaver.SaveCacheCustom.htm)
	 и [SaveCube](KeCubes.chm::/Interface/ICubeCacheSaver/ICubeCacheSaver.SaveCube.htm).
	 Каждый имеет различный набор параметров и используется в зависимости
	 от реализуемых задач. Если в дальнейшем предполагается совместная
	 работа с кешем из Fore и через [консоль
	 управления глобальным кешем](Cache_In_Blob.htm#console), то сохранять записи необходимо только
	 с помощью метода [SaveCacheCustom](KeCubes.chm::/Interface/ICubeCacheSaver/ICubeCacheSaver.SaveCacheCustom.htm).
	 В качестве метки в параметре CustomValue
	 указывается XML-структура, содержащая следующие настройки работы элемента
	 кеша:


<CacheCubeItem>
  <TYPE>1</TYPE>
  <LoadType>1</LoadType>
  <ThreadCount>1</ThreadCount>
  <FDK>key1</FDK>
  <S>True</S>
  <IDM>
    <S K="key2"/>
    ...
  </IDM>
</CacheCubeItem>
	Назначение элементов:


		- CacheCubeItem. Корневой
		 элемент, является обязательным.


		- TYPE. Тип записи
		 кеша, допустимые значения: 0 - "Пустая матрица", 1 -
		 "Загрузить из куба".


		- LoadType. Метод
		 прогрева кеша, допустимые значения: 0 - "Загрузка целиком",
		 1 - "Загрузка по фрагментам".


		- ThreadCount. Количество
		 потоков. Элемент указывается, если LoadType=1.


		- FDK. Ключ измерения
		 куба, отметка по которому будет разбита на фрагменты. Количество
		 фрагментов равно количеству потоков.


		- S. Признак сохранения
		 данных в базу данных при прогреве кеша, допустимые значения: True
		 - сохранять данные в БД, False - не сохранять данные в БД.


		- IDM. Информация
		 о наборе измерений куба, для которых при прогреве будет включена
		 стратегия фильтрации "Извлекать все записи независимо от
		 отметки".


			- S. Ключ измерения,
			 для которого изменяется стратегия фильтрации. Не может совпадать
			 с измерением, указанным в FDK.


		Кубы Справочники

			Кеширование куба по полной отметке:


				Sub CreateCubeCacheItem1(CubeId: String);

				Var

				    Mb: IMetabase;

				    MDesc, CacheDesc: IMetabaseObjectDescriptor;

				    CubeInst: ICubeInstance;

				    CubeDestin: ICubeInstanceDestination;

				    CubeCache: ICubeCacheSaver;

				    Items: ICubeCacheItems;

				    Matr: IMatrix;

				Begin

				    Mb := MetabaseClass.Active;

				    MDesc := Mb.ItemById(CubeId);

				    // Получение описания объекта кеша

				    CacheDesc := GetCache(Mdesc);

				    If IsNull(CacheDesc) Then

				        Debug.WriteLine("Для объекта " + CubeId + " не включено кеширование.");

				    Else

				        CubeCache := CacheDesc.Bind As ICubeCacheSaver;

				        // Открытие куба

				        CubeInst := MDesc.Open(Null) As ICubeInstance;

				        CubeDestin := CubeInst.Destinations.DefaultDestination;

				        Items := CubeCache.GetItemsFromDatabase(CubeDestin.Key, Null);

				        If (Items.Count = 0) Then

				            // Расчёт куба

				            Matr := CubeDestin.Execute(CubeDestin.CreateDimSelectionSet);

				            // Сохранение полученной матрицы в кеш

				            CubeCache.SaveCacheCustom(CubeDestin.Key, Null, Matr.Dimensions, Matr, CreateCustomValue);

				        Else

				            Debug.WriteLine("Запись уже была создана ранее");

				        End If;

				    End If;

				End Sub CreateCubeCacheItem1;


			Кеширование куба по заданной отметке и набору параметров:


				Sub CreateCubeCacheItem2(CubeId: String);

				Var

				    Mb: IMetabase;

				    MDesc, CacheDesc: IMetabaseObjectDescriptor;

				    Params: IMetabaseObjectParamValues;

				    CubeInst: ICubeInstance;

				    CubeDestin: ICubeInstanceDestination;

				    CubeCache: ICubeCacheSaver;

				    DimSS: IDimSelectionSet;

				    Items: ICubeCacheItems;

				    Matr: IMatrix;

				Begin

				    Mb := MetabaseClass.Active;

				    MDesc := Mb.ItemById(CubeId);

				    // Получение описания объекта кеша

				    CacheDesc := GetCache(Mdesc);


				    If IsNull(CacheDesc) Then

				        Debug.WriteLine("Для объекта " + CubeId + " не включено кеширование.");

				    Else

				        CubeCache := CacheDesc.Bind As ICubeCacheSaver;

				        // Открытие куба

				        Params := MDesc.Params.CreateEmptyValues;

				        //...

				        // Заполнение значений параметров в коллекции Params

				        //...

				        CubeInst := MDesc.Open(Params) As ICubeInstance;

				        CubeDestin := CubeInst.Destinations.DefaultDestination;

				        Items := CubeCache.GetItemsFromDatabase(CubeDestin.Key, Params);


				        If (Items.Count = 0) Then

				            // Создание и настройка отметки

				            DimSS := CubeDestin.CreateDimSelectionSet;

				            //...

				            // Отметка отдельных измерений в коллекции DimSS

				            //...

				            // Расчёт куба

				            Matr := CubeDestin.Execute(DimSS);

				            // Сохранение полученной матрицы в кеш

				            CubeCache.SaveCacheCustom(CubeDestin.Key, Params, Matr.Dimensions, Matr, CreateCustomValue);

				        Else

				            Debug.WriteLine("Запись уже была создана ранее");

				        End If;

				    End If;

				End Sub CreateCubeCacheItem2;


			Функция для формирования CustomValue:


				Function CreateCustomValue: String;

				Var

				    Xml: IXmlDomDocument;

				    Element, SubElement, SubElement1: IXmlDomElement;

				Begin

				    Xml := New FreeThreadedDOMDocument60.Create;

				    // Корневой элемент

				    Element := Xml.createElement("CacheCubeItem");

				    // Дочерние элементы

				    SubElement := Xml.createElement("TYPE");

				    SubElement.text := "1"; // 0 - "Пустая матрица", 1 - "Загрузить из куба"

				    Element.appendChild(SubElement);

				    SubElement := Xml.createElement("LoadType");

				    SubElement.text := "1"; // 0 - "Загрузка целиком", 1 - "Загрузка по фрагментам"

				    Element.appendChild(SubElement);

				    SubElement := Xml.createElement("ThreadCount");

				    SubElement.text := "2"; // Количество потоков

				    Element.appendChild(SubElement);


				    SubElement := Xml.createElement("FDK");

				    SubElement.text := "13609"; // 13609 - Ключ измерения

				    Element.appendChild(SubElement);

				    SubElement := Xml.createElement("S");

				    SubElement.text := "True"; // Не сохранять данные в БД

				    Element.appendChild(SubElement);

				    SubElement := Xml.createElement("IDM"); // Измерения, для которых включена стратегия фильтрации "Извлекать все записи независимо от отметки"

				    SubElement1 := Xml.createElement("S");

				    SubElement1.setAttribute("K", "13544");
				 // 13544 - Ключ измерения

				    SubElement.appendChild(SubElement1);

				    Element.appendChild(SubElement);

				    // Формирование XML-структуры

				    Xml.appendChild(Element);

				    Debug.WriteLine(Xml.xml);

				    Return Xml.xml;

				End Function CreateCustomValue;


			Кеширование справочника целиком:


				Sub CreateDimCacheItem1(DimId: String);

				Var

				    Mb: IMetabase;

				    MDesc, CacheDesc: IMetabaseObjectDescriptor;

				    CacheKeeper: IMetabaseObjectInstanceCacheKeeper;

				Begin

				    Mb := MetabaseClass.Active;

				    MDesc := Mb.ItemById(DimId);

				    // Получение описания объекта кеша

				    CacheDesc := GetCache(Mdesc);

				    If IsNull(CacheDesc) Then

				        Debug.WriteLine("Для объекта " + DimId + " не включено кеширование.");

				    Else

				        CacheKeeper := CacheDesc.Edit As IMetabaseObjectInstanceCacheKeeper;

				        // Кеширование справочника

				        CacheKeeper.SaveDimensionCache(MDesc.Key, Null);

				    End If;

				End Sub CreateDimCacheItem1;


			Кеширование справочника по заданному набору параметров:


				Sub CreateDimCacheItem2(DimId: String);

				Var

				    Mb: IMetabase;

				    MDesc, CacheDesc: IMetabaseObjectDescriptor;

				    Params: IMetabaseObjectParamValues;

				    CacheKeeper: IMetabaseObjectInstanceCacheKeeper;

				Begin

				    Mb := MetabaseClass.Active;

				    MDesc := Mb.ItemById(DimId);

				    // Получение описания объекта кеша

				    CacheDesc := GetCache(Mdesc);

				    If IsNull(CacheDesc) Then

				        Debug.WriteLine("Для объекта " + DimId + " не включено кеширование.");

				    Else

				        CacheKeeper := CacheDesc.Edit As IMetabaseObjectInstanceCacheKeeper;

				        Params := MDesc.Params.CreateEmptyValues;

				        //...

				        // Заполнение значений параметров в коллекции Params

				        //...

				        // Кеширование справочника

				        CacheKeeper.SaveDimensionCache(MDesc.Key, Params);

				    End If;

				End Sub CreateDimCacheItem2;


## Загрузка данных кеша в оперативную память


	Для того чтобы инструменты платформы использовали кешированные данные
	 кубов, а не обращались за ними в СУБД, необходимо загрузить данные
	 в память компьютера. Данные могут быть загружены из элемента кеша
	 с помощью метода [ICubeCacheItem.LoadMatrix](KeCubes.chm::/Interface/ICubeCacheItem/ICubeCacheItem.LoadMatrix.htm).
	 Для работы с актуальными данными необходимо произвести расчёт куба
	 с параметрами, которые сохранены в элементе кеша. Расчёт производится
	 в два этапа: первый в режиме [CubeInstanceDestinationExecutorOptions.Cached](KeCubes.chm::/Enums/CubeInstanceDestinationExecutorOptions.htm),
	 второй в режиме [CubeInstanceDestinationExecutorOptions.RWMutex](KeCubes.chm::/Enums/CubeInstanceDestinationExecutorOptions.htm).


		Sub LoadDataInMemory(CubeId: String);

		Var

		    Mb: IMetabase;

		    MDesc, CacheDesc: IMetabaseObjectDescriptor;

		    CubeInstSource, CubeInstProvider: ICubeInstance;

		    DestinationSource, DestinationProvider: ICubeInstanceDestination;

		    SelSetSource, SelSetProvider: IDimSelectionSet;

		    ExecutorSource, ExecutorProvider: ICubeInstanceDestinationExecutor;

		    CubeCache: ICubeCacheSaver;

		    CacheItem: ICubeCacheItem;

		    ResMatr: IMatrix;

		Begin

		    Mb := MetabaseClass.Active;

		    MDesc := Mb.ItemById(CubeId);

		    // Получение описания объекта кеша

		    CacheDesc := GetCache(Mdesc);

		    If IsNull(CacheDesc) Then

		        Debug.WriteLine("Для объекта " + CubeId + " не включено кеширование.");

		    Else

		        // Получение первой записи кеша

		        CubeCache := CacheDesc.Bind As ICubeCacheSaver;

		        CacheItem := CubeCache.GetItemsFromDatabase.Item(0);

		        If CacheItem.Busy Then

		            Debug.WriteLine("Запись кеша заблокирована другой операцией.");

		        Else

		            // --- Первый этап ---

		            CubeInstSource := MDesc.Open(CacheItem.ParamValues) As ICubeInstance;

		            // Подготовка к загрузке данных в память

		            DestinationSource := CubeInstSource.Destinations.FindByKey(CacheItem.DestinationKey);

		            SelSetSource := CacheItem.SelectionSet;

		            ExecutorSource := DestinationSource.CreateExecutor;

		            ExecutorSource.PrepareExecute(SelSetSource);

		            // Расчёт куба и сохранением полученной матрицы в памяти

		            ExecutorSource.PerformExecuteO(CubeInstanceDestinationExecutorOptions.Cached);

		            // Получение матрицы

		            ResMatr := ExecutorSource.Matrix;

		            // Очистка старой матрицы

		            ResMatr.Clear;

		            // --- Второй этап ---

		            CubeInstProvider := MDesc.Open(CacheItem.ParamValues) As ICubeInstance;

		            // Подготовка к загрузке данных в память

		            DestinationProvider := CubeInstProvider.Destinations.FindByKey(CacheItem.DestinationKey);

		            SelSetProvider := CacheItem.SelectionSet;

		            ExecutorProvider := DestinationProvider.CreateExecutor;

		            ExecutorProvider.PrepareExecute(SelSetProvider);

		            // Расчёт куба и сохранением полученной матрицы в памяти

		            ExecutorProvider.PerformExecuteO(CubeInstanceDestinationExecutorOptions.RWMutex);

		            // Получение матрицы

		            ResMatr.OperationMatrix(MatrixOperation.Append, ExecutorProvider.Matrix);

		            // Обновление записи кеша

		            CubeCache.SaveCacheCustom(CacheItem.DestinationKey, CacheItem.ParamValues, SelSetProvider, ResMatr, CacheItem.CustomValue);

		            //...

		            // Возможные последующие действия с матрицей

		            //...

		        End If;

		    End If;

		End Sub LoadDataInMemory;


См. также:


[Кеширование
 данных по технологии In-Memory](In-Memory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

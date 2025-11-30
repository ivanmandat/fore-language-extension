# ICubeLoaderFromSource

ICubeLoaderFromSource
-


# ICubeLoaderFromSource


Сборка: Cubes;


## Описание


Интерфейс ICubeLoaderFromSource
 содержит свойства и методы для загрузки данных с возможностью преобразований
 по измерениям.


## Иерархия наследования


ICubeLoaderFromSource


## Комментарии


Для создания куба и загрузки в него данных необходимо:


	- В свойстве [RdsDatabase](ICubeLoaderFromSource.RdsDatabase.htm)
	 указать репозиторий НСИ, в котором будут созданы табличные справочники
	 НСИ, лежащие в основе измерений куба. Репозиторий НСИ можно не указывать,
	 в таком случае табличные справочники НСИ будут создаваться в базе
	 данных, указанной в свойстве [Database](ICubeLoaderFromSource.Database.htm);


	- В свойстве [Database](ICubeLoaderFromSource.Database.htm)
	 указать базу данных, в которой будет создана таблица со значениями
	 куба;


	- В свойстве [Parent](ICubeLoaderFromSource.Parent.htm)
	 указать папку репозитория где будет сохранен куб и таблица;


	- Инициализировать источник данных, описываемый интерфейсом [IDtProvider](kedt.chm::/interface/idtprovider/idtprovider.htm);


	- Вызвать метод [Init](ICubeLoaderFromSource.Init.htm)
	 для инициализации коллекций [DimensionBindings](ICubeLoaderFromSource.DimensionBindings.htm)
	 и [FactBindings](ICubeLoaderFromSource.FactBindings.htm),
	 содержащих параметры привязки измерений и фактов. При необходимости
	 произвести какие-либо изменения в данных коллекциях;


	- Вызвать метод [Load](ICubeLoaderFromSource.Load.htm)
	 для создания стандартного куба, всех необходимых объектов и загрузки
	 данных.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AddAllFields](ICubeLoaderFromSource.AddAllFields.htm)


		 Свойство AddAllFields
		 определяет, будут ли в таблицу с данными куба загружены данные
		 по полям, которые не сопоставлены с измерениями/фактами куба.


		 ![](../../Property_Image.gif)
		 [AdditionalFields](ICubeLoaderFromSource.AdditionalFields.htm)


		 Свойство AdditionalFields
		 возвращает коллекцию, в которую можно включить несопоставленные
		 поля источника, данные которых необходимо загрузить в результирующую
		 таблицу куба.


		 ![](../../Property_Image.gif)
		 [CreateETLTask](ICubeLoaderFromSource.CreateETLTask.htm)


		 Свойство CreateETLTask
		 определяет, будет ли создана задача ETL, содержащая цепочку импорта
		 данных из выбранного источника в приёмник.


		 ![](../../Property_Image.gif)
		 [CreateCacheKeeper](ICubeLoaderFromSource.CreateCacheKeeper.htm)


		 Свойство CreateCacheKeeper
		 определяет признак создания хранилища кешированных данных.


		 ![](../../Property_Image.gif)
		 [Cube](ICubeLoaderFromSource.Cube.htm)


		 Свойство Cube определяет
		 куб, в который будут загружены данные.


		 ![](../../Property_Image.gif)
		 [Database](ICubeLoaderFromSource.Database.htm)


		 Свойство Database определяет
		 базу данных, в которой будет создана таблица для хранения данных
		 куба.


		 ![](../../Property_Image.gif)
		 [DimensionBindings](ICubeLoaderFromSource.DimensionBindings.htm)


		 Свойство DimensionBindings
		 возвращает параметры привязки измерений к полям источника данных.


		 ![](../../Property_Image.gif)
		 [EditExistingObject](ICubeLoaderFromSource.EditExistingObject.htm)


		 Свойство EditExistingObject
		 определяет признак редактирования структуры объекта, в который
		 осуществляется загрузка данных.


		 ![](../../Property_Image.gif)
		 [FactBindings](ICubeLoaderFromSource.FactBindings.htm)


		 Свойство FactBindings
		 возвращает параметры привязки фактов куба к полям источника данных.


		 ![](../../Property_Image.gif)
		 [IsMetabaseProvider](ICubeLoaderFromSource.IsMetabaseProvider.htm)


		 Свойство IsMetabaseProvider
		 определяет, загружаются ли данные из источника в репозитории.


		 ![](../../Property_Image.gif)
		 [LoadDuplicates](ICubeLoaderFromSource.LoadDuplicates.htm)


		 Свойство LoadDuplicates
		 определяет, будут ли загружаться дублирующиеся записи при загрузке
		 данных.


		 ![](../../Property_Image.gif)
		 [Parent](ICubeLoaderFromSource.Parent.htm)


		 Свойство Parent определяет
		 папку репозитория, в которой будет создан куб и все необходимые
		 объекты.


		 ![](../../Property_Image.gif)
		 [RdsDatabase](ICubeLoaderFromSource.RdsDatabase.htm)


		 Свойство RdsDatabase
		 определяет репозиторий НСИ, в котором будут создаваться справочники,
		 соответствующие измерениям куба.


		 ![](../../Property_Image.gif)
		 [Rubricator](ICubeLoaderFromSource.Rubricator.htm)


		 Свойство Rubricator
		 определяет базу данных временных рядов, в которую будут импортированы
		 данные.


		 ![](../../Property_Image.gif)
		 [Type](ICubeLoaderFromSource.Type.htm)


		 Свойство Type определяет
		 тип объекта репозитория, в который будет осуществляться загрузка
		 данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Init](ICubeLoaderFromSource.Init.htm)


		 Метод Init настраивает
		 параметры привязок измерений и фактов на основании полей источника
		 данных.


		 ![](../../Sub_Image.gif)
		 [Load](ICubeLoaderFromSource.Load.htm)


		 Метод Load осуществляет
		 загрузку данных.


		 ![](../../Sub_Image.gif)
		 [LoadWithResult](ICubeLoaderFromSource.LoadWithResult.htm)


		 Метод LoadWithResult
		 выполняет загрузку данных и возвращает результат загрузки.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

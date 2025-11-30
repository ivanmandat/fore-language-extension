# CubeLoaderFromSource

CubeLoaderFromSource
-


# CubeLoaderFromSource


Сборка: Cubes;


## Описание


Класс CubeLoaderFromSource реализует
 объект, используемый для загрузки данных в куб с возможностью преобразований
 по измерениям.


## Свойства объекта класса, унаследованные от [ICubeLoaderFromSource](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AddAllFields](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.AddAllFields.htm)


		 Свойство AddAllFields
		 определяет, будут ли в таблицу с данными куба загружены данные
		 по полям, которые не сопоставлены с измерениями/фактами куба.


		 ![](../../Property_Image.gif)
		 [AdditionalFields](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.AdditionalFields.htm)


		 Свойство AdditionalFields
		 возвращает коллекцию, в которую можно включить несопоставленные
		 поля источника, данные которых необходимо загрузить в результирующую
		 таблицу куба.


		 ![](../../Property_Image.gif)
		 [CreateETLTask](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.CreateETLTask.htm)


		 Свойство CreateETLTask
		 определяет, будет ли создана задача ETL, содержащая цепочку импорта
		 данных из выбранного источника в приёмник.


		 ![](../../Property_Image.gif)
		 [CreateCacheKeeper](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.CreateCacheKeeper.htm)


		 Свойство CreateCacheKeeper
		 определяет признак создания хранилища кешированных данных.


		 ![](../../Property_Image.gif)
		 [Cube](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Cube.htm)


		 Свойство Cube определяет
		 куб, в который будут загружены данные.


		 ![](../../Property_Image.gif)
		 [Database](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Database.htm)


		 Свойство Database определяет
		 базу данных, в которой будет создана таблица для хранения данных
		 куба.


		 ![](../../Property_Image.gif)
		 [DimensionBindings](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.DimensionBindings.htm)


		 Свойство DimensionBindings
		 возвращает параметры привязки измерений к полям источника данных.


		 ![](../../Property_Image.gif)
		 [EditExistingObject](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.EditExistingObject.htm)


		 Свойство EditExistingObject
		 определяет признак редактирования структуры объекта, в который
		 осуществляется загрузка данных.


		 ![](../../Property_Image.gif)
		 [FactBindings](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.FactBindings.htm)


		 Свойство FactBindings
		 возвращает параметры привязки фактов куба к полям источника данных.


		 ![](../../Property_Image.gif)
		 [IsMetabaseProvider](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.IsMetabaseProvider.htm)


		 Свойство IsMetabaseProvider
		 определяет, загружаются ли данные из источника в репозитории.


		 ![](../../Property_Image.gif)
		 [LoadDuplicates](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.LoadDuplicates.htm)


		 Свойство LoadDuplicates
		 определяет, будут ли загружаться дублирующиеся записи при загрузке
		 данных.


		 ![](../../Property_Image.gif)
		 [Parent](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Parent.htm)


		 Свойство Parent определяет
		 папку репозитория, в которой будет создан куб и все необходимые
		 объекты.


		 ![](../../Property_Image.gif)
		 [RdsDatabase](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.RdsDatabase.htm)


		 Свойство RdsDatabase
		 определяет репозиторий НСИ, в котором будут создаваться справочники,
		 соответствующие измерениям куба.


		 ![](../../Property_Image.gif)
		 [Rubricator](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Rubricator.htm)


		 Свойство Rubricator
		 определяет базу данных временных рядов, в которую будут импортированы
		 данные.


		 ![](../../Property_Image.gif)
		 [Type](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Type.htm)


		 Свойство Type определяет
		 тип объекта репозитория, в который будет осуществляться загрузка
		 данных.


## Методы объекта класса, унаследованные от [ICubeLoaderFromSource](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Init](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Init.htm)


		 Метод Init настраивает
		 параметры привязок измерений и фактов на основании полей источника
		 данных.


		 ![](../../Sub_Image.gif)
		 [Load](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.Load.htm)


		 Метод Load осуществляет
		 загрузку данных.


		 ![](../../Sub_Image.gif)
		 [LoadWithResult](../../Interface/ICubeLoaderFromSource/ICubeLoaderFromSource.LoadWithResult.htm)


		 Метод LoadWithResult
		 выполняет загрузку данных и возвращает результат загрузки.


См. также:


[Классы
 сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

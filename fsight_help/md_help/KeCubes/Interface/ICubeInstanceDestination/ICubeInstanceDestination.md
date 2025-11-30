# ICubeInstanceDestination

ICubeInstanceDestination
-


# ICubeInstanceDestination


Сборка: Cubes;


## Описание


Интерфейс ICubeInstanceDestination
 содержит свойства и методы для работы с отстроенным кубом, в соответствии
 с выбранным вариантом отображения.


## Иерархия наследования


           [INamedEntityModel](foresys.chm::/interface/inamedentitymodel/inamedentitymodel.htm)


           ICubeInstanceDestination


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AlternateSource](ICubeInstanceDestination.AlternateSource.htm)
		 Свойство AlternateSource
		 возвращает данные альтернативного куба, используемого для хранения
		 данных текущего куба.


		 ![](../../Property_Image.gif)
		 [Cached](ICubeInstanceDestination.Cached.htm)
		 Свойство Cached возвращает
		 признак наличия в базе репозитория кеша с данными экземпляра куба.


		 ![](../../Property_Image.gif)
		 [CachedEx](ICubeInstanceDestination.CachedEx.htm)
		 Свойство CachedEx возвращает
		 признак наличия в базе репозитория кеша с учётом предыдущих проверок
		 кеша.


		 ![](../../Property_Image.gif)
		 [Cube](ICubeInstanceDestination.Cube.htm)
		 Свойство Cube возвращает
		 объект-родитель.


		 ![](../../Property_Image.gif)
		 [DestinationModel](ICubeInstanceDestination.DestinationModel.htm)
		 Свойство DestinationModel
		 возвращает параметры варианта отображения куба.


		 ![](../../Property_Image.gif)
		 [Dimensions](ICubeInstanceDestination.Dimensions.htm)
		 Свойство Dimensions
		 возвращает данные измерений куба.


		 ![](../../Property_Image.gif)
		 [IsDefault](ICubeInstanceDestination.IsDefault.htm)
		 Свойство IsDefault
		 возвращает значение True,
		 если данный вариант отображения является вариантом отображения
		 куба по умолчанию.


		 ![](../../Property_Image.gif)
		 [Visible](ICubeInstanceDestination.Visible.htm)
		 Свойство Visible возвращает
		 значение True, если данный
		 вариант отображения куба является видимым.


## Свойства, унаследованные от [INamedEntityModel](foresys.chm::/interface/inamedentitymodel/inamedentitymodel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Id.htm)
		 Свойство Id возвращает
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](ForeSys.chm::/Interface/INamedEntityModel/INamedEntityModel.Name.htm)
		 Свойство Name возвращает
		 наименование объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ApplyDimensions](ICubeInstanceDestination.ApplyDimensions.htm)
		 Метод ApplyDimensions
		 осуществляет применение параметров управления отметкой.


		 ![](../../Sub_Image.gif)
		 [CreateApplyDimensions](ICubeInstanceDestination.CreateApplyDimensions.htm)
		 Метод CreateApplyDimensions
		 создает объект, используемый для управления отметкой измерений
		 куба.


		 ![](../../Sub_Image.gif)
		 [CreateDimSelectionSet](ICubeInstanceDestination.CreateDimSelectionSet.htm)
		 Метод CreateDimSelectionSet
		 создает пустую отметку куба.


		 ![](../../Sub_Image.gif)
		 [CreateExecutor](ICubeInstanceDestination.CreateExecutor.htm)
		 Метод CreateExecutor
		 создает объект, осуществляющий расчет результирующей матрицы куба.


		 ![](../../Sub_Image.gif)
		 [CreateExecutorO](ICubeInstanceDestination.CreateExecutorO.htm)
		 Метод CreateExecutorO
		 создает объект, осуществляющий расчет результирующей матрицы куба
		 с использованием параметров.


		 ![](../../Sub_Image.gif)
		 [CreateStorage](ICubeInstanceDestination.CreateStorage.htm)
		 Метод CreateStorage
		 создает объект, осуществляющий сохранение данных в куб.


		 ![](../../Sub_Image.gif)
		 [Execute](ICubeInstanceDestination.Execute.htm)
		 Метод Execute осуществляет
		 расчет результирующей матрицы куба.


		 ![](../../Sub_Image.gif)
		 [FlushCache](ICubeInstanceDestination.FlushCache.htm)
		 Метод FlushCache очищает
		 кеш открытого экземпляра куба.


		 ![](../../Sub_Image.gif)
		 [SetDimensions](ICubeInstanceDestination.SetDimensions.htm)
		 Метод SetDimensions
		 устанавливает указанный набор измерений в текущий экземпляр открытого
		 куба.


		 ![](../../Sub_Image.gif)
		 [UpdateCache](ICubeInstanceDestination.UpdateCache.htm)
		 Метод UpdateCache обновляет
		 кеш открытого экземпляра куба.


		 ![](../../Sub_Image.gif)
		 [UpdateCacheBySelection](ICubeInstanceDestination.UpdateCacheBySelection.htm)
		 Метод UpdateCacheBySelection
		 обновляет кеш открытого экземпляра куба по заданной отметке.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

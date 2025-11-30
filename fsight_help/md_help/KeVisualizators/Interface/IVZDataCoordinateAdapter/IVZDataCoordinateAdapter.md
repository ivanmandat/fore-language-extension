# IVZDataCoordinateAdapter

IVZDataCoordinateAdapter
-


# IVZDataCoordinateAdapter


Сборка: Visualizators;


## Описание


Интерфейс IVZDataCoordinateAdapter
 используется для координированного преобразования данных.


## Иерархия наследования


           [IVZDataAdapter](../IVZDataAdapter/IVZDataAdapter.htm)


           [IVZDataNormalizeAdapter](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.htm)


           IVZDataCoordinateAdapter


## Комментарии


Параметры нормализованного преобразователя данных могут быть получены
 в свойстве [IVZDataSourceMapping.DataTransformer](../IVZDataSourceMapping/IVZDataSourceMapping.DataTransformer.htm)
 после приведения к типу IVZDataCoordinateAdapter.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IncludeZero](IVZDataCoordinateAdapter.IncludeZero.htm)


		 Свойство IncludeZero определяет,
		 будут ли в преобразователе исключаться нулевые значения.


		 ![](../../Property_Image.gif)
		 [UseSignDivision](IVZDataCoordinateAdapter.UseSignDivision.htm)


		 Свойство UseSignDivision
		 определяет, будут ли данные в преобразователе обрабатываться по
		 модулю.


## Свойства, унаследованные от [IVZDataNormalizeAdapter](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [MaxValue](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.MaxValue.htm)
		 Свойство MaxValue
		 определяет верхнюю границу интервала, к которому приводятся данные.


		 ![](../../Property_Image.gif)
		 [MinCutValue](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.MinCutValue.htm)
		 Свойство MinCutValue
		 определяет минимальное значение интервала.


		 ![](../../Property_Image.gif)
		 [MinValue](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.MinValue.htm)
		 Свойство MinValue определяет
		 нижнюю границу интервала, к которому приводятся данные.


		 ![](../../Property_Image.gif)
		 [NoDataValue](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.NoDataValue.htm)
		 Свойство NoDataValue
		 определяет значение, если нет данных.


		 ![](../../Property_Image.gif)
		 [NormalizeMode](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.NormalizeMode.htm)
		 Свойство NormalizeMode
		 определяет режим нормализации данных.


## Методы, унаследованные от [IVZDataNormalizeAdapter](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [InitializeFromDataSource](../IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.InitializeFromDataSource.htm)


		 Метод InitializeFromDataSource
		 загружает в преобразователь данные из указанного источника.


## Методы, унаследованные от [IVZDataAdapter](../IVZDataAdapter/IVZDataAdapter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetData](../IVZDataAdapter/IVZDataAdapter.GetData.htm)


		 Метод GetData возвращает
		 преобразованные данные.


См. также:


[Интерфейсы сборки
 Visualizators](../KeVisualizators_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

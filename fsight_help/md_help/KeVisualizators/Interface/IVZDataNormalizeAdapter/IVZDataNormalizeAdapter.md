# IVZDataNormalizeAdapter

IVZDataNormalizeAdapter
-


# IVZDataNormalizeAdapter


Сборка: Visualizators;


## Описание


Интерфейс IVZDataNormalizeAdapter
 предназначен для нормализованного преобразования данных в визуализаторах.


## Иерархия наследования


           [IVZDataAdapter](../IVZDataAdapter/IVZDataAdapter.htm)


           IVZDataNormalizeAdapter


## Комментарии


Параметры нормализованного преобразователя данных могут быть получены
 в свойстве [IVZDataSourceMapping.DataTransformer](../IVZDataSourceMapping/IVZDataSourceMapping.DataTransformer.htm)
 после приведения к типу IVZDataNormalizeAdapter.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [MaxValue](IVZDataNormalizeAdapter.MaxValue.htm)
		 Свойство MaxValue
		 определяет верхнюю границу интервала, к которому приводятся данные.


		 ![](../../Property_Image.gif)
		 [MinCutValue](IVZDataNormalizeAdapter.MinCutValue.htm)
		 Свойство MinCutValue
		 определяет минимальное значение интервала.


		 ![](../../Property_Image.gif)
		 [MinValue](IVZDataNormalizeAdapter.MinValue.htm)
		 Свойство MinValue определяет
		 нижнюю границу интервала, к которому приводятся данные.


		 ![](../../Property_Image.gif)
		 [NoDataValue](IVZDataNormalizeAdapter.NoDataValue.htm)
		 Свойство NoDataValue
		 определяет значение, если нет данных.


		 ![](../../Property_Image.gif)
		 [NormalizeMode](IVZDataNormalizeAdapter.NormalizeMode.htm)
		 Свойство NormalizeMode
		 определяет режим нормализации данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [InitializeFromDataSource](IVZDataNormalizeAdapter.InitializeFromDataSource.htm)


		 Метод InitializeFromDataSource
		 загружает в преобразователь данные из указанного источника.


## Методы, унаследованные от интерфейса [IVZDataAdapter](../IVZDataAdapter/IVZDataAdapter.htm)


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

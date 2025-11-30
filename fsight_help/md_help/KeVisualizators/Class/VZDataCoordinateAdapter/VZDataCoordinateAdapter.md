# VZDataCoordinateAdapter

VZDataCoordinateAdapter
-


# VZDataCoordinateAdapter


Сборка: Visualizators;


## Описание


Класс VZDataCoordinateAdapter
 реализует объект для координированного преобразования данных.


## Комментарии


Для реализации объекта для нормализованного преобразования данных используйте
 [VZDataNormalizeAdapter](../VZDataNormalizeAdapter/VZDataNormalizeAdapter.htm).


## Свойства объекта класса, унаследованные от [IVZDataCoordinateAdapter](../../Interface/IVZDataCoordinateAdapter/IVZDataCoordinateAdapter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [IncludeZero](../../Interface/IVZDataCoordinateAdapter/IVZDataCoordinateAdapter.IncludeZero.htm)


		 Свойство IncludeZero определяет,
		 будут ли в преобразователе исключаться нулевые значения.


		 ![](../../Property_Image.gif)
		 [UseSignDivision](../../Interface/IVZDataCoordinateAdapter/IVZDataCoordinateAdapter.UseSignDivision.htm)


		 Свойство UseSignDivision
		 определяет, будут ли данные в преобразователе обрабатываться по
		 модулю.


## Свойства объекта класса, унаследованные от [IVZDataNormalizeAdapter](../../Interface/IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [MaxValue](../../Interface/IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.MaxValue.htm)
		 Свойство MaxValue
		 определяет верхнюю границу интервала, к которому приводятся данные.


		 ![](../../Property_Image.gif)
		 [MinCutValue](../../Interface/IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.MinCutValue.htm)
		 Свойство MinCutValue
		 определяет минимальное значение интервала.


		 ![](../../Property_Image.gif)
		 [MinValue](../../Interface/IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.MinValue.htm)
		 Свойство MinValue определяет
		 нижнюю границу интервала, к которому приводятся данные.


		 ![](../../Property_Image.gif)
		 [NoDataValue](../../Interface/IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.NoDataValue.htm)
		 Свойство NoDataValue
		 определяет значение, если нет данных.


		 ![](../../Property_Image.gif)
		 [NormalizeMode](../../Interface/IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.NormalizeMode.htm)
		 Свойство NormalizeMode
		 определяет режим нормализации данных.


## Методы объекта класса, унаследованные от [IVZDataNormalizeAdapter](../../Interface/IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [InitializeFromDataSource](../../Interface/IVZDataNormalizeAdapter/IVZDataNormalizeAdapter.InitializeFromDataSource.htm)


		 Метод InitializeFromDataSource
		 загружает в преобразователь данные из указанного источника.


## Методы объекта класса, унаследованные от [IVZDataAdapter](../../Interface/IVZDataAdapter/IVZDataAdapter.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetData](../../Interface/IVZDataAdapter/IVZDataAdapter.GetData.htm)


		 Метод GetData возвращает
		 преобразованные данные.


См. также:


[Классы
 сборки Visualizators](../KeVisualizators_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

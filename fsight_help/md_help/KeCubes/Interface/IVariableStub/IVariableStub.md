# IVariableStub

IVariableStub
-


# IVariableStub


Сборка: Cubes;


## Описание


Интерфейс IVariableStub содержит
 свойства и методы для работы с абстрактным источником данных.


## Иерархия наследования


           [INamedEntityModel](foresys.chm::/interface/inamedentitymodel/inamedentitymodel.htm)


           IVariableStub


## Комментарии


Абстрактным источником данных может выступать:


	- стандартный куб;


	- виртуальный куб;


	- представление-куб;


	- база данных временных рядов;


	- переменная моделирования, являющаяся отдельным объектом в репозитории.


Для получения абстрактного источника данных приведите требуемый объект
 к интерфейсу IVariableStub.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Calendar](IVariableStub.Calendar.htm)
		 Свойство Calendar возвращает
		 структуру календарного измерения источника данных.


		 ![](../../Property_Image.gif)
		 [CalendarDimIndex](IvariableStub.CalendarDimIndex.htm)
		 Свойство CalendarDimIndex
		 возвращает индекс календарного измерения в источнике данных.


		 ![](../../Property_Image.gif)
		 [CalendarLevel](IVariableStub.CalendarLevel.htm)
		 Свойство CalendarLevel
		 возвращает уровень календарного измерения источника данных.


		 ![](../../Property_Image.gif)
		 [Dimension](IVariableStub.Dimension.htm)
		 Свойство Dimension
		 возвращает структуру измерения источника данных.


		 ![](../../Property_Image.gif)
		 [DimensionCount](IVariableStub.DimensionCount.htm)
		 Свойство DimensionCount
		 возвращает количество измерений в источнике данных.


		 ![](../../Property_Image.gif)
		 [IsLoading](IVariableStub.IsLoading.htm)
		 Свойство IsLoading
		 возвращает признак того, загружены ли данные в источник.


		 ![](../../Property_Image.gif)
		 [IsSaving](IVariableStub.IsSaving.htm)
		 Свойство IsSaving возвращает
		 признак того, сохранен ли источник данных.


		 ![](../../Property_Image.gif)
		 [MatrixAggregator](IVariableStub.MatrixAggregator.htm)
		 Свойство MatrixAggregator
		 возвращает объект, содержащий свойства и методы, необходимые для
		 агрегации данных.


		 ![](../../Property_Image.gif)
		 [NameEx](IVariableStub.NameEx.htm)
		 Свойство NameEx возвращает
		 наименование ряда по заданным параметрам.


		 ![](../../Property_Image.gif)
		 [NamingDimension](IVariableStub.NamingDimension.htm)
		 Свойство NamingDimension
		 возвращает структуру измерения, используемого для формирования
		 наименований.


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
		 [CopyScenarioData](IVariableStub.CopyScenarioData.htm)
		 Метод CopyScenarioData
		 осуществляет копирование данных с одного сценария на другой.


		 ![](../../Sub_Image.gif)
		 [Execute](IVariableStub.Execute.htm)
		 Метод Execute осуществляет
		 загрузку данных из источника.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IVariableStub.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск измерения по ключу.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

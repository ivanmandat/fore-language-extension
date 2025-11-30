# IPrxDataSource

IPrxDataSource
-


# IPrxDataSource


Сборка: Report;


## Описание


Интерфейс IPrxDataSource предназначен
 для работы с источником данных регламентного отчёта.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           IPrxDataSource


## Комментарии


Для работы с коллекцией источников данных регламентного отчёта
 используйте свойства и методы интерфейса [IPrxDataSources](../IPrxDataSources/IPrxDataSources.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DataObject](IPrxDataSource.DataObject.htm)
		 Свойство DataObject
		 возвращает объект репозитория, соответствующий данному источнику
		 данных.


		 ![](../../Property_Image.gif)
		 [DataSources](IPrxDataSource.DataSources.htm)
		 Свойство DataSources
		 возвращает объект-родитель источника данных.


		 ![](../../Property_Image.gif)
		 [DataSource](IPrxDataSource.DataSource.htm)
		 Свойство DataSource
		 определяет многомерную матрицу источника данных.


		 ![](../../Property_Image.gif)
		 [IsCached](IPrxDataSource.IsCached.htm)
		 Свойство IsCached возвращает
		 признак [кешируемого](UiNav.chm::/03_Objects/UiNav_Obj_BasicPropCache.htm)
		 источника данных регламентного отчета.


		 ![](../../Property_Image.gif)
		 [Parent](IPrxDataSource.Parent.htm)
		 Свойство Parent возвращает
		 дескриптор родительского объекта.


		 ![](../../Property_Image.gif)
		 [Slices](IPrxDataSource.Slices.htm)
		 Свойство Slices возвращает
		 все срезы данных источника данных регламентного отчета.


		 ![](../../Property_Image.gif)
		 [UpdateNameOnOpen](IPrxDataSource.UpdateNameOnOpen.htm)
		 Свойство UpdateNameOnOpen
		 определяет обновление наименования и идентификатора источников
		 данных регламентного отчета.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Refresh](IPrxDataSource.Refresh.htm)
		 Метод Refresh осуществляет
		 обновление измерения среза.


## Свойства, унаследованные от [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](KeSom.chm::/Interface/INamedEntity/INamedEntity.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта.


		 ![](../../Property_Image.gif)
		 [Key](KeSom.chm::/Interface/INamedEntity/INamedEntity.Key.htm)
		 Свойство Key возвращает
		 ключ объекта.


		 ![](../../Property_Image.gif)
		 [Name](KeSom.chm::/Interface/INamedEntity/INamedEntity.Name.htm)
		 Свойство Name определяет
		 наименование объекта.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

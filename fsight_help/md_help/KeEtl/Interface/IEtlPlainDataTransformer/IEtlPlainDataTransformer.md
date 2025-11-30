# IEtlPlainDataTransformer

IEtlPlainDataTransformer
-


# IEtlPlainDataTransformer


Сборка: Etl;


## Описание


Интерфейс IEtlPlainDataTransformer
 содержит базовые свойства и методы преобразователей задачи ETL.


## Иерархия наследования


           [IEtlObject](../IEtlObject/IEtlObject.htm)


           IEtlPlainDataTransformer


## Комментарии


Данный интерфейс является базовым для следующих интерфейсов:


	- [IEtlPlainDataDeduplicate](../IEtlPlainDataDeduplicate/IEtlPlainDataDeduplicate.htm);


	- [IEtlPlainDataFilter](../IEtlPlainDataFilter/IEtlPlainDataFilter.htm);


	- [IEtlPlainDataGroup](../IEtlPlainDataGroup/IEtlPlainDataGroup.htm);


	- [IEtlPlainDataJoin](../IEtlPlainDataJoin/IEtlPlainDataJoin.htm);


	- [IEtlPlainDataMapper](../IEtlPlainDataMapper/IEtlPlainDataMapper.htm);


	- [IEtlPlainDataSort](../IEtlPlainDataSort/IEtlPlainDataSort.htm);


	- [IEtlPlainDataSplit](../IEtlPlainDataSplit/IEtlPlainDataSplit.htm);


	- [IEtlPlainDataUnion](../IEtlPlainDataUnion/IEtlPlainDataUnion.htm);


	- [IEtlPlainDataUser](../IEtlPlainDataUser/IEtlPlainDataUser.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ErrorOutput](IEtlPlainDataTransformer.ErrorOutput.htm)
		 Свойство ErrorOutput
		 возвращает параметры указанного выхода с ошибочными записями.


		 ![](../../Property_Image.gif)
		 [ErrorOverlimitPolicy](IEtlPlainDataTransformer.ErrorOverlimitPolicy.htm)
		 Свойство ErrorOverlimitPolicy
		 определяет действие, выполняемое при превышении максимального
		 количества ошибочных записей.


		 ![](../../Property_Image.gif)
		 [ErrorStopLimit](IEtlPlainDataTransformer.ErrorStopLimit.htm)
		 Свойство ErrorStopLimit
		 определяет максимальное количество записей, выводимых в ошибочный
		 выход.


## Свойства, унаследованные от [IEtlObject](../IEtlObject/IEtlObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ConnCompId](../IEtlObject/IEtlObject.ConnCompId.htm)
		 Свойство ConnCompId
		 определяет индекс компоненты связности объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Description](../IEtlObject/IEtlObject.Description.htm)
		 Свойство Description
		 определяет описание (примечание) объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Id](../IEtlObject/IEtlObject.Id.htm)
		 Свойство Id определяет
		 идентификатор объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [InputType](../IEtlObject/IEtlObject.InputType.htm)
		 Свойство InputType
		 возвращает тип входа объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [IsActive](../IEtlObject/IEtlObject.IsActive.htm)
		 Свойство IsActive возвращает
		 признак включения объекта в задачу ETL.


		 ![](../../Property_Image.gif)
		 [Name](../IEtlObject/IEtlObject.Name.htm)
		 Свойство Name определяет
		 наименование объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [ObjectType](../IEtlObject/IEtlObject.ObjectType.htm)
		 Свойство ObjectType
		 возвращает тип объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [ObjectTypeName](../IEtlObject/IEtlObject.ObjectTypeName.htm)
		 Свойство ObjectTypeName
		 возвращает название типа объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [OutputType](../IEtlObject/IEtlObject.OutputType.htm)
		 Свойство OutputType
		 возвращает тип выхода объекта задачи ETL.


		 ![](../../Property_Image.gif)
		 [Task](../IEtlObject/IEtlObject.Task.htm)
		 Свойство Task возвращает
		 задачу ETL, в которой создан объект.


## Методы, унаследованные от [IEtlObject](../IEtlObject/IEtlObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetControlledObjects](../IEtlObject/IEtlObject.GetControlledObjects.htm)
		 Метод GetControlledObjects
		 возвращает коллекцию описаний объектов репозитория, управляемых
		 текущим объектом задачи ETL.


		 ![](../../Sub_Image.gif)
		 [Remove](../IEtlObject/IEtlObject.Remove.htm)
		 Метод Remove удаляет
		 объект задачи ETL.


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

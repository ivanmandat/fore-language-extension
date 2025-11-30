# IEtlPlainDataUserProvider

IEtlPlainDataUserProvider
-


# IEtlPlainDataUserProvider


Сборка: Etl;


## Описание


Интерфейс IEtlPlainDataUserProvider
 используется для работы с источником пользователя задачи ETL.


## Иерархия наследования


           [IEtlObject](../IEtlObject/IEtlObject.htm)


           [IEtlPlainDataProvider](../IEtlPlainDataProvider/IEtlPlainDataProvider.htm)


           IEtlPlainDataUserProvider


## Комментарии


Для получения объекта данного типа необходимо, чтобы:


	- Параметр Type свойства
	 [IEtlTask.Create](../IEtlTask/IEtlTask.Create.htm)
	 принял значение [EtlObjectType.PlainDataUserProvider](../../Enums/EtlObjectType.htm).


	- Свойство [IEtlTask.Create](../IEtlTask/IEtlTask.Create.htm)
	 было приведено к типу IEtlPlainDataUserProvider.


## Свойства


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


## Свойства, унаследованные от [IEtlPlainDataProvider](../IEtlPlainDataProvider/IEtlPlainDataProvider.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FetchBlockSize](../IEtlPlainDataProvider/IEtlPlainDataProvider.FetchBlockSize.htm)
		 Свойство FetchBlockSize
		 определяет количество обрабатываемых записей при использовании
		 пакетной обработки данных в источнике.


		 ![](../../Property_Image.gif)
		 [PlainOutput](../IEtlPlainDataProvider/IEtlPlainDataProvider.PlainOutput.htm)
		 Свойство PlainOutput
		 определяет список полей выхода.


		 ![](../../Property_Image.gif)
		 [Provider](../IEtlPlainDataProvider/IEtlPlainDataProvider.Provider.htm)
		 Свойство Provider возвращает
		 объект импорта/экспорта.


		 ![](../../Property_Image.gif)
		 [UnpivotMode](../IEtlPlainDataProvider/IEtlPlainDataProvider.UnpivotMode.htm)
		 Свойство UnpivotMode
		 определяет признак импорта данных в режиме кросс-таблицы.


		 ![](../../Property_Image.gif)
		 [UnpivotProvider](../IEtlPlainDataProvider/IEtlPlainDataProvider.UnpivotProvider.htm)
		 Свойство UnpivotProvider
		 возвращает параметры кросс-таблицы, в соответствии с которыми
		 будет производиться идентификация данных.


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


## Методы, унаследованные от [IEtlPlainDataProvider](../IEtlPlainDataProvider/IEtlPlainDataProvider.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Edit](../IEtlPlainDataProvider/IEtlPlainDataProvider.Edit.htm)
		 Метод Edit создает
		 копию источника данных для редактирования.


		 ![](../../Sub_Image.gif)
		 [FillDefault](../IEtlPlainDataProvider/IEtlPlainDataProvider.FillDefault.htm)
		 Метод FillDefault заполняет
		 поля на основании данных о полях источника.


		 ![](../../Sub_Image.gif)
		 [FillFromSource](../IEtlPlainDataProvider/IEtlPlainDataProvider.FillFromSource.htm)
		 Метод FillFromSource
		 заполняет поля выхода на основании структуры файла-источника.


		 ![](../../Sub_Image.gif)
		 [Save](../IEtlPlainDataProvider/IEtlPlainDataProvider.Save.htm)
		 Метод Save сохраняет
		 результаты редактирования.


См. также:


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

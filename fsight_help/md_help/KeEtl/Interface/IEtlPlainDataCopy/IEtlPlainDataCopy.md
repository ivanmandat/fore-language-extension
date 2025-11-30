# IEtlPlainDataCopy

IEtlPlainDataCopy
-


# IEtlPlainDataCopy


Сборка: Etl;


## Описание


Интерфейс IEtlPlainDataCopy
 содержит свойства и методы объекта, предназначенного для копирования данных.


## Иерархия наследования


           [IEtlObject](../IEtlObject/IEtlObject.htm)


           IEtlPlainDataCopy


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActionOnProblem](IEtlPlainDataCopy.ActionOnProblem.htm)
		 Свойство ActionOnProblem
		 определяет способ обработки ошибок, которые могут возникнуть при
		 загрузке данных.


		 ![](../../Property_Image.gif)
		 [ClearConsumer](IEtlPlainDataCopy.ClearConsumer.htm)
		 Свойство ClearConsumer
		 определяет, очищать ли приёмник данных перед копированием.


		 ![](../../Property_Image.gif)
		 [CommitCount](IEtlPlainDataCopy.CommitCount.htm)
		 Свойство CommitCount
		 определяет количество записей, обрабатываемых в рамках одной транзакции.


		 ![](../../Property_Image.gif)
		 [Consumer](IEtlPlainDataCopy.Consumer.htm)
		 Свойство Consumer определяет
		 приёмник данных.


		 ![](../../Property_Image.gif)
		 [EventId](IEtlPlainDataCopy.EventId.htm)
		 Свойство EventId определяет
		 идентификатор события, которое будет вызвано при возникновении
		 ошибки выполнения задачи ETL.


		 ![](../../Property_Image.gif)
		 [InvalidRecsFileName](IEtlPlainDataCopy.InvalidRecsFileName.htm)
		 Свойство InvalidRecsFileName
		 определяет имя файла для ошибочных (пропущенных) записей.


		 ![](../../Property_Image.gif)
		 [Provider](IEtlPlainDataCopy.Provider.htm)
		 Свойство Provider определяет
		 источник данных.


		 ![](../../Property_Image.gif)
		 [SaveInvalidRecs](IEtlPlainDataCopy.SaveInvalidRecs.htm)
		 Свойство SaveInvalidRecs
		 определяет признак необходимости сохранения ошибочных (пропущенных)
		 записей в отдельный файл.


		 ![](../../Property_Image.gif)
		 [StopLimit](IEtlPlainDataCopy.StopLimit.htm)
		 Свойство StopLimit
		 определяет предельное количество ошибочных записей, при превышении
		 которого выполнение задачи прекращается.


		 ![](../../Property_Image.gif)
		 [UseStopLimit](IEtlPlainDataCopy.UseStopLimit.htm)
		 Свойство UseStopLimit
		 определяет признак необходимости прекращения выполнения задачи
		 при превышении предельного количества ошибочных записей.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddLink](IEtlPlainDataCopy.AddLink.htm)
		 Метод AddLink добавляет
		 связь между указанными полями источника и приёмника данных.


		 ![](../../Sub_Image.gif)
		 [AutoLink](IEtlPlainDataCopy.AutoLink.htm)
		 Метод AutoLink автоматически
		 добавляет связи между полями источника и приёмника данных.


		 ![](../../Sub_Image.gif)
		 [Edit](IEtlPlainDataCopy.Edit.htm)
		 Метод Edit создает
		 копию объекта для редактирования.


		 ![](../../Sub_Image.gif)
		 [IsLinked](IEtlPlainDataCopy.IsLinked.htm)
		 Метод IsLinked возвращает
		 признак того, установлена ли связь между указанными полями источника
		 и приёмника данных.


		 ![](../../Sub_Image.gif)
		 [RemoveLink](IEtlPlainDataCopy.RemoveLink.htm)
		 Метод RemoveLink удаляет
		 связь между указанными полями источника и приёмника данных.


		 ![](../../Sub_Image.gif)
		 [Save](IEtlPlainDataCopy.Save.htm)
		 Метод Save сохраняет
		 объект.


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


[Интерфейсы сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IEtlPlainDataBulkConsumer

IEtlPlainDataBulkConsumer
-


# IEtlPlainDataBulkConsumer


Сборка: Etl;


## Описание


Интерфейс IEtlPlainDataBulkConsumer
 содержит свойства и методы для работы с транзакционным приёмником данных.


## Иерархия наследования


           [IEtlObject](../IEtlObject/IEtlObject.htm)


           [IEtlPlainDataConsumer](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.htm)


           IEtlPlainDataBulkConsumer


## Комментарии


Транзакционные приёмники данных обрабатывают принятые данные в отдельных
 транзакциях. Интерфейс IEtlPlainDataBulkConsumer
 позволяет настроить параметры работы отдельных транзакций. Следующие приёмники
 данных поддерживают интерфейс IEtlPlainDataBulkConsumer:


	- [Экспорт
	 в Excel](KeDt.chm::/Interface/IDtExcelConsumer/IDtExcelConsumer.htm);


	- [Приёмник
	 репозитория](KeDt.chm::/Interface/IDtMetabaseConsumer/IDtMetabaseConsumer.htm);


	- [Экспорт
	 в Access](KeDt.chm::/Interface/IDtAccessConsumer/IDtAccessConsumer.htm);


	- [Экспорт
	 в OLEDB](KeDt.chm::/Interface/IDtOleDbConsumer/IDtOleDbConsumer.htm);


	- [Экспорт
	 в Visual FoxPro](KeDt.chm::/Interface/IDtVfpConsumer/IDtVfpConsumer.htm);


	- [Экспорт
	 в Excel (xlsx)](KeDt.chm::/Interface/IDtExcelConsumerEx/IDtExcelConsumerEx.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActionOnProblem](IEtlPlainDataBulkConsumer.ActionOnProblem.htm)
		 Свойство ActionOnProblem
		 определяет способ обработки ошибок, которые могут возникнуть при
		 загрузке данных.


		 ![](../../Property_Image.gif)
		 [CommitCount](IEtlPlainDataBulkConsumer.CommitCount.htm)
		 Свойство CommitCount
		 определяет количество записей, обрабатываемых в рамках одной транзакции.


		 ![](../../Property_Image.gif)
		 [EventId](IEtlPlainDataBulkConsumer.EventId.htm)
		 Свойство EventId определяет
		 идентификатор события, которое будет вызвано при возникновении
		 ошибки выполнения задачи ETL.


		 ![](../../Property_Image.gif)
		 [InvalidRecsFileName](IEtlPlainDataBulkConsumer.InvalidRecsFileName.htm)
		 Свойство InvalidRecsFileName
		 определяет имя файла для ошибочных (пропущенных) записей.


		 ![](../../Property_Image.gif)
		 [SaveInvalidRecs](IEtlPlainDataBulkConsumer.SaveInvalidRecs.htm)
		 Свойство SaveInvalidRecs
		 определяет признак необходимости сохранения ошибочных (пропущенных)
		 записей в отдельный файл.


		 ![](../../Property_Image.gif)
		 [StopLimit](IEtlPlainDataBulkConsumer.StopLimit.htm)
		 Свойство StopLimit
		 определяет предельное количество ошибочных записей, при превышении
		 которого выполнение задачи прекращается.


		 ![](../../Property_Image.gif)
		 [UseStopLimit](IEtlPlainDataBulkConsumer.UseStopLimit.htm)
		 Свойство UseStopLimit
		 определяет признак необходимости прекращения выполнения задачи
		 при превышении предельного количества ошибочных записей.


## Свойства, унаследованные от [IEtlPlainDataConsumer](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ClearConsumer](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.ClearConsumer.htm)
		 Свойство ClearConsumer
		 определяет, необходимо ли производить очистку приёмника перед
		 добавлением записей.


		 ![](../../Property_Image.gif)
		 [Consumer](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.Consumer.htm)
		 Свойство Consumer возвращает
		 объект импорта/экспорта.


		 ![](../../Property_Image.gif)
		 [KeyFieldNames](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.KeyFieldNames.htm)
		 Свойство KeyFieldNames
		 определяет поля для идентификации одинаковых записей в источнике
		 и приёмнике.


		 ![](../../Property_Image.gif)
		 [PlainInput](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.PlainInput.htm)
		 Свойство PlainInput
		 определяет список полей входа.


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


## Методы, унаследованные от [IEtlPlainDataConsumer](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Edit](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.Edit.htm)
		 Метод Edit создает
		 копию приёмника данных для редактирования.


		 ![](../../Sub_Image.gif)
		 [FillDefault](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.FillDefault.htm)
		 Метод FillDefault заполняет
		 поля на основании данных о полях приёмника.


		 ![](../../Sub_Image.gif)
		 [Save](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.Save.htm)
		 Метод Save сохраняет
		 результаты редактирования.


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
 | [IEtlPlainDataConsumer](../IEtlPlainDataConsumer/IEtlPlainDataConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

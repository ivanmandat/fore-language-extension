# IEtlPlainDataConsumer

IEtlPlainDataConsumer
-


# IEtlPlainDataConsumer


## Описание


Интерфейс IEtlPlainDataConsumer
 предназначен для работы с приёмником данных.


## Комментарии


Для работы c провайдерами XLS, MDB, DBase в ОС x64 разрядной версии
 необходимо наличие драйверов:


	- Необходимо установить драйвер AccessDatabaseEngine_x64.exe,
	 если используется OC x64, «Форсайт. Аналитическая платформа»
	 и не установлен MS Office x64;


	- Если используется OC x64, «Форсайт. Аналитическая платформа»
	 и MS Office x86 (или драйвер x86), то импорт работать не будет – будет
	 выдано сообщение об ошибке. В этом случае, поможет только переустановка
	 MS Office.


Если MS Office не стоит и соответствующий провайдер не найден, то выдается
 сообщение «OLE DB провайдер Microsoft.ACE.OLEDB.12.0 не найден».


Следующие приёмники могут быть указаны в свойстве [Consumer](IEtlPlainDataConsumer.Consumer.htm):


	- [Экспорт
	 в Xml](KeDt.chm::/Interface/IDtXmlConsumer/IDtXmlConsumer.htm);


	- [Экспорт
	 в текст](KeDt.chm::/Interface/IDtTextConsumer/IDtTextConsumer.htm);


	- [Приёмник
	 пользователя](KeDt.chm::/Interface/IDtUserConsumerEx/IDtUserConsumerEx.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ClearConsumer](IEtlPlainDataConsumer.ClearConsumer.htm)
		 Свойство ClearConsumer
		 определяет, необходимо ли производить очистку приёмника перед
		 добавлением записей.


		 ![](../../Property_Image.gif)
		 [Consumer](IEtlPlainDataConsumer.Consumer.htm)
		 Свойство Consumer возвращает
		 объект импорта/экспорта.


		 ![](../../Property_Image.gif)
		 [KeyFieldNames](IEtlPlainDataConsumer.KeyFieldNames.htm)
		 Свойство KeyFieldNames
		 определяет поля для идентификации одинаковых записей в источнике
		 и приёмнике.


		 ![](../../Property_Image.gif)
		 [PlainInput](IEtlPlainDataConsumer.PlainInput.htm)
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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Edit](IEtlPlainDataConsumer.Edit.htm)
		 Метод Edit создает
		 копию приёмника данных для редактирования.


		 ![](../../Sub_Image.gif)
		 [FillDefault](IEtlPlainDataConsumer.FillDefault.htm)
		 Метод FillDefault заполняет
		 поля на основании данных о полях приёмника.


		 ![](../../Sub_Image.gif)
		 [Save](IEtlPlainDataConsumer.Save.htm)
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


[Интерфейсы
 сборки Etl](../KeEtl_Interface.htm) | [IEtlPlainDataBulkConsumer](../IEtlPlainDataBulkConsumer/IEtlPlainDataBulkConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

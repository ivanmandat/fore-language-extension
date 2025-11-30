# IEtlPlainDataProvider

IEtlPlainDataProvider
-


# IEtlPlainDataProvider


## Описание


Интерфейс IEtlPlainDataProvider
 предназначен для работы с источником данных.


## Комментарии


Для работы c провайдерами XLS, MDB, DBase установите драйвер AccessDatabaseEngine_x64.exe,
 если в 64-битной операционной системе установлен «Форсайт. Аналитическая платформа
 (x64)» и не установлен Microsoft Office x64.


Комментарии.
 Если установлен «Форсайт. Аналитическая платформа
 (x64)», Microsoft Office не установлен и соответствующий провайдер не
 найден, то будет выдано сообщение «OLE DB провайдер Microsoft.ACE.OLEDB.12.0
 не найден».


Следующие источники могут быть указаны в свойстве [Provider](IEtlPlainDataProvider.Provider.htm):


	- [Источник
	 репозитория](KeDt.chm::/Interface/IDtMetabaseProvider/IDtMetabaseProvider.htm) ([табличный
	 справочник НСИ](KeDt.chm::/Interface/IDtRdsProvider/IDtRdsProvider.htm));


	- [Импорт
	 из Access](KeDt.chm::/Interface/IDtAccessProvider/IDtAccessProvider.htm);


	- [Импорт
	 из Visual FoxPro](KeDt.chm::/Interface/IDtVfpProvider/IDtVfpProvider.htm);


	- [Импорт
	 из Dbase](KeDt.chm::/Interface/IDtDbaseProvider/IDtDbaseProvider.htm);


	- [Импорт
	 из Paradox](KeDt.chm::/Interface/IDtParadoxProvider/IDtParadoxProvider.htm);


	- [Импорт
	 из Excel](KeDt.chm::/Interface/IDtExcelProviderEx/IDtExcelProviderEx.htm);


	- [Импорт
	 из XML](KeDt.chm::/Interface/IDtXmlProvider/IDtXmlProvider.htm);


	- [Импорт
	 из Web](KeDt.chm::/Interface/IDtWebProvider/IDtWebProvider.htm);


	- [Импорт
	 из текста](KeDt.chm::/Interface/IDtTextProvider/IDtTextProvider.htm);


	- [Импорт
	 через OLE DB](KeDt.chm::/Interface/IDtOleDbProvider/IDtOleDbProvider.htm);


	- [Источник
	 пользователя](KeDt.chm::/Interface/IDtUserProviderEx/IDtUserProviderEx.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FetchBlockSize](IEtlPlainDataProvider.FetchBlockSize.htm)
		 Свойство FetchBlockSize
		 определяет количество обрабатываемых записей при использовании
		 пакетной обработки данных в источнике.


		 ![](../../Property_Image.gif)
		 [PlainOutput](IEtlPlainDataProvider.PlainOutput.htm)
		 Свойство PlainOutput
		 определяет список полей выхода.


		 ![](../../Property_Image.gif)
		 [Provider](IEtlPlainDataProvider.Provider.htm)
		 Свойство Provider возвращает
		 объект импорта/экспорта.


		 ![](../../Property_Image.gif)
		 [UnpivotMode](IEtlPlainDataProvider.UnpivotMode.htm)
		 Свойство UnpivotMode
		 определяет признак импорта данных в режиме кросс-таблицы.


		 ![](../../Property_Image.gif)
		 [UnpivotProvider](IEtlPlainDataProvider.UnpivotProvider.htm)
		 Свойство UnpivotProvider
		 возвращает параметры кросс-таблицы, в соответствии с которыми
		 будет производиться идентификация данных.


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
		 [Edit](IEtlPlainDataProvider.Edit.htm)
		 Метод Edit создает
		 копию источника данных для редактирования.


		 ![](../../Sub_Image.gif)
		 [FillDefault](IEtlPlainDataProvider.FillDefault.htm)
		 Метод FillDefault заполняет
		 поля на основании данных о полях источника.


		 ![](../../Sub_Image.gif)
		 [FillFromSource](IEtlPlainDataProvider.FillFromSource.htm)
		 Метод FillFromSource
		 заполняет поля выхода на основании структуры файла-источника.


		 ![](../../Sub_Image.gif)
		 [Save](IEtlPlainDataProvider.Save.htm)
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
 сборки Etl](../KeEtl_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

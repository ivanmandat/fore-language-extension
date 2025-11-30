# IMetaRdsExportSchema

IMetaRdsExportSchema
-


# IMetaRdsExportSchema


Сборка: Rds;


## Описание


Интерфейс IMetaRdsExportSchema
 предназначен для работы со схемой экспорта справочника НСИ.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           [IRdsExportSchema](../IRdsExportSchema/IRdsExportSchema.htm)


           IMetaRdsExportSchema


## Комментарии


Используя данный интерфейс можно настроить экспорт данных из справочника
 НСИ в следующие приёмники:


	- Microsoft OLEDB Provider for Oracle;


	- Microsoft OLEDB Provider for SQL Server;


	- Microsoft Excel (*.xls, *.xlsx);


	- Microsoft Access (*.mdb);


	- Microsoft XML (*.xml);


	- Текстовый файл (*.txt).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ClearBeforeExport](IMetaRdsExportSchema.ClearBeforeExport.htm)


		 Свойство ClearBeforeExport
		 определяет, очищать ли приёмник перед выгрузкой данных.


		 ![](../../Property_Image.gif)
		 [Consumer](IMetaRdsExportSchema.Consumer.htm)


		 Свойство Consumer определяет
		 параметры приёмника данных.


		 ![](../../Property_Image.gif)
		 [Filter](IMetaRdsExportSchema.Filter.htm)


		 Свойство Filter возвращает
		 фильтр, применяемый к экспортируемым элементам справочника.


		 ![](../../Property_Image.gif)
		 [ItemMapping](IMetaRdsExportSchema.ItemMapping.htm)


		 Свойство ItemMapping
		 возвращает указанную привязку атрибута к полю источника
		 данных.


		 ![](../../Property_Image.gif)
		 [MappingsCount](IMetaRdsExportSchema.MappingsCount.htm)


		 Свойство MappingsCount
		 возвращает количество привязок атрибутов к полям источника
		 данных.


		 ![](../../Property_Image.gif)
		 [SortAttributes](IMetaRdsExportSchema.SortAttributes.htm)


		 Свойство SortAttributes
		 возвращает параметры сортировки, применяемые к экспортируемым
		 элементам справочника.


## Свойства, унаследованные от [IRdsExportSchema](../IRdsExportSchema/IRdsExportSchema.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Automatical](../IRdsExportSchema/IRdsExportSchema.Automatical.htm)


		 Свойство Automatical
		 определяет, будет ли производиться автоматический экспорт данных
		 справочника при изменении значений элементов справочника.


		 ![](../../Property_Image.gif)
		 [Dictionary](../IRdsExportSchema/IRdsExportSchema.Dictionary.htm)


		 Свойство Dictionary
		 возвращает объект-родитель.


		 ![](../../Property_Image.gif)
		 [Mappings](../IRdsExportSchema/IRdsExportSchema.Mappings.htm)


		 Свойство Mappings возвращает
		 параметры привязки атрибутов справочника НСИ к полям таблицы,
		 в которую осуществляется экспорт данных.


		 ![](../../Property_Image.gif)
		 [TableName](../IRdsExportSchema/IRdsExportSchema.TableName.htm)


		 Свойство TableName
		 определяет наименование таблицы, в которую осуществляется экспорт
		 данных справочника НСИ.


		 ![](../../Property_Image.gif)
		 [TableObject](../IRdsExportSchema/IRdsExportSchema.TableObject.htm)


		 Свойство TableObject
		 определяет таблицу репозитория, в которую будут экспортироваться
		 данные.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddMapping](IMetaRdsExportSchema.AddMapping.htm)


		 Метод AddMapping создает
		 привязку атрибута справочника к полю приёмника данных.


		 ![](../../Sub_Image.gif)
		 [RemoveMapping](IMetaRdsExportSchema.RemoveMapping.htm)


		 Метод RemoveMapping
		 удаляет привязку атрибута к полю источника данных.


## Методы, унаследованные от [IRdsExportSchema](../IRdsExportSchema/IRdsExportSchema.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearMappings](../IRdsExportSchema/IRdsExportSchema.ClearMappings.htm)


		 Метод ClearMappings
		 осуществляет очистку привязки атрибута к полям таблицы, в которую
		 осуществляется экспорт данных.


		 ![](../../Sub_Image.gif)
		 [CheckTable](../IRdsExportSchema/IRdsExportSchema.CheckTable.htm)


		 Метод CheckTable осуществляет
		 проверку на существование таблицы, указанной в схеме экспорта.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

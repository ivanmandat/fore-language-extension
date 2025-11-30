# IMetaRdsImportSchema

IMetaRdsImportSchema
-


# IMetaRdsImportSchema


Сборка: Rds;


## Описание


Интерфейс IMetaRdsImportSchema
 предназначен для работы со схемой импорта справочника НСИ.


## Иерархия наследования


           [INamedEntity](KeSom.chm::/Interface/INamedEntity/INamedEntity.htm)


           [IRdsImportSchema](../IRdsImportSchema/IRdsImportSchema.htm)


           IMetaRdsImportSchema


## Комментарии


Используя данный интерфейс можно настроить импорт данных в справочник
 НСИ из следующих источников:


	- Microsoft OLEDB Provider for Oracle;


	- Microsoft OLEDB Provider for SQL Server;


	- Microsoft Excel (*.xls, *.xlsx);


	- Microsoft Access (*.mdb);


	- Microsoft XML (*.xml);


	- текстовый файл (*.txt);


	- буфер обмена.


При работе со схемой импорта в справочник НСИ неактуальны свойства [IRdsImportSchema.DisableUniqueKeys](../IRdsImportSchema/IRdsImportSchema.DisableUniqueKeys.htm)
 и [IRdsImportSchema.UniqueKey](../IRdsImportSchema/IRdsImportSchema.UniqueKey.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Mode](IMetaRdsImportSchema.Mode.htm)


		 Свойство Mode определяет
		 режим импорта данных.


		 ![](../../Property_Image.gif)
		 [Source](IMetaRdsImportSchema.Source.htm)


		 Свойство Source определяет
		 источник данных.


## Свойства, унаследованные от [IRdsImportSchema](../IRdsImportSchema/IRdsImportSchema.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AddCrossVersions](../IRdsImportSchema/IRdsImportSchema.AddCrossVersions.htm)
		 Свойство AddCrossVersions
		 определяет признак добавления новых версий элемента, у которого
		 период действия пересекается с периодами других версий этого элемента.


		 ![](../../Property_Image.gif)
		 [Dictionary](../IRdsImportSchema/IRdsImportSchema.Dictionary.htm)
		 Свойство Dictionary
		 возвращает объект-родитель.


		 ![](../../Property_Image.gif)
		 [DisableUniqueKeys](../IRdsImportSchema/IRdsImportSchema.DisableUniqueKeys.htm)
		 Свойство DisableUniqueKeys
		 определяет, отключена ли проверка загружаемых данных на соответствие
		 всем пользовательским уникальным ключам справочника.


		 ![](../../Property_Image.gif)
		 [Filter](../IRdsImportSchema/IRdsImportSchema.Filter.htm)
		 Свойство Filter определяет
		 фильтр, применяемый к импортируемым данным.


		 ![](../../Property_Image.gif)
		 [Incremental](../IRdsImportSchema/IRdsImportSchema.Incremental.htm)
		 Свойство Incremental
		 определяет, будет ли производиться дополнение данных справочника
		 НСИ при импорте.


		 ![](../../Property_Image.gif)
		 [IsQuery](../IRdsImportSchema/IRdsImportSchema.IsQuery.htm)
		 Свойство IsQuery определяет,
		 используется ли в качестве источника для импорта SQL-запрос.


		 ![](../../Property_Image.gif)
		 [Mappings](../IRdsImportSchema/IRdsImportSchema.Mappings.htm)
		 Свойство Mappings возвращает
		 параметры привязки атрибутов справочника НСИ к полям таблицы,
		 из которой осуществляется импорт данных.


		 ![](../../Property_Image.gif)
		 [TableName](../IRdsImportSchema/IRdsImportSchema.TableName.htm)
		 Свойство TableName
		 определяет наименование таблицы (SQL-запрос), из которой осуществляется
		 импорт данных в справочник НСИ.


		 ![](../../Property_Image.gif)
		 [TableObject](../IRdsImportSchema/IRdsImportSchema.TableObject.htm)
		 Свойство TableObject
		 определяет таблицу репозитория, из которой будут импортироваться
		 данные.


		 ![](../../Property_Image.gif)
		 [UniqueKey](../IRdsImportSchema/IRdsImportSchema.UniqueKey.htm)
		 Свойство UniqueKey
		 определяет набор атрибутов, входящих в состав уникального ключа.


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


## Методы, унаследованные от [IRdsImportSchema](../IRdsImportSchema/IRdsImportSchema.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearMappings](../IRdsImportSchema/IRdsImportSchema.ClearMappings.htm)
		 Метод ClearMappings
		 осуществляет очистку привязки атрибута к полям импортируемой таблицы.


		 ![](../../Sub_Image.gif)
		 [CheckTable](../IRdsImportSchema/IRdsImportSchema.CheckTable.htm)
		 Метод CheckTable осуществляет
		 проверку на существование таблицы, указанной в схеме импорта.


См. также:


[Интерфейсы
 сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

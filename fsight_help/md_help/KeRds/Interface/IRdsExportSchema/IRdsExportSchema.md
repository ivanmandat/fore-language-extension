# IRdsExportSchema

IRdsExportSchema
-


# IRdsExportSchema


## Описание


Интерфейс IRdsExportSchema содержит
 свойства и методы для работы со схемой экспорта справочника НСИ.


## Комментарии


Если схема экспорта предназначена для работы с табличным справочником
 НСИ, то данный интерфейс может быть приведен к интерфейсу [IMetaRdsExportSchema](../IMetaRdsExportSchema/IMetaRdsExportSchema.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Automatical](IRdsExportSchema.Automatical.htm)


		 Свойство Automatical
		 определяет, будет ли производиться автоматический экспорт данных
		 справочника при изменении значений элементов справочника.


		 ![](../../Property_Image.gif)
		 [Dictionary](IRdsExportSchema.Dictionary.htm)


		 Свойство Dictionary
		 возвращает объект-родитель.


		 ![](../../Property_Image.gif)
		 [Mappings](IRdsExportSchema.Mappings.htm)


		 Свойство Mappings возвращает
		 параметры привязки атрибутов справочника НСИ к полям таблицы,
		 в которую осуществляется экспорт данных.


		 ![](../../Property_Image.gif)
		 [TableName](IRdsExportSchema.TableName.htm)


		 Свойство TableName
		 определяет наименование таблицы, в которую осуществляется экспорт
		 данных справочника НСИ.


		 ![](../../Property_Image.gif)
		 [TableObject](IRdsExportSchema.TableObject.htm)


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
		 [ClearMappings](IRdsExportSchema.ClearMappings.htm)


		 Метод ClearMappings
		 осуществляет очистку привязки атрибута к полям таблицы, в которую
		 осуществляется экспорт данных.


		 ![](../../Sub_Image.gif)
		 [CheckTable](IRdsExportSchema.CheckTable.htm)


		 Метод CheckTable осуществляет
		 проверку на существование таблицы, указанной в схеме экспорта.


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

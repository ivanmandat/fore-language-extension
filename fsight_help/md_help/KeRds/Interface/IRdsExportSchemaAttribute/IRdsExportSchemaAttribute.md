# IRdsExportSchemaAttribute

IRdsExportSchemaAttribute
-


# IRdsExportSchemaAttribute


Сборка: Rds;


## Описание


Интерфейс IRdsExportSchemaAttribute
 содержит свойства, определяющие параметры привязки атрибута справочника
 к полям таблицы экспорта.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](IRdsExportSchemaAttribute.Attribute.htm)


		 Свойство Attribute
		 определяет атрибут справочника НСИ, для которого осуществляется
		 привязка к полям таблицы экспорта.


		 ![](../../Property_Image.gif)
		 [DetailTable](IRdsExportSchemaAttribute.DetailTable.htm)


		 Свойство DetailTable
		 определяет физическое наименование таблицы, в которую будут экспортироваться
		 записи для множественных значений атрибута справочника.


		 ![](../../Property_Image.gif)
		 [DetailTableObject](IRdsExportSchemaAttribute.DetailTableObject.htm)


		 Свойство DetailTableObject
		 определяет таблицу репозитория, в которую будут экспортироваться
		 данные множественных значений атрибута справочника.


		 ![](../../Property_Image.gif)
		 [FieldName](IRdsExportSchemaAttribute.FieldName.htm)


		 Свойство FieldName
		 определяет наименование поля таблицы, с которым связывается атрибут
		 справочника НСИ.


		 ![](../../Property_Image.gif)
		 [KeyField](IRdsExportSchemaAttribute.KeyField.htm)


		 Свойство KeyField определяет
		 наименование поля таблицы [DetailTable](IRdsExportSchemaAttribute.DetailTable.htm),
		 в котором будут содержаться ключи элементов имеющих множественные
		 значения атрибута [Attribute](IRdsExportSchemaAttribute.Attribute.htm).


		 ![](../../Property_Image.gif)
		 [OrderField](IRdsExportSchemaAttribute.OrderField.htm)


		 Свойство OrderField
		 определяет наименование поля таблицы [DetailTable](IRdsExportSchemaAttribute.DetailTable.htm),
		 в котором будут содержаться номера значений.


		 ![](../../Property_Image.gif)
		 [UpdateDetailTableMode](IRdsExportSchemaAttribute.UpdateDetailTableMode.htm)


		 Свойство UpdateDetailTableMode
		 определяет способ обновления записей в таблице, использующейся
		 для экспорта значений множественного атрибута.


		 ![](../../Property_Image.gif)
		 [ValueField](IRdsExportSchemaAttribute.ValueField.htm)


		 Свойство ValueField
		 определяет наименование поля таблицы [DetailTable](IRdsExportSchemaAttribute.DetailTable.htm),
		 в котором будут содержаться ключи элементов связанного справочника,
		 формирующих множественное значение атрибута [Attribute](IRdsExportSchemaAttribute.Attribute.htm).


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IRdsImportSchemaAttribute

IRdsImportSchemaAttribute
-


# IRdsImportSchemaAttribute


Сборка: Rds;


## Описание


Интерфейс IRdsImportSchemaAttribute
 содержит свойства, определяющие параметры привязки атрибута справочника
 к полям таблицы импорта.


## Иерархия наследования


           IRdsImportSchemaAttribute


## Комментарии


Для корректного импорта необходимо задать свойства [IRdsImportSchemaAttribute.DetailTable](IRdsImportSchemaAttribute.DetailTable.htm)
 и [IRdsImportSchemaAttribute.DetailTableObject](IRdsImportSchemaAttribute.DetailTableObject.htm).


При привязке поля таблицы к атрибуту справочника «KEY»
 необходимо помнить, что в справочниках НСИ поддерживаются ключи элементов,
 входящие в диапазон от 0 до 2 млрд.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](IRdsImportSchemaAttribute.Attribute.htm)


		 Свойство Attribute
		 определяет атрибут справочника НСИ, для которого осуществляется
		 привязка к полям таблицы импорта.


		 ![](../../Property_Image.gif)
		 [DetailTable](IRdsImportSchemaAttribute.DetailTable.htm)


		 Свойство DetailTable
		 определяет физическое имя таблицы, содержащей записи для множественных
		 значений атрибута справочника.


		 ![](../../Property_Image.gif)
		 [DetailTableObject](IRdsImportSchemaAttribute.DetailTableObject.htm)


		 Свойство DetailTableObject
		 определяет таблицу репозитория, из которой импортируются
		 данные множественных значений атрибута справочника.


		 ![](../../Property_Image.gif)
		 [FieldName](IRdsImportSchemaAttribute.FieldName.htm)


		 Свойство FieldName
		 определяет наименование поля таблицы, с которым связывается атрибут
		 справочника НСИ.


		 ![](../../Property_Image.gif)
		 [KeyField](IRdsImportSchemaAttribute.KeyField.htm)


		 Свойство KeyField определяет
		 наименование поля таблицы [DetailTable](IRdsImportSchemaAttribute.DetailTable.htm),
		 содержащего ключи элементов, для которых определены множественные
		 значения атрибута [Attribute](IRdsImportSchemaAttribute.Attribute.htm).


		 ![](../../Property_Image.gif)
		 [OrderField](IRdsImportSchemaAttribute.OrderField.htm)


		 Свойство OrderField
		 определяет наименование поля таблицы [DetailTable](IRdsImportSchemaAttribute.DetailTable.htm),
		 содержащего номера значений.


		 ![](../../Property_Image.gif)
		 [ValueField](IRdsImportSchemaAttribute.ValueField.htm)


		 Свойство ValueField
		 определяет наименование поля таблицы [DetailTable](IRdsImportSchemaAttribute.DetailTable.htm),
		 содержащего ключи элементов связанного справочника, формирующих
		 множественное значение атрибута [Attribute](IRdsImportSchemaAttribute.Attribute.htm).


См. также:


[Интерфейсы сборки Rds](../KeRds_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

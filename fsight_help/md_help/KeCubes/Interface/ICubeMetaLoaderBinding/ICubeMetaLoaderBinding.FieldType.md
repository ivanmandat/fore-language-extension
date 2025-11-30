# ICubeMetaLoaderBinding.FieldType

ICubeMetaLoaderBinding.FieldType
-


# ICubeMetaLoaderBinding.FieldType


## Синтаксис


FieldType: [CubeMetaLoaderFieldType](../../Enums/CubeMetaLoaderFieldType.htm);


## Описание


Свойство FieldType определяет
 тип поля источника данных.


## Комментарии


Для корректной работы необходимо задать некоторые свойства в зависимости
 от значения FieldType:


	- Index. В свойстве [ICubeMetaLoaderBinding.Field](ICubeMetaLoaderBinding.Field.htm)
	 укажите номер поля;


	- Name. В свойстве [ICubeMetaLoaderBinding.Field](ICubeMetaLoaderBinding.Field.htm)
	 укажите наименование поля;


	- ConstValue. В свойстве
	 [ICubeMetaLoaderBinding.FieldValue](ICubeMetaLoaderBinding.FieldValue.htm)
	 задайте постоянное значение. Если привязка осуществляется для атрибута
	 «[Единицы измерения](../../Enums/CubeMetaLoaderBindingType.htm)»,
	 то в свойстве [ICubeMetaLoaderBinding.Attribute](ICubeMetaLoaderBinding.Attribute.htm)
	 укажите идентификатор этого атрибута.


## Пример


Использование свойства приведено в примере для [ICubeMetaLoaderBinding.CalendarDateFormatEx](ICubeMetaLoaderBinding.CalendarDateFormatEx.htm).


См. также:


[ICubeMetaLoaderBinding](ICubeMetaLoaderBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

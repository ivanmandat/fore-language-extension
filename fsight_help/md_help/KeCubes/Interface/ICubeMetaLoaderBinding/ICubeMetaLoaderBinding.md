# ICubeMetaLoaderBinding

ICubeMetaLoaderBinding
-


# ICubeMetaLoaderBinding


Сборка: Cubes;


## Описание


Интерфейс ICubeMetaLoaderBinding
 содержит свойства, определяющие привязку атрибута базы данных временных
 рядов с полем источника данных.


## Иерархия наследования


           [INamedEntity](kesom.chm::/interface/inamedentity/inamedentity.htm)


           ICubeMetaLoaderBinding


## Комментарии


Для задания фиксированной привязки календарного измерения используйте
 [пример](../../Samples/Set_the_fixed_binding_of_calendar_dimension.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AddToLog](ICubeMetaLoaderBinding.AddToLog.htm)
		 Свойство AddToLog определяет,
		 включать ли значение поля привязки в журнал ошибок.


		 ![](../../Property_Image.gif)
		 [Attribute](ICubeMetaLoaderBinding.Attribute.htm)
		 Свойство Attribute
		 определяет атрибут временного ряда в базе данных временных рядов.


		 ![](../../Property_Image.gif)
		 [AttributeKey](ICubeMetaLoaderBinding.AttributeKey.htm)
		 Свойство AttributeKey
		 определяет ключ атрибута временного ряда.


		 ![](../../Property_Image.gif)
		 [BindingType](ICubeMetaLoaderBinding.BindingType.htm)
		 Свойство BindingType
		 определяет тип привязки.


		 ![](../../Property_Image.gif)
		 [ByColumns](ICubeMetaLoaderBinding.ByColumns.htm)
		 Свойство ByColumns
		 определяет, располагаются ли элементы измерения в столбцах.


		 ![](../../Property_Image.gif)
		 [CalendarDateFormat](ICubeMetaLoaderBinding.CalendarDateFormat.htm)
		 Свойство CalendarDateFormat
		 определяет формат даты календарного измерения.


		 ![](../../Property_Image.gif)
		 [CalendarDateFormatEx](ICubeMetaLoaderBinding.CalendarDateFormatEx.htm)
		 Свойство CalendarDateFormatEx
		 определяет формат дат для нескольких уровней календарного измерения.


		 ![](../../Property_Image.gif)
		 [CalendarOptions](ICubeMetaLoaderBinding.CalendarOptions.htm)
		 Свойство CalendarOptions
		 определяет параметры календарного измерения.


		 ![](../../Property_Image.gif)
		 [CheckField](ICubeMetaLoaderBinding.CheckField.htm)
		 Свойство CheckField
		 определяет поле, наличие которого проверяется в источнике данных.


		 ![](../../Property_Image.gif)
		 [ConvertShortYear](ICubeMetaLoaderBinding.ConvertShortYear.htm)
		 Свойство ConvertShortYear
		 определяет признак того, преобразовывать ли краткий формат даты.


		 ![](../../Property_Image.gif)
		 [Dimension](ICubeMetaLoaderBinding.Dimension.htm)
		 Свойство Dimension
		 определяет справочник, на который ссылается атрибут показателя.


		 ![](../../Property_Image.gif)
		 [EndField](ICubeMetaLoaderBinding.EndField.htm)
		 Свойство EndField определяет
		 последнее поле, если элементы источника располагаются в столбцах.


		 ![](../../Property_Image.gif)
		 [Field](ICubeMetaLoaderBinding.Field.htm)
		 Свойство Field определяет
		 поле источника данных.


		 ![](../../Property_Image.gif)
		 [FieldType](ICubeMetaLoaderBinding.FieldType.htm)
		 Свойство FieldType
		 определяет тип поля источника данных.


		 ![](../../Property_Image.gif)
		 [FieldValue](ICubeMetaLoaderBinding.FieldValue.htm)
		 Свойство FieldValue
		 определяет значение поля источника данных.


		 ![](../../Property_Image.gif)
		 [FillGaps](ICubeMetaLoaderBinding.FillGaps.htm)
		 Свойство FillGaps определяет,
		 заполнять ли пустоты в значениях, которые образуются при импорте
		 объединенных ячеек из формата *.xls.


		 ![](../../Property_Image.gif)
		 [Filter](ICubeMetaLoaderBinding.Filter.htm)
		 Свойство Filter возвращает
		 отметку, по которой будут загружены данные.


		 ![](../../Property_Image.gif)
		 [HasFilter](ICubeMetaLoaderBinding.HasFilter.htm)
		 Свойство HasFilter
		 возвращает признак наличия созданного фильтра по показателям атрибута.


		 ![](../../Property_Image.gif)
		 [HeaderParser](ICubeMetaLoaderBinding.HeaderParser.htm)
		 Свойство HeaderParser
		 возвращает объект, позволяющий распознавать атрибуты из заголовков
		 столбцов в источнике данных.


		 ![](../../Property_Image.gif)
		 [HeaderRow](ICubeMetaLoaderBinding.HeaderRow.htm)
		 Свойство HeaderRow
		 определяет индекс строки, в которой расположен заголовок.


		 ![](../../Property_Image.gif)
		 [Index](ICubeMetaLoaderBinding.Index.htm)
		 Свойство Index определяет
		 идентификатор уникального ключа справочника.


		 ![](../../Property_Image.gif)
		 [IndexAttribute](ICubeMetaLoaderBinding.IndexAttribute.htm)
		 Свойство IndexAttribute
		 определяет идентификатор атрибута, включённого в индекс, по которому
		 осуществляется привязка.


		 ![](../../Property_Image.gif)
		 [KeyAttribute](ICubeMetaLoaderBinding.KeyAttribute.htm)
		 Свойство KeyAttribute
		 определяет атрибут справочника, являющийся ключом элементов.


		 ![](../../Property_Image.gif)
		 [NameAttribute](ICubeMetaLoaderBinding.NameAttribute.htm)
		 Свойство NameAttribute
		 определяет атрибут справочника, являющийся наименованием элементов.


		 ![](../../Property_Image.gif)
		 [NextField](ICubeMetaLoaderBinding.NextField.htm)
		 Свойство NextField
		 определяет следующий столбец со значением, при загрузке данных
		 по столбцам.


		 ![](../../Property_Image.gif)
		 [Parser](ICubeMetaLoaderBinding.Parser.htm)
		 Свойство Parser возвращает
		 объект, позволяющий распознавать атрибуты в источнике данных.


		 ![](../../Property_Image.gif)
		 [TableDictionary](ICubeMetaLoaderBinding.TableDictionary.htm)
		 Свойство TableDictionary
		 определяет словарь, на который ссылается атрибут.


## Свойства, унаследованные от [INamedEntity](kesom.chm::/interface/inamedentity/inamedentity.htm)


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


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

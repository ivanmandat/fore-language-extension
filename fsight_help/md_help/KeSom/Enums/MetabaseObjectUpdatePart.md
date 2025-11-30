# MetabaseObjectUpdatePart

MetabaseObjectUpdatePart
-


# MetabaseObjectUpdatePart


## Описание


Перечисление MetabaseObjectUpdatePart
 определяет способ обновления данных объектов репозитория.


Используется следующим свойством:


	- [IMetabaseUpdateObjectNode.UpdatePart](../Interface/IMetabaseUpdateObjectNode/IMetabaseUpdateObjectNode.UpdatePart.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Значение не инициализировано.


		 1
		 Metadata. Метаданные.


		 2
		 SecurityDescriptor.
		 Права доступа.


		 3
		 MetadataSD. Метаданные
		 + Права доступа.


		 4
		 Data. Данные (для справочников
		 НСИ, реляционных таблиц).


		 5
		 DataMetadata. Данные
		 (для справочников НСИ, реляционных таблиц) + Метаданные.


		 6
		 DataSD. Данные (для
		 справочников НСИ, реляционных таблиц) + Права доступа.


		 7
		 DataMetadataSD. Данные
		 (для справочников НСИ, реляционных таблиц) + Метаданные + Права
		 доступа.


		 16
		 CreateDescriptor. Создание
		 описания объекта.


		 32
		 ReplaceSecurityDescriptor.
		 Дополнительные параметры безопасности объекта + настройки мандатного
		 доступа. Если [IMetabaseUpdate.AllowReplaceSD](../Interface/IMetabaseUpdate/IMetabaseUpdate.AllowReplaceSD.htm)
		 установлено в значение False,
		 то значение игнорируется.


См. также:


[Перечисления
 сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

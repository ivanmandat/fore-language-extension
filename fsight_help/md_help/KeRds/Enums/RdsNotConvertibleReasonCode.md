# RdsNotConvertibleReasonCode

RdsNotConvertibleReasonCode
-


# RdsNotConvertibleReasonCode


## Описание


Перечисление RdsNotConvertibleReasonCode
 используется для определения кода причины, по которой справочник НСИ не
 может быть преобразован в табличный справочник НСИ.


Используется следующим свойством:


	- [IRdsNotConvertibleReason.Reason](../Interface/IRdsNotConvertibleReason/IRdsNotConvertibleReason.Reason.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 ConverterConstraint.
		 Ограничения преобразователя.


		 1
		 ConverterConstraintImportExportId.
		 Справочник содержит схему импорта/экспорта с идентификатором «P7_RDS_CONVERT_OBJECT_SCHEMA».


		 256
		 DuplicatedId. Дублирование
		 идентификаторов.


		 257
		 DuplicatedIdAttributes.
		 Дублирование атрибутов.


		 258
		 DuplicatedIdParams.
		 Дублирование параметров.


		 259
		 DuplicatedIdLinks.
		 Дублирование связей.


		 260
		 DuplicatedIdUniqueKeys.
		 Дублирование уникальных ключей.


		 261
		 DuplicatedIdImportSchemas.
		 Дублирование схем импорта.


		 262
		 DuplicatedIdExportSchemas.
		 Дублирование схем экспорта.


		 263
		 DuplicatedIdLevels.
		 Дублирование уровней.


		 264
		 DuplicatedIdSources.
		 Дублирование источников.


		 512
		 MetaDictionaryConstraint.
		 Ограничения, накладываемые на структуру справочников табличного
		 вида.


		 513
		 MetaDictionaryConstraintImportExportId.
		 Справочник содержит схемы импорта/экспорта с совпадающими идентификаторами.


		 514
		 MetaDictionaryConstraintGuid.
		 Справочник содержит GUID атрибут.


		 768
		 IncorrectStructure.
		 Ошибка в структуре преобразуемого справочника.


		 769
		 IncorrectStructureTranslationAttributes.
		 Справочник содержит избыточные атрибуты переводов.


		 770
		 IncorrectStructureLinkNullReference.
		 Справочник содержит ошибку в ссылке на элементы из других объектов.


		 1024
		 IncorrectData. Ошибка
		 в данных преобразуемого справочника.


		 1025
		 IncorrectDataNullViolation.
		 Справочник содержит элементы с незаполненными обязательными атрибутами.


		 1026
		 IncorrectDataLinkIntegrityViolation.
		 Справочник содержит элементы, в которых нарушены ограничения целостности
		 по связям.


		 1027
		 IncorrectDataOrderViolation.
		 Справочник содержит на одном уровне элементы с одинаковым порядком.


		 1028
		 IncorrectDataUniqueKeyViolation.
		 Справочник содержит элементы, в которых нарушены ограничения целостности
		 по уникальному ключу.


		 1029
		 IncorrectInOutDatePeriod.
		 Справочник содержит значения, превышающие указанную точность,
		 разрешенную для этого столбца


См. также:


[Перечисления
 сборки Rds](KeRds_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

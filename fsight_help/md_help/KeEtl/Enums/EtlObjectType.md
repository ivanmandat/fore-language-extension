# EtlObjectType

EtlObjectType
-


# EtlObjectType


## Описание


Перечисление EtlObjectType содержит
 типы объекта задачи Etl.


Используется следующими свойствами и методами:


	- [IEtlObject.ObjectType](../Interface/IEtlObject/IEtlObject.ObjectType.htm);


	- [IEtlTask.Create](../Interface/IEtlTask/IEtlTask.Create.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 3
		 PlainDataJoin. Преобразование:
		 соединение.


		 4
		 PlainDataUnion. Преобразование:
		 объединение.


		 5
		 PlainDataSplit. Преобразование:
		 разделение.


		 6
		 PlainDataDeduplicate.
		 Преобразование: удаление дубликатов.


		 7
		 PlainDataGroup. Преобразование:
		 группировка.


		 8
		 PlainDataFilter. Преобразование:
		 фильтрация.


		 9
		 PlainDataSort. Преобразование:
		 сортировка.


		 10
		 PlainDataMapper. Преобразование:
		 преобразование.


		 11
		 PlainDataUser. Преобразование:
		 алгоритм пользователя.


		 32
		 CodeBlock. Процедура.


		 33
		 SQLCommandBlock. Команда
		 СУБД.


		 34
		 FixedCodeBlock. Процедура
		 на основе шаблона.


		 81
		 PlainLink. Связь объектов.


		 100
		 PlainDataMetabaseProvider.
		 Импорт из репозитория.


		 101
		 PlainDataAccessProvider.
		 Импорт из Access.


		 102
		 PlainDataExcelProvider.
		 Импорт из Excel (97-2003).


		 103
		 PlainDataExcelConsumer.
		 Экспорт в Excel (97-2003).


		 104
		 PlainDataDbaseProvider.
		 Импорт из DBase.


		 105
		 PlainDataParadoxProvider.
		 Импорт из Paradox.


		 106
		 PlainDataXmlProvider.
		 Импорт из XML.


		 107
		 PlainDataWebProvider.
		 Импорт из Web-страницы.


		 108
		 PlainDataTextProvider.
		 Импорт из текстового файла.


		 110
		 PlainDataOleDbProvider.
		 Импорт из OLEDB.


		 111
		 PlainDataUserProvider.
		 Импорт из источника пользователя.


		 112
		 PlainDataVfpProvider.
		 Импорт из Visual FoxPro.


		 113
		 PlainDataExcelProviderEx.
		 Импорт из Excel (xlsx).


		 114
		 PlainDataRdsProvider.
		 Источник репозитория: табличный справочник НСИ.


		 116
		 PlainDataJsonProvider.
		 Импорт из JSON.


		 117
		 PlainDataRestProvider.
		 Импорт из REST.


		 200
		 PlainDataMetabaseConsumer.
		 Приёмник репозитория.


		 201
		 PlainDataAccessConsumer.
		 Экспорт в Access.


		 202
		 PlainDataDbaseConsumer.
		 Экспорт в DBase.


		 204
		 PlainDataXmlConsumer.
		 Экспорт в XML.


		 205
		 PlainDataTextConsumer.
		 Экспорт в текстовый файл.


		 207
		 PlainDataOleDbConsumer
		 . Экспорт в OLEDB.


		 208
		 PlainDataUserConsumer.
		 Экспорт в приёмник пользователя.


		 209
		 PlainDataVfpConsumer.
		 Экспорт в Visual FoxPro.


		 210
		 PlainDataSqlCommandConsumer
		 . Приёмник репозитория: команда СУБД.


		 211
		 PlainDataCopy. Источник:
		 копирование данных.


		 212
		 PlainDataExcelConsumerEx.
		 Экспорт в Excel (xlsx).


		 213
		 PlainDataRdsConsumer.
		 Приёмник репозитория: табличный справочник НСИ.


		 216
		 PlainDataJsonConsumer.
		 Экспорт в JSON.


См. также:


[Перечисления
 сборки Etl](KeEtl_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

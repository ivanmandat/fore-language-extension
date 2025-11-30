# MetabaseObjectClass

MetabaseObjectClass
-


# MetabaseObjectClass


## Описание


Перечисление MetabaseObjectClass
 содержит типы объектов репозитория.


Используется следующими свойствами и методами:


	- [IAuditFilterCondition.ClassId](../Interface/IAuditFilterCondition/IAuditFilterCondition.ClassId.htm);


	- [ICustomObjectResolver.ClassId](../Interface/ICustomObjectResolver/ICustomObjectResolver.ClassId.htm);


	- [ICubeMetaUpdateAdditionalObject.SourceClassId](kecubes.chm::/Interface/ICubeMetaUpdateAdditionalObject/ICubeMetaUpdateAdditionalObject.SourceClassId.htm);


	- [IMetabaseClass.CommonClassName](../Interface/IMetabaseClass/IMetabaseClass.CommonClassName.htm);


	- [IMetabaseClass.GetMetabaseObjectClass](../Interface/IMetabaseClass/IMetabaseClass.GetMetabaseObjectClass.htm);


	- [IMetabaseClass.IconIndex](../Interface/IMetabaseClass/IMetabaseClass.IconIndex.htm);


	- [IMetabaseCustomClass.ClassId](../Interface/IMetabaseCustomClass/IMetabaseCustomClass.ClassId.htm);


	- [IMetabaseCreateFindInfo.ClassId](../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.ClassId.htm);


	- [IMetabaseObjectCreateInfo.ClassId](../Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.ClassId.htm)


	- [IMetabaseObjectDescriptor.ClassId](../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.ClassId.htm);


	- [IMetabaseObjectFindInfo.ClassId](../Interface/IMetabaseObjectFindInfo/IMetabaseObjectFindInfo.ClassId.htm);


	- [IMetabaseObjectHistoryItem.ClassId](../Interface/IMetabaseObjectHistoryItem/IMetabaseObjectHistoryItem.ClassId.htm);


	- [IMetabaseUpdateKeyMap.FindByOldId](../Interface/IMetabaseUpdateKeyMap/IMetabaseUpdateKeyMap.FindByOldId.htm);


	- [IMetabaseUpdateObjectRemapping.ClassId](../Interface/IMetabaseUpdateObjectRemapping/IMetabaseUpdateObjectRemapping.ClassId.htm);


	- [IMetabaseUpdateRemappings.FindByOldId](../Interface/IMetabaseUpdateRemappings/IMetabaseUpdateRemappings.FindByOldId.htm);


	- [IMetabaseUpdateUnresolved.ClassId](../Interface/IMetabaseUpdateUnresolved/IMetabaseUpdateUnresolved.ClassId.htm);


	- [IUiMetabaseObject.ObjectClassId](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ObjectClassId.htm);


	- [ISaveMetabaseObjectHandler.Type](../Interface/ISaveMetabaseObjectHandler/ISaveMetabaseObjectHandler.ClassId.htm);


	- [ISaveMetabaseObjectHandlers.Add](../Interface/ISaveMetabaseObjectHandlers/ISaveMetabaseObjectHandlers.Add.htm);


	- [ISaveMetabaseObjectHandlers.ItemByClassId](../Interface/ISaveMetabaseObjectHandlers/ISaveMetabaseObjectHandlers.ItemByClassId.htm);


	- [ISaveMetabaseObjectHandlers.RemoveByClassId](../Interface/ISaveMetabaseObjectHandlers/ISaveMetabaseObjectHandlers.RemoveByClassId.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 KE_CLASS_FOLDER. Папка.


		 1
		 KE_CLASS_SPECIALOBJECTS.
		 Специальный объект.


		 2
		 KE_CLASS_METABASEUPDATEOBJECT.
		 Обновление.


		 4
		 KE_CLASS_NAMESPACE_FOLDER.
		 Контейнер. Папка с собственным пространством имен для идентификаторов.


		 16
		 KE_CLASS_SHORTCUT_AUDIT.
		 Специальный класс для аудита ярлыков. Данный класс можно передать
		 в настройки фильтра аудита по классам объектов репозитория [IMetabaseAuditPolicy.FilterClass](../Interface/IMetabaseAuditPolicy/IMetabaseAuditPolicy.FilterClass.htm)
		 и нельзя использовать для создания объектов.


		 32
		 KE_CLASS_REPOSITORY_AUDIT.
		 Специальный класс для аудита операций с репозиторием.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 513
		 KE_CLASS_DATABASE.
		 База данных.


		 769
		 KE_CLASS_TABLE. Таблица.


		 770
		 KE_CLASS_QUERY. Запрос.


		 771
		 KE_CLASS_VIEW. Представление.


		 772
		 KE_CLASS_EXCEL_DS.
		 Источник данных - Excel.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 773
		 KE_CLASS_DBF_DS. Источник
		 данных - DBF.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 774
		 KE_CLASS_ACCESS_DS.
		 Источник данных - Access.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 775
		 KE_CLASS_TXT_DS. Источник
		 данных - текстовый файл.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 776
		 KE_CLASS_ODBC_DS. Источник
		 данных - ODBC.


		 777
		 KE_CLASS_LOG. Журнал.


		 778
		 KE_CLASS_EXTERNTABLE.
		 Присоединенная таблица.


		 779
		 KE_CLASS_EXTERNVIEW.
		 Присоединенное представление.


		 780
		 KE_CLASS_SEQUENCE.
		 Сиквенс.


		 1025
		 KE_CLASS_STDDIM. Табличный
		 справочник.


		 1026
		 KE_CLASS_CLNDIM. Календарный
		 справочник.


		 1027
		 KE_CLASS_USERDIM. Вычисляемый
		 справочник.


		 1028
		 KE_CLASS_CUSTOMDIM.
		 Конструируемый справочник.


		 1029
		 KE_CLASS_DIMELEMENTGROUP.
		 Группа элементов измерения.


		 1030
		 KE_CLASS_DIMSELECTIONSCHEMA.
		 Схема отметки элементов справочника.


		 1031
		 KE_CLASS_ADOMDDIM.
		 Справочник ADOMD.


		 1032
		 KE_CLASS_MSSCENARIODIM.
		 Сценарный справочник моделирования.


		 1033
		 KE_CLASS_AUTOCUBEUNITSDIM.
		 Справочник единиц измерения.


		 1034
		 KE_CLASS_RUBRICATORREVISIONSDIM.
		 Справочник ревизий в базе данных временных рядов.


		 1035
		 KE_CLASS_COMPOUNDDIM.
		 Составной справочник.


		 1036
		 KE_CLASS_COMPOUNDCLNDIM.
		 Составной календарный справочник.


		 1037
		 KE_CLASS_VALIDATIONDIM.
		 Справочник валидаций в базе данных временных рядов.


		 1038
		 KE_CLASS_RUBRICATORCALENDARLEVELSDIM.
		 Календарное измерение базы данных временных рядов.


		 1039
		 KE_CLASS_SOURCEANDFIELDDIM.
		 Справочник источников и полей.


		 1040
		 KE_CLASS_NUMSROWSDIM.
		 Справочник номеров строк.


		 1041
		 KE_CLASS_DYNAMICDIM.
		 Справочник с динамической загрузкой данных.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 1042
		 KE_CLASS_ATTRIBUTESDIM.
		 Справочник атрибутов базы данных временных рядов.


		 1043
		 KE_CLASS_VIRTUALDIM.
		 Виртуальное измерение для строк/столбцов таблицы.


		 1281
		 KE_CLASS_STDCUBE. Стандартный
		 куб.


		 1282
		 KE_CLASS_CALCCUBE.
		 Вычисляемый куб.


		 1283
		 KE_CLASS_CUBEVIEW.
		 Представление - куб.


		 1284
		 KE_CLASS_VIRTUALCUBE.
		 Виртуальный куб.


		 1285
		 KE_CLASS_CUBELINK.
		 Связь с кубом.


		 1286
		 KE_CLASS_ADOMDCUBE.
		 Куб ADOMD.


		 1287
		 KE_CLASS_AUTOCUBE.
		 Автоматический куб.


		 1289
		 KE_CLASS_CUBELOADER.
		 Загрузчик в куб.


		 1290
		 KE_CLASS_CUBEMETALOADER.
		 Загрузчик показателей.


		 1291
		 KE_CLASS_SUBJECTAREA.
		 Предметная область.


		 1292
		 KE_CLASS_INFOCUBE.
		 «Инфокуб» для хранения параметров создания куб.


		 1293
		 KE_CLASS_METRIC.
		 Метрика.


		 1294
		 KE_CLASS_CUBE_CACHE_SAVER.
		 Объект кеша для кубов и измерений.


		 1295
		 KE_CLASS_CUBE_SEGMENT.
		 Сегмент куба.


		 1296
		 KE_CLASS_CUBE_SEGMENT_CONTAINER.
		 Контейнер сегментов куба.


		 1537
		 KE_CLASS_MODULE. Модуль.


		 1538
		 KE_CLASS_FORM. Форма.


		 1539
		 KE_CLASS_ASSEMBLY.
		 Сборка.


		 1540
		 KE_CLASS_WEBFORM. Веб-форма.


		 1793
		 KE_CLASS_WORKSPACE.
		 Рабочее пространство.


		 2049
		 KE_CLASS_PIVOT. Основа
		 для построения таблицы с данными следующих объектов:


			- рабочая книга;


			- экспресс-отчет.


		Примечание.
		 Создание объектов данного класса не поддерживается.


		 2561
		 KE_CLASS_EXPRESSREPORT.
		 Экспресс-отчет.


		 2562
		 KE_CLASS_PROCEDURALREPORT.
		 Регламентный отчет.


		 2817
		 KE_CLASS_BUSRUB. Бизнес
		 рубрикатор.
		Примечание.
		 Работа с объектами данного класса более не поддерживается.


		 2818
		 KE_CLASS_BUSRUBCON.
		 Бизнес рубрикатор соединитель.
		Примечание.
		 Работа с объектами данного класса более не поддерживается.


		 2819
		 KE_CLASS_BUSRUBFACT.
		 Бизнес рубрикатор показатель.
		Примечание.
		 Работа с объектами данного класса более не поддерживается.


		 2820
		 KE_CLASS_BUSRUBCOMPOSITEFACT.
		 Бизнес рубрикатор составной показатель.
		Примечание.
		 Работа с объектами данного класса более не поддерживается.


		 2822
		 KE_CLASS_RUBRICATOR.
		 База данных временных рядов.


		 2823
		 KE_CLASS_RUBRICATORFACTOR.
		 Показатель базы данных временных рядов.


		 2823
		 KE_CLASS_RUBRICATORFACTORTRANSFORM.
		 Преобразованный показатель базы данных временных рядов.


		 2824
		 KE_CLASS_IMPORTREQUEST.
		 Параметры импорта показателей в базу данных временных рядов.


		 2825
		 KE_CLASS_EXPORTREQUEST.
		 Параметры экспорта показателей из базы данных временных рядов.


		 2826
		 KE_CLASS_RUBRICATORSEGMENT.
		 Диапазон данных (сегмент) базы данных временных рядов.


		 2827
		 KE_CLASS_WORKBOOK.
		 Рабочая книга.


		 2828
		 KE_CLASS_CUBEMETAUPDATE.
		 Объект репликации.


		 2829
		 KE_CLASS_RUBRICATORHIERARCHY.
		 Иерархия базы данных временных рядов.


		 3073
		 KE_CLASS_APPSERVER.
		 Планировщик задач.


		 3074
		 KE_CLASS_METADICTIONARY.
		 Метаатрибуты базы данных временных рядов.


		 3075
		 KE_CLASS_METARECORD.
		 Зарезервировано для внутреннего использования.


		 3076
		 KE_CLASS_METADICTIONARYRDS.
		 Табличный справочник НСИ.


		 3077
		 KE_CLASS_METADICTIONARYCOMPRDS.
		 Составной табличный справочник НСИ.


		 3329
		 KE_CLASS_DOCUMENT.
		 Документ.


		 3330
		 KE_CLASS_TOPOBASE.
		 Карта.


		 3331
		 KE_CLASS_RESOURCEOBJECT.
		 Ресурсы.


		 3332
		 KE_CLASS_STYLESHEET.
		 Таблица стилей.


		 3333
		 KE_CLASS_SHAREDPARAMS.
		 Глобальные параметры.


		 3841
		 KE_CLASS_SQLCOMMAND.
		 Команда СУБД.


		 3842
		 KE_CLASS_PROCEDURE.
		 Процедура.


		 3843
		 KE_CLASS_MDCALCULATION.
		 Многомерный расчет на сервере базы данных.


		 4097
		 KE_CLASS_ETLTASK. Задача
		 ETL.


		 4353
		 KE_CLASS_RDS_DATABASE.
		 База данных НСИ.


		 4354
		 KE_CLASS_RDS_DICTIONARY.
		 Справочник НСИ.


		 4355
		 KE_CLASS_RDS_COMPDICTIONARY.
		 Составной справочник НСИ.


		 4357
		 KE_CLASS_RDS_IMPORTREQUEST.
		 Объект импорта в справочник НСИ.


		 4358
		 KE_CLASS_RDS_EXPORTREQUEST.
		 Объект экспорта из справочника НСИ.


		 4609
		 KE_CLASS_DW_DATABASE.
		 База данных DW.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 4610
		 KE_CLASS_DW_FACT. Показатель
		 DW.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 4611
		 KE_CLASS_DW_FACTCUBE.
		 Куб показателя DW.
		Примечание.
		 Создание объектов данного класса не поддерживается.


		 4624
		 KE_CLASS_DW_REPOSITORYDB.
		 Репозиторий расширенного хранилища данных.
		Примечание.
		 Создание объектов класса не поддерживается.


		 4865
		 KE_CLASS_ADOMD_CATALOG.
		 База данных ADOMD.


		 5121
		 KE_CLASS_MODELSPACE.
		 Контейнер моделирования.


		 5122
		 KE_CLASS_MSVARIABLE.
		 Переменная моделирования.


		 5123
		 KE_CLASS_MSPROBLEM.
		 Задача моделирования.


		 5124
		 KE_CLASS_MSSCENARIO.
		 Сценарий моделирования.


		 5125
		 KE_CLASS_MSMODEL. Модель.


		 5126
		 KE_CLASS_MSMETAMODEL.
		 Метамодель.


		 5127
		 KE_CLASS_MSMETAMODELCHART.
		 Граф метамодели.


		 5128
		 KE_CLASS_CALCULATIONHISTORY.
		 История расчета.


		 5129
		 KE_CLASS_VALIDATION.
		 Валидация.


		 5130
		 KE_CLASS_VALIDATIONFILTER.
		 Фильтр валидации.


		 5131
		 KE_CLASS_VALIDATIONGROUP.
		 Группа валидаций.


		 5132
		 KE_CLASS_MSTABLEVIEW.
		 Табличный визуализатор для контейнера моделирования.


		 5377
		 KE_CLASS_TASK_EXECUTESUB.
		 Выполнение модуля.


		 5378
		 KE_CLASS_TASK_CONTAINTER.
		 Контейнер запланированных задач.


		 5379
		 KE_CLASS_TASK_CALCULATECUBE.
		 Расчет вычисляемого куба.


		 5380
		 KE_CLASS_TASK_CALCULATEREPORT.
		 Вычисление регламентного отчета.


		 5381
		 KE_CLASS_TASK_EXECUTEETL.
		 Выполнение задачи ETL.


		 5382
		 KE_CLASS_TASK_CALCULATEMODEL.
		 Задача вычисления модели.


		 5384
		 KE_CLASS_TASK_CALCULATEMDCALCULATION.
		 Выполнение многомерного расчета на сервере БД.


		 5386
		 KE_CLASS_TASK_UPDATE_CUBE_CACHE.
		 Обновление кеша для планировщика задач.


		 5387
		 KE_CLASS_TASK_UPDATE_DIMENSION.
		 Задача обновления измерения.


		 5388
		 KE_CLASS_TASK_SEARCHENGINE_IMPORT.
		 Задача обновления поискового индекса.


		 5389
		 KE_CLASS_BPM_SCHEDULEDTASK.
		 Задача бизнес-процесса.


		 5889
		 KE_CLASS_CUSTOM_EXTENDER.
		 Контейнер пользовательских классов.


		 5890
		 KE_CLASS_CUSTOM_CLASS.
		 Класс пользовательских метаданных.


		 5891
		 KE_CLASS_CUSTOM_OBJECT.
		 Объект пользовательских метаданных.


		 7937
		 KE_CLASS_SECURITY.
		 Политика безопасности.


		 7938
		 KE_CLASS_AUDITLOG.
		 Протокол доступа.


		 8193
		 KE_CLASS_METABASELINK.
		 Связь с репозиторием.


		 8448
		 KE_ADHOC_REPORT. Аналитическая
		 панель.


		 8449
		 KE_ADHOC_DATASOURCES.
		 Источники данных аналитической панели.


		 8450
		 KE_ADHOC_THEME. Тема
		 оформления аналитической панели.


		 8960


		 KE_CLASS_BPM_WORKSPACE.
		 Исполнитель бизнес-процесса.


		 8961


		 KE_CLASS_BPM_PROCESS.
		 Бизнес-процесс.


		 9216
		 KE_CLASS_DASHBOARD_REPORT.
		 Информационная панель.


		 9217
		 KE_CLASS_SEMANTIC_LAYER.
		 Модель данных.


		 9218
		 KE_CLASS_DASHBOARD_PUBLICATIONS_REGISTRY.
		 Таблица-реестр с информацией о публикациях информационных панелей.


		 9473
		 KE_CLASS_PYTHON_MODULE.
		 Python-модуль.


		 10241
		 KE_CLASS_JAVA_MODULE.
		 Java-модуль.


		 10497
		 KE_CLASS_DBA_PROXY_APP.
		 Бизнес-приложение.
		Примечание.
		 Не предназначено для использования в прикладном коде.


См. также:


[Перечисления сборки Metabase](KeSom_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

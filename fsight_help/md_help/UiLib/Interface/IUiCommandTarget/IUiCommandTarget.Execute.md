# IUiCommandTarget.Execute

IUiCommandTarget.Execute
-


# IUiCommandTarget.Execute


## Синтаксис


Execute(Command: String; Context: [IUiCommandExecutionContext](../IUiCommandExecutionContext/IUiCommandExecutionContext.htm)):
 Variant;


## Параметры


Command. Строковый идентификатор
 команды, которую необходимо выполнить;


Context. Дополнительные параметры
 выполнения команды.


## Описание


Метод Execute выполняет команду
 над объектом.


## Комментарии


Все команды в платформе имеют уникальный строковый идентификатор. Например,
 команда открытия объекта имеет идентификатор «Object.Open»,
 редактирования - «Object.Edit»
 и другие. Подробное описание и примеры использования можно посмотреть
 при выборе ссылки на конкретную команду.


### Общие команды


Команды различных объектов платформы:


		 Команда
		 Краткое описание


		 [CalcCube.EditFormulas](Command/CalcCube.EditFormulas.htm)


		 Вызов стандартного диалога редактирования формул.


		 [CalcCube.Execute](Command/CalcCube.Execute.htm)


		 Вызов стандартного диалога запуска многомерного расчета на
		 сервере БД.


		 [Cube.CreateReport](Command/Cube.CreateReport.htm)


		 Создание регламентного отчета на основе куба.


		 [Cube.SaveToFile](Command/Cube.SaveToFile.htm)


		 Вызов стандартного диалога сохранения куба в файл.


		 [Object.Access](Command/Object.Access.htm)


		 Настройка прав доступа к объекту.


		 [Object.Edit](Command/Object.Edit.htm)


		 Редактирование свойств объекта.


		 [Object.EditShortcut](Command/Object.EditShortcut.htm)


		 Редактирование свойств ярлыка.


		 [Object.History](Command/Object.History.htm)


		 Вызов стандартного окна истории изменений объекта.


		 [Object.Open](Command/Object.Open.htm)


		 Открытие объекта.


		 [Problem.Run](Command/Problem.Run.htm)


		 Запуск расчёта задачи моделирования.


		 [Query.QueryBuilder](Command/Query.QueryBuilder.htm)


		 Вызов конструктора запроса.


### Плагин Adm


Команды администрирования:


		 Команда
		 Краткое описание


		 [ChangePassword](Command/Command_ChangePassword.htm)


		 Вызов стандартного диалога изменения пароля текущего пользователя.


		 [OpenNavigator](Command/Command_OpenNavigator_Adm.htm)


		 Открытие менеджера безопасности для указанного репозитория.


		 [ShowHoursPolicy](Command/ShowHoursPolicy.htm)


		 Вызов стандартного диалога разграничения доступа пользователя
		 в систему по времени.


		 [ShowUserProp](Command/ShowUserProp.htm)


		 Вызов стандартного диалога настройки свойств пользователя.


		 [UpdateUsers_ShowErrorsDialog](Command/UpdateUsers_ShowErrorsDialog.htm)


		 Открытие окна с ошибками обновления пользователей.


### Плагин Cubes


Команды многомерных источников данных:


		 Команда
		 Краткое описание


		 [CopyRubricator](Command/CopyRubricator.htm)


		 Копирование базы данных временных рядов.


		 [LoadCubes](Command/LoadCubes.htm)


		 Вызов диалога импорта данных в куб.


		 [SetupAggregations](Command/SetupAggregations.htm)


		 Вызов диалога настройки основного механизма агрегации.


### Плагин Db


Команды таблиц:


		 Команда
		 Краткое описание


		 [FieldEditor](Command/Command_FieldEditor.htm)


		 Вызов стандартного диалога редактирования параметров поля таблицы.


		 [LinkTables](Command/DB_LinkTables.htm)


		 Вызов мастера создания прикрепленной таблицы.


### Плагин DevEnv


Команды объектов среды разработки:


		 Команда
		 Краткое описание


		 [DebugObject](Command/DebugObject.htm)


		 Запуск указанного объекта среды разработки на отладку.


### Плагин Dim


Команды справочников:


		 Команда
		 Краткое описание


		 [ElementGroupsDialog](Command/ElementGroupsDialog.htm)


		 Открытие диалога настройки групп элементов справочника.


		 [HierarchiesDialog](Command/HierarchiesDialog.htm)


		 Открытие диалога настройки альтернативных иерархий справочника.


		 [OpenDimension](Command/Command_OpenDimension.htm)


		 Открытие справочника на просмотр.


		 [SelectionSchemasDialog](Command/SelectionSchemasDialog.htm)


		 Открытие диалога настройки схем отметки справочника.


### Плагин Etl


Команды задачи ETL:


		 Команда
		 Краткое описание


		 [ShowConsumerData](Command/ShowConsumerData.htm)
		 Вызов диалога просмотра данных в приёмнике задачи ETL.


		 [ShowExecutionOrder](Command/ShowExecutionOrder.htm)
		 Вызов диалога настройки очерёдности выполнения операций в задаче
		 ETL.


		 [ShowProviderData](Command/ShowProviderData.htm)
		 Вызов диалога просмотра данных в источнике задачи ETL.


### Плагин Express


Команды инструмента «Аналитические
 запросы (OLAP)»:


		 Команда
		 Краткое описание


		 [CalculatesSetup](Command/Command_CalculatesSetup.htm)


		 Вызов стандартного диалога настройки вычисляемых показателей.


		 [DimSelectionSetup](Command/Command_DimSelectionSetup.htm)


		 Создание отметки элементов измерений экспресс-отчета.


		 [FilterSetup](Command/Command_FilterSetup.htm)


		 Вызов стандартного диалога фильтрации данных.


		 [FormatConditionsSetup](Command/Command_FormatConditionsSetup.htm)


		 Вызов стандартного диалога настройки параметров условного форматирования
		 данных.


		 [HighlightSetup](Command/Command_HighlightSetup.htm)


		 Вызов стандартного диалога настройки подсветки данных.


		 [OpenCube](Command/Command_OpenCube.htm)


		 Создание экспресс-отчета на базе куба и открытие его на просмотр.


		 [OpenFile](Command/OpenFile.htm)


		 Открыть экспресс-отчет, сохраненный в файл (Экспресс-отчет
		 > Открыть из файла…).


		 [OpenRubricator](Command/Command_OpenRubricator.htm)


		 Создание экспресс-отчета на базе базы данных временных рядов
		 и открытие его на просмотр.


		 [ParetoSetup](Command/Command_ParetoSetup.htm)


		 Вызов стандартного диалога настройки параметров анализа "80/20".


		 [PerformSearch](Command/PerformSearch.htm)


		 Вызов стандартного диалога поиска в таблице экспресс-отчета.


		 [ShowBulkExportDialog](Command/ShowBulkExportDialog.htm)


		 Вызов стандартного диалога пакетного экспорта.


		 [ShowBulkPrintDialog](Command/ShowBulkPrintDialog.htm)


		 Вызов стандартного диалога пакетной печати.


		 [ShowCalcChaingDialog](Command/ShowCalcChaingDialog.htm)


		 Вывод стандартного диалога [цепочки
		 расчета](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm).


		 [ShowFormulaEditor](Command/ShowFormulaEditor.htm)


		 Вывод стандартного диалога редактора [выражений](UiNav.chm::/GUI/ExpressionEditor.htm)
		 для настройки элемента измерения.


		 [ShowReporter](Command/Command_ShowReporter.htm)


		 Открытие экспресс-отчета.


		 [TableFormatSetup](Command/Command_TableFormatSetup.htm)


		 Вызов стандартного диалога настройки стиля, используемого для
		 оформления различных областей таблицы.


		 [TableStyleSetup](Command/Command_TableStyleSetup.htm)


		 Вызов стандартного диалога настройки стиля, используемого для
		 оформления области данных таблицы.


		 [TitleSetup](Command/Command_TitleSetup.htm)


		 Вызов стандартного диалога настройки заголовка экспресс-отчета.


		 [TotalsSetup](Command/Command_TotalsSetup.htm)


		 Вызов специализированного диалога настройки итогов.


### Плагин FactRubricator


Команды инструмента «Анализ временных
 рядов»:


		 Команда
		 Краткое описание


		 [ShowDataMiningDialog](Command/FactRubricator_ShowDataMiningDialog.htm)


		 Вызов окна интеллектуального анализа данных.


		 [ShowExplainValidationDialog](Command/FactRubricator_ShowExplainValidationDialog.htm)


		 Вызов окна для [объяснения ошибок
		 валидации](UiValidation.chm::/Calculation_result.htm) для заданной ячейки.


		 [ShowExportDialog](Command/FactRubricator_ShowExportDialog.htm)


		 Вызов мастера для запуска существующего или создания нового
		 объекта экспорта в базе данных временных рядов.


		 [ShowImportDialog](Command/FactRubricator_ShowImportDialog.htm)


		 Вызов мастера для запуска существующего или создания нового
		 объекта импорта в базе данных временных рядов.


### Плагин Fld


Команды объектов репозитория:


		 Команда
		 Краткое описание


		 [ShowCreateShortcut](Command/ShowCreateShortcut.htm)


		 Вызов стандартного окна создания ярлыка объекта репозитория.


		 [ShowObjectAccess](Command/Command_ShowObjectAccess.htm)


		 Вызов стандартного окна параметров управления доступом к объекту
		 репозитория.


		 [ShowObjectProps](Command/Command_ShowObjectProps.htm)


		 Вызов стандартного окна свойств объекта репозитория.


### Плагин MetabaseUpdate


Команды инструмента «Менеджер обновлений»:


		 Команда
		 Краткое описание


		 [ApplyUpdate](Command/MetabaseUpdate_ApplyUpdate.htm)


		 Запуск мастера установки обновления.


		 [CreateUpdate](Command/MetabaseUpdate_CreateUpdate.htm)


		 Вызов менеджера обновлений для создания нового обновления.


		 [OpenUpdate](Command/MetabaseUpdate_OpenUpdate.htm)


		 Открытие обновления из файла в менеджере обновлений платформы.


		 [OpenUpdateFromRepo](Command/MetabaseUpdate_OpenUpdateFromRepo.htm)


		 Открытие обновления из репозитория в менеджере обновлений платформы.


### Плагин Ms


Команды инструмента «Моделирование
 и прогнозирование»:


		 Команда
		 Краткое описание


		 [CopyModelSpace](Command/CopyModelSpace.htm)
		 Копирование контейнера моделирования.


		 [EditChainEntry](Command/EditChainEntry.htm)
		 Открытие диалога для настройки [многомерного
		 цикла](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/MultiDimIterator.htm) или диалога для настройки [измерения
		 многомерного цикла](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/AdvDimFilter.htm).


		 [EditMatrixAggregationFilter](Command/EditMatrixAggregationFilter.htm)


		 Открытие диалога для настройки [фильтрации
		 измерений](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregationParams.htm#filtersetup) при определении параметров расчёта
		 [матричной
		 агрегации](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/MatrixAggregation/MatrixAggregation.htm).


		 [GetCubeModelDesc](Command/GetCubeModelDesc.htm)


		 Определение базы данных временных рядов или куба, в которые
		 входит объект моделирования.


		 [GetRubricatorDesc](Command/GetRubricatorDesc.htm)


		 Определение базы данных временных рядов, в которую входит
		 объект моделирования.


		 [ShowAdditionalAttributesDialog](Command/ShowAdditionalAttributesDialog.htm)
		 Открытие диалога для [задания
		 значений дополнительных атрибутов](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/AdditionalAttributes.htm).


		 [ShowDataMiningWizard](Command/ShowDataMiningWizard.htm)
		 Открытие инструмента «[Интеллектуальный
		 анализ данных](DataMining.chm::/DataMining_Title.htm)».


### Плагин Rds


Команды справочников НСИ:


		 Команда
		 Краткое описание


		 [EditDictionary](Command/Command_EditDictionary.htm)


		 Открытие справочника НСИ на редактирование.


		 [EditDictionaryAttribute](Command/EditDictionaryAttribute.htm)


		 Открытие диалога редактирования параметров атрибута справочника
		 НСИ.


		 [OpenDictionary](Command/Command_OpenDictionary.htm)


		 Открытие справочника НСИ на просмотр.


### Плагин Report


Команды инструмента «Отчёты»:


		 Команда
		 Краткое описание


		 [ChartExternLegendSetup](Command/ChartExternLegendSetup.htm)


		 Вывод стандартного диалога настройки параметров легенды, создаваемой
		 для диаграмм регламентного отчета.


		 [CreateFastReport](Command/CreateFastReport.htm)


		 Создание регламентного отчета на основе указанной базы данных
		 временных рядов.


		 [DataIslandSetup](Command/DataIslandSetup.htm)


		 Вызов стандартного диалога настройки параметров области данных.


		 [FormatConditionSetup](Command/FormatConditionSetup.htm)


		 Вызов стандартного диалога настройки параметров заданного условного
		 формата.


		 [FormatConditionsSetup](Command/Command_FormatConditionsSetup1.htm)


		 Вызов стандартного диалога настройки параметров условных форматов.


		 [FormulaIslandSetup](Command/FormulaIslandSetup.htm)


		 Вызов стандартного диалога настройки области формул.


		 [InsertSheetDialog](Command/InsertSheetDialog.htm)


		 Вызов стандартного диалога добавления листа.


		 [MapLegendSetup](Command/MapLegendSetup.htm)


		 Вызов стандартного диалога настройки параметров легенды карты,
		 расположенной на одном из листов регламентного отчета.


		 [MapSetup](Command/MapSetup.htm)


		 Вызов стандартного диалога настройки свойств карты, расположенной
		 на одном из листов регламентного отчета.


		 [MapTerritoryInfoSetup](Command/MapTerritoryInfoSetup.htm)


		 Вызов стандартного диалога настройки параметров расшифровки
		 территорий карты, расположенной на одном из листов регламентного
		 отчета.


		 [MoveCopySheet](Command/MoveCopySheet.htm)


		 Вызов стандартного диалога копирования/перемещения листов.


		 [NamedRangesSetup](Command/NamedRangesSetup.htm)


		 Вызов диалога настройки именованных диапазонов.


		 [ObjectProperties](Command/ObjectProperties.htm)


		 Вызов стандартного диалога настройки свойств объекта/объектов
		 листа.


		 [PerformSearch](Command/PerformSearch1.htm)


		 Вызов стандартного диалога поиска/замены в регламентном отчете.


		 [Scene3DSetup](Command/Scene3DSetup.htm)


		 Вызов стандартного диалога настройки параметров 3D-сцены.


		 [SetupSliceDimsTable](Command/SetupSliceDimsTable.htm)


		 Вызов стандартного диалога настройки измерений среза данных.


		 [SheetProperties](Command/SheetProperties.htm)


		 Вызов стандартного диалога настройки свойств листа.


		 [SheetProtection](Command/SheetProtection.htm)


		 Вызов стандартного диалога настройки защиты листа.


		 [ShowAttachmentsDialog](Command/ShowAttachmentsDialog.htm)


		 Вызов стандартного диалога для работы с вложениями ячейки.


		 [ShowBulkExportDialog](Command/ShowBulkExportDialog1.htm)


		 Вызов стандартного диалога пакетного экспорта регламентного
		 отчета.


		 [ShowBulkExportDialogEx](Command/ShowBulkExportDialogEx.htm)


		 Вызов стандартного диалога пакетного экспорта регламентного
		 отчета, с возможностью задания дополнительных параметров открытия
		 диалога.


		 [ShowBulkPrintDialog](Command/ShowBulkPrintDialog1.htm)


		 Вывод стандартного диалога настройки пакетной печати регламентного
		 отчета.


		 [ShowBulkPrintDialogEx](Command/ShowBulkPrintDialogEx.htm)


		 Вывод стандартного диалога настройки пакетной печати регламентного
		 отчета, с возможностью задания дополнительных параметров открытия
		 диалога.


		 [ShowDataAdapterDialog](Command/ShowDataAdapterDialog.htm)


		 Вывод стандартного диалога настройки адаптера данных для различных
		 элементов карты в регламентном отчете.


		 [ShowDependenciesDialog](Command/ShowDependenciesDialog.htm)


		 Вызов стандартного диалога настройки зависимостей.


		 [ShowExportPropSetup](Command/ShowExportPropSetup.htm)


		 Вызов диалога настройки параметров экспорта в задаче вычисления
		 регламентного отчета.


		 [ShowFormulaDialog](Command/ShowFormulaDialog.htm)


		 Вызов мастера функций регламентного отчета.


		 [ShowMapLayerSelectionDialog](Command/ShowMapLayerSelectionDialog.htm)


		 Вызов диалога для выбора [состава карты](UiReport.chm::/Desktop/Maps/Map_Structure.htm).


		 [ShowPrxControlPropDialog](Command/ShowPrxControlPropDialog.htm)


		 Вызов диалога настройки свойств элемента управления.


		 [ShowReporter](Command/Command_ShowReporter1.htm)


		 Открытие регламентного отчёта или создание нового отчёта, не
		 связанного с репозиторием.


		 [ShowScalePropsDialog](Command/ShowScalePropsDialog.htm)


		 Вызов стандартного диалога редактирования шкал регламентного
		 отчета.


		 [TableStyleSetup](Command/Command_TableStyleSetup1.htm)


		 Создание нового стиля таблицы и вызов стандартного диалога
		 настройки стиля.


		 [TableStylesSetup](Command/TableStylesSetup.htm)


		 Вызов стандартного диалога настройки стилей таблицы.


### Плагин Std


Команды навигатора объектов:


		 Команда
		 Краткое описание


		 [CreateCustomClass](Command/CreateCustomClass.htm)


		 Вызов диалога создания нового [пользовательского
		 класса](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm#create).


		 [EditCustomClass](Command/EditCustomClass.htm)


		 Вызов диалога редактирования существующего [пользовательского
		 класса](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/ObjectsClasses.htm#create).


		 [OpenLoginDialog](Command/OpenLoginDialog.htm)


		 Вызов диалога подключения к репозиторию.


		 [OpenNavigator](Command/Command_OpenNavigator.htm)


		 Открытие репозитория в навигаторе объектов.


		 [SelectSecSubject](Command/SelectSecSubject.htm)


		 Вызов стандартного диалога выбора субъектов безопасности.


		 [ShowFindObjects](Command/ShowFindObjects.htm)


		 Поиск объектов репозитория в соответствии с указанными параметрами
		 и вывод списка найденных объектов в навигаторе объектов.


		 [ShowMetabaseFolder](Command/ShowMetabaseFolder.htm)


		 Перевод фокуса в навигатор объектов и отображение содержимого
		 указанного объекта-контейнера.


		 [ShowMetabaseObject](Command/ShowMetabaseObject.htm)


		 Перевод фокуса в навигатор объектов и отображение указанного
		 объекта репозитория.


### Плагин Wsp


Команды инструмента «Рабочее пространство»:


		 Команда
		 Краткое описание


		 [ShowStyleDialog](Command/Command_ShowStyleDialog.htm)


		 Вызов стандартного диалога настройки формата объектов рабочего
		 пространства.


См. также:


[IUiCommandTarget](IUiCommandTarget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Методы для работы с формой ввода

Методы для работы с формой ввода
-


# Методы для работы с формой ввода


Ниже приведён синтаксис и описание методов, реализованных в модуле [UNIT_WEB_METHODS_INPUT_FORM](DataEntryFormsServices.htm)
 и предназначенных для управления формой ввода.


[![](../../Opened.gif)![](../../Closed.gif)Базовые методы
 для создания, управления и сохранения формы ввода](javascript:TextPopup(this))


			 Синтаксис метода
			 Описание


			 Public Function CreateDataEntryForm(name:
			 string; id: string; parentKey: integer): Integer;
			 Создание новой формы ввода.

Параметры:


				- name. Наименование
				 новой формы ввода.

				- id. Идентификатор
				 новой формы ввода.

				- parentKey.
				 Ключ родительского объекта, в рамках которого форма ввода
				 будет сохранена.


			 Public Sub SaveDataEntryForm(report: IPrxReport);
			 Сохранение изменений, внесённых в форму ввода.

Параметры:


				- report. Дочерний
				 отчёт формы ввода, открытый на редактирование.


			 Public Sub RefreshDataSources(report: IPrxReport);
			 Переоткрытие источников данных формы ввода.

Параметры:


				- report. Дочерний
				 отчёт формы ввода, открытый на редактирование.


			 Public Sub SaveDataChanges(report:IPrxReport);
			 Сохранение данных формы ввода.

Параметры:


				- report. Дочерний
				 отчёт формы ввода, открытый на редактирование.


			 Public Sub RejectDataChanges(report: IPrxReport);
			 Отмена изменений в данных формы ввода.

Параметры:


				- report. Дочерний
				 отчёт формы ввода, открытый на редактирование.


			 Public Sub SetRefreshOnEdit(report: IPrxReport;
			 refreshOnEdit: boolean);
			 Установка значения флажка «Обновлять при открытии на редактирование».


Параметры:


				- report. Дочерний
				 отчёт формы ввода, открытый на редактирование.

				- refreshOnEdit.
				 Значение флажка (True/False).


[![](../../Opened.gif)![](../../Closed.gif)Работа с параметрами](javascript:TextPopup(this))


			 Синтаксис метода
			 Описание


			 Public Function GetParametersMetadata(report:
			 IPrxReport; needFullJson: Boolean = False; key: Integer =
			 -1): String;
			 Получение метаданных параметра в формате JSON.

Параметры:


				- report.
				 Отчёт формы ввода, с которой производится операция.

				- needFullJson.
				 Необязательный параметр, определяющий необходимости получения
				 расширенной информации о параметрах. Если установить значение
				 True, то также будет получена информация об атрибутах
				 и связях параметров.

				- key. Необязательное
				 значение, определяющее ключ параметр, для которого будут
				 получены метаданные. По умолчанию возвращаются метаданные
				 всех параметров.


			 Public Function CreateParameter(report: IPrxReport):
			 String;
			 Создание нового параметра для формы ввода.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция.


			 Public Function RemoveParameter(report: IPrxReport;
			 key: Integer): Boolean;
			 Удаление параметра формы ввода.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- key. Ключ удаляемого
				 параметра.


			 Public Sub SwapParameters(report: IPrxReport;
			 key1: integer; key2: integer);
			 Смена мест двух параметров.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция.

				- key1. Ключ
				 первого параметра;

				- key2.
				 Ключ второго параметра.


			 Public Function ApplyParametersChanges(report:
			 IPrxReport): String;
			 Применение изменений параметров к форме ввода.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция.


			 Public Sub CancelParametersChanges(report:
			 IPrxReport);
			 Отмена изменений, внесённых в метаданные параметров.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция.


			 Public Sub SetParameterName(report: IPrxReport;
			 parameterKey: Integer; name: String);
			 Установка наименования параметра.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра;

				- name. Новое
				 наименование параметра.


			 Public Sub SetParameterDictionary(report:
			 IPrxReport; parameterKey: Integer; dictionaryKey: Integer);
			 Установка справочника для параметра, если для задания значения
			 используется раскрывающийся список справочник.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра;

				- dictionaryKey.
				 Ключ устанавливаемого справочника репозитория.


			 Public Sub SetParameterSheets(report: IPrxReport;
			 parameterKey: Integer; sheets: String);
			 Установка листов, на которые будет распространяться действие
			 параметра.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра;

				- sheets. Массив
				 ключей листов, например «[1,2,3]». Если среди ключей есть
				 значение «-1», то будут выбраны все листы независимо от
				 того, какие остальные значения. Если лист один, то
				 допускается числовой формат, например «2».


			 Public Sub SetParameterSelectionType(report:
			 IPrxReport; parameterKey: Integer; selectionType: Integer);
			 Установка типа отметки для параметра.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра;

				- selectionType.
				 Тип отметки. Допустимые значения:


					- 0. Единичная
					 обязательная отметка;

					- 1. Множественная
					 отметка;

					- 2. Единичная
					 необязательная отметка.


			 Public Sub SetParameterUseDefaultValue(report:
			 IPrxReport; parameterKey: Integer; useDefaultValue: Boolean);
			 Установка для параметра флажка «Использовать ли значение
			 по умолчанию при пустой отметке».

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра;

				- useDefaultValue.
				 Значение флажка (True/False).


			 Public Function GetParameterDimensionInstance(report:
			 IPrxReport; parameterKey: Integer): IDimInstance;
			 Получение моникёра справочника, используемого для
			 задания значения параметра.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра.


			 Public Function GetParameterDefaultValuesSelection(report:
			 IPrxReport; parameterKey: Integer): IDimSelection;
			 Получение отметки для значения по умолчанию.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция.

				- parameterKey.
				 Ключ параметра.


			 Public Sub SetParametersMap(Report: IPrxReport;
			 ParameterKey: integer; SJson: String);
			 Установка коллекции связей параметров вложенных объектов.


Параметры:


				- Report. Отчёт
				 формы ввода, с которой производится операция;

				- ParameterKey.
				 Ключ параметра, основанного на параметрическом справочнике,
				 для которого необходимо настроить связи;

				- SJson. JSON-структура,
				 содержащая информацию о способе задания значений параметров
				 справочника.


			 Public Sub SetParameterAltHierarchyFixed(report:
			 IPrxReport; parameterKey: Integer; hierarchyDictKey: Integer);
			 Установка фиксированной альтернативной иерархии для параметра.


Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра, основанного на справочнике;

				- hierarchyDictKey.
				 Ключ справочника, на базе которого для справочника параметра
				 создана альтернативная иерархия.


			 Public Sub SetParameterAltHierarchyFromParameter(report:
			 IPrxReport; parameterKey: Integer; hierarchyParameterKey:
			 Integer; hierarchyParameterAttributeKey: Integer);
			 Установка динамической альтернативной иерархии для параметра.


Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра, основанного на справочнике;

				- hierarchyParameterKey.
				 Ключ параметра, который будет использоваться для выбора
				 альтернативной иерархии;

				- hierarchyParameterAttributeKey.
				 Ключ атрибута, в значениях которого хранятся ключи справочников,
				 являющихся альтернативными иерархиями.


			 Public Sub ClearParameterAltHierarchy(report:
			 IPrxReport; parameterKey: Integer);
			 Сброс использования альтернативной иерархии у параметра
			 формы ввода.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- parameterKey.
				 Ключ параметра, для которого необходимо сбросить использование
				 альтернативной иерархии.


			 Public Function ApplyParametersChanges(report:
			 IPrxReport): String;
			 Применяет изменения параметров к форме ввода.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция.


[![](../../Opened.gif)![](../../Closed.gif)Работа с расширенными
 фильтрами](javascript:TextPopup(this))


	Все методы в своей сигнатуре имеют параметр locationInfo,
	 в котором передаётся информация о местонахождении расширенных фильтров.
	 Данный параметр имеет следующий формат:


		- для общих измерений табличной области: «1.<Идентификатор
		 табличной области>.<Ключ измерения>», например
		 «1.AREA1.123»;


		- для частных измерений табличной области: «2.<Идентификатор
		 табличной области>.<Идентификатор показателя>.<Ключ
		 измерения>», например «2.AREA1.3.123»;


		- для параметра: «3.<Ключ
		 параметра>», например "3.4";


		- для атрибутной области: «4.<Идентификатор
		 атрибутной области>», например «4.AREA2».


	Методы SetAdvancedFilterCondition
	 и SetAdvancedFilterType возвращают
	 метаданные о столбце «Значение», которые имеют следующий формат:


		- ControlType. Тип
		 элемента управления. Допустимые значения:


			- 0. Элемент управления
			 отсутствует (None);


			- 1. Элемент управления,
			 соответствующий типу значения (ControlByType);


			- 2. Раскрывающийся
			 список справочник (DimCombo). Требуется отдельно запрашивать
			 экземпляр справочника методом GetAdvancedFilterValueInstance;


			- 3: Раскрывающийся
			 список значений (TreeCombo).


		- MultiSelect. Признак
		 множественной отметки. Используется для типа элемента управления
		 - Раскрывающийся список справочник;


		- DbType. Тип данных,
		 по которому необходимо создать элемент управления. Используется
		 для типа элемента управления, соответствующего типу значения:


			- 0: Нет данных
			 (NoData);


			- 1: Символьные
			 данные (String);


			- 2: Целочисленные
			 значения (Integer);


			- 3: Вещественные
			 значения (Float);.


			- 4: Дата и время
			 (DateTime);


			- 6: Логические
			 данные (Boolean);


			- 7: Дата без
			 времени (Date);


			- 8: Десятичные
			 значения высокой точности (Decimal).


		- TreeComboElements.
		 Элементы дерева, используемые элементов управления - Раскрывающийся
		 список значений;


		- ExpandedCombo. Признак
		 развёрнутости элементов, имеющих дочерние элементы, по умолчанию.
		 Используется для элемента управления - Раскрывающийся список значений.


		- DisplayValueFormat.
		 Тип формирования отображаемого значения в дереве в свёрнутом виде.
		 Используется для элемента управления - Раскрывающийся список значений:


			- 0: По умолчанию
			 (Только текст выбранной вершины);


			- 1: Составное
			 значение по иерархии с разделителем ".".


			 Синтаксис метода
			 Описание


			 Public Function GetAdvancedFiltersMetadata(report:
			 IPrxReport; locationInfo: String): String;
			 Возврат метаданных расширенных фильтров в формате JSON.


Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров.


			 Public Function GetAdvancedFilterMetadata(report:
			 IPrxReport; locationInfo: String; filterKey: Integer): String;
			 Возврат метаданных расширенного фильтра в формате JSON.


Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров.

				- filterKey.
				 Ключ расширенного фильтра.


			 Public Function GetAdvancedFilterControlsMetadata(report:
			 IPrxReport; locationInfo: String; filterKey: Integer): String;
			 Возврат метаданных расширенного фильтра для построения
			 элемента управления в формате JSON.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ расширенного фильтра.


			 Public Function AddAdvancedFilter(report:
			 IPrxReport; locationInfo: String): String;
			 Добавление расширенного фильтра в коллекцию и возврат метаданных
			 нового элемента.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров.


			 Public Sub RemoveAdvancedFilter(report: IPrxReport;
			 locationInfo: String; filterKey: Integer);
			 Удаление расширенного фильтра из коллекции.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ расширенного фильтра.


			 Public Function ApplyAdvancedFiltersChanges(report:
			 IPrxReport; locationInfo: String): String;
			 Применение изменений расширенных фильтров и возврат результата
			 в формате JSON.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров.


			 Public Sub CancelAdvancedFiltersChanges(report:
			 IPrxReport; locationInfo: String);
			 Отмена изменений расширенных фильтров.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров.


			 Public Function SetAdvancedFilterAttribute(report:
			 IPrxReport; locationInfo: String; filterKey: Integer; attributeIdent:
			 String): String;
			 Установка значения атрибута в расширенном фильтре и возврат
			 метаданных о столбце «Значение».

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ фильтра, с которым производится операция;

				- attributeIdent.
				 Новое значение атрибута.


			 Public Function SetAdvancedFilterCondition(report:
			 IPrxReport; locationInfo: String; filterKey: Integer; condition:
			 Integer): String;
			 Установка условия в расширенном фильтре.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ фильтра, с которым производится операция;

				- condition.
				 Новое условие.


			Варианты условий:


				- 0.
				 Равно;

				- 1. Не равно;

				- 2.
				 Больше;

				- 3. Меньше;

				- 4. Больше или
				 равно;

				- 5. Меньше или
				 равно;

				- 6. Входит;

				- 7. Не входит;

				- 8. Начинается
				 с;

				- 9. Заканчивается
				 на;

				- 10. Содержит;

				- 11. Не содержит.


			Возвращаемое значение: метаданные о столбце «Значение».


			 Public Function SetAdvancedFilterType(report:
			 IPrxReport; locationInfo: String; filterKey: Integer; type:
			 Integer): String;
			 Установка типа в расширенном фильтре.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ фильтра, с которым производится операция;

				- type. Новое
				 значение типа.


			Варианты типов:


				- 0. По значению;

				- 1.
				 По параметру;

				- 2. По атрибуту.


			Возвращаемое значение: метаданные о столбце «Значение».


			 Public Sub SetAdvancedFilterNotConsiderEmpty(report:
			 IPrxReport; locationInfo: String; filterKey: Integer; notConsiderEmpty:
			 Boolean);
			 Установка флага «Не учитывать пустые» в расширенном фильтре.


Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ фильтра, с которым производится операция;

				- notConsiderEmpty.
				 Новое значение флага (True/False).


			 Public Sub SetAdvancedFilterNotFilterFromEmptyValues(report:
			 IPrxReport; locationInfo: String; filterKey: Integer; notFilterFromEmptyValues:
			 Boolean);
			 Установка флага «Не фильтровать от пустых значений» в расширенном
			 фильтре.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ фильтра, с которым производится операция;

				- notFilterFromEmptyValues.
				 Новое значение флага (True/False).


			 Public Sub SetAdvancedFilterValue(report:
			 IPrxReport; locationInfo: String; filterKey: Integer; value:
			 String);
			 Установка значения расширенного фильтра.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ фильтра, с которым производится операция;

				- value. Новое
				 значение значения в виде массива строковых ключей. Например
				 "[""1"", ""2""]"
				 или "[""PARAM1_0""]". Если
				 элемент только один, то допускается единичный формат.
				 Например, "2" или "PARAM1_0".


			 Public Function GetAdvancedFilterValueInstanceSelection(report:
			 IPrxReport; locationInfo: String; filterKey: Integer): IDimSelection;
			 Возвращает отметку справочника для элемента управления
			 с типом - Раскрывающийся список справочник (DimCombo).

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- locationInfo.
				 Информация о местонахождении расширенных фильтров;

				- filterKey.
				 Ключ фильтра, с которым производится операция.


См. также:


[Работа
 с формами ввода](DataEntryFormsServices.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

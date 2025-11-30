# Методы для работы с табличной областью

Методы для работы с табличной областью
-


# Методы для работы с табличной областью


Ниже приведён синтаксис и описание методов, реализованных в модуле [UNIT_WEB_METHODS_TABLE_AREA](DataEntryFormsServices.htm)
 и предназначенных для работы с табличной областью формы ввода.


[![](../../Opened.gif)![](../../Closed.gif)Работа с табличной
 областью](javascript:TextPopup(this))


			 Синтаксис метода
			 Описание


			 Public Sub SetTableAreaDimensionAttributes(report:
			 IPrxReport; areaId: string; dimKey: integer; sAttrKeyList:
			 string);
			 Задание списка атрибутов, значения которых будут отображаться
			 для элементов общих измерений.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.

				- dimKey. Ключ
				 измерения.

				- sAttrKeyList.
				 Ключи атрибутов. Ключи в списке разделяются символом «;».


			 Public Sub SetTableAreaIndicatorAttributes(report:
			 IPrxReport; areaId: string; indUnical: integer; sAttrKeyList:
			 string);
			 Задание списка атрибутов, значения которых будут отображаться
			 для показателей.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- indUnical.
				 Уникальный ключ показателя.

				- sAttrKeyList.
				 Ключи атрибутов. Ключи в списке разделяются символом «;».


			 Public Sub TransposeTableAreaWithGrid(report:
			 IPrxReport; areaId: String);
			 Транспонирование табличной области данных и применение
			 изменений к отчёту формы ввода.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.


			 Public Sub ChangeTableAreaTranspose(report:
			 IPrxReport; areaId: string);
			 Транспонирование модели табличной области данных.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.


			 Public Sub SetTableAreaShowName(report: IPrxReport;
			 areaId: string; showName: Boolean);
			 Установка значения флажка «Отображать наименование».

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.

				- showName. Значение
				 флажка (True/False).


			 Public Sub SetTableAreaShowTitles(report:
			 IPrxReport; areaId: string; showTitles: Boolean);
			 Установка значения флажка «Всегда отображать заголовки».


Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.

				- showTitles.
				 Значение флажка (True/False).


			 Public Sub SetTableAreaMultiLevelTopHeader(report:
			 IPrxReport; areaId: string; value: boolean);
			 Включение/выключение использования многоуровневой шапки.


Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.

				- value. Значение
				 флажка (True/False).


			 Public Sub SetTableAreaRowBehaviour(report:
			 IPrxReport; areaId: string; value: emTabRowInsert);
			 Поведение строк при увеличении табличной области.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.

				- value. Значение
				 перечисления emTabRowInsert:


					- 0 (fixed).
					 Фиксированные.

					- 1 (merge).
					 Захват смежных строк.

					- 2 (insert).
					 Вставка новых строк/столбцов.


			 Public Sub SetTableAreaColumnBehaviour(report:
			 IPrxReport; areaId: string; value: emTabRowInsert);
			 Поведение столбцов при увеличении табличной области.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.

				- value. Значение
				 перечисления emTabRowInsert:


					- 0 (fixed).
					 Фиксированные.

					- 1 (merge).
					 Захват смежных строк.

					- 2 (insert).
					 Вставка новых строк/столбцов.


			 Public Function DeleteDimensionElement(Report:
			 IPrxReport; AreaId: String; DimensionKey: Integer; Row: Integer;
			 Column: Integer): Boolean;
			 Удаление элемента измерения по координате ячейки в табличной
			 области данных.

Параметры:


				- Report:
				 Отчёт формы ввода, с которой производится операция;

				- AreaId. Идентификатор
				 табличной области;

				- DimensionKey.
				 Ключ измерения;

				- Row. Номер
				 строки ячейки с удаляемым элементом;

				- Column. Номер
				 столбца ячейки с удаляемым элементом.


			 Public Sub SetInputAreaName(report: IPrxReport;
			 areaId: String; name: String);
			 Переименование табличной области данных.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- name.
				 Устанавливаемое наименование.


			 Public Sub SetTableAreaShowParams(report:
			 IPrxReport; areaId: String; value: boolean);
			 Включение/выключение отображения элементов параметров,
			 связанных с измерениями.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- value. Значение
				 флажка (True/False).


			 Public Sub SetTableAreaShowOnlyFixedParams(report:
			 IPrxReport; areaId: string; value: boolean);
			 Включение/выключение отображения элементов параметров,
			 связанных с только с фиксированными измерениями.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- value. Значение
				 флажка (True/False).


			 Public Sub SetTableAreaReadOnly(report: IPrxReport;
			 areaId: string; value: boolean);
			 Разрешение/запрет редактирования данных в табличной области.


Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- value. Значение
				 флажка (True/False).


			 Public Sub SetTableAreaShowEvalCells(report:
			 IPrxReport; areaId: string; value: boolean);
			 Включение/выключение отображения пиктограммы для вычисляемых
			 ячеек.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- value. Значение
				 флажка (True/False).


			 Public Sub SetTableAreaShowAccessCells(report:
			 IPrxReport; areaId: string; value: boolean);
			 Включение/выключение отображения пиктограммы прав доступа
			 для ячеек.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- value. Значение
				 флажка (True/False).


			 Public Sub SetTableAreaIndicatorReadOnly(report:
			 IPrxReport; areaId: string; indUnical: integer; value: boolean);
			 Разрешение/запрет редактирования данных по определённому
			 показателю.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- indUnical.
				 Уникальный ключ показателя;

				- value. Значение
				 флажка (True/False).


			 Public Sub RenameTableAreaIndicator(report:
			 IPrxReport; areaId: string; indUnical: integer; value: String);
			 Переименование показателя.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- indUnical.
				 Уникальный ключ показателя;

				- value. Новое
				 наименование показателя.


			 Public Sub SetTableAreaGroupSettings(report:
			 IPrxReport; areaId: String; sJson: String);
			 Изменение настроек группировки измерений боковика.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- sJson. Настройки
				 группировки в JSON-формате.


			Формат JSON-структуры:


{
  "GroupSettings": [
    {
      "DimensionKey": 107570,
      "Attributes": [2],
      "CreateElemForEmptyAttr": true,
      "LevelNumber": -1
    },
    {
      "DimensionKey": 103480,
      "Attributes": [2, 3],
      "CreateElemForEmptyAttr": false,
      "LevelNumber": 1
    }
  ]
}
			Где:


				- DimensionKey
				 - Ключ измерения, для которого задаются настройки;

				- Attributes
				 - Коллекция ключей атрибутов, по значениям которых будет
				 осуществляться группировка элементов измерения;

				- CreateElemForEmptyAttr
				 - Признак создания группировочного элемента при
				 пустых значениях атрибутов;

				- LevelNumber
				 - Номер уровня измерения, для элементов которого будет
				 включена группировка. При значении «-1» группировка осуществляется
				 на всех уровнях.


			 Public Sub SetFilterIndicator(report: IPrxReport;
			 areaId: String; unicalFilterIndicator: Integer = -1);
			 Установка показателя табличной области в качестве фильтра.


Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unicalFilterIndicator.
				 Уникальный ключ показателя. При значении -1 фильтр снимается.


			 Public Sub SetTableAreaAltHierarchyFixed(report:
			 IPrxReport; areaId: String; indUnical: Integer; dimKey: Integer;
			 hierarchyDictKey: Integer);
			 Установка фиксированной альтернативной иерархии для измерения
			 показателя табличной области.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- indUnical.
				 Уникальный ключ показателя. Для общего измерения передаётся
				 значение -1;

				- dimKey. Ключ
				 частного измерения показателя;

				- hierarchyDictKey.
				 Ключ справочника, на базе которого для измерения dimKey создана альтернативная
				 иерархия.


			 Public Sub SetTableAreaAltHierarchyFromParameter(report:
			 IPrxReport; areaId: String; indUnical: Integer; dimKey: Integer;
			 hierarchyParameterKey: Integer; hierarchyParameterAttributeKey:
			 Integer);
			 Установка динамической альтернативной иерархии для измерения
			 показателя табличной области.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- indUnical.
				 Уникальный ключ показателя. Для общего измерения передаётся
				 значение -1;

				- dimKey. Ключ
				 частного измерения показателя;

				- hierarchyParameterKey.
				 Ключ параметра, который будет использоваться для выбора
				 альтернативной иерархии;

				- hierarchyParameterAttributeKey.
				 Ключ атрибута, в значениях которого хранятся ключи справочников,
				 являющихся альтернативными иерархиями для dimKey.


			 Public Sub ClearTableAreaAltHierarchy(report:
			 IPrxReport; areaId: String; indUnical: Integer; dimKey: Integer);
			 Сброс использования альтернативной иерархии у измерения
			 показателя табличной области.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- indUnical.
				 Уникальный ключ показателя. Для общего измерения передаётся
				 значение -1;

				- dimKey. Ключ
				 частного измерения показателя.


			 Public Sub ApplyAreaToReport(report: IPrxReport;
			 areaId: String);
			 Применяет изменения табличной области к форме ввода.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.


			 Public Function AddTableAreaDimension(report:
			 IPrxReport; areaId: String; dimKey: Integer; place: Integer;
			 indUnical: Integer = -1): boolean;
			 Добавление измерения в табличную область.


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- dimKey. Ключ
				 измерения;

				- place. Область,
				 в которую необходимо переместить измерения:


					- 0. Боковик;

					- 1. Шапка;

					- 2. Фиксированные.


				- indUnical.
				 Ключ показателя, с измерения которого будут скопированы
				 настройки.


			 Public Sub SetTableAreaDimPlace(report: IPrxReport;
			 areaId: String; dimKey: Integer; place: Integer);
			 Перемещение измерения между боковиком/шапкой/фиксированной
			 областью.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- dimKey. Ключ
				 измерения;

				- place. Область,
				 в которую необходимо переместить измерения:


					- 0. Боковик;

					- 1. Шапка;

					- 2. Фиксированные.


			 Public Sub SetTableAreaFixAggrType(report:
			 IPrxReport; areaId: String; aggrType: integer);
			 Установка метода агрегации данных для измерений, расположенных
			 в фиксированной области.

Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- aggrType. Метод
				 агрегации. В качестве значения указывается одно из числовых
				 значений, соответствующих элементам перечисления [PivotAggregationOperation](KePivot.chm::/Enums/PivotAggregationOperation.htm).


			 Public Sub SetTableAreaIndicatorDimPlace(report:
			 IPrxReport; areaId: String; indUnical: Integer; dimKey: Integer;
			 place: Integer);
			 Перемещения измерений между частными и фиксированными частными.


Параметры:


				- report. Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- indUnical.
				 Ключ показателя;

				- dimKey. Ключ
				 измерения;

				- place. Область,
				 в которую необходимо переместить измерения:


					- 3. Частные;

					- 4. Фиксированные
					 частные.


[![](../../Opened.gif)![](../../Closed.gif)Работа с алгоритмами
 расчёта](javascript:TextPopup(this))


			 Синтаксис метода
			 Описание


			 Public Function GetTableAreaCalculationAlgorithmAllMetadata(report:
			 IPrxReport; areaId: String): String;
			 Получение метаданных коллекции алгоритмов расчёта, которые
			 настроены для работы с табличной областью.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.


			 Public Function GetTableAreaCalculationAlgorithmMetadata(report:
			 IPrxReport; areaId: String; unical: Integer): String;
			 Получение метаданных алгоритма расчёта, который настроен
			 для работы с табличной областью.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта.


			 Public Function AddTableAreaCalculationAlgorithm(report:
			 IPrxReport; areaId: String; objectKey: Integer; type: Integer):
			 String;
			 Добавление алгоритма расчёта в коллекцию алгоритмов табличной
			 области.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- objectKey.
				 Ключ алгоритма расчёта в репозитории;

				- type. Вариант
				 использования алгоритма расчёта в табличной области. Возможные
				 значения:


					- 1. На сохранение.

					- 2. На изменение.


			 Public Sub RemoveTableAreaCalculationAlgorithm(report:
			 IPrxReport; areaId: String; unical: Integer);
			 Удаление алгоритма расчёта из коллекции алгоритмов табличной
			 области.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта.


			 Public Sub MoveTableAreaCalculationAlgorithm(report:
			 IPrxReport; areaId: String; oldIndex, newIndex: Integer);
			 Перемещение алгоритмов расчёта внутри коллекции.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- oldIndex. Индекс,
				 из которой необходимо переместить алгоритм расчёта;

				- newIndex. Индекс,
				 в которую необходимо переместить алгоритм расчёта.


			 Public Function GetTableAreaCalculationAlgorithmControlStyle(report:
			 IPrxReport; areaId: String; unical: Integer): ITabCellStyle;
			 Получение стиля оформления, применяемого к ячейкам, в которых
			 сработал контроль.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта.


			 Public Sub SetTableAreaCalculationAlgorithmBlockSaveData(report:
			 IPrxReport; areaId: String; unical: Integer; blockSaveData:
			 Boolean);
			 Установка флажка «Блокировать сохранение изменённых данных
			 в табличной области при сработавшем контроле».

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- blockSaveData.
				 Значение флажка (True/False).


			 Public Sub SetTableAreaCalculationAlgorithmDisabled(report:
			 IPrxReport; areaId: String; unical: Integer; disabled: Boolean);
			 Включение/отключение использования алгоритма расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- disabled. Признак
				 использования алгоритма расчёта (True/False).


			 Public Sub SetTableAreaCalculationAlgorithmExtendLoadSelection(report:
			 IPrxReport; areaId: String; unical: Integer; extendLoadSelection:
			 Boolean);
			 Установка/снятие флажка «Расширять отметку».

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- extendLoadSelection.
				 Значение флажка (True/False).


			 Public Sub SetTableAreaCalculationAlgorithmSaveDataOption(report:
			 IPrxReport; areaId: String; unical: Integer; saveDataOption:
			 Boolean);
			 Установка/снятие флажка «Сохранять данные».

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- saveDataOption.
				 Значение флажка (True/False).


			 Public Sub SetTableAreaCalculationAlgorithmCalcPeriod(report:
			 IPrxReport; areaId: String; unical: Integer; calcPeriod: Integer);
			 Установка области, к которой применяется алгоритм расчёта.


Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- calcPeriod.
				 Область расчёта. Допустимые значения:


					- 1. Пересечение
					 отметок алгоритма расчёта и табличной области данных.

					- 2. Период
					 расчёта из алгоритма.

					- 3. Вся
					 отметка из алгоритма расчёта.


			 Public Sub SetTableAreaCalculationAlgorithmParameterType(report:
			 IPrxReport; areaId: String; unical: Integer; algorithmParameterId:
			 String; type: Integer);
			 Определяет тип значений, которые будут передаваться параметру
			 алгоритма расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- algorithmParameterId.
				 Идентификатор параметра алгоритма расчёта;

				- calcPeriod.
				 Тип значений. Допустимые значения:


					- 1. Значение
					 параметра или атрибута параметра формы ввода.

					- 2. Константное
					 значение.

					- 3. Отметка
					 измерения с изменёнными данными.


			 Public Sub SetTableAreaCalculationAlgorithmParameterFormParameterId(report:
			 IPrxReport; areaId: String; unical: Integer; algorithmParameterId:
			 String; formParameterId: String);
			 Определяет параметра формы ввода, который будет сопоставлен
			 с параметром алгоритма расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- algorithmParameterId.
				 Идентификатор параметра алгоритма расчёта;

				- formParameterId.
				 Идентификатор параметра формы ввода.


			 Public Sub SetTableAreaCalculationAlgorithmParameterFormParameterAttributeId(report:
			 IPrxReport; areaId: String; unical: Integer; algorithmParameterId:
			 String; formParameterAttributeId: String);
			 Определяет атрибут параметра формы ввода, который будет
			 сопоставлен с параметром алгоритма расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- algorithmParameterId.
				 Идентификатор параметра алгоритма расчёта;

				- formParameterAttributeId.
				 Идентификатор атрибута параметра формы ввода.


			 Public Sub SetTableAreaCalculationAlgorithmParameterSelectionMode(report:
			 IPrxReport; areaId: String; unical: Integer; algorithmParameterId:
			 String; selectionMode: Integer);
			 Определяет атрибут параметра формы ввода, который будет
			 сопоставлен с параметром алгоритма расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- algorithmParameterId.
				 Идентификатор параметра алгоритма расчёта;

				- selectionMode.
				 Способ отметки. Допустимые значения:


					- 0.
					 Отмеченные элементы.

					- 1. Первый
					 элемент из отмеченных.

					- 2. Последний
					 элемент из отмеченных.

					- 3. Отмеченные
					 элементы + непосредственные дочерние элементы.

					- 4. Все
					 дочерние элементы рекурсивно.

					- 5. Только
					 непосредственные дочерние элементы без отмеченных
					 родительских элементов.

					- 6.
					 Все дочерние элементы рекурсивно без отмеченных родительских
					 элементов.


			 Public Sub SetTableAreaCalculationAlgorithmParameterDictSchemaId(report:
			 IPrxReport; areaId: String; unical: Integer; algorithmParameterId:
			 String; dictSchemaId: String);
			 Определяет схему отметки, которая будет применяться к элементам
			 справочника, связанного с параметром алгоритма расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- algorithmParameterId.
				 Идентификатор параметра алгоритма расчёта;

				- dictSchemaId.
				 Идентификатор схемы отметки.


			 Public Sub SetTableAreaCalculationAlgorithmParameterValue(report:
			 IPrxReport; areaId: String; unical: Integer; algorithmParameterId:
			 String; value: String);
			 Значение, передаваемое параметру алгоритма расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- algorithmParameterId.
				 Идентификатор параметра алгоритма расчёта;

				- value. Передаваемое
				 значение (ключ элемента или ключ измерения).


			 Public Function GetTableAreaCalculationAlgorithmParameterDictionarySelection(report:
			 IPrxReport; areaId: String; unical: Integer; algorithmParameterId:
			 String): IDimSelection;
			 Возвращает отметку для построения дерева с элементами измерения
			 для параметра алгоритма расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- algorithmParameterId.
				 Идентификатор параметра алгоритма расчёта.


			 Public Sub SetTableAreaCalculationAlgorithmMapInfoFormKey(report:
			 IPrxReport; areaId: String; unical: Integer; sourceKey: Integer;
			 formKey: Integer);
			 Определяет ключ формы ввода, связываемой с алгоритмом расчёта
			 для расшифровки формул.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- sourceKey.
				 Ключ источника, для которого привязывается форма;

				- formKey. Ключ
				 привязываемой формы ввода.


			 Public Sub SetTableAreaCalculationAlgorithmMapParamInfoThisFormParameterId(report:
			 IPrxReport; areaId: String; unical: Integer; sourceKey: Integer;
			 linkedFormParameterId: String; thisFormParameterId: String);
			 Определяет идентификатор параметра текущей формы ввода,
			 привязываемый к форме ввода, которая связана с алгоритмом
			 расчёта.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- sourceKey.
				 Ключ источника, для которого привязывается форма;

				- linkedFormParameterId.
				 Идентификатор параметра привязываемой формы ввода.

				- thisFormParameterId.
				 Идентификатор параметра текущей формы ввода.


			 Public Sub ClearTableAreaCalculationAlgorithmMapInfoForm(report:
			 IPrxReport; areaId: String; unical: Integer; sourceKey: Integer);
			 Отвязывает форму, которая используется для расшифровки
			 формы.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- unical. Уникальный
				 идентификатор алгоритма расчёта;

				- sourceKey.
				 Ключ источника, для которого отвязывается форма.


			 Public Function GetParameterAttributesTreeStructureWithKeys(report:
			 IPrxReport): String;
			 Возвращает структуру дерева параметров и их атрибутов.
			 В качестве ключей узлов дерева использованы ключи параметров
			 и атрибутов.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция.


			 Public Function GetParameterAttributesTreeStructureWithIdentifiers(report:
			 IPrxReport): String;
			 Возвращает структуру дерева параметров и их атрибутов.
			 В качестве ключей узлов дерева использованы идентификаторы
			 параметров и атрибутов.

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция.


			 Public Sub SetTableAreaCalculationAlgorithmsUpdateAfterSave(report:
			 IPrxReport; areaId: String; updateAfterSave: Boolean);
			 Установка/снятие флажка «Обновлять табличную область после
			 сохранения данных».

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области;

				- updateAfterSave.
				 Значение флажка (True/False).


			 Public Function GetTableAreaCalculationAlgorithmsUpdateAfterSave(report:
			 IPrxReport; areaId: String): Boolean;
			 Получение текущего состояния флажка «Обновлять табличную
			 область после сохранения данных».

Параметры:


				- report: Отчёт
				 формы ввода, с которой производится операция;

				- areaId. Идентификатор
				 табличной области.


[![](../../Opened.gif)![](../../Closed.gif)Работа
 с параметрами](javascript:TextPopup(this))


			 Синтаксис метода
			 Описание


			 Public Sub SetTableAreaParametersMap(Report:
			 IPrxReport; ParameterKey: integer; SJson: String);
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


			Формат JSON-структуры:


{
 "DefDimensions": [
  {
   "Key": 1261270,
   "ParametersMap": [
    {
     "ParameterId": "DICT_PARAM_INTEGER",
     "Type": 1,
     "Value": null,
     "DataType": 2,
     "Attribute": {
      "AttributeKey": 1,
      "ParameterId": "PARAM0"
     }
    },...
   ]
  }
 ],
 "DefIndicators": [
  {
   "Unical": 1,
   "ParametersMap": [
    {
     "ParameterId": "CUBE_PARAM_INTEGER1",
     "Type": 1,
     "Value": null,
     "DataType": 2,
     "Attribute": {
      "AttributeKey": 1,
      "ParameterId": "PARAM0"
     }
    },...
   ]
  }
 ]
}
			Где:


				- DefDimensions
				 и DefIndicators
				 - Разделы привязки параметров измерений и показателей
				 соответственно;

				- Key - Ключ
				 измерения, в основе которого лежит параметрический справочник;

				- ParametersMap
				 - Раздел с коллекцией настроек привязок параметров;

				- ParameterId
				 - Идентификатор параметра справочника;

				- Type - Тип
				 связи параметра. Допустимые значения:


					- 0 - Фиксированное значение для параметра;

					- 1 - Передавать значение атрибута параметра формы
					 ввода.


				- Value - Фиксированное
				 значение, передаваемое в параметр. Задаётся, если Type=0;

				- DataType -
				 Тип данных передаваемых значений. Устанавливаемое значение
				 соответствует числовому значению одного из элементов перечисления
				 [DbDataType](Dal.chm::/Enums/DbDataType.htm),
				 реализованного в Fore;

				- Attribute -
				 Раздел с привязкой к атрибуту параметра формы ввода. Задаётся,
				 если Type=1;


					- AttributeKey
					 - Ключ атрибута параметра. Если раздел Attribute
					 не формируется, то указывается -1;

					- ParameterId
					 - Идентификатор параметра формы ввода. Если раздел
					 Attribute
					 не формируется, то указывается пустая строка.


См. также:


[Работа
 с формами ввода](DataEntryFormsServices.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

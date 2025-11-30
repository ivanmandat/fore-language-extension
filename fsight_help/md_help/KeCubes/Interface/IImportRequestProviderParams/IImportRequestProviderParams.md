# IImportRequestProviderParams

IImportRequestProviderParams
-


# IImportRequestProviderParams


Сборка: Cubes;


## Описание


Интерфейс IImportRequestProviderParams
 используется для настройки параметров импорта временных рядов из источника
 данных (кроме базы данных временных рядов).


## Иерархия наследования


           IImportRequestProviderParams


## Комментарии


Для получения параметров импорта временных рядов из источника данных
 используйте свойство [IImportRequestDefinition.ProviderParams](../IImportRequestDefinition/IImportRequestDefinition.ProviderParams.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoPeriod](IImportRequestProviderParams.AutoPeriod.htm)


		 Свойство AutoPeriod
		 возвращает параметры периода импорта показателей.


		 ![](../../Property_Image.gif)
		 [Bindings](IImportRequestProviderParams.Bindings.htm)


		 Свойство Bindings определяет
		 привязку атрибутов базы данных временных рядов с полями источника
		 данных.


		 ![](../../Property_Image.gif)
		 [CanLockBMOD](IImportRequestProviderParams.CanLockBMOD.htm)


		 Свойство CanLockBMOD
		 определяет режим блокировки системной таблицы во время загрузки
		 показателей в базу данных временных рядов.


		 ![](../../Property_Image.gif)
		 [DecreasePeriod](IImportRequestProviderParams.DecreasePeriod.htm)


		 Свойство DecreasePeriod
		 определяет, уменьшать ли период временных рядов в базе данных
		 временных рядов.


		 ![](../../Property_Image.gif)
		 [DuplicateCheck](IImportRequestProviderParams.DuplicateCheck.htm)


		 Свойство DuplicateCheck
		 определяет режим исключения дублирующих значений.


		 ![](../../Property_Image.gif)
		 [ImportObjectKey](IImportRequestProviderParams.ImportObjectKey.htm)


		 Свойство ImportObjectKey
		 определяет ключ объекта, выполняющего импорт.


		 ![](../../Property_Image.gif)
		 [IncreasePeriod](IImportRequestProviderParams.IncreasePeriod.htm)


		 Свойство IncreasePeriod
		 определяет, переопределять ли даты начала и окончания показателей
		 в соответствии с импортируемыми данными.


		 ![](../../Property_Image.gif)
		 [LoadEmptyValues](IImportRequestProviderParams.LoadEmptyValues.htm)


		 Свойство LoadEmptyValues
		 определяет, загружать ли пустые значения показателей.


		 ![](../../Property_Image.gif)
		 [LoadMode](IImportRequestProviderParams.LoadMode.htm)


		 Свойство LoadMode определяет
		 режим загрузки данных в базу данных временных рядов.


		 ![](../../Property_Image.gif)
		 [LoadNullForMissMatchValueType](IImportRequestProviderParams.LoadNullForMissMatchValueType.htm)


		 Свойство LoadNullForMissMatchValueType
		 определяет, записывать ли значение Null
		 при импорте значений, не соответствующих типу поля приёмника.


		 ![](../../Property_Image.gif)
		 [LoadType](IImportRequestProviderParams.LoadType.htm)


		 Свойство LoadType определяет
		 тип импорта показателей.


		 ![](../../Property_Image.gif)
		 [LogDateParseError](IImportRequestProviderParams.LogDateParseError.htm)


		 Свойство LogDateParseError
		 определяет, нужно ли заносить в отчет о загрузке временных рядов
		 информацию об ошибке разбора дат.


		 ![](../../Property_Image.gif)
		 [NewRevisionName](IImportRequestProviderParams.NewRevisionName.htm)


		 Свойство NewRevisionName
		 определяет имя создаваемой ревизии.


		 ![](../../Property_Image.gif)
		 [OverWriteWholeFactorValues](IImportRequestProviderParams.OverWriteWholeFactorValues.htm)


		 Свойство OverWriteWholeFactorValues
		 определяет, перезаписывать ли при импорте весь ряд целиком.


		 ![](../../Property_Image.gif)
		 [Provider](IImportRequestProviderParams.Provider.htm)


		 Свойство Provider определяет
		 объект, являющийся источником данных.


		 ![](../../Property_Image.gif)
		 [ScenarioKey](IImportRequestProviderParams.ScenarioKey.htm)


		 Свойство ScenarioKey
		 определяет ключ сценария, по которому будут загружаться данные.


		 ![](../../Property_Image.gif)
		 [SkipEmptyRows](IImportRequestProviderParams.SkipEmptyRows.htm)


		 Свойство SkipEmptyRows
		 определяет, пропускать ли пустые строки при импорте данных.


		 ![](../../Property_Image.gif)
		 [SourceFieldStringSize](IImportRequestProviderParams.SourceFieldStringSize.htm)


		 Свойство SourceFieldStringSize
		 определяет, какой длины будут считаться строковые поля в источнике
		 данных.


		 ![](../../Property_Image.gif)
		 [TreatEmptyStringAsNull](IImportRequestProviderParams.TreatEmptyStringAsNull.htm)


		 Свойство TreatEmptyStringAsNull
		 определяет, записывать ли пустые строки как Null.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

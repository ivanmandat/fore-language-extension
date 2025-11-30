# CubeMetaUpdateClass

CubeMetaUpdateClass
-


# CubeMetaUpdateClass


## Описание


Класс CubeMetaUpdateClass реализует объект, осуществляющий копирование базы данных временных рядов.


## Свойства, унаследованные от [ICubeMetaUpdateEx](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalObjects](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.AdditionalObjects.htm)


		 Свойство AdditionalObjects
		 возвращает коллекцию объектов, которые должны быть скопированы
		 вместе с базой данных временных рядов, но не являются вложенными
		 по отношению к ней.


		 ![](../../Property_Image.gif)
		 [AutoPeriod](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.AutoPeriod.htm)


		 Свойство AutoPeriod
		 возвращает параметры периода копирования данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [CanLockBMOD](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.CanLockBMOD.htm)


		 Свойство CanLockBMOD
		 определяет режим блокировки системной таблицы во время копирования.


		 ![](../../Property_Image.gif)
		 [CopyData](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.CopyData.htm)


		 Свойство CopyData определяет,
		 нужно ли копировать данные базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [CopyExtraObjects](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.CopyExtraObjects.htm)


		 Свойство CopyExtraObjects
		 определяет, нужно ли копировать вложенные объекты базы данных
		 временных рядов, от которых она не зависит.


		 ![](../../Property_Image.gif)
		 [CreateInfo](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.CreateInfo.htm)


		 Свойство CreateInfo
		 возвращает параметры создаваемой базы данных временных рядов,
		 которая будет копией исходной базы.


		 ![](../../Property_Image.gif)
		 [Database](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.Database.htm)


		 Свойство Database определяет
		 отдельную базу данных, в которой будут храниться данные скопированной
		 базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [DictionaryRemapings](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.DictionaryRemapings.htm)


		 Свойство DictionaryRemapings
		 возвращает коллекцию соответствий объектов копируемой базы данных
		 временных рядов и объектов базы-копии.


		 ![](../../Property_Image.gif)
		 [DisableTransactions](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.DisableTransactions.htm)


		 Свойство DisableTransactions
		 определяет, выполнять ли импорт временных рядов за одну транзакцию.


		 ![](../../Property_Image.gif)
		 [FactorsFilter](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.FactorsFilter.htm)


		 Свойство FactorsFilter
		 возвращает отметку справочников, в соответствии с которой будет
		 производиться копирование данных базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [ForceEmptyValues](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.ForceEmptyValues.htm)


		 Свойство ForceEmptyValues
		 определяет, заменять ли пустыми значениями точки данных, отсутствующие
		 в приёмнике, но присутствующие в источнике.


		 ![](../../Property_Image.gif)
		 [FromRevision](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.FromRevision.htm)


		 Свойство FromRevision
		 определяет ключ ревизии, начиная с которой будет производиться
		 копирование данных базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Metabase](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.Metabase.htm)


		 Свойство Metabase определяет
		 репозиторий, в который будет скопирована база данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [MetafactsAttributeRemappings](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.MetafactsAttributeRemappings.htm)


		 Свойство MetafactsAttributeRemappings
		 возвращает коллекцию соответствий атрибутов временных рядов копируемой
		 базы данных временных рядов и атрибутов временных рядов базы-копии.


		 ![](../../Property_Image.gif)
		 [MetavalsAttributeRemappings](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.MetavalsAttributeRemappings.htm)


		 Свойство MetavalsAttributeRemappings
		 определяет коллекцию соответствий атрибутов наблюдений копируемой
		 базы данных временных рядов и атрибутов наблюдений базы-копии.


		 ![](../../Property_Image.gif)
		 [NewRevisionName](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.NewRevisionName.htm)


		 Свойство NewRevisionName
		 определяет наименование создаваемой ревизии.


		 ![](../../Property_Image.gif)
		 [ObjectsFilter](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.ObjectsFilter.htm)


		 Свойство ObjectsFilter
		 возвращает коллекцию вложенных объектов базы данных временных
		 рядов, которые будут скопированы.


		 ![](../../Property_Image.gif)
		 [PrerequisiteObjects](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.PrerequisiteObjects.htm)


		 Свойство PrerequisiteObjects
		 возвращает коллекцию объектов, которые должны быть скопированы
		 перед копированием базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [RdsDatabase](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.RdsDatabase.htm)


		 Свойство RdsDatabase
		 определяет репозиторий НСИ для хранения данных скопированной базы
		 данных временных рядов.


		 ![](../../Property_Image.gif)
		 [RemapBySelectionIndex](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.RemapBySelectionIndex.htm)


		 Свойство RemapBySelectionIndex
		 определяет, применять ли для копирования данных и сопоставления
		 объектов уникальный индекс, используемый для формирования отметки.


		 ![](../../Property_Image.gif)
		 [RemappingFilter](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.RemappingFilter.htm)


		 Свойство RemappingFilter
		 возвращает коллекцию объектов, которые должны быть пропущены при
		 копировании.


		 ![](../../Property_Image.gif)
		 [ResultRubricator](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.ResultRubricator.htm)


		 Свойство ResultRubricator
		 возвращает созданную копию базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Rubricator](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.Rubricator.htm)


		 Свойство Rubricator
		 определяет копируемую базу данных временных рядов.


		 ![](../../Property_Image.gif)
		 [SkipEmptySourceValues](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.SkipEmptySourceValues.htm)


		 Свойство SkipEmptySourceValues
		 определяет, пропускать ли пустые значения (Null),
		 присутствующие в источнике данных.


		 ![](../../Property_Image.gif)
		 [SourceDictionary](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.SourceDictionary.htm)


		 Свойство SourceDictionary
		 возвращает указанные метаданные копируемой базы данных временных
		 рядов, при использовании метода [Load](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.Load.htm).


		 ![](../../Property_Image.gif)
		 [TargetRubricator](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.TargetRubricator.htm)


		 Свойство TargetRubricator
		 определяет существующую базу данных временных рядов, в которую
		 будут скопированы данные.


		 ![](../../Property_Image.gif)
		 [UpdateCallback](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.UpdateCallback.htm)


		 Свойство UpdateCallback
		 определяет объект, реализующий события, которые происходят при
		 транзакциях во время копирования.


		 ![](../../Property_Image.gif)
		 [UpdateMode](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.UpdateMode.htm)


		 Свойство UpdateMode
		 определяет режим обновления существующей базы данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [UseTablockHint](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.UseTablockHint.htm)


		 Свойство UseTablockHint
		 определяет, какие запросы будут выполняться с указанием TABLOCK.


## Методы, унаследованные от [ICubeMetaUpdateEx](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddStream](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.AddStream.htm)


		 Метод AddStream добавляет
		 пользовательский поток данных в копируемую базу данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [Apply](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.Apply.htm)


		 Метод Apply копирует
		 базу данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [GetStream](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.GetStream.htm)


		 Метод GetStream извлекает
		 пользовательский поток данных из копируемой базы данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [Load](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.Load.htm)


		 Метод Load загружает
		 базу данных временных рядов из файла.


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.LoadFromXml.htm)


		 Метод LoadFromXml загружает
		 параметры копирования базы данных временных рядов, сохраненные
		 в виде xml-кода.


		 ![](../../Sub_Image.gif)
		 [Save](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.Save.htm)


		 Метод Save сохраняет
		 базу данных временных рядов в файл.


		 ![](../../Sub_Image.gif)
		 [SaveEx](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.SaveEx.htm)


		 Метод SaveEx
		 сохраняет базу данных временных рядов в файл с возможностью
		 обработки событий, возникающих во время сохранения.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](../../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.SaveToXml.htm)


		 Метод SaveToXml сохраняет
		 в виде xml-кода параметры копирования базы данных временных рядов.


См. также:


[Классы сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ICubeMetaUpdateEx

ICubeMetaUpdateEx
-


# ICubeMetaUpdateEx


Сборка: Cubes;


## Описание


Интерфейс ICubeMetaUpdateEx
 содержит свойства и методы объекта репозитория «Объект
 репликации», предназначенного для копирования базы данных временных
 рядов.


## Иерархия наследования


           ICubeMetaUpdateEx


## Комментарии


Используя данный интерфейс можно создавать копии баз данных временных
 рядов в исходном репозитории, в другом репозитории на том же или другом
 сервере. Для копирования базы у пользователя должны быть соответствующие
 права на таблицы данной базы в репозитории-источнике.


Вместе с базой данных временных рядов могут быть скопированы различные
 объекты, которые зависят от нее, но не являются её внутренними объектами
 (экспресс-отчёты, регламентные отчёты, рабочие книги). Для указания объектов
 используется коллекция [ICubeMetaUpdateEx.AdditionalObjects](ICubeMetaUpdateEx.AdditionalObjects.htm).
 Объекты из этой коллекции копируются после самой базы данных временных
 рядов.


Также могут быть скопированы объекты, от которых зависит база (справочники
 НСИ, на которых построены атрибуты данной базы, ярлыки для справочников
 НСИ). Для указания объектов используется коллекция [ICubeMetaUpdateEx.PrerequisiteObjects](ICubeMetaUpdateEx.PrerequisiteObjects.htm).
 Объекты из этой коллекции копируются перед базой данных временных рядов.


Копирование базы данных временных рядов в репозиторий, расположенный
 на другом сервере, должно осуществляться через файл. Для сохранения и
 загрузки базы данных временных рядов из файла используются методы [ICubeMetaUpdateEx.Save](ICubeMetaUpdateEx.Save.htm) и [ICubeMetaUpdateEx.Load](ICubeMetaUpdateEx.Load.htm) соответственно.


Копирование базы данных временных рядов происходит при вызове метода
 [ICubeMetaUpdateEx.Apply](ICubeMetaUpdateEx.Apply.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AdditionalObjects](ICubeMetaUpdateEx.AdditionalObjects.htm)


		 Свойство AdditionalObjects
		 возвращает коллекцию объектов, которые должны быть скопированы
		 вместе с базой данных временных рядов, но не являются вложенными
		 по отношению к ней.


		 ![](../../Property_Image.gif)
		 [AutoPeriod](ICubeMetaUpdateEx.AutoPeriod.htm)


		 Свойство AutoPeriod
		 возвращает параметры периода копирования данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [CanLockBMOD](ICubeMetaUpdateEx.CanLockBMOD.htm)


		 Свойство CanLockBMOD
		 определяет режим блокировки системной таблицы во время копирования.


		 ![](../../Property_Image.gif)
		 [CopyData](ICubeMetaUpdateEx.CopyData.htm)


		 Свойство CopyData определяет,
		 нужно ли копировать данные базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [CopyExtraObjects](ICubeMetaUpdateEx.CopyExtraObjects.htm)


		 Свойство CopyExtraObjects
		 определяет, нужно ли копировать вложенные объекты базы данных
		 временных рядов, от которых она не зависит.


		 ![](../../Property_Image.gif)
		 [CreateInfo](ICubeMetaUpdateEx.CreateInfo.htm)


		 Свойство CreateInfo
		 возвращает параметры создаваемой базы данных временных рядов,
		 которая будет копией исходной базы.


		 ![](../../Property_Image.gif)
		 [Database](ICubeMetaUpdateEx.Database.htm)


		 Свойство Database определяет
		 отдельную базу данных, в которой будут храниться данные скопированной
		 базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [DictionaryRemapings](ICubeMetaUpdateEx.DictionaryRemapings.htm)


		 Свойство DictionaryRemapings
		 возвращает коллекцию соответствий объектов копируемой базы данных
		 временных рядов и объектов базы-копии.


		 ![](../../Property_Image.gif)
		 [DisableTransactions](ICubeMetaUpdateEx.DisableTransactions.htm)


		 Свойство DisableTransactions
		 определяет, выполнять ли импорт временных рядов за одну транзакцию.


		 ![](../../Property_Image.gif)
		 [FactorsFilter](ICubeMetaUpdateEx.FactorsFilter.htm)


		 Свойство FactorsFilter
		 возвращает отметку справочников, в соответствии с которой будет
		 производиться копирование данных базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [ForceEmptyValues](ICubeMetaUpdateEx.ForceEmptyValues.htm)


		 Свойство ForceEmptyValues
		 определяет, заменять ли пустыми значениями точки данных, отсутствующие
		 в приёмнике, но присутствующие в источнике.


		 ![](../../Property_Image.gif)
		 [FromRevision](ICubeMetaUpdateEx.FromRevision.htm)


		 Свойство FromRevision
		 определяет ключ ревизии, начиная с которой будет производиться
		 копирование данных базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Metabase](ICubeMetaUpdateEx.Metabase.htm)


		 Свойство Metabase определяет
		 репозиторий, в который будет скопирована база данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [MetafactsAttributeRemappings](ICubeMetaUpdateEx.MetafactsAttributeRemappings.htm)


		 Свойство MetafactsAttributeRemappings
		 возвращает коллекцию соответствий атрибутов временных рядов копируемой
		 базы данных временных рядов и атрибутов временных рядов базы-копии.


		 ![](../../Property_Image.gif)
		 [MetavalsAttributeRemappings](ICubeMetaUpdateEx.MetavalsAttributeRemappings.htm)


		 Свойство MetavalsAttributeRemappings
		 определяет коллекцию соответствий атрибутов наблюдений копируемой
		 базы данных временных рядов и атрибутов наблюдений базы-копии.


		 ![](../../Property_Image.gif)
		 [NewRevisionName](ICubeMetaUpdateEx.NewRevisionName.htm)


		 Свойство NewRevisionName
		 определяет наименование создаваемой ревизии.


		 ![](../../Property_Image.gif)
		 [ObjectsFilter](ICubeMetaUpdateEx.ObjectsFilter.htm)


		 Свойство ObjectsFilter
		 возвращает коллекцию вложенных объектов базы данных временных
		 рядов, которые будут скопированы.


		 ![](../../Property_Image.gif)
		 [PrerequisiteObjects](ICubeMetaUpdateEx.PrerequisiteObjects.htm)


		 Свойство PrerequisiteObjects
		 возвращает коллекцию объектов, которые должны быть скопированы
		 перед копированием базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [RdsDatabase](ICubeMetaUpdateEx.RdsDatabase.htm)


		 Свойство RdsDatabase
		 определяет репозиторий НСИ для хранения данных скопированной базы
		 данных временных рядов.


		 ![](../../Property_Image.gif)
		 [RemapBySelectionIndex](ICubeMetaUpdateEx.RemapBySelectionIndex.htm)


		 Свойство RemapBySelectionIndex
		 определяет, применять ли для копирования данных и сопоставления
		 объектов уникальный индекс, используемый для формирования отметки.


		 ![](../../Property_Image.gif)
		 [RemappingFilter](ICubeMetaUpdateEx.RemappingFilter.htm)


		 Свойство RemappingFilter
		 возвращает коллекцию объектов, которые должны быть пропущены при
		 копировании.


		 ![](../../Property_Image.gif)
		 [ResultRubricator](ICubeMetaUpdateEx.ResultRubricator.htm)


		 Свойство ResultRubricator
		 возвращает созданную копию базы данных временных рядов.


		 ![](../../Property_Image.gif)
		 [Rubricator](ICubeMetaUpdateEx.Rubricator.htm)


		 Свойство Rubricator
		 определяет копируемую базу данных временных рядов.


		 ![](../../Property_Image.gif)
		 [SkipEmptySourceValues](ICubeMetaUpdateEx.SkipEmptySourceValues.htm)


		 Свойство SkipEmptySourceValues
		 определяет, пропускать ли пустые значения (Null),
		 присутствующие в источнике данных.


		 ![](../../Property_Image.gif)
		 [SourceDictionary](ICubeMetaUpdateEx.SourceDictionary.htm)


		 Свойство SourceDictionary
		 возвращает указанные метаданные копируемой базы данных временных
		 рядов, при использовании метода [Load](ICubeMetaUpdateEx.Load.htm).


		 ![](../../Property_Image.gif)
		 [TargetRubricator](ICubeMetaUpdateEx.TargetRubricator.htm)


		 Свойство TargetRubricator
		 определяет существующую базу данных временных рядов, в которую
		 будут скопированы данные.


		 ![](../../Property_Image.gif)
		 [UpdateCallback](ICubeMetaUpdateEx.UpdateCallback.htm)


		 Свойство UpdateCallback
		 определяет объект, реализующий события, которые происходят при
		 транзакциях во время копирования.


		 ![](../../Property_Image.gif)
		 [UpdateMode](ICubeMetaUpdateEx.UpdateMode.htm)


		 Свойство UpdateMode
		 определяет режим обновления существующей базы данных временных
		 рядов.


		 ![](../../Property_Image.gif)
		 [UseTablockHint](ICubeMetaUpdateEx.UseTablockHint.htm)


		 Свойство UseTablockHint
		 определяет, какие запросы будут выполняться с указанием TABLOCK.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddStream](ICubeMetaUpdateEx.AddStream.htm)


		 Метод AddStream добавляет
		 пользовательский поток данных в копируемую базу данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [Apply](ICubeMetaUpdateEx.Apply.htm)


		 Метод Apply копирует
		 базу данных временных рядов.


		 ![](../../Sub_Image.gif)
		 [GetStream](ICubeMetaUpdateEx.GetStream.htm)


		 Метод GetStream извлекает
		 пользовательский поток данных из копируемой базы данных временных
		 рядов.


		 ![](../../Sub_Image.gif)
		 [Load](ICubeMetaUpdateEx.Load.htm)


		 Метод Load загружает
		 базу данных временных рядов из файла.


		 ![](../../Sub_Image.gif)
		 [LoadFromXml](ICubeMetaUpdateEx.LoadFromXml.htm)


		 Метод LoadFromXml загружает
		 параметры копирования базы данных временных рядов, сохраненные
		 в виде xml-кода.


		 ![](../../Sub_Image.gif)
		 [Save](ICubeMetaUpdateEx.Save.htm)


		 Метод Save сохраняет
		 базу данных временных рядов в файл.


		 ![](../../Sub_Image.gif)
		 [SaveEx](ICubeMetaUpdateEx.SaveEx.htm)


		 Метод SaveEx
		 сохраняет базу данных временных рядов в файл с возможностью
		 обработки событий, возникающих во время сохранения.


		 ![](../../Sub_Image.gif)
		 [SaveToXml](ICubeMetaUpdateEx.SaveToXml.htm)


		 Метод SaveToXml сохраняет
		 в виде xml-кода параметры копирования базы данных временных рядов.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

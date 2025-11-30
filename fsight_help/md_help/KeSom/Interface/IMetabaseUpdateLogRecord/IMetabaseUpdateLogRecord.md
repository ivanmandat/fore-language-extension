# IMetabaseUpdateLogRecord

IMetabaseUpdateLogRecord
-


# IMetabaseUpdateLogRecord


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUpdateLogRecord
 предназначен для работы с записью журнала процесса обновления.


## Иерархия наследования


IMetabaseUpdateLogRecord


## Комментарии


Запись журнала процесса обновления можно получить, используя свойство
 [IMetabaseUpdateLogRecords.Item](../IMetabaseUpdateLogRecords/IMetabaseUpdateLogRecords.Item.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Error](IMetabaseUpdateLogRecord.Error.htm)
		 Свойство Error возвращает
		 ошибку, которая возникла в процессе применения элемента обновления.


		 ![](../../Property_Image.gif)
		 [ErrorSkipped](IMetabaseUpdateLogRecord.ErrorSkipped.htm)
		 Свойство ErrorSkipped
		 возвращает признак пропуска ошибки в процессе применения элемента
		 обновления.


		 ![](../../Property_Image.gif)
		 [HasConflicts](IMetabaseUpdateLogRecord.HasConflicts.htm)
		 Свойство HasConflicts
		 возвращает признак наличия конфликта при определении соответствия
		 объекта в обновлении и репозитории.


		 ![](../../Property_Image.gif)
		 [HasError](IMetabaseUpdateLogRecord.HasError.htm)
		 Свойство HasError возвращает
		 признак наличия ошибки в процессе применения элемента обновления.


		 ![](../../Property_Image.gif)
		 [HasOnResolve](IMetabaseUpdateLogRecord.HasOnResolve.htm)
		 Свойство HasOnResolve
		 возвращает признак наличия конфликта, связанного с наличием зависимостей
		 объекта обновления от объектов репозитория-источника, которые
		 отсутствуют в репозитории назначения.


		 ![](../../Property_Image.gif)
		 [IsFinished](IMetabaseUpdateLogRecord.IsFinished.htm)
		 Свойство IsFinished
		 возвращает признак успешного применения элемента обновления.


		 ![](../../Property_Image.gif)
		 [LocalObjectVersion](IMetabaseUpdateLogRecord.LocalObjectVersion.htm)
		 Свойство LocalObjectVersion
		 возвращает версию объекта в репозитории до обновления.


		 ![](../../Property_Image.gif)
		 [LocalOriginalMetabase](IMetabaseUpdateLogRecord.LocalOriginalMetabase.htm)
		 Свойство LocalOriginalMetabase
		 возвращает идентификатор репозитория-источника локального объекта
		 до обновления.


		 ![](../../Property_Image.gif)
		 [Node](IMetabaseUpdateLogRecord.Node.htm)
		 Свойство Node возвращает
		 элемент обновления, для которого была сделана запись в журнале.


		 ![](../../Property_Image.gif)
		 [OnResolve](IMetabaseUpdateLogRecord.OnResolve.htm)
		 Свойство OnResolve
		 возвращает событие, возникающее при наличии зависимостей объекта
		 обновления от объектов репозитория-источника, которые отсутствуют
		 в репозитории назначения.


		 ![](../../Property_Image.gif)
		 [UpdateObjectVersion](IMetabaseUpdateLogRecord.UpdateObjectVersion.htm)
		 Свойство UpdateObjectVersion
		 возвращает версию объекта в обновлении.


		 ![](../../Property_Image.gif)
		 [UpdateOriginalMetabase](IMetabaseUpdateLogRecord.UpdateOriginalMetabase.htm)
		 Свойство UpdateOriginalMetabase
		 возвращает идентификатор репозитория-источника в обновлении.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabaseUpdateLog

IMetabaseUpdateLog
-


# IMetabaseUpdateLog


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUpdateLog
 предназначен для работы с журналом применения обновления.


## Иерархия наследования


IMetabaseUpdateLog


## Комментарии


Журнал применения обновления можно получить, используя свойство [IMetabaseUpdate.Log](../IMetabaseUpdate/IMetabaseUpdate.Log.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [HasConflicts](IMetabaseUpdateLog.HasConflicts.htm)
		 Свойство HasConflicts
		 возвращает признак наличия конфликтов при определении соответствия
		 объектов в обновлении и репозитории.


		 ![](../../Property_Image.gif)
		 [HasErrors](IMetabaseUpdateLog.HasErrors.htm)
		 Свойство HasErrors
		 возвращает признак наличия ошибок в записях журнала.


		 ![](../../Property_Image.gif)
		 [HasErrorSkipped](IMetabaseUpdateLog.HasErrorSkipped.htm)
		 Свойство HasErrorSkipped
		 возвращает признак наличия пропусков ошибок в записях журнала.


		 ![](../../Property_Image.gif)
		 [HasOnResolve](IMetabaseUpdateLog.HasOnResolve.htm)
		 Свойство HasOnResolve
		 возвращает признак наличия событий, которые наступают, если в
		 обновлении имеется зависимость от объекта в репозитории-источнике,
		 который отсутствует в репозитории назначения.


		 ![](../../Property_Image.gif)
		 [InProgress](IMetabaseUpdateLog.InProgress.htm)
		 Свойство InProgress
		 возвращает признак незавершенности процесса применения обновления.


		 ![](../../Property_Image.gif)
		 [IsFinished](IMetabaseUpdateLog.IsFinished.htm)
		 Свойство IsFinished
		 возвращает признак успешного применения обновления.


		 ![](../../Property_Image.gif)
		 [Records](IMetabaseUpdateLog.Records.htm)
		 Свойство Records возвращает
		 коллекцию записей журнала процесса обновления.


		 ![](../../Property_Image.gif)
		 [UpdateFinishTimestamp](IMetabaseUpdateLog.UpdateFinishTimestamp.htm)
		 Свойство UpdateFinishTimestamp
		 возвращает дату и время окончания применения обновления.


		 ![](../../Property_Image.gif)
		 [UpdateMetabase](IMetabaseUpdateLog.UpdateMetabase.htm)
		 Свойство UpdateMetabase
		 возвращает репозиторий, в котором было установлено обновление.


		 ![](../../Property_Image.gif)
		 [UpdateStartTimestamp](IMetabaseUpdateLog.UpdateStartTimestamp.htm)
		 Свойство UpdateStartTimestamp
		 возвращает дату и время начала применения обновления.


		 ![](../../Property_Image.gif)
		 [UpdateUserName](IMetabaseUpdateLog.UpdateUserName.htm)
		 Свойство UpdateUserName
		 возвращает имя пользователя платформы, который применил обновление.


		 ![](../../Property_Image.gif)
		 [UpdateUserSID](IMetabaseUpdateLog.UpdateUserSID.htm)
		 Свойство UpdateUserSID
		 возвращает уникальный идентификатор пользователя, который применил
		 обновление.


		 ![](../../Property_Image.gif)
		 [UpdateWorkstation](IMetabaseUpdateLog.UpdateWorkstation.htm)
		 Свойство UpdateWorkstation
		 возвращает наименование рабочей станции, с который было применено
		 обновление.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

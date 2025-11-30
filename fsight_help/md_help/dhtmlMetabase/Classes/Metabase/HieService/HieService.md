# HieService

HieService
-


**


# HieService


Пространство имен: PP.Mb;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


HieService


## Описание


Класс HieService служит для
 работы с иерархией базы данных временных рядов платформы.


## Синтаксис


PP.initClass(PP.Mb.HieService, PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm), "HieService");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Metadata](HieService.Metadata.htm)
		 Свойство Metadata посылает
		 запрос на получение метаданных иерархии рядов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [close](HieService.close.htm)
		 Метод close закрывает
		 объект иерархии.


		 ![](../../../Sub_Image.gif)
		 [getChildEls](HieService.getChildEls.htm)
		 Метод getChildEls используется
		 для подгрузки дочерних элементов.


		 ![](../../../Sub_Image.gif)
		 [getGetMetadataSettings](HieService.getGetMetadataSettings.htm)
		 Метод getGetMetadataSettings
		 возвращает тело запроса получения метаданных иерархии
		 рядов.


		 ![](../../../Sub_Image.gif)
		 [getMetabase](HieService.getMetabase.htm)
		 Метод getMetabase
		 возвращает экземпляр метабазы.


		 ![](../../../Sub_Image.gif)
		 [getSetMetadataSettings](HieService.getSetMetadataSettings.htm)
		 Метод getSetMetadataSettings
		 возвращает тело запроса сохранения метаданных иерархии
		 рядов.


		 ![](../../../Sub_Image.gif)
		 [openFromRubKey](HieService.openFromRubKey.htm)
		 Метод openFromRubKey
		 посылает запрос на открытие иерархии рабочей книги по ключу каталога
		 показателей.


		 ![](../../../Sub_Image.gif)
		 [openFromRubOdId](HieService.openFromRubOdId.htm)
		 Метод openFromRubOdId
		 открывает иерархию рабочей книги по моникёру каталога показателей.


		 ![](../../../Sub_Image.gif)
		 [openFromSource](HieService.openFromSource.htm)
		 Метод openFromSource
		 посылает запрос на открытие иерархии главного каталога показателей
		 рабочей книги.


		 ![](../../../Sub_Image.gif)
		 [setLevelsByAttributesIds](HieService.setLevelsByAttributesIds.htm)
		 Метод setLevelsByAttributesIds
		 устанавливает уровни дерева в соответствии с порядком метаатрибутов.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ElementsLoaded](HieService.ElementsLoaded.htm)
		 Событие ElementsLoaded
		 наступает по окончанию загрузки дочерних элементов иерархии рядов.


		 ![](../../../Event_Image.gif)
		 [HieOpened](HieService.HieOpened.htm)
		 Событие HieOpened наступает
		 по окончанию открытия иерархии рядов.


		 ![](../../../Event_Image.gif)
		 [MetadataChanged](HieService.MetadataChanged.htm)
		 Событие MetadataChanged
		 наступает по окончанию изменения метаданных иерархии рядов.


		 ![](../../../Event_Image.gif)
		 [MetadataChangeStart](HieService.MetadataChangeStart.htm)
		 Событие MetadataChangeStart
		 наступает во время начала изменения метаданных иерархии рядов.


## Методы, унаследованные от класса PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addCallbackToLastRqt](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.addcallbacktolastrqt.htm)
		 Метод addCallbackToLastRqt
		 добавляет обработчик к последнему в очереди запросу.


		 ![](../../../Sub_Image.gif)
		 [beginSyncXHR](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.beginSyncXHR.htm)
		 Метод beginSyncXHR
		 включает режим синхронных запросов для экземпляра класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm).


		 ![](../../../Sub_Image.gif)
		 [clearRequests](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.clearrequests.htm)
		 Метод clearRequests очищает
		 список запросов из очереди а также удаляет текущий запрос.


		 ![](../../../Sub_Image.gif)
		 [endSyncXHR](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.endSyncXHR.htm)
		 Метод endSyncXHR отключает
		 режим синхронных запросов для экземпляра класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm).


		 ![](../../../Sub_Image.gif)
		 [getCurrentRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.getCurrentRequest.htm)
		 Метод getCurrentRequest
		 возвращает текущий запрос сервисов.


		 ![](../../../Sub_Image.gif)
		 [sendRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.sendRequest.htm)
		 Метод sendRequest** отправляет запрос веб-сервису.


## События, унаследованные от класса PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [EndRequest](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.endrequest.htm)
		 Событие EndRequest
		 наступает при окончании соединения с репозиторием.


		 ![](../../../Event_Image.gif)
		 [Error](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.error.htm)
		 Событие Error наступает,
		 если во время соединения с репозиторием произошла ошибка.


		 ![](../../../Event_Image.gif)
		 [Executed](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.executed.htm)
		 Событие Executed наступает
		 после выполнения запроса к серверу.


		 ![](../../../Event_Image.gif)
		 [StartRequest](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.startrequest.htm)
		 Событие StartRequest
		 наступает в начале выполнения запроса к репозиторию.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.Mb](../../PP.Mb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

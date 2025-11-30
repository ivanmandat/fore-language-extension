# RdsService

RdsService
-


**


# RdsService


Пространство имен: PP.Rds


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


RdsService


## Описание


Класс RdsService представляет
 собой сервис для работы со справочником НСИ.


## Синтаксис


PP.initClass(PP.Rds.RdsService, [[PP.Mb.PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm),
 PP.Mb.PPSrvMixin], "PP.Rds.RdsService");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [RdsService](dhtmlRds.chm::/Classes/Rds/RdsService/Constructor_RdsService.htm)
		 Конструктор RdsService
		 создаёт экземпляр класса RdsService.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [beginBatch](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.beginBatch.htm)
		 Метод beginBatch включает
		 пакетный режим отправки запросов серверу.


		 ![](../../../Sub_Image.gif)
		 [cleanUp](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.cleanUp.htm)
		 Метод cleanUp выполняет
		 очистку справочника.


		 ![](../../../Sub_Image.gif)
		 [cloneItems](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.cloneItems.htm)
		 Метод cloneItems создаёт
		 копии элементов справочника.


		 ![](../../../Sub_Image.gif)
		 [closeRds](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.closeRds.htm)
		 Метод closeRds закрывает
		 указанный справочник.


		 ![](../../../Sub_Image.gif)
		 [endBatch](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.endBatch.htm)
		 Метод endBatch выключает
		 пакетный режим отправки запросов сервису.


		 ![](../../../Sub_Image.gif)
		 [exportData](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.exportData.htm)
		 Метод exportData инициализирует
		 процесс экспорта данных по указанной схеме.


		 ![](../../../Sub_Image.gif)
		 [getChildEls](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.getChildEls.htm)
		 Метод getChildEls возвращает
		 дочерние элементы справочника НСИ.


		 ![](../../../Sub_Image.gif)
		 [getFilterElements](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.getFilterElements.htm)
		 Метод getFilterElements
		 применяет для элементов справочника НСИ указанный фильтр.


		 ![](../../../Sub_Image.gif)
		 [getIsBatchMode](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.getIsBatchMode.htm)
		 Метод getIsBatchMode
		 возвращает признак того, что сервис находится в режиме формирования
		 пакета данных запроса для отправки серверу.


		 ![](../../../Sub_Image.gif)
		 [getSpecialImageListUrl](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.getSpecialImageListUrl.htm)
		 Метод getSpecialImageListUrl
		 возвращает адрес списка изображений атрибутов.


		 ![](../../../Sub_Image.gif)
		 [getToKeys](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.getToKeys.htm)
		 Метод getToKeys загружает
		 структуру дерева до указанных элементов справочника НСИ.


		 ![](../../../Sub_Image.gif)
		 [importData](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.importData.htm)
		 Метод importData инициализирует
		 процесс импорта данных по указанной схеме.


		 ![](../../../Sub_Image.gif)
		 [moveItems](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.moveItems.htm)
		 Метод moveItems перемещает
		 элементы справочника относительно указанного элемента.


		 ![](../../../Sub_Image.gif)
		 [openRds](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.openRds.htm)
		 Метод openRds открывает
		 справочник НСИ.


		 ![](../../../Sub_Image.gif)
		 [removeItems](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.removeItems.htm)
		 Метод removeItems удаляет
		 указанные элементы из справочника НСИ.


		 ![](../../../Sub_Image.gif)
		 [setItem](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.setItem.htm)
		 Метод setItem добавляет
		 или обновляет указанный элемент в справочнике НСИ.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ChildLoaded](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.ChildLoaded.htm)
		 Событие ChildLoaded
		 генерируется после загрузки дочерних элементов справочника НСИ.


		 ![](../../../Event_Image.gif)
		 [ItemOperationDone](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.ItemOperationDone.htm)
		 Событие ItemOperationDone
		 генерируется после выполнения операции вставки, обновления или
		 удаления элементов справочника НСИ.


		 ![](../../../Event_Image.gif)
		 [RdsCleaned](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.RdsCleaned.htm)
		 Событие RdsCleaned
		 генерируется после очистки справочника НСИ.


		 ![](../../../Event_Image.gif)
		 [RdsClosed](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.RdsClosed.htm)
		 Событие RdsClosed генерируется
		 после закрытия справочника НСИ.


		 ![](../../../Event_Image.gif)
		 [RdsOpened](dhtmlRds.chm::/Classes/Rds/RdsService/RdsService.RdsOpened.htm)
		 Событие RdsOpened генерируется
		 после открытия справочника НСИ.


## Методы, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


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


## События, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


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


		 ![](../../../property_image.gif)
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


[PP.Rds](../../PP.Rds.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

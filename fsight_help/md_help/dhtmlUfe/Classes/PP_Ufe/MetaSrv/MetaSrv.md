# MetaSrv

MetaSrv
-


**


# MetaSrv


Пространство имен: PP.Ufe;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


MetaSrv


## Описание


Класс MetaSrv предназначен для
 работы с сервисом дерева метаданных.


## Синтаксис


PP.initClass(PP.Ufe.MetaSrv, [PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm),
 PP.Mb.PPSrvMixin], "PP.Ufe.MetaSrv", [PP.Mb.IElService]);


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [MetaSrv](Constructor_MetaSrv.htm)
		 Конструктор MetaSrv
		 создает экземпляр класса MetaSrv.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [beginBatch](MetaSrv.beginBatch.htm)
		 Метод beginBatch включает
		 пакетный режим отправки запросов.


		 ![](../../../Sub_Image.gif)
		 [endBatch](MetaSrv.endBatch.htm)
		 Метод endBatch отключает
		 пакетный режим отправки запросов и выполняет отправку сформированного
		 пакета.


		 ![](../../../Sub_Image.gif)
		 [getAllElements](MetaSrv.getAllElements.htm)
		 Метод getAllElements
		 возвращает все элементы измерения.


		 ![](../../../Sub_Image.gif)
		 [getChildren](MetaSrv.getChildren.htm)
		 Метод getChildren возвращает
		 дочерние элементы, согласно переданным параметрам.


		 ![](../../../Sub_Image.gif)
		 [getEls](MetaSrv.getEls.htm)
		 Метод getEls возвращает
		 элементы измерения.


		 ![](../../../Sub_Image.gif)
		 [getIsBatchMode](MetaSrv.getIsBatchMode.htm)
		 Метод getIsBatchMode
		 возвращает признак включения пакетного режима отправки запросов.


		 ![](../../../Sub_Image.gif)
		 [getMetadata](MetaSrv.getMetadata.htm)
		 Метод getMetadata возвращает
		 метаданные измерения.


		 ![](../../../Sub_Image.gif)
		 [getPathToKey](MetaSrv.getPathToKey.htm)
		 Метод getPathToKey
		 возвращает иерархию до элемента с указанным ключом.


		 ![](../../../Sub_Image.gif)
		 [getSpecialImageListUrl](MetaSrv.getSpecialImageListUrl.htm)
		 Метод getSpecialImageListUrl
		 возвращает путь к файлу с пиктограммами для дерева метаданных.


		 ![](../../../Sub_Image.gif)
		 [send](MetaSrv.send.htm)
		 Метод send отправляет
		 запрос сервису для работы с деревом метаданных.


## События


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ChildLoaded](MetaSrv.ChildLoaded.htm)
		 Событие ChildLoaded
		 наступает после загрузки дочерних элементов в дерево.


		 ![](../../../Event_Image.gif)
		 [DimCleared](MetaSrv.DimCleared.htm)
		 Событие DimCleared
		 наступает после удаления элементов из измерения.


		 ![](../../../Event_Image.gif)
		 [DimClosed](MetaSrv.DimClosed.htm)
		 Событие DimClosed наступает
		 после закрытия соединения с измерением.


		 ![](../../../Event_Image.gif)
		 [DimGetMetadataComplete](MetaSrv.DimGetMetadataComplete.htm)
		 Событие DimGetMetadataComplete
		 наступает после завершения получения метаданных.


		 ![](../../../Event_Image.gif)
		 [DimOpened](MetaSrv.DimOpened.htm)
		 Событие DimOpened наступает
		 после открытия соединения с измерением.


		 ![](../../../Event_Image.gif)
		 [SelectionChanged](MetaSrv.SelectionChanged.htm)
		 Событие SelectionChanged
		 наступает после изменения отметки элементов измерения.


## Свойства, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [PPServiceUrl](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.PPServiceUrl.htm)
		 Свойство PPServiceUrl устанавливает
		 URL-адрес обработчика запросов веб-сервиса.


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


[PP.Ufe](../../PP.Ufe.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

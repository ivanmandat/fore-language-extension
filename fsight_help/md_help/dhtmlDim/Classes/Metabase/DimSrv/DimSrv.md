# DimSrv

DimSrv
-


**


# DimSrv


Пространство имен: PP.Mb;


## Иерархия наследования


[PP.Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PP.Mb.PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


PP.Mb.DimSrv


## Описание


Класс DimSrv используется для
 работы с сервисом для работы со справочниками.


## Синтаксис


PP.initClass(PP.Mb.DimSrv, [[PP.Mb.PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm),
 PP.Mb.PPSrvMixin], "PP.Mb.DimSrv", [PP.Mb.IElService]);


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [DimSrv](Constructor_DimSrv.htm)
		 Конструктор DimSrv создает
		 экземпляр класса DimSrv.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [assignSelection](DimSrv.assignSelection.htm)
		 Метод assignSelection
		 отмечает элементы справочника по указанному моникёру.


		 ![](../../../sub_image.gif)
		 [beginBatch](DimSrv.beginBatch.htm)
		 Метод beginBatch включает
		 пакетный режим отправки запросов.


		 ![](../../../sub_image.gif)
		 [close](DimSrv.close.htm)
		 Метод close закрывает
		 справочник.


		 ![](../../../sub_image.gif)
		 [copyInstance](DimSrv.copyInstance.htm)
		 Метод copyInstance
		 копирует справочник.


		 ![](../../../sub_image.gif)
		 [endBatch](DimSrv.endBatch.htm)
		 Метод endBatch отключает
		 пакетный режим отправки запросов и выполняет отправку сформированного
		 пакета.


		 ![](../../../sub_image.gif)
		 [execCommand](DimSrv.execCommand.htm)
		 Метод execCommand изменяет
		 отметку элементов справочника.


		 ![](../../../sub_image.gif)
		 [getAllElements](DimSrv.getAllElements.htm)
		 Метод getAllElements
		 загружает все элементы справочника.


		 ![](../../../sub_image.gif)
		 [getAllSelectedEls](DimSrv.getAllSelectedEls.htm)
		 Метод getAllSelectedEls
		 загружает все отмеченные элементы справочника.


		 ![](../../../sub_image.gif)
		 [getChildren](DimSrv.getChildren.htm)
		 Метод getChildren загружает
		 дочерние элементы по заданным параметрам.


		 ![](../../../sub_image.gif)
		 [getEls](DimSrv.getEls.htm)
		 Метод getEls необходим
		 для получения элементов справочника по переданным параметрам.


		 ![](../../../sub_image.gif)
		 [getIsBatchMode](DimSrv.getIsBatchMode.htm)
		 Метод getIsBatchMode
		 возвращает признак включения пакетного режима отправки запросов.


		 ![](../../../sub_image.gif)
		 [getMetadata](DimSrv.getMetadata.htm)
		 Метод getMetadata запрашивает
		 метаданные справочника и сохраняет их в модели.


		 ![](../../../sub_image.gif)
		 [getPathToKey](DimSrv.getPathToKey.htm)
		 Метод getPathToKey
		 загружает пути элементов с указанными ключами.


		 ![](../../../sub_image.gif)
		 [getSpecialImageListUrl](DimSrv.getSpecialImageListUrl.htm)
		 Метод getSpecialImageListUrl
		 возвращает путь к файлу с пиктограммами.


		 ![](../../../sub_image.gif)
		 [open](DimSrv.open.htm)
		 Метод open открывает
		 справочник.


		 ![](../../../sub_image.gif)
		 [selectByKeys](DimSrv.selectByKeys.htm)
		 Метод selectByKeys
		 устанавливает отметку элементам по ключам.


		 ![](../../../sub_image.gif)
		 [selectGroup](DimSrv.selectGroup.htm)
		 Метод selectGroup устанавливает
		 отметку элементам группы.


		 ![](../../../sub_image.gif)
		 [selectLevel](DimSrv.selectLevel.htm)
		 Метод selectLevel устанавливает
		 отметку элементам заданного уровня.


		 ![](../../../sub_image.gif)
		 [send](DimSrv.send.htm)
		 Метод send отправляет
		 запрос сервису для работы с деревом метаданных.


		 ![](../../../sub_image.gif)
		 [setCalendarPeriod](DimSrv.setCalendarPeriod.htm)
		 Метод setCalendarPeriod
		 устанавливает календарный период для справочника.


		 ![](../../../sub_image.gif)
		 [setElementsGroup](DimSrv.setElementsGroup.htm)
		 Метод setElementsGroup
		 добавляет группу элементов к метаданным справочника.


		 ![](../../../sub_image.gif)
		 [setHierarchy](DimSrv.setHierarchy.htm)
		 Метод setHierarchy
		 устанавливает альтернативную иерархию справочнику.


		 ![](../../../sub_image.gif)
		 [setSchema](DimSrv.setSchema.htm)
		 Метод setSchema устанавливает
		 схему отметки в справочнике.


		 ![](../../../sub_image.gif)
		 [updateStateData](DimSrv.updateStateData.htm)
		 Метод updateStateData
		 обновляет состояния элементов справочника.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [ChildLoaded](DimSrv.ChildLoaded.htm)
		 Событие ChildLoaded
		 наступает после загрузки дочерних элементов справочника.


		 ![](../../../Event_Image.gif)
		 [DimCleared](DimSrv.DimCleared.htm)
		 Событие DimCleared
		 наступает после очистки справочника.


		 ![](../../../Event_Image.gif)
		 [DimClosed](DimSrv.DimClosed.htm)
		 Событие DimClosed наступает
		 при закрытии справочника.


		 ![](../../../Event_Image.gif)
		 [DimGetMetadataComplete](DimSrv.DimGetMetadataComplete.htm)
		 Событие DimGetMetadataComplete
		 наступает после завершения загрузки метаданных справочника.


		 ![](../../../Event_Image.gif)
		 [DimOpened](DimSrv.DimOpened.htm)
		 Событие DimOpened наступает
		 при открытии справочника.


		 ![](../../../Event_Image.gif)
		 [SelectionChanged](DimSrv.SelectionChanged.htm)
		 Событие SelectionChanged
		 наступает после изменения отметки элементов справочника.


## Методы, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [addCallbackToLastRqt](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.addcallbacktolastrqt.htm)
		 Метод addCallbackToLastRqt
		 добавляет обработчик к последнему в очереди запросу.


		 ![](../../../sub_image.gif)
		 [beginSyncXHR](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.beginSyncXHR.htm)
		 Метод beginSyncXHR
		 включает режим синхронных запросов для экземпляра класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm).


		 ![](../../../sub_image.gif)
		 [clearRequests](dhtmlMetabase.chm::/classes/metabase/ppservice/ppservice.clearrequests.htm)
		 Метод clearRequests очищает
		 список запросов из очереди а также удаляет текущий запрос.


		 ![](../../../sub_image.gif)
		 [endSyncXHR](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.endSyncXHR.htm)
		 Метод endSyncXHR отключает
		 режим синхронных запросов для экземпляра класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm).


		 ![](../../../sub_image.gif)
		 [getCurrentRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.getCurrentRequest.htm)
		 Метод getCurrentRequest
		 возвращает текущий запрос сервисов.


		 ![](../../../sub_image.gif)
		 [sendRequest](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.sendRequest.htm)
		 Метод sendRequest** отправляет запрос веб-сервису.


## События, унаследованные от класса [PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


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


		 ![](../../../sub_image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../sub_image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../sub_image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../sub_image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../sub_image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../sub_image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../sub_image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../sub_image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../sub_image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../sub_image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.Mb](dhtmlMetabase.chm::/Classes/PP.Mb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

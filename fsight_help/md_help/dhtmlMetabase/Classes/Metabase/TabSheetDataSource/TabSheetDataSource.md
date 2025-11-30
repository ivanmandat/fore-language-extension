# TabSheetDataSource

TabSheetDataSource
-


**


# TabSheetDataSource


Пространство имен: PP.Mb;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PPService](../PPService/PPService.htm)


TabSheetDataSource


## Описание


Класс TabSheetDataSource реализует
 источник данных для электронной таблицы.


## Синтаксис


PP.initClass(PP.Mb.TabSheetDataSource, PP.Mb.[PPService](../PPService/PPService.htm), "TabSheetDataSource",
 PP.Ui.ITabSheetDataSource);


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [TabSheetDataSource](Constructor_TabSheetDataSource.htm)
		 Конструктор TabSheetDataSource
		 создает экземпляр класса TabSheetDataSource.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [IsAsync](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.IsAsync.htm)
		 Свойство IsAsync
		 определяет, используется ли асинхронная загрузка данных таблицы.


		 ![](../../../Property_Image.gif)
		 [ObjectsAsImage](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.objectsasimage.htm)
		 Свойство ObjectsAsImage
		 определяет, будут ли объекты на табличном листе отображаться как
		 картинки.


		 ![](../../../Property_Image.gif)
		 [Source](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.source.htm)
		 Свойство Source определяет
		 источник данных для электронной таблицы.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getSelection](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.getselection.htm)
		 Метод getSelection
		 возвращает объект с описанием выделенного диапазона ячеек таблицы.


		 ![](../../../Sub_Image.gif)
		 [getScrollState](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.getScrollState.htm)
		 Метод getScrollState возвращает
		 расположения полос прокрутки на странице.


		 ![](../../../Sub_Image.gif)
		 [isLoaded](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.isloaded.htm)
		 Метод isLoaded возвращает
		 признак того, загружены ли данные таблицы.


		 ![](../../../Sub_Image.gif)
		 [loadMeasures](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.loadmeasures.htm)
		 Метод loadMeasures
		 загружает структуру электронной таблицы.


		 ![](../../../Sub_Image.gif)
		 [loadRanges](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.loadranges.htm)
		 Метод loadRanges отправляет
		 сервису запрос на получение диапазона ячеек.


		 ![](../../../Sub_Image.gif)
		 [loadRangesfromJSON](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.loadrangesfromjson.htm)


		 Метод loadRangesfromJSON
		 загружает данные в ячейки таблицы из JSON-объекта.


		 ![](../../../Sub_Image.gif)
		 [loadSyncData](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.loadSyncData.htm)


		 Метод loadSyncData
		 отправляет сервису синхронный запрос на получение диапазона ячеек.


		 ![](../../../Sub_Image.gif)
		 [search](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.search.htm)


		 Метод search
		 осуществляет поиск по таблице.


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [MeasuresLoaded](TabSheetDataSource.MeasuresLoaded.htm)
		 Событие MeasuresLoaded
		 наступает после загрузки структуры таблицы.


		 ![](../../../Event_Image.gif)
		 [RangeLoaded](TabSheetDataSource.RangeLoaded.htm)
		 Событие RangeLoaded
		 наступает после загрузки диапазонов таблицы.


		 ![](../../../Event_Image.gif)
		 [SearchComplited](TabSheetDataSource.SearchComplited.htm)
		 Событие SearchComplited
		 наступает после поиска данных в таблице.


## Свойства, унаследованные от класса [PPService](../PPService/PPService.htm)


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


## Методы, унаследованные от класса [PPService](../PPService/PPService.htm)


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


## События, унаследованные от класса [PPService](../PPService/PPService.htm)


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


[PP](dhtmlCommon.chm::/Classes/PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

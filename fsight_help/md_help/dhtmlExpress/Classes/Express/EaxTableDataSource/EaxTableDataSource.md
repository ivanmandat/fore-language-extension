# EaxTableDataSource

EaxTableDataSource
-


**


# EaxTableDataSource


Пространство имен**: PP.Exp;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


[TabSheetDataSource](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.htm)


EaxTableDataSource


## Описание


Класс **EaxTableDataSource**
 реализует источник данных для электронной таблицы на панели свойств экспресс-отчета.


## Синтаксис


PP.initClass(PP.Exp.EaxTableDataSource, PP.Mb.[TabSheetDataSource](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.htm),
 "EaxTableDataSource", PP.Ui.ITabSheetDataSource);


## Конструктор


				 Имя конструктора
				 Краткое описание


				 ![](../../../sub_image.gif)
				 [EaxTableDataSource](dhtmlExpress.chm::/Classes/Express/EaxTableDataSource/Constructor_EaxTableDataSource.htm)
				 Конструктор **EaxTableDataSource**
				 создает экземпляр класса **EaxTableDataSource**.


## Свойства, унаследованные от класса [TabSheetDataSource](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.htm)


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


## Методы, унаследованные от класса [TabSheetDataSource](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getSelection](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.getselection.htm)
		 Метод getSelection
		 возвращает объект с описанием выделенного диапазона ячеек таблицы.


		 ![](../../../sub_image.gif)
		 [getScrollState](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.getScrollState.htm)
		 Метод getScrollState возвращает
		 расположения полос прокрутки на странице.


		 ![](../../../sub_image.gif)
		 [isLoaded](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.isloaded.htm)
		 Метод isLoaded возвращает
		 признак того, загружены ли данные таблицы.


		 ![](../../../sub_image.gif)
		 [loadMeasures](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.loadmeasures.htm)
		 Метод loadMeasures
		 загружает структуру электронной таблицы.


		 ![](../../../sub_image.gif)
		 [loadRanges](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.loadranges.htm)
		 Метод loadRanges отправляет
		 сервису запрос на получение диапазона ячеек.


		 ![](../../../sub_image.gif)
		 [loadRangesfromJSON](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.loadrangesfromjson.htm)


		 Метод loadRangesfromJSON
		 загружает данные в ячейки таблицы из JSON-объекта.


		 ![](../../../sub_image.gif)
		 [loadSyncData](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.loadSyncData.htm)


		 Метод loadSyncData
		 отправляет сервису синхронный запрос на получение диапазона ячеек.


		 ![](../../../sub_image.gif)
		 [search](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.search.htm)


		 Метод search
		 осуществляет поиск по таблице.


## События, унаследованные от класса [TabSheetDataSource](dhtmlMetabase.chm::/Classes/Metabase/TabSheetDataSource/TabSheetDataSource.htm)


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [MeasuresLoaded](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.measuresloaded.htm)
		 Событие MeasuresLoaded
		 наступает после загрузки структуры таблицы.


		 ![](../../../Event_Image.gif)
		 [RangeLoaded](dhtmlMetabase.chm::/classes/metabase/tabsheetdatasource/tabsheetdatasource.rangeloaded.htm)
		 Событие RangeLoaded
		 наступает после загрузки диапазонов таблицы.


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
		 Метод **sendRequest** отправляет запрос веб-сервису.


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


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


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


См. также:


[PP.Exp.Ui](../../PP.Exp.Ui.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ExpressionService

ExpressionService
-


**


# ExpressionService


Пространство имен: PP.Ufe;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm)


ExpressionService


## Описание


Класс ExpressionService предназначен
 для работы с сервисом выражений экспресс-отчета.


## Синтаксис


PP.initClass(PP.Ufe.ExpressionService, [PP.Mb.[PPService](dhtmlMetabase.chm::/Classes/Metabase/PPService/PPService.htm),
 PP.Mb.PPSrvMixin], "PP.Ufe.ExpressionService");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [ExpressionService](Constructor_ExpressionService.htm)
		 Конструктор ExpressionService
		 создает экземпляр класса ExpressionService.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [beginBatch](ExpressionService.beginBatch.htm)
		 Метод beginBatch включает
		 пакетный режим отправки запросов.


		 ![](../../../Sub_Image.gif)
		 [endBatch](ExpressionService.endBatch.htm)
		 Метод endBatch отключает
		 пакетный режим отправки запросов и выполняет отправку сформированного
		 пакета.


		 ![](../../../Sub_Image.gif)
		 [getIsBatchMode](ExpressionService.getIsBatchMode.htm)
		 Метод getIsBatchMode
		 возвращает признак включения пакетного режима отправки запросов.


		 ![](../../../Sub_Image.gif)
		 [getUfeFunctions](ExpressionService.getUfeFunctions.htm)
		 Метод getUfeFunctions
		 возвращает дерево функций для редактора выражений.


		 ![](../../../Sub_Image.gif)
		 [send](ExpressionService.send.htm)
		 Метод send отправляет
		 запрос сервису выражений.


		 ![](../../../Sub_Image.gif)
		 [setExpression](ExpressionService.setExpression.htm)
		 Метод setExpression
		 отправляет запрос на добавление термов для выражения.


## События


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [GetTerms](ExpressionService.GetTerms.htm)
		 Событие GetTerms наступает
		 после успешного получения термов для добавления в выражение.


		 ![](../../../Event_Image.gif)
		 [GetTermsErr](ExpressionService.GetTermsErr.htm)
		 Событие GetTermsErr
		 наступает после получения термов с ошибками для добавления в выражение.


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

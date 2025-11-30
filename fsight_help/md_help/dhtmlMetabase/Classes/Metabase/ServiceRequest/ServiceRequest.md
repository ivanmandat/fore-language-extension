# ServiceRequest

ServiceRequest
-


# ServiceRequest


Пространство имен: PP.Mb;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


ServiceRequest


## Описание


Класс ServiceRequest предназначен
 для обработки запросов к сервису.


## Синтаксис


PP.initClass(PP.Mb.ServiceRequest, [PP.Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "PP.Mb.ServiceRequest");


## Конструктор


				 Имя конструктора
				 Краткое описание


				 ![](../../../Sub_Image.gif)
				 ServiceRequest
				 Конструктор ServiceRequest
				 создаёт экземпляр класса ServiceRequest.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [BackgroundRequestTimeout](ServiceRequest.BackgroundRequestTimeout.htm)
		 Свойство BackgroundRequestTimeout
		 определяет задержку до отображения индикатора загрузки для фоновых
		 запросов.


		 ![](../../../Property_Image.gif)
		 [HideWaiterTimeout](ServiceRequest.HideWaiterTimeout.htm)
		 Свойство HideWaiterTimeout
		 определяет задержку до скрытия индикатора загрузки после получения
		 ответа.


		 ![](../../../Property_Image.gif)
		 [Service](ServiceRequest.Service.htm)
		 Свойство Service определяет
		 сервис.


		 ![](../../../Property_Image.gif)
		 [ShowWaiter](ServiceRequest.ShowWaiter.htm)
		 Свойство ShowWaiter
		 определяет, будет ли отображаться индикатор загрузки.


		 ![](../../../Property_Image.gif)
		 [ShowWaiterTimeout](ServiceRequest.ShowWaiterTimeout.htm)
		 Свойство ShowWaiterTimeout
		 определяет задержку до отображения индикатора загрузки.


		 ![](../../../Property_Image.gif)
		 [Waiter](ServiceRequest.Waiter.htm)
		 Свойство Waiter определяет
		 индикатор загрузки.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clearRequests](ServiceRequest.clearRequests.htm)
		 Метод clearRequests
		 очищает очередь запросов к репозиторию, а также текущий запрос.


		 ![](../../../Sub_Image.gif)
		 [endRequest](ServiceRequest.endRequest.htm)
		 Метод endRequest завершает
		 текущий запрос к репозиторию.


## События


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [EndRequest](ServiceRequest.EndRequestE.htm)
		 Событие EndRequest
		 наступает при окончании соединения с сервисом.


		 ![](../../../Event_Image.gif)
		 [Error](ServiceRequest.Error.htm)
		 Событие Error наступает,
		 если во время соединения с сервисом произошла ошибка.


		 ![](../../../Event_Image.gif)
		 [Executed](ServiceRequest.Executed.htm)
		 Событие Executed наступает
		 после выполнения запроса к сервису.


		 ![](../../../Event_Image.gif)
		 [StartRequest](ServiceRequest.StartRequest.htm)
		 Событие StartRequest
		 наступает в начале выполнения запроса к сервису.


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

# DataMiningService.createObject

DataMiningService.createObject
-


# DataMiningService.createObject


## Синтаксис


createObject(dataSource, objclass, callback, isSync);


## Параметры


dataSource. PP.Mb.DataMiningSource.
 Источник интеллектуального анализа данных;


objclass. PP.Mb.MetabaseObjectClass.
 Тип создаваемого объекта;


callback. PP.Delegate. Обратная
 функция;


isSync. Boolean. Определяет
 использование синхронного режима запросов.


## Описание


Метод createObject отправляет
 на сервер запрос о создании объекта, содержащего результаты интеллектуального
 анализа данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster.htm)
 с наименованием «dmMaster» (см. «[Пример
 создания компонента DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster_Example.htm)»).


// Подготовим параметры
dataSource = dmSource; // Уже определен в прошлом примере
objclass = PP.Mb.MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT; // Регламентный отчет
callback = function(sender, args) {console.log(args.Response)};
isSync = false;
// Инициируем создание объекта
dmService.createObject(dataSource, objclass, callback, isSync);
В результате выполнения примера был отправлен запрос на сервер о создании
 нового объекта, содержащего результате интеллектуального анализа данных,
 в консоль был выведен ответ сервера.


См. также:


[DataMiningService](DataMiningService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

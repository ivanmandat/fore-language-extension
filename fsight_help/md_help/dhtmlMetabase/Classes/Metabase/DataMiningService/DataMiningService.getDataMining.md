# DataMiningService.getDataMining

DataMiningService.getDataMining
-


# DataMiningService.getDataMining


## Синтаксис


getDataMining(dataSource, outputMon, data, callback,
 isSync);


## Параметры


dataSource. PP.Mb.DataMiningSource.
 Источник интеллектуального анализа данных;


outputMon. String. Моникер
 итогового отчета, генерируется методом [DataMiningService.createObject](DataMiningService.createObject.htm);


data. Object. Информация о текущих настройках анализа данных. Необходимо
 передать данные текущего шага, используя метод [DMSettingsStep.getStepData](../DMSettingsStep/DMSettingsStep.getStepData.htm);


callback. PP.Delegate. Обратная
 функция;


isSync. Boolean. Определяет
 использование синхронного режима запросов.


## Описание


Метод getDataMining отправляет
 на сервер запрос о расчете анализа данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster.htm)
 с наименованием «dmMaster» (см. «[Пример
 создания компонента DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster_Example.htm)»).


// Подготовим параметры
dataSource = dmSource; // Уже определен в прошлом примере
objclass = PP.Mb.MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT; // Регламентный отчет
var mon;
callback = function(sender, args) {mon = args.Response.CreateObjectResult.id.id};// Вернем моникёр созданного отчета
callback2 = function(sender, args) {console.log(args)};
isSync = false;
// Инициируем создание объекта
dmService.createObject(dataSource, objclass, callback, isSync);

// Определим настройки текущего шага
step = dmMaster.getSteps()[0];
// Получим данные шага
data = step.getStepData();

// Отправим запрос о расчете анализа данных
dmService.getDataMining(dmSource, mon, data, callback2, isSync);
В результате выполнения примера был отправлен запрос на сервер о расчете
 анализа данных, в консоль был выведен ответ сервера.


См. также:


[DataMiningService](DataMiningService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

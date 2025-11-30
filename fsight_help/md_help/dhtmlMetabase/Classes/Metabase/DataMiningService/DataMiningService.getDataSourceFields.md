# DataMiningService.getDataSourceFields

DataMiningService.getDataSourceFields
-


# DataMiningService.getDataSourceFields


## Синтаксис


getDataSourceFields(dataSource, dataInColumns, callback);


## Параметры


dataSource. PP.Mb.DataMiningSource.
 Источник интеллектуального анализа данных;


dataInColumns. Boolean. Определяет,
 находятся ли данные в столбцах;


callback. PP.Delegate. Обратная
 функция.


## Описание


Метод getDataSourceFields отправляет
 на сервер запрос о заголовках, используемых в интеллектуальном анализе
 данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster.htm)
 с наименованием «dmMaster» (см. «[Пример
 создания компонента DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster_Example.htm)»).


// Подготовим параметры
dataSource = dmSource; // Уже определен в прошлом примере
callback = function(sender, args){console.log(args.Response.GetDmDataSourceResult)};
// Отправим запрос
dmService.getDataSourceFields(dataSource, true, callback);
// -> Object fieldCount: 7 fieldNames: Objects: Array[7]0: "Territories"1: "1998"2: "1999"3: "2000"4: "2001"5: "2002"6: "2003"length: 7 ...
В результате выполнения примера был отправлен запрос на сервер о получении
 заголовков, в консоль был выведен ответ сервера.


См. также:


[DataMiningService](DataMiningService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

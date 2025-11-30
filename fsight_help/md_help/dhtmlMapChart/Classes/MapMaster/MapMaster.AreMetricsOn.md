# MapMaster.AreMetricsOn

MapMaster.AreMetricsOn
-


# MapMaster.AreMetricsOn


## Синтаксис


AreMetricsOn: Boolean;


## Описание


Свойство AreMetricsOn определяет
 признак использования метрик в мастере.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setAreMetricsOn,
 а возвращается с помощью метода getAreMetricsOn.


При установки значения true
 перенастраивает мастер для работы, с учетом метрик.


## Пример


Для выполнения примера необходим компонент MapMaster с идентификатором
 «master» (См. «[Пример
 размещения компонентов MapMaster и MapChart](../../Components/MapMaster/MapMaster_and_MapChart.htm)»). Проверим использование
 метрик:


console.log(master.getAreMetricsOn ? "Метрики используются" : "Метрики не используются");
В результате выполнения примера в консоль был выведен признак использования
 метрик мастером.


См. также:


[MapMaster](MapMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

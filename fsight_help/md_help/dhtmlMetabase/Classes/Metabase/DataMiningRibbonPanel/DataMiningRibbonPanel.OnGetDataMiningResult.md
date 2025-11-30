# DataMiningRibbonPanel.OnGetDataMiningResult

DataMiningRibbonPanel.OnGetDataMiningResult
-


# DataMiningRibbonPanel.OnGetDataMiningResult


## Синтаксис


OnGetDataMiningResult: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие OnGetDataMiningResult
 наступает при получении результата анализа данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster.htm)
 с наименованием «dmMaster» (см. «[Пример
 создания компонента DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster_Example.htm)»).


// Добавим событие
dmPanel.OnGetDataMiningResult.add(function(sender, args){
 console.log(args);
});
// -> Object DataMiningDescr: Object
В результате выполнения примера было добавлено событие, выводящее данные
 о результирующем отчете в консоль.


См. также:


[DataMiningRibbonPanel](DataMiningRibbonPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

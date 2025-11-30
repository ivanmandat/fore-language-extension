# DMSettingStep.RequestData

DMSettingStep.RequestData
-


# DMSettingStep.RequestData


## Синтаксис


RequestData: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestData наступает
 при запросе данных с сервера.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster.htm)
 с наименованием «dmMaster» (см. «[Пример
 создания компонента DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster_Example.htm)»).


// Получим текущий шаг
step = dmMaster.getSteps()[0];
// Зададим событие
step.RequestData.add(function(sender, args){
    console.log(args);
});
В результате выполнения примера было добавлено событие.


См. также:


[DMSettingsStep](DMSettingsStep.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

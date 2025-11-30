# DMSettingsStep.getStepData

DMSettingsStep.getStepData
-


# DMSettingsStep.getStepData


## Синтаксис


getStepData();


## Описание


Метод getStepData возвращает
 данные о текущем шаге.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster.htm)
 с наименованием «dmMaster» (см. «[Пример
 создания компонента DataMiningMaster](../../../Components/Metabase/DataMiningMaster/DataMiningMaster_Example.htm)»).


// Получим текущий шаг
step = dmMaster.getSteps()[0];
// Получим данные шага
step.getStepData();
// -> Object {MethodKind: "AssociationRules", Transactions: 0, Objects: 1, MinimumSupport: 10, UseSupportPercent: true…}
В результате выполнения примера были получены данные о текущем шаге.


См. также:


[DMSettingsStep](DMSettingsStep.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

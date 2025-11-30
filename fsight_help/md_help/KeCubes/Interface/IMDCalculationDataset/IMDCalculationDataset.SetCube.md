# IMDCalculationDataset.SetCube

IMDCalculationDataset.SetCube
-


# IMDCalculationDataset.SetCube


## Синтаксис


SetCube(Value: [ICubeModel](../ICubeModel/ICubeModel.htm));


## Параметры


Value. Куб, который необходимо
 добавить в качестве источника/приёмника данных в многомерный расчёт на
 сервере БД.


## Описание


Метод SetCube осуществляет настройку
 срезов и фактов источника/приёмника данных в соответствии со структурой
 куба, передаваемого посредством параметра Value.


## Комментарии


При вызове данного метода создаются [срезы](../IMDCalculationSlices/IMDCalculationSlices.htm)
 в многомерном расчете на сервере БД для каждого измерения куба, а так
 же создаются [показатели](../IMDCalculationFacts/IMDCalculationFacts.htm),
 связанные с фактами куба.


Данный метод автоматически вызывается при добавлении источников данных
 с помощью метода [IMDCalculationSources.AddCube](../IMDCalculationSources/IMDCalculationSources.AddCube.htm).


## Пример


Использование метода приведено в примере для [IMDCalculation.TimeDependencyEnabled](../IMDCalculation/IMDCalculation.TimeDependencyEnabled.htm).


См. также:


[IMDCalculationDataset](IMDCalculationDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

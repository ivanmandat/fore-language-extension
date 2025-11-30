# EaxPropertyBar.refreshDimSelections

EaxPropertyBar.refreshDimSelections
-


**


# EaxPropertyBar.refreshDimSelections


## Синтаксис


refreshDimSelections(dimKeys: Number|Array);


## Параметры


*dimKeys.* Необязательный параметр. Содержит ключи измерений, отметку которых нужно обновить. По умолчанию обновляются все.


## Описание


Метод refreshDimSelections** обновляет отметку в указанных измерениях.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxPropertyBar](../../../Components/Express/EaxPropertyBar/EaxPropertyBar.htm) с наименованием «eaxPropBar» (см. «[Пример совместного размещения EaxPropertyBar и EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Далее обновим отметки во всех измерениях:


// Обновим отметки во всех измерениях
eaxPropBar.refreshDimSelections();

После выполнения данного примера будут обновлены отметки во всех измерениях.


См. также:


[EaxPropertyBar](EaxPropertyBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

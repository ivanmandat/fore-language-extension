# MapChart.setMasterSettings

MapChart.setMasterSettings
-


# MapChart.setMasterSettings


## Синтаксис


setMasterSettings(arrSettings: Array);


## Параметры


arrSettings. Массив настроек карты.


## Описание


Метод setMasterSettings применяет указанные настройки карты.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Воспользуемся примером на странице описания метода [MapChart.refreshView](MapChart.refreshView.htm), заменив строку сценария


map.refreshView(state);

на следующий код:


map.setMasterSettings(state.getMetadata());

Результат выполнения метода будет тем же самым.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

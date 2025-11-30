# IMap.IsIndicatorsEnabled

IMap.IsIndicatorsEnabled
-


# IMap.IsIndicatorsEnabled


## Синтаксис


IsIndicatorsEnabled: Boolean;


## Описание


Свойство IsIndicatorEnabled
 определяет, отображаются ли метрики на карте.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Отображение метрик включено;


	- False. Отображение метрик
	 отключено.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Добавьте ссылки на системные сборки: Drawing, Map.


	Sub UserProc;

	Var

	    Map: IMap;

	    TerritoryInfo: IMapTerritoryInfo;

	    MapView: IMapView;

	Begin

	    // Получим карту

	    Map := UiMap1.Map;

	    // Отключим отображение
	 метрик на карте

	    Map.IsIndicatorsEnabled := False;

	    map.Refresh;

	End Sub UserProc;


После выполнения примера на карте будет отключено отображение метрик.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMap.Layers

IMap.Layers
-


# IMap.Layers


## Синтаксис


Layers: [IMapLayers](../IMapLayers/IMapLayers.htm);


## Описание


Свойство Layers возвращает коллекцию
 слоев карты.


## Комментарии


Свойство доступно только для чтения.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    TerritoryInfo: IMapTerritoryInfo;

	    MapView: IMapView;

	    MapLayers: IMapLayers;

	Begin

	    Map := UiMap1.Map;

	    MapView := Map.View;

	    TerritoryInfo := New DxMapTerritoryInfo.Create;

	    MapLayers := Map.Layers;

	    TerritoryInfo.Layer := MapLayers.FindByName("Regions");

	    MapView.TerritoryInfo := TerritoryInfo;

	End Sub Button1OnClick;


После выполнения примера для карты будет отображена расшифровка территорий
 слоя «Regions».


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

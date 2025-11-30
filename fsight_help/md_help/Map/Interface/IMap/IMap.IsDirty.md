# IMap.IsDirty

IMap.IsDirty
-


# IMap.IsDirty


## Синтаксис


IsDirty: Boolean;


## Описание


Свойство IsDirty определяет,
 присутствуют ли изменения в параметрах карты.


## Комментарии


Допустимые значения:


	- True. Параметры карты
	 были изменены;


	- False. Изменения отсутствуют.
	 Присвоение данному свойству значения False
	 позволит в дальнейшем определить наличие изменений.


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

	Begin

	    Map := UiMap1.Map;

	    MapView := Map.View;

	    TerritoryInfo := New DxMapTerritoryInfo.Create;

	    TerritoryInfo.Layer := Map.Layers.FindByName("Regions");

	    MapView.TerritoryInfo := TerritoryInfo;

	    Map.IsDirty := False;

	End Sub Button1OnClick;


После выполнения примера для карты будет отображена расшифровка территорий
 слоя «Regions». Свойству IsDirty
 будет присвоено значение False,
 чтобы можно было определить наличие дальнейших изменений параметров карты.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

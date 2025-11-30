# IMapLayers.Count

IMapLayers.Count
-


# IMapLayers.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 слоев в коллекции.


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

	    Layers: IMapLayers;

	    Layer: IMapLayer;

	    i: Integer;

	Begin

	    Map := UiMap1.Map;

	    Layers := Map.Layers;

	    i := Layers.Count;

	    Debug.WriteLine("Количество слоёв карты: " + i.ToString);

	    Layer := Layers.Item(0);

	    Debug.WriteLine("Первый слой из коллекции: " + Layer.Name);

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены количество слоёв карты
 и наименование первого слоя из коллекции.


См. также:


[IMapLayers](IMapLayers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

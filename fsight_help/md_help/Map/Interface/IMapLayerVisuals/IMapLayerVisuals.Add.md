# IMapLayerVisuals.Add

IMapLayerVisuals.Add
-


# IMapLayerVisuals.Add


## Синтаксис


Add(Visual: [IMapVisual](../IMapVisual/IMapVisual.htm)): Integer;


## Параметры


Visual - показатель, индекс
 которого необходимо получить.


## Описание


Метод Add возвращает индекс
 указанного показателя в коллекции.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта. Также должен быть реализован класс VisualDataAdapter,
 создающий динамический источник данных. Пример данного класса содержится
 в описании свойства [IMapVisual.DataAdapter](../IMapVisual/IMapVisual.DataAdapter.htm).


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    MapVisual: IMapVisual;

	    Layer: IMapLayer;

	    VisualName: String;

	    Index: Integer;

	Begin

	    Map := UiMap1.Map;

	    VisualName := "Regions";

	    MapVisual := Map.FindVisual(VisualName);

	    Layer := Map.Layers.FindByName(VisualName);

	    // Получим индекс указанного показателя в коллекции

	    Index := Layer.Visuals.Add(MapVisual);

	    Debug.WriteLine("Индекс показателя Regions: " + Index.ToString);

	End Sub Button1OnClick;


После выполнения примера в консоль будет выведен индекс показателя в
 коллекции показателей слоя.


См. также:


[IMapLayerVisuals](IMapLayerVisuals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

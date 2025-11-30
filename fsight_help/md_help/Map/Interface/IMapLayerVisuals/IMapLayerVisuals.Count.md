# IMapLayerVisuals.Count

IMapLayerVisuals.Count
-


# IMapLayerVisuals.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 показателей в коллекции.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта, содержащая показатели на слое «Regions».


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    Visuals: IMapLayerVisuals;

	    Vis: IMapVisual;

	    Count, i: Integer;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    Visuals := Layer.Visuals;

	    Count := Visuals.Count;

	    For i := 0 To Visuals.Count - 1 Do

	        Vis := Visuals.Item(i);

	        Debug.WriteLine("Всего показателей:" + Count.ToString);

	        Debug.WriteLine("Наименования показателей:");

	        Debug.WriteLine((i+1).ToString + ". " + Vis.Name);

	    End For;

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены количество и наименования
 показателей, расположенных на слое «Regions».


См. также:


[IMapLayerVisuals](IMapLayerVisuals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

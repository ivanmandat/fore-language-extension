# IMapTopobaseAttributeNames.Count

IMapTopobaseAttributeNames.Count
-


# IMapTopobaseAttributeNames.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 наименований атрибутов в коллекции.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    i: Integer;

	    s: String;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    i := Layer.AttributeNames.Count;

	    Debug.WriteLine("Количество наименований атрибутов слоя «Regions»: " + i.ToString);

	    s := Layer.AttributeNames.Item(0);

	    Debug.WriteLine("Наименование первого атрибута слоя «Regions»: " + s);

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены количество наименований
 атрибутов слоя «Regions» и наименование первого атрибута слоя «Regions».


См. также:


[IMapTopobaseAttributeNames](IMapTopobaseAttributeNames.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

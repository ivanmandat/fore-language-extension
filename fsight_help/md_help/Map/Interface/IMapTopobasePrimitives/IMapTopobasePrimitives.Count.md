# IMapTopobasePrimitives.Count

IMapTopobasePrimitives.Count
-


# IMapTopobasePrimitives.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 примитивов в коллекции.


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

	    M: IMap;

	    Layer: IMapLayer;

	    Shape: IMapTopobaseShape;

	    Primitiv: IMapTopobasePrimitives;

	    Prim: IMapTopobasePrimitive;

	    i: Integer;

	Begin

	    M := UiMap1.Map;

	    Layer := M.Layers.FindByName("Regions");

	    Shape := Layer.Shapes.Item(0);

	    Primitiv := Shape.Primitives;

	    i := Primitiv.Count;

	    Debug.WriteLine("Количество примитивов, из которых состоит первая область: " + i.ToString);

	    Prim := Primitiv.Item(0);

	    Debug.WriteLine("Наименование области, которой принадлежит примитив: " + Prim.Owner.Name);

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены:


	- количество примитивов, из которых состоит первая область;


	- наименование области, которой принадлежит примитив.


См. также:


[IMapTopobasePrimitives](IMapTopobasePrimitives.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

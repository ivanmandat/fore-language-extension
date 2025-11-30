# IMapTopobasePrimitive.Owner

IMapTopobasePrimitive.Owner
-


# IMapTopobasePrimitive.Owner


## Синтаксис


Owner: [IMapTopobaseShape](../IMapTopobaseShape/IMapTopobaseShape.htm);


## Описание


Свойство Owner возвращает область,
 которой принадлежит примитив.


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

	    Shape: IMapTopobaseShape;

	    Primitiv: IMapTopobasePrimitives;

	    Prim: IMapTopobasePrimitive;

	    Name: String;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    Shape := Layer.Shapes.Item(0);

	    Primitiv := Shape.Primitives;

	    Prim := Primitiv.Item(0);

	    Name := Prim.Owner.Name;

	    Debug.WriteLine("Наименование области, которой принадлежит первый примитив: " + Name);

	End Sub Button1OnClick;


После выполнения примера в консоль будет выведено наименование области,
 которой принадлежит первый примитив.


См. также:


[IMapTopobasePrimitive](IMapTopobasePrimitive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

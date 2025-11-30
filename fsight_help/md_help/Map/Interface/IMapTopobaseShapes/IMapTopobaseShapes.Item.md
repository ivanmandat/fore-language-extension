# IMapTopobaseShapes.Item

IMapTopobaseShapes.Item
-


# IMapTopobaseShapes.Item


## Синтаксис


Item(Index: Integer): [IMapTopobaseShape](../IMapTopobaseShape/IMapTopobaseShape.htm);


## Параметры


Index. Индекс области.


## Описание


Свойство Item возвращает область
 из коллекции по ее индексу.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента UiMap с наименованием UiMap1
 и компонента MapBox. К компоненту UiMap1 должна быть подключена карта,
 имеющая в свой структуре слой «Regions».


Добавьте ссылку на системную сборку Map.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Map: IMap;

    Layer: IMapLayer;

    Shapes: IMapTopobaseShapes;

    Shape: IMapTopobaseShape;

    i, c: Integer;

Begin

    Map := UiMap1.Map;

    Layer := Map.Layers.FindByName("Regions");

    Shapes := Layer.Shapes;

    c := Shapes.Count;

    For i := 0 To c - 1 Do

        Shape := Shapes.Item(i);

        Debug.WriteLine(Shape.Name + " (ID=" + Shape.Id.ToString + ')');

    End For;

End Sub Button1OnClick;


После выполнения примера в консоль среды разработки будут выведены наименования
 и числовые идентификаторы всех областей, доступных в слое «Regions» карты.


См. также:


[IMapTopobaseShapes](IMapTopobaseShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

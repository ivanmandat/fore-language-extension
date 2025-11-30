# IMapTopobaseShape.AttributeValue

IMapTopobaseShape.AttributeValue
-


# IMapTopobaseShape.AttributeValue


## Синтаксис


AttributeValue(AttributeName: String): Variant;


## Параметры


AttributeName. Наименование
 атрибута, значение которого необходимо определить.


## Описание


Свойство AttributeValue возвращает
 значение атрибута области по его наименованию.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта. У областей карты должны быть заданы атрибуты.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    M: IMap;

	    Layer: IMapLayer;

	    Shape: IMapTopobaseShape;

	    Primitiv: IMapTopobasePrimitives;

	    v: Variant;

	    i: Integer;

	    s: String;

	Begin

	    M := UiMap1.Map;

	    Layer := M.Layers.FindByName("Regions");

	    Shape := Layer.Shapes.Item(0);

	    // Получим значение атрибута области по его наименованию

	    v := Shape.AttributeValue("Attribute1");

	    Debug.WriteLine("Тип данных значения атрибута: " + v.VarType.ToString);

	    // Определим идентификатор области

	    i := Shape.Id;

	    Debug.WriteLine("Идентификатор области: " + i.ToString);

	    // Определим наименование области

	    s := Shape.Name;

	    Debug.WriteLine("Наименование области: " + s);

	    // Изменим описание области

	    Shape.Description := "Самая большая область";

	    // Получим слой, которому принадлежит область

	    s := Shape.Owner.Name;

	    Debug.WriteLine("Наименование слоя карты: " + s);

	    // Определим количество примитивов, из которых состоит первая область

	    Primitiv := Shape.Primitives;

	    i := Primitiv.Count;

	    Debug.WriteLine("Количество примитивов в коллекции: " + i.ToString);

	End Sub Button1OnClick;


После выполнения примера в консоль будут выведены:


	- тип данных значения атрибута первой области;


	- идентификатор и наименование области;


	- наименование слоя карты;


	- количество примитивов в коллекции.


Для первой области будет изменено описание на заданное.


См. также:


[IMapTopobaseShape](IMapTopobaseShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMapTopobaseShapes.ItemByKey

IMapTopobaseShapes.ItemByKey
-


# IMapTopobaseShapes.ItemByKey


## Синтаксис


ItemByKey(Key: Integer): [IMapTopobaseShape](../IMapTopobaseShape/IMapTopobaseShape.htm);


## Параметры


Key. Ключ
 области.


## Описание


Метод ItemByKey возвращает параметры
 области по ключу.


## Комментарии


Метод возвращает значение Null,
 если область с указанным ключом отсутствует.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента UiMap с наименованием UiMap1
 и компонента MapBox. К компоненту UiMap1 должна быть подключена карта,
 имеющая в свой структуре слой «Regions». В рамках этого слоя должна иметься
 область с идентификатором 1001.


Добавьте ссылку на системную сборку Map.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Map: IMap;

    Layer: IMapLayer;

    Shape: IMapTopobaseShape;

Begin

    Map := UiMap1.Map;

    Layer := Map.Layers.FindByName("Regions");

    Shape := Layer.Shapes.ItemByKey(1001);

    If Not IsNull(Shape) Then

        Debug.WriteLine("Область: " + Shape.Name + " (ID=" + Shape.Id.ToString + ')');

        Debug.WriteLine("Описание: " + Shape.Description);

        Debug.WriteLine("Подпись: " + Shape.Text);

        Debug.WriteLine("Количество примитивов, формирующих изображение области: " + Shape.Primitives.Count.ToString);

    End If;

End Sub Button1OnClick;


После выполнения примера в консоль среды разработки будут выведены информация
 об области с указанным идентификатором.


См. также:


[IMapTopobaseShapes](IMapTopobaseShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

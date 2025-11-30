# IMapIconScale.ApplyEx

IMapIconScale.ApplyEx
-


# IMapIconScale.ApplyEx


## Синтаксис


ApplyEx(Value: Variant): [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Параметры


Value. Значение, к которому
 необходимо применить шкалу.


## Описание


Метод ApplyEx применяет шкалу
 к указанному значению.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, ImageBox, UiMap с наименованиями Button1, MapBox1, ImageBox1 и
 UiMap1 соответственно. UiMap1 является источником данных для MapBox1.
 К компоненту UiMap1 должна быть подключена карта, на слое «Regions» которой
 расположен только пиктографический показатель, использующий шкалу.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    ImageVisual: IMapImageVisual;

	    ImageProp: IMapVisualIconProperty;

	    Scale: IMapIconScale;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    ImageVisual := Layer.Visuals.Item(0) As IMapImageVisual;

	    ImageProp := ImageVisual.Image;

	    Scale := ImageProp.Scale;

	    ImageBox1.Image := Scale.ApplyEx(49);

	End Sub Button1OnClick;


После выполнения примера в компонент ImageBox будет загружено изображение,
 соответствующее указанному значению шкалы.


См. также:


[IMapIconScale](IMapIconScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

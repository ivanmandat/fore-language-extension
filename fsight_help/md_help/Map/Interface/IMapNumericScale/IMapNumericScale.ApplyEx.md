# IMapNumericScale.ApplyEx

IMapNumericScale.ApplyEx
-


# IMapNumericScale.ApplyEx


## Синтаксис


ApplyEx(Value: Variant): Double;


## Параметры


Value. Значение, к которому
 необходимо применить шкалу.


## Описание


Метод ApplyEx применяет шкалу
 к указанному значению.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта, на слое «Regions» которой расположен только столбиковый
 показатель, использующий числовую шкалу для определения высоты.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    BarVisual: IMapBarVisual;

	    NumProp: IMapVisualNumericProperty;

	    Scale: IMapNumericScale;

	    s: Double;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    BarVisual := Layer.Visuals.Item(0) As IMapBarVisual;

	    NumProp := BarVisual.Height;

	    Scale := NumProp.Scale;

	    s := Scale.ApplyEx(55);

	End Sub Button1OnClick;


После выполнения примера в переменной s будет содержаться значение,
 соответствующее указанному значению шкалы.


См. также:


[IMapNumericScale](IMapNumericScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

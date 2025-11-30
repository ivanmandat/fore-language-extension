# IMapNumericScale.AutoSetup

IMapNumericScale.AutoSetup
-


# IMapNumericScale.AutoSetup


## Синтаксис


AutoSetup(


Layer: [IMapLayer](../IMapLayer/IMapLayer.htm);


DataAdapter:Object;


Values: Array;


Count: Integer;


Linear: Boolean);


## Параметры


Layer. Слой, содержащий показатель;


DataAdapter. Источник данных,
 в соответствии с которым будет производиться настройка шкалы;


Values. Массив вещественных
 чисел для значений делений шкалы;


Count. Количество делений шкалы;


Linear. Параметр, определяющий
 тип настройки.


## Описание


Метод AutoSetup осуществляет
 автоматическую настройку шкалы.


## Комментарии


Допустимые значения параметра Linear:


	- True. Линейный
	 метод настройки;


	- False. Метод
	 настройки, разбивающий диапазоны на равные интервалы.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта. Также должен быть реализован класс VisualDataAdapter,
 создающий динамический источник данных. Пример данного класса содержится
 в описании свойства [IMapVisual.DataAdapter](../IMapVisual/IMapVisual.DataAdapter.htm).


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    BarVisual: IMapBarVisual;

	    Height: IMapVisualNumericProperty;

	    Scale: IMapNumericScale;

	    Vals: Array[3] Of Double;

	Begin

	    Map := UiMap1.Map;

	    Layer := Map.Layers.FindByName("Regions");

	    BarVisual := Layer.Visuals.AddBarVisual;

	    BarVisual.DataAdapter := New VisualDataAdapter.Create As IMapDynamicDataAdapter;

	    Height := BarVisual.Height;

	    Height.DataAdapter := BarVisual.DataAdapter;

	    Height.Dependent := True;

	    Scale := New DxMapNumericScale.Create As IMapNumericScale;

	    Vals[0] := 2;

	    Vals[1] := 4;

	    Vals[2] := 6;

	    Scale.AutoSetup(Layer, BarVisual.DataAdapter, Vals, 3, True);

	    Height.Scale := Scale;

	End Sub Button1OnClick;


После выполнения примера на слой «Regions» будет добавлен столбиковый
 показатель, для определения высоты которого используется шкала. Шкала
 будет настроена автоматически.


См. также:


[IMapNumericScale](IMapNumericScale.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

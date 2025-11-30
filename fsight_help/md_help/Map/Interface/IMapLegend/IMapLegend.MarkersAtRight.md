# IMapLegend.MarkersAtRight

IMapLegend.MarkersAtRight
-


# IMapLegend.MarkersAtRight


## Синтаксис


MarkersAtRight: Boolean;


## Описание


Свойство MarkersAtRight определяет,
 отображать ли маркеры в легенде справа.


## Комментарии


Допустимые значения:


	- True. Отображать маркеры
	 справа;


	- False. Отображать маркеры
	 слева.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта, содержащая только картографический показатель.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Map: IMap;

	    Layer: IMapLayer;

	    Legend: IMapLegend;

	Begin

	    Map := UiMap1.Map;

	    Legend := New DxMapLegend.Create As IMapLegend;

	    Map.View.Legend := Legend;

	    Legend.Visible := True;

	    // Прекратим отрисовку легенды

	    Legend.BeginUpdate;

	    Layer := Map.Layers.FindByName("Regions");

	    Legend.Visual := Layer.Visuals.Item(0);

	    // Определим признак отображения маркера справа от надписи

	    Legend.MarkersAtRight := True;

	    // Зададим тип маркера

	    Legend.MarkerType := MapLegendMarkerType.Rhombus;

	    // Возобновим отрисовку легенды

	    Legend.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера для картографического показателя будет отображена
 легенда, отображающая ромбовидные маркеры справа:


![](IMapLegend_MarkerType.gif)


См. также:


[IMapLegend](IMapLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

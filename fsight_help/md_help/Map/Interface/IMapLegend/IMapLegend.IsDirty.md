# IMapLegend.IsDirty

IMapLegend.IsDirty
-


# IMapLegend.IsDirty


## Синтаксис


IsDirty: Boolean;


## Описание


Свойство IsDirty определяет,
 присутствуют ли изменения в параметрах легенды.


## Комментарии


Допустимые значения:


	- True. Присутствуют изменения в
	 параметрах легенды;


	- False. Изменения в
	 параметрах легенды отсутствуют. Присвоение свойству значения False позволит в дальнейшем определить
	 наличие изменений.


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

	    Legend.BeginUpdate;

	    Layer := Map.Layers.FindByName("Regions");

	    Legend.Visual := Layer.Visuals.Item(0);

	    Legend.NoDataElementFirst := True;

	    Legend.NoDataElementVisible := True;

	    Legend.EndUpdate;

	    // Зададим признак наличия изменений в легенде

	    Legend.IsDirty := False;

	End Sub Button1OnClick;


После выполнения примера для картографического показателя будет отображена
 легенда. Свойству IsDirty будет
 присвоено значение False, чтобы
 можно было определить наличие дальнейших изменений параметров легенды.


См. также:


[IMapLegend](IMapLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

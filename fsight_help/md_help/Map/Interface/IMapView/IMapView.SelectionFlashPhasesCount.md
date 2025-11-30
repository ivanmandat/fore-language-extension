# IMapView.SelectionFlashPhasesCount

IMapView.SelectionFlashPhasesCount
-


# IMapView.SelectionFlashPhasesCount


## Синтаксис


SelectionFlashPhasesCount: Integer;


## Описание


Свойство SelectionFlashPhasesCount
 определяет количество фаз мигания подсветки территорий.


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

	    MapView: IMapView;

	Begin

	    MapView := UiMap1.Map.View;

	    // Определим признак использования мигания подсветки

	    MapView.UseSelectionFlash:= True;

	    // Зададим количество фаз мигания

	    MapView.SelectionFlashPhasesCount := 6;

	    // Зададим интервал мигания за одну фазу

	    MapView.SelectionFlashTimerInterval := 10;

	    // Зададим режим выделения территории карты

	    MapView.SelectionMode := MapViewSelectionMode.Border;

	End Sub Button1OnClick;


После выполнения примера будет использоваться мигание при подсветке
 территорий с интервалом в десять миллисекунд на одну фазу. Одно мигание
 будет разделено на шесть фаз. Для карты будет установлен режим выделения
 границ территорий:


![](../../Enums/MapViewSelectionMode_2.gif)


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

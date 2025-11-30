# IMapView.UseProportionality

IMapView.UseProportionality
-


# IMapView.UseProportionality


## Синтаксис


UseProportionality: Boolean;


## Описание


Свойство UseProportionality
 определяет, будет ли соблюдаться пропорциональность ширины и высоты карты.


## Комментарии


Допустимые значения:


	- True - пропорциональность
	 соблюдается;


	- False - пропорциональность
	 не соблюдается.


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

	    // Определим режим интерактивности карты

	    MapView.WndMode := MapViewWndMode.ZoomIn;

	    // Определим, соблюдается ли пропорциональность ширины и высоты карты

	    MapView.UseProportionality:= False;

	    // Определим, используются ли полосы прокрутки

	    MapView.UseScrollBars := True;

	    // Определим, используются ли всплывающие подсказки

	    MapView.UseToolTips:= True;

	End Sub Button1OnClick;


После выполнения примера:


	- карта перейдет в режим увеличения масштаба;


	- для карты не будет соблюдаться пропорциональность ширины и высоты;


	- для карты будут использоваться полосы прокрутки;


	- для карты будут использоваться всплывающие подсказки.


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

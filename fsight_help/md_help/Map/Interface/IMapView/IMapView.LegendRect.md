# IMapView.LegendRect

IMapView.LegendRect
-


# IMapView.LegendRect


## Синтаксис


LegendRect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);


## Описание


Свойство LegendRect определяет
 область карты, в которой будет располагаться легенда. Область задается
 в виде прямоугольника, размеры которого изменяются в пределах от [0..1].


## Комментарии


Для определения легенды карты используйте свойство [IMapView.Legend](IMapView.Legend.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 MapBox, UiMap с наименованиями Button1, MapBox1 и UiMap1 соответственно.
 UiMap1 является источником данных для MapBox1. К компоненту UiMap1 должна
 быть подключена карта.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки:
 Drawing, ExtCtrls, Forms, Map.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    LegRect: IGxRectF;

	Begin

	    LegRect := New GxRectF.Create(0.7, 0.8, 1, 1);

	    UiMap1.Map.View.LegendRect := LegRect;

	End Sub Button1OnClick;


При нажатии на кнопку легенда будет размещена в нижнем правом углу карты.


См. также:


[IMapView](IMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

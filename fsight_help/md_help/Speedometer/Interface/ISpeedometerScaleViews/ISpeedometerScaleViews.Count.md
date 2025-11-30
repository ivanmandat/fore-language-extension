# ISpeedometerScaleViews.Count

ISpeedometerScaleViews.Count
-


# ISpeedometerScaleViews.Count


## Синтаксис


Count: Double;


## Описание


Свойство Count определяет количество
 стилей оформления шкал спидометра.


## Комментарии


По умолчанию в компоненте создан один стиль оформления шкал спидометров.
 Если в компоненте используется больше одной шкалы, то для каждой можно
 настроить свое оформление. Для этого необходимо в данном свойстве указать
 количество стилей оформления, которые будут созданы. Для всех шкал, для
 которых не создан отдельный стиль оформления, будет применяться стиль
 оформления первой шкалы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента SpeedometerBox
 с наименованием «SpeedometerBox1».


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    s: ISpeedometer;

	    v: ISpeedometerView;

	    ScaleView, ScaleView1:ISpeedometerScaleView;

	Begin

	    s := SpeedometerBox1.Speedometer;

	    v := s.View;

	    s.BeginUpdate;

	    s.Scales.Count := 2;

	    v.ScaleViews.Count :=2;

	    ScaleView := v.ScaleViews.Item(0);

	    ScaleView1 := v.ScaleViews.Item(1);

	    //Первое оформление

	    ScaleView.StartAngle:= 0;

	    ScaleView.DeltaAngle:= 180;

	    //Второе оформление

	    ScaleView1.FontColor:= GxColor.FromName("Green");

	    ScaleView1.TextPlacement:= SpeedometerTextPlacementType.OutsideRotated;

	    s.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компоненте «SpeedometerBox1»
 будут отображаться два спидометра. Для каждого спидометра будет настроено
 свое оформление.


![](ISpeedometerScaleViews_Count.gif)


См. также:


[ISpeedometerScaleViews](ISpeedometerScaleViews.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

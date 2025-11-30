# Chart3DBox.OnSeriesDoubleClick

Chart3DBox.OnSeriesDoubleClick
-


# Chart3DBox.OnSeriesDoubleClick


## Синтаксис


Sub OnSeriesDoubleClick(Sender:
 Object; Args: [IScene3DSeriesClickEventArgs](../../Interface/IScene3DSeriesClickEventArgs/IScene3DSeriesClickEventArgs.htm));


Begin


//Набор операторов


End Sub
 OnSeriesDoubleClick;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие.


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnSeriesDoubleClick
 наступает при двойном щелчке кнопкой мыши по ряду сцены на форме.


## Пример


	Sub Chart3DBox1OnSeriesDoubleClick(Sender: Object; Args: IScene3DSeriesClickEventArgs);

	Begin

	    text := "";

	    For i := 0 To Args.SeriesCount - 1 Do

	        For j := 0 To Args.PointsCount(i) - 1 Do

	            text := text + "SerieName = " + Args.SerieName(i) + " PointName = " + Args.PointName(i,j);

	        End For;

	    End For;

	End Sub Chart3DBox1OnSeriesDoubleClick;


При двойном щелчке кнопкой мыши по ряду сцены в заголовок формы будут
 выведены наименования рядов и точек, попавших в выделение.


См. также:


[Chart3DBox](Chart3DBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

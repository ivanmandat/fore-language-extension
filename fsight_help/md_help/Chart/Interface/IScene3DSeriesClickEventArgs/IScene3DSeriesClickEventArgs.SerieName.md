# IScene3DSeriesClickEventArgs.SerieName

IScene3DSeriesClickEventArgs.SerieName
-


# IScene3DSeriesClickEventArgs.SerieName


## Синтаксис


SerieName(Index: Integer): String;


## Параметры


Index -
 индекс выделенного графического объекта сцены.


## Описание


Свойство SerieName возвращает
 имя выделенного графического объекта.


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


При двойном щелчке кнопкой мыши по точке объекта в заголовок формы будут
 выведены наименования объектов и их точек, попавших в выделение.


См. также:


[IScene3DSeriesClickEventArgs](IScene3DSeriesClickEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IScene3DSeriesClickArgs.PointsCount

IScene3DSeriesClickArgs.PointsCount
-


# IScene3DSeriesClickArgs.PointsCount


## Синтаксис


PointsCount(Index: Integer): Integer;


## Параметры


Index - индекс выделенного
 ряда сцены.


## Описание


Свойство PointsCount возвращает
 число точек, попавших в выделение.


## Пример


	Sub UserProc(Args : IScene3DSeriesClickArgs);

	Var

	    str : string;

	    i, j : integer;

	Begin

	    str := "";

	    WinApplication.InformationBox("SeriesCount = " + Args.SeriesCount.ToString);

	    For i := 0 To Args.SeriesCount - 1 Do

	        str := "Serie: " + Args.SerieName(i) + " ";

	        For j := 0 To Args.PointsCount(i) - 1 Do

	            str := str + "Point " + Args.PointName(i, j) + ", ";

	        End For;

	        str := str + #13 + #10;

	    End For;

	    WinApplication.InformationBox(str);

	End Sub UserProc;


Данный модуль определен для обработки события OnSeriesDoubleClick (двойной
 щелчок мыши по ряду сцены в регламентном отчёте). При наступлении события
 будут выданы сообщения, содержащие информацию о количестве выделенных
 рядов, именах выделенных рядов и точек.


См. также:


[IScene3DSeriesClickArgs](IScene3DSeriesClickArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

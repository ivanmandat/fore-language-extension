# IScene3DSeriesClickArgs

IScene3DSeriesClickArgs
-


# IScene3DSeriesClickArgs


## Описание


Интерфейс IScene3DSeriesClickArgs
 возвращает описание графических объектов, для которых наступило событие
 OnSeriesDoubleClick (двойной щелчок мыши по ряду сцены в регламентном
 отчёте), которое возвращает объект класса [Chart3DSerieClickArg](../../Class/Chart3DSerieClickArg/Chart3DSerieClickArg.htm).


## Комментарии


Событие OnSeriesDoubleClick
 генерирует метод [IPrxScene3D.DoSerieClick](KeReport.chm::/Interface/IPrxScene3D/IPrxScene3D.DoSerieClick.htm).


Интерфейс IScene3DSeriesClickArgs
 работает только с универсальной коллекцией рядов сцены, в которую входят
 все объекты сцены (сферы, плоскости, поверхности и т.д.).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [PointName](IScene3DSeriesClickArgs.PointName.htm)
		 Свойство PointName
		 возвращает имя выделенной точки ряда.


		 ![](../../Property_Image.gif)
		 [PointsCount](IScene3DSeriesClickArgs.PointsCount.htm)
		 Свойство PointsCount
		 возвращает число точек, попавших в выделение.


		 ![](../../Property_Image.gif)
		 [SerieName](IScene3DSeriesClickArgs.SerieName.htm)
		 Свойство SerieName
		 возвращает имя выделенного ряда сцены.


		 ![](../../Property_Image.gif)
		 [SeriesCount](IScene3DSeriesClickArgs.SeriesCount.htm)
		 Свойство SeriesCount
		 возвращает количество рядов, попавших в выделение.


См. также:


[Интерфейсы сборки Chart](../Interface_build_Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

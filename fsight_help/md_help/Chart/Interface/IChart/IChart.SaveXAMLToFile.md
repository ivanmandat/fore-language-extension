# IChart.SaveXAMLToFile

IChart.SaveXAMLToFile
-


# IChart.SaveXAMLToFile


## Синтаксис


SaveXAMLToFile(FileName: String; Rect: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm);
 [Scale: [IGxRectF](ModDrawing.chm::/Interface/IGxRectF/IGxRectF.htm)
 = Null]);


## Параметры


FileName. Путь, имя и тип файла;


Rect. Координаты и размер диаграммы
 (в мм);


Scale. Масштаб диаграммы. По
 умолчанию равен 1.0.


## Описание


Метод SaveXAMLToFile выгружает
 диаграмму в XAML-файл (*.xaml).


## Пример


В рассматриваемом примере предполагается существование объекта Chart типа IChart.


	Sub UserProc;

	Var

	    Chart: IChart;

	    Rect: IGxRectF;

	Begin

	    Rect := Chart.ChartArea.Rectangle;

	    Chart.SaveXAMLToFile("c:\Temp\Scene.xaml", Rect);

	End Sub UserProc;


После выполнения примера диаграмма будет выгружена в файл Scene.xaml.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

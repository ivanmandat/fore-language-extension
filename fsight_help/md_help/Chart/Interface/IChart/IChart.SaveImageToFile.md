# IChart.SaveImageToFile

IChart.SaveImageToFile
-


# IChart.SaveImageToFile


## Синтаксис


SaveImageToFile(FileName: String; Width: Integer;
 Height; Dpi: Double);


## Параметры


FileName. Путь, имя и тип файла;


Width. Ширина картинки диаграммы
 в пикселях;


Height. Высота картинки диаграммы
 в пикселях;


Dpi. Разрешение картинки в
 пикселях.


## Описание


Метод SaveImageToFile позволяет
 сохранять картинку диаграммы в указанный файл.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


	Sub Save;

	Var

	    Chart : IChart;

	Begin

	    Chart.SaveImageToFile("c:\1.bmp", 300,300, 96);

	End Sub Save;


После выполнения примера картинка диаграммы будет сохранена в указанный
 файл с заданными параметрами.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

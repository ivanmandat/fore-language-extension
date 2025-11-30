# ChartBackgroundType

ChartBackgroundType
-


# ChartBackgroundType


## Описание


Перечисление ChartBackgroundType
 содержит типы заливки компонентов диаграммы (область диаграммы, легенда,
 ряд данных и т.д.).


Используется следующими свойствами и методами:


	- [IChartBackgroundInfo.Type](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.Type.htm)


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Нет фона.


		 1
		 Color. Сплошной цвет.
		 При выборе данного типа следует задать базовый цвет: [IChartBackgroundInfo.Color](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.Color.htm).


		 2
		 Gradient. Градиентная
		 заливка. При выборе данного типа следует задать начальный ([IChartBackgroundInfo.Color](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.Color.htm))
		 и конечный цвет градиента ([IChartBackgroundInfo.GradientColor](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.GradientColor.htm)),
		 угол градиента ([IChartBackgroundInfo.GradientAngle](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.GradientAngle.htm)).


		 3
		 Picture. С изображением.
		 При выборе данного типа следует задать рисунок ([IChartBackgroundInfo.Image](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.Image.htm))
		 и положение рисунка ([IChartBackgroundInfo.ImageDrawStyle](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.ImageDrawStyle.htm)).


		 4
		 Hatch. Со штриховкой.
		 При выборе данного типа следует задать цвет заливки ([IChartBackgroundInfo.Color](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.Color.htm))
		 и параметры штриховки ([IChartBackgroundInfo.HatchStyle](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.HatchStyle.htm)).


		 5
		 Glamour. Глянцевый.
		 При выборе данного типа следует задать только базовый цвет: [IChartBackgroundInfo.Color](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.Color.htm).
		 Данный тип заливки применим только для ряда данных (столбик или
		 область).


		 6
		 Alternate. С чередованием
		 цветов вдоль оси Y. При выборе данного типа следует задать первый
		 цвет, ближний от оси X ([IChartBackgroundInfo.Color](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.Color.htm))
		 и второй цвет - дальний от оси X ([IChartBackgroundInfo.GradientColor](../Interface/IChartBackgroundInfo/IChartBackgroundInfo.GradientColor.htm)).


		 7
		 Custom. Reserved /
		 зарезервировано.


		 8
		 Automatic. Автоматическая
		 заливка.


		 10
		 AutoGradient. Автоматическая
		 градиентная заливка. Неоднородная заливка с базовым цветом.


## Комментарии


Заливка доступна для следующих типов рядов:


	- Столбиковый;


	- Сектор;


	- Ряд с областями;


	- Линейный ряд в трехмерном виде.


Для точек и штрихов доступны заливки только Color
 и Hatch.


См. также:


[Перечисления сборки Chart](Enums_built_Chart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

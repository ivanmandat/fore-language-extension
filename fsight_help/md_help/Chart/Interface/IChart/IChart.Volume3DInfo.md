# IChart.Volume3DInfo

IChart.Volume3DInfo
-


# IChart.Volume3DInfo


## Синтаксис


Volume3DInfo: [IChartVolume3DInfo](../IChartVolume3DInfo/IChartVolume3DInfo.htm);


## Описание


Свойство Volume3DInfo позволяет
 определять параметры объемной диаграммы.


## Комментарии


Работа с доступными параметрами осуществляется посредством интерфейса
 IChartVolume3DInfo.


## Пример


В рассматриваемом примере предполагается, что существует объект Chart типа IChart.


Диаграмма должна быть объемного вида. Для преобразования диаграммы к
 данному виду следует выполнить команду:


«Chart.DisplayVolume3D := True;».


	Sub VolumeInfo;

	Var

	    Chart: IChart;

	Begin

	    Chart.Volume3DInfo.SceneDepthCoef:= 6;

	End Sub VolumeInfo;


После выполнения примера глубина объемной диаграммы увеличится в 6 раз.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IChart.DisplayMode

IChart.DisplayMode
-


# IChart.DisplayMode


## Синтаксис


		DisplayMode: [ChartDisplayMode](../../Enums/ChartDisplayMode.htm);


## Описание


Свойство DisplayMode определяет
 режим отображения диаграммы.


## Комментарии


[Режим отображения](../../Enums/ChartDisplayMode.htm) диаграммы
 зависит от типа диаграммы.


## Пример


Для выполнения примера в репозитории необходимо наличие формы, содержащей
 компоненты:


	- ChartBox с идентификатором
	 ChartBox1;


	- UiChart с идентификатором
	 UiChart1, который является источником данных для ChartBox1.


Добавьте ссылку на системную сборку Chart.


					Sub Form_FormOnShow(Sender: Object; Args: IEventArgs);

		Var

		    Chart: IChart;

		    Serie: IChartSerieBase;

		Begin

		    //Зададим количество точек ряда

		    UiChart1.PointCount := 5;

		    //Зададим количество рядов диаграммы

		    UiChart1.SerieCount := 15;

		    //Зададим тип диаграммы

		    UiChart1.Style := ChartStyle.Mixed;

		    //Зададим режим отображения диаграммы

		    UiChart1.DisplayMode := ChartDisplayMode.ModeManhattan3D;

		    //Зададим объемный вид диаграммы

		    UiChart1.DisplayVolume3D := True;

		    Chart := UiChart1.Chart;

		    Chart.DisplayMode := ChartDisplayMode.ModeManhattan3D;

		    //Зададим отображение оси Z

		    Chart.DisplayZAxis := True;

		    //Выделим ось Z на диаграмме

		    Chart.AxisZ.Selected := True;

		    //Получим ряды диаграммы

		    Serie := Chart.Series.DefaultSerie;

		    //Включим
		 отображение подписей данных

		    Serie.LabelsEnabled := True;

		End Sub Form_FormOnShow;


		//Зададим
		 событие для построения диаграммы

		{ OnGetDataValue }

		Sub UiChart1OnGetDataValue(Sender: Object; Args: IUiChartGetDataValueEventArgs);

		Begin

		    Args.Result := True;

		    //Зададим количество точек и рядов диаграммы

		    Args.Value := Args.PointIndex + Args.SerieIndex + 5;

		End Sub UiChart1OnGetDataValue;


		//Зададим
		 событие для создания групп диаграммы

		{ OnGetGroupCount }

		Sub UiChart1OnGetGroupCount(Sender: Object; Args: IUiChartGroupCountEventArgs);

		Begin

		   //Зададим
		 количество групп диаграммы

		    Args.Result := 5;

		    Debug.WriteLine("OnGetGroupCount: " + Args.Result.ToString);

		End Sub UiChart1OnGetGroupCount;


		//Зададим
		 событие для присвоения наименований группам диаграммы

		{ OnGetGroupName }

		Sub UiChart1OnGetGroupName(Sender: Object; Args: IUiChartGroupNameEventArgs);

		Begin

		   //Присвоим
		 наименования группам диаграммы

		    Args.Result := "GroupName " + Args.GroupIndex.ToString;

		    Debug.WriteLine("OnGetGroupName: " + Args.GroupIndex.ToString);

		End Sub UiChart1OnGetGroupName;


		//Зададим
		 событие для присвоения индексов родительским рядам диаграммы

		{ OnGetParentSerieIndex }

		Sub UiChart1OnGetParentSerieIndex(Sender: Object; Args: IUiChartParentSerieIndexEventArgs);

		Begin

		    If Args.SerieIndex < 5 Then

		       Args.Result := -1;

		    End If;

		   //Присвоим
		 индексы родительским рядам диаграммы

		    Select Case Args.SerieIndex

		        Case 3, 6, 9, 12: Args.Result := 0;

		        Case 4, 7, 10, 13: Args.Result := 1;

		        Case 5, 8, 11, 14: Args.Result := 2;

		    End Select;

		End Sub UiChart1OnGetParentSerieIndex;


		//Зададим
		 событие для присвоения индексов группам рядов диаграммы

		{ OnGetSerieGroupIndex }

		Sub UiChart1OnGetSerieGroupIndex(Sender: Object; Args: IUiChartSerieGroupIndexEventArgs);

		Begin

		   //Присвоим
		 индексы группам рядов диаграммы

		    Select Case Args.SerieIndex //5 groups

		        Case 0, 1, 2: Args.Result := 0;

		        Case 3, 4, 5: Args.Result := 1;

		        Case 6, 7, 8: Args.Result := 2;

		        Case 9, 10, 11: Args.Result := 3;

		        Case 12, 13, 14: Args.Result := 4;

		    End Select;

		End Sub UiChart1OnGetSerieGroupIndex;


		//Зададим
		 событие для присвоения наименований группам рядов диаграммы

		{ OnGetSerieGroupName }

		Sub UiChart1OnGetSerieGroupName(Sender: Object; Args: IUiChartSerieGroupNameEventArgs);

		Begin

		   //Присвоим
		 наименования группам рядов диаграммы

		    Args.Result := "SerieGroupName " + Args.SerieIndex.ToString;

		    Debug.WriteLine("OnGetSerieGroupName: " + Args.SerieIndex.ToString);

		End Sub UiChart1OnGetSerieGroupName;


		//Зададим
		 событие для присвоения наименований рядам диаграммы

		{ OnGetSerieName }

		Sub UiChart1OnGetSerieName(Sender: Object; Args: IUiChartSerieNameEventArgs);

		    Begin

		   //Присвоим
		 наименования рядам диаграммы

		    Args.Result := "Serie " + Args.SerieIndex.ToString;

		    Debug.WriteLine("OnGetSerieName: " + Args.SerieIndex.ToString);

		End Sub UiChart1OnGetSerieName;


		//Зададим
		 событие для присвоения наименования точкам диаграммы

		{ OnGetPointName }

		Sub UiChart1OnGetPointName(Sender: Object; Args: IUiChartPointNameEventArgs);

		Begin

		   //Присвоим
		 наименование точкам диаграммы

		    Args.Result := "Point " + Args.PointIndex.ToString;

		    Debug.WriteLine("OnGetPointName: " + Args.PointIndex.ToString);

		End Sub UiChart1OnGetPointName;


		//Зададим
		 событие для использования относительных рядов

		{ OnGetRelativeSerieEnabled }

		Sub UiChart1OnGetRelativeSerieEnabled(Sender: Object; Args: IUiChartRelativeSerieEnabledEventArgs);

		Begin

		   //Будем
		 использовать относительные ряды

		    Args.Result := True;

		End Sub UiChart1OnGetRelativeSerieEnabled;


После открытия формы в компоненте ChartBox
 отрисуется объемная гистограмма с выделенной осью Z. На диаграмме будут
 присутствовать:


	- 15 рядов с подписями данных;


	- 5 точек ряда с наименованием Point <номер точки>;


	- 5 групп с наименованием GroupName <номер группы>;


	- 3 группы рядов с наименованием SerieGroupName <номер группы
	 ряда>.


![](../../class/uichart/Manhattan.png)


В окно консоли будут выводиться параметры возникающих событий.


См. также:


[IChart](IChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

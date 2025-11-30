# IprxVisualizer.Update

IprxVisualizer.Update
-


# IPrxVisualizer.Update


## Синтаксис


Update(Value: Boolean);


## Параметры


Value. Значение, определяющее,
 будет ли перерисован визуализатор.


## Описание


Метод Update определяет, будет
 ли перерисован визуализатор.


## Комментарии


Допустимые значения параметра Value:


	- True. Визуализатор будет
	 перерисован;


	- False. Визуализатор
	 не будет перерисован.


Для определения типа визуализатора в регламентном отчете используйте
 [IPrxVisualizer.EaxVisualizer](IPrxVisualizer.EaxVisualizer.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчёта. Отчёт содержит карту в качестве визуализатора. В любой ячейке
 содержится гиперссылка, при щелчке по которой выполняется [процедура/функция](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Hyperlink.htm#run_proc_func)
 «SetColor» в модуле с наименованием
 «SetColor». Реализация процедуры
 представлена ниже.


Добавьте ссылки на системные сборки: Drawing, Express, Report, Tab,
 Visualizators.


			Public Sub SetColor;

Var

    ActiveSheet: IPrxTable;

    TabObj: ITabObject;

    RepVis: IPrxVisualizer;

    MapChart: IEaxMapChart;

    VisMapChart: IVZMapChart;

Begin

    ActiveSheet := PrxReport.ActiveReport.ActiveSheet As IPrxTable;

    TabObj := ActiveSheet.TabSheet.Objects.Item(0);

    RepVis := TabObj.Extension As IPrxVisualizer;

    MapChart := RepVis.EaxVisualizer As IEaxMapChart;

    VisMapChart := MapChart.MapChart;

    VisMapChart.Background := New GxSolidBrush.Create(GxColor.FromName("Red"));

    RepVis.Update(True);

End Sub setColor;


После выполнения примера при нажатии по гиперссылке изменится цвет фона
 визуализатора на красный.


См. также:


[IPrxVisualizer](IPrxVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

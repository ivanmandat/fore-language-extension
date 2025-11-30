# ChartExternLegendSetup

ChartExternLegendSetup
-


# Команда ChartExternLegendSetup


## Назначение


Вывод стандартного диалога настройки параметров легенды, создаваемой
 для диаграмм регламентного отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
		 Регламентный отчет, на странице которого создана легенда для
		 диаграмм.


		 Элемент 2: [IPrxChartLegend](KeReport.chm::/Interface/IPrxChartLegend/IPrxChartLegend.htm)
		 Диаграмма, для которой необходимо отобразить диалог настройки
		 параметров.


## Особенности применения


Команда может применяться только для регламентных отчетов. Результатом
 выполнения команды будет значение True,
 если в диалоге была нажата кнопка «ОК», и False,
 если была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ReportBox и компонента
 UiReport с наименованием «UiReport1», являющегося источником данных для
 ReportBox. На активном листе регламентного отчета, подключенного к компоненту
 «UiReport1», имеется легенда для диаграмм.


Добавьте ссылки на системные сборки: Forms, Report, Tab, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Report: IPrxReport;

	    Objs: ITabObjects;

	    Obj: ITabObject;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array;

	    i: Integer;

	Begin

	    Report := UiReport1.Report;

	    Objs := (Report.ActiveSheet As IPrxTable).TabSheet.Objects;

	    //Поиск легенды на странице регламентного отчета

	    For i := 0 To Objs.Count - 1 Do

	        If Objs.Item(i).ClassId = "PrxChartLegend" Then

	            Obj := Objs.Item(i);

	            Break

	        End If;

	    End For;

	    If Obj <> Null Then

	        Target := WinApplication.Instance.GetPluginTarget("Report");

	        Context := Target.CreateExecutionContext;

	        Data := New Variant[2];

	        Data[0] := Report;

	        Data[1] := Obj As IPrxChartLegend;

	        Context.Data := Data;

	        Target.Execute("ChartExternLegendSetup", Context)

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки параметров
 легенды, найденной на активном листе регламентного отчета, подключенного
 в компоненте «UiReport1».


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

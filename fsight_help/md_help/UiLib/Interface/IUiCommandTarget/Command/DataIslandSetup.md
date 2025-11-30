# DataIslandSetup

DataIslandSetup
-


# Команда DataIslandSetup


## Назначение


Вызов стандартного диалога настройки параметров области данных.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IPrxDataIsland](KeReport.chm::/Interface/IPrxDataIsland/IPrxDataIsland.htm)
		 Область данных, для которой необходимо отобразить диалог настройки
		 параметров.


		 Элемент 2: [PrxDataIslandCategory](KeReport.chm::/Enums/PrxDataIslandCategory.htm)
		 Параметр, определяющий какие группы настроек будут присутствовать
		 в диалоге настройки параметров области данных. В качестве значения
		 параметра можно указать комбинацию значений указанного перечислимого
		 типа.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.
 В регламентный отчет, подключенный в компоненте «UiReport1», добавлен
 источник данных, на базе которого создана область данных.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Rep: IPrxReport;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array;

	Begin

	    Rep := UiReport1.Instance As IPrxReport;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Data := New Variant[2];

	    Data[0] := Rep.DataIslands.Item(0);

	    Data[1] := PrxDataIslandCategory.Placement + PrxDataIslandCategory.Sort;

	    Context.Data := Data;

	    Target.Execute("DataIslandSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки параметров
 области данных. В диалоге будет раздел по настройке базовых параметров
 области данных, а также группы настроек «Сортировка» и «Размещение».


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

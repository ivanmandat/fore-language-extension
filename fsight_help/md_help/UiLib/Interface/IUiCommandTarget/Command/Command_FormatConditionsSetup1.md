# FormatConditionsSetup: Плагин Report

FormatConditionsSetup: Плагин Report
-


# Команда FormatConditionsSetup


## Назначение


Вызов стандартного диалога настройки параметров условных форматов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm)
		 Страница, на которой расположен диапазон ячеек.


		 Элемент 2: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm)
		 Диапазон ячеек, для которого будет вызван диалог настройки
		 параметров условного форматирования данных. Если данный параметр
		 не указан, то будет вызван диалог настройки параметров условного
		 форматирования для текущего выделенного диапазона ячеек.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ReportBox и
 компонента UiReport с наименованием «UiReport1», являющегося источником
 данных для ReportBox.


Добавьте ссылки на системные сборки: Forms, Report, Tab, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Sheet: ITabSheet;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array;

	Begin

	    Sheet := (UiReport1.Instance As IPrxReport).ActiveSheet As ITabSheet;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Data := New Variant[2];

	    Data[0] := Sheet;

	    Data[1] := Sheet.ParseRange("A0:C10");

	    Context.Data := Data;

	    Target.Execute("FormatConditionsSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки параметров
 условного форматирования данных для диапазона «A0:C10» текущего листа
 регламентного отчета, подключенного в «UiReport1».


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

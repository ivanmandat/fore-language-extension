# NamedRangesSetup

NamedRangesSetup
-


# Команда NamedRangesSetup


## Назначение


Вызов диалога настройки именованных диапазонов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать одно из следующих
 значений:


		 Тип значения
		 Описание


		 [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm)
		 Страница, на которой расположен диапазон ячеек.


		 Array
		 Массив типа Variant,
		 содержащий следующие элементы:

Элемент 1:
		 [ITabSheet](TabSheet.chm::/Interface/ITabSheet/ITabSheet.htm). Страница,
		 на которой расположен диапазон ячеек;

Элемент 2:
		 [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm). Диапазон
		 ячеек, для которого будет вызван диалог настройки именованных
		 диапазонов.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Report: IPrxReport;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    Report := UiReport1.Instance As IPrxReport;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Context.Data := (Report.ActiveSheet As IPrxTable).TabSheet;

    Target.Execute("NamedRangesSetup", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет вызван диалог настройки именованных диапазонов.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

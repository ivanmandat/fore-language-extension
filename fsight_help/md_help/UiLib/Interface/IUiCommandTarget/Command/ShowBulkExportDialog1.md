# ShowBulkExportDialog: Плагин Report

ShowBulkExportDialog: Плагин Report
-


# Команда ShowBulkExportDialog


## Назначение


Вызов стандартного диалога пакетного экспорта регламентного отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm). Для работы команды в данном свойстве необходимо указать регламентный отчет, описываемый интерфейсом [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm), либо массив типа Variant, элементы которого содержат следующие значения:


 Тип значения
 Описание


 Элемент 1: [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
 Регламентный отчет, для которого вызывается диалог пакетного экспорта.


 Элемент 2: Boolean
 Флаг, определяющий будет ли производиться экспорт скрытых листов.


## Особенности применения


Команда может применяться только для регламентных отчетов. После указания в диалоге необходимых параметров и нажатия кнопки «Готово» будет произведен пакетный экспорт.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием "Button1", компонента ReportBox и компонента UiReport с наименованием «UiReport1», являющегося источником данных для ReportBox. Компонент «UiReport1» подключен к какому-либо регламентному отчету, для которого доступен пакетный экспорт.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

Begin

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[2];

    Data[0] := UiReport1.Instance;

    Data[1] := False;

    Context.Data := Data;

    Target.Execute("ShowBulkExportDialog", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет открыт диалог пакетного экспорта отчета. Скрытые листы экспортироваться не будут.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

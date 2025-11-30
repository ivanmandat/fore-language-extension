# ShowBulkPrintDialog: Плагин Report

ShowBulkPrintDialog: Плагин Report
-


# Команда ShowBulkPrintDialog


## Назначение


Вывод стандартного диалога настройки пакетной печати регламентного отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm). Для работы команды в данном свойстве необходимо указать следующее значение:


 Тип значения
 Описание


[IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)

 Регламентный отчет, для которого вызывается диалог пакетной печати.


## Особенности применения


Команда может применяться только для регламентных отчетов. После указания в диалоге необходимых параметров и нажатия кнопки «Печать» будет произведена пакетная печать.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента ReportBox и компонента UiReport с наименованием «UiReport1», являющегося источником данных для ReportBox. Компонент «UiReport1» подключен к какому-либо регламентному отчету, для которого доступна пакетная печать.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Context.Data := UiReport1.Instance;

    Target.Execute("ShowBulkPrintDialog", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет открыт диалог пакетной печати отчета.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ShowBulkPrintDialogEx

ShowBulkPrintDialogEx
-


# Команда ShowBulkPrintDialogEx


## Назначение


Вывод стандартного диалога настройки пакетной печати регламентного отчета, с возможностью задания дополнительных параметров открытия диалога.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm). Для работы команды в данном свойстве необходимо указать следующее значение:


 Тип значения
 Описание


 [IPrxBulkSelectionSet](KeReport.chm::/Interface/IPrxBulkSelectionSet/IPrxBulkSelectionSet.htm)
 Отметка измерений, допустимых для использования при пакетной печати. Указанная отметка будет установлена для измерений на первой странице диалога. В дальнейшем может быть изменена.


## Особенности применения


Команда может применяться только для регламентных отчетов. После указания в диалоге необходимых параметров и нажатия кнопки «Печать» фактическая печать произведена будет. Результатом выполнения команды будет флаг, значение которого указывает была ли нажата кнопка «Печать» (значение True) или кнопка «Отмена» (значение False).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента ReportBox и компонента UiReport с наименованием «UiReport1», являющегося источником данных для ReportBox. Компонент «UiReport1» подключен к какому-либо регламентному отчету, для которого доступна пакетная печать.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Rep: IPrxReport;

    SelSet: IPrxBulkSelectionSet;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Res: Variant;

Begin

    Rep := UiReport1.Instance As IPrxReport;

    SelSet := Rep.GetBulkSelectionSet("1,2");

    //Отметка всех элементов первого измерения
    //Данная отметка будет отображена для измерения в диалоге
    SelSet.Item(0).Selection.SelectAll;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Context.Data := SelSet;

    Res := Target.Execute("ShowBulkPrintDialogEx", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет открыт диалог пакетной печати отчета. В диалоге будут отмечены все элементы в первом измерении. Результат закрытия диалога будет доступен в переменной «Res».


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

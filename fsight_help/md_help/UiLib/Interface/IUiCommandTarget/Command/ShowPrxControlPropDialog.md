# ShowPrxControlPropDialog

ShowPrxControlPropDialog
-


# Команда ShowPrxControlPropDialog


## Назначение


Вызов диалога настройки свойств элемента управления.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1:
		 [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
		 Регламентный отчет, для которого необходимо отобразить диалог
		 настройки свойств элемента управления.


		 Элемент 2:
		 [IPrxControl](KeReport.chm::/Interface/IPrxControl/IPrxControl.htm)
		 Элемент управления, свойства которого необходимо отобразить.


## Особенности применения


Команда может применяться только для регламентных отчетов. Результатом
 выполнения команды будет логическое значение True,
 если в диалоге была нажата кнопка «ОК» и False,
 если была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.
 В регламентном отчете, который подключен к компоненту «UiReport1», имеется
 минимум один элемент управления.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Report: IPrxReport;

    Control: IPrxControl;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

    Data: Array;

Begin

    Report := UiReport1.Instance As IPrxReport;

    Control := Report.Controls.Item(0);

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Data := New Variant[2];

    Data[0] := Report;

    Data[1] := Control;

    Context.Data := Data;

    Target.Execute("ShowPrxControlPropDialog", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет вызван диалог настройки свойств первого
 элемента управления.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

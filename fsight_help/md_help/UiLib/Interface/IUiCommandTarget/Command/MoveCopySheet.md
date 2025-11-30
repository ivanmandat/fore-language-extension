# MoveCopySheet

MoveCopySheet
-


# Команда MoveCopySheet


## Назначение


Вызов стандартного диалога копирования/перемещения листов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IPrxSheets](KeReport.chm::/Interface/IPrxSheets/IPrxSheets.htm)
		 Коллекция листов регламентного отчета.


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
 несколько листов.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Report: IPrxReport;

    Target: IUiCommandTarget;

    Context: IUiCommandExecutionContext;

Begin

    Report := UiReport1.Instance As IPrxReport;

    Target := WinApplication.Instance.GetPluginTarget("Report");

    Context := Target.CreateExecutionContext;

    Context.Data := Report.Sheets;

    Target.Execute("MoveCopySheet", Context);

End Sub Button1OnClick;


При нажатии на кнопку будет вызван диалог копирования/перемещения листов.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

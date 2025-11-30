# ShowScalePropsDialog

ShowScalePropsDialog
-


# Команда ShowScalePropsDialog


## Назначение


Вызов стандартного диалога редактирования шкал регламентного отчета.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IPrxReport](KeReport.chm::/Interface/IPrxReport/IPrxReport.htm)
		 Регламентный отчет, для которого необходимо открыть диалог
		 редактирования шкал.


## Особенности применения


Команда может применяться только для регламентных отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ReportBox
 и компонента UiReport с наименованием
 «UiReport1», являющегося источником данных для ReportBox.
 «UiReport1» подключен к какому-либо регламентному отчету.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Context.Data := UiReport1.Instance;

	    Target.Execute("ShowScalePropsDialog", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен диалог редактирования шкал регламентного
 отчета, который подключен в компоненте «UiReport1».


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

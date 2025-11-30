# HighlightSetup

HighlightSetup
-


# Команда HighlightSetup


## Назначение


Вызов стандартного диалога настройки подсветки данных.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm)
		 Экспресс-отчет, для которого необходимо настроить параметры
		 подсветки данных.


## Особенности применения


Команда может применяться только для экспресс-отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 "UiErAnalyzer1", являющегося источником данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Context.Data := UiErAnalyzer1.ErAnalyzer;

	    Target.Execute("HighlightSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен стандартный диалог настройки подсветки
 данных для экспресс-отчета установленного в UiErAnalyzer1.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# TotalsSetup

TotalsSetup
-


# Команда TotalsSetup


## Назначение


Вызов специализированного диалога настройки итогов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm)
		 Экспресс-отчет, для которого необходимо вызвать диалог настройки
		 итогов.


## Особенности применения


Команда может применяться только для экспресс-отчетов.


При выполнении команды будет вызван специализированный диалог настройки
 итогов:


![](TotalsSetup_Dialog.gif)


В данном диалоге можно определить виды итогов, которые будут рассчитываться
 по строкам/столбцам, задать оформление для ячеек с итоговыми данными и
 заголовков итогов, а также определить дополнительные параметры расчёта
 итогов. Все настройки аналогичны тем, которые можно произвести на вкладке
 боковой панели «[Итоги](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm#totals_parameters)»
 в экспресс-отчете.


Результатом выполнения команды будет логическое значение, указывающее
 какая кнопка была нажата в диалоге: True,
 если была нажата кнопка «ОК» и False,
 если была нажата кнопка «Отмена».


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

	    Target.Execute("TotalsSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет выведен диалог настройки итогов для экспресс-отчета
 установленного в UiErAnalyzer1.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

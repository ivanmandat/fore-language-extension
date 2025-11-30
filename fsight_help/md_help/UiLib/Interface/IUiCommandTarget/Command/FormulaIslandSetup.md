# FormulaIslandSetup

FormulaIslandSetup
-


# Команда FormulaIslandSetup


## Назначение


Вызов стандартного диалога настройки параметров области формул.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значение:


		 Тип значения
		 Описание


		 [IPrxFormulaIsland](KeReport.chm::/Interface/IPrxFormulaIsland/IPrxFormulaIsland.htm)
		 Область формул регламентного отчета, для которой необходимо
		 отобразить диалог настройки параметров.


## Особенности применения


Команда может применяться только для регламентных отчетов. Результатом
 выполнения команды будет логическое значение True,
 если в диалоге была нажата кнопка «ОК» и False,
 если была нажата кнопка «Отмена».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента ReportBox и компонента
 UiReport с наименованием «UiReport1», являющегося источником данных для
 ReportBox. В регламентном отчете, который подключен к компоненту «UiReport1»,
 имеется минимум одна область формул.


Добавьте ссылки на системные сборки: Forms, Report, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Report: IPrxReport;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Report := UiReport1.Report;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Context.Data := Report.FormulaIslands.Item(0);

	    Target.Execute("FormulaIslandSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет вызван диалог настройки параметров первой
 области формул.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

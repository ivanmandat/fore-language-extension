# CalculatesSetup

CalculatesSetup
-


# Команда CalculatesSetup


## Назначение


Вызов стандартного диалога настройки вычисляемых показателей.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IEaxAnalyzer](KeExpress.chm::/Interface/IEaxAnalyzer/IEaxAnalyzer.htm)
		 Экспресс-отчет, для которого необходимо настроить вычисляемые
		 показатели.


## Особенности применения


Команда может применяться только для экспресс-отчетов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонент UiErAnalyzer с наименованием
 «UiErAnalyzer1». К «UiErAnalyzer1» подключен какой-либо экспресс-отчёт.


Добавьте ссылки на системные сборки: Forms, Express, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Context.Data := UiErAnalyzer1.ErAnalyzer;

	    Target.Execute("CalculatesSetup", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыто окно «Вычисляемые
 показатели» экспресс-отчета.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

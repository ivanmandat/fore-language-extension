# OpenFile

OpenFile
-


# Команда OpenFile


## Назначение


Открыть экспресс-отчет, сохраненный в файл.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 String
		 Путь и наименование файла, в который сохранен экспресс-отчет.


## Особенности применения


Команда может применяться только для экспресс-отчетов, сохраненных в
 файл (Файлы с расширением "*.ppexpress").


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и экспресс-отчета, сохраненного
 в файл "express.ppexpress".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Context.Data := "c:\express.ppexpress";

	    Target.Execute("OpenFile", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт экспресс-отчет, сохраненный в файл
 "express.ppexpress".


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

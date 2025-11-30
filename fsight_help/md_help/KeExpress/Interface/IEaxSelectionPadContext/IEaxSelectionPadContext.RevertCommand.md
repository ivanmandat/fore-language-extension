# IEaxSelectionPadContext.RevertCommand

IEaxSelectionPadContext.RevertCommand
-


# IEaxSelectionPadContext.RevertCommand


## Синтаксис


RevertCommand;


## Описание


Метод RevertCommand выполняет
 сброс настроек измерения.


## Комментарии


Для редактирования измерения используйте метод [IEaxSelectionPadContext.EditDimension](IEaxSelectionPadContext.EditDimension.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента EaxConfigurationPanel
 с наименованием «EaxConfigurationPanel1» и компонента UiErAnalyzer, который
 установлен в качестве источника данных для «EaxConfigurationPanel1». UiErAnalyzer
 подключен к какому-либо экспресс-отчету репозитория.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    sps: ISystemPadContext;

	Begin

	    sps := EaxConfigurationPanel1.GetActiveContext;

	    (sps As IEaxSelectionPadContext).RevertCommand;

	End Sub Button1OnClick;


На боковой панели перейдите в группу вкладок «Отметка»
 и выберите измерение. При нажатии на кнопку будут восстановлены все измененные
 и удаленные элементы измерения, [добавленные
 элементы](IEaxSelectionPadContext.HierarchyNewElement.htm) будут удалены.


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

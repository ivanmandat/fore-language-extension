# IEaxSelectionPadContext.PopupCommand

IEaxSelectionPadContext.PopupCommand
-


# IEaxSelectionPadContext.PopupCommand


## Синтаксис


PopupCommand(CommandType: [EaxPopupCommandType](../../Enums/EaxPopupCommandType.htm));


## Параметры


CommandType. Действие над сворачивающейся
 иерархией.


## Описание


Метод PopupCommand выполняет
 действие над сворачивающейся иерархией.


## Комментарии


Для выполнения сортировки элементов иерархии используйте метод [IEaxSelectionPadContext.PopupSort](IEaxSelectionPadContext.PopupSort.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 EaxConfigurationPanel с наименованием «EaxConfigurationPanel1», компонент
 UiErAnalyzer с наименованием «UiErAnalyzer1» и компонент Button с наименованием
 «Button1». Укажите компонент «UiErAnalyzer1» в качестве источника данных
 для компонента «EaxConfigurationPanel1». В качестве источника данных для
 компонента «UiErAnalyzer1» используйте экспресс-отчет.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    sps: ISystemPadContext;

	    Type: EaxPopupCommandType;

	Begin

	    sps := EaxConfigurationPanel1.GetActiveContext;

	    Type := EaxPopupCommandType.ExpandAll;

	    (sps As IEaxSelectionPadContext).PopupCommand(Type);

	End Sub Button1OnClick;


На боковой панели перейдите в группу вкладок «Отметка»
 и выберите измерение. При нажатии на кнопку будут развёрнуты все уровни
 измерения.


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

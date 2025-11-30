# IEaxSelectionPadContext.PopupLevelName

IEaxSelectionPadContext.PopupLevelName
-


# IEaxSelectionPadContext.PopupLevelName


## Синтаксис


PopupLevelName(Index: Integer);


## Параметры


Index. Индекс уровня иерархии.


## Описание


Метод PopupLevelName определяет
 уровень иерархии по его индексу.


## Комментарии


Для сворачивания/разворачивания иерархии используйте метод [IEaxSelectionPadContext.PopupCommand](IEaxSelectionPadContext.PopupCommand.htm).


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

	    (sps As IEaxSelectionPadContext).PopupLevelName(1);

	End Sub Button1OnClick;


На боковой панели перейдите в группу вкладок «Отметка»
 и выберите измерение. При нажатии на кнопку к названию каждого элемента
 измерения будет добавлен индекс, соответствующий ключу элемента.


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

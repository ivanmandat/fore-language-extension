# IEaxSelectionPadContext.HierarchyNewElement

IEaxSelectionPadContext.HierarchyNewElement
-


# IEaxSelectionPadContext.HierarchyNewElement


## Синтаксис


HierarchyNewElement;


## Описание


Метод HierarchyNewElement добавляет
 новый элемент в иерархию.


## Комментарии


Для переименования элемента используйте метод [IEaxSelectionPadContext.HierarchyRenameElement](IEaxSelectionPadContext.HierarchyRenameElement.htm).


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

	    (sps As IEaxSelectionPadContext).HierarchyNewElement;

	End Sub Button1OnClick;


После запуска формы на боковой панели перейдите в группу вкладок «Отметка» и выберите измерение. При
 нажатии на кнопку будет открыто окно «[Редактор
 выражения](UiNav.chm::/GUI/ExpressionEditor.htm)» для задания формулы, по которой будут
 вычисляться значения по новому элементу.


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

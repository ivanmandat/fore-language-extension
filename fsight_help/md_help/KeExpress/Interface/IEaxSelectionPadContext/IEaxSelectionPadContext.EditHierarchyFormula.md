# IEaxSelectionPadContext.EditHierarchyFormula

IEaxSelectionPadContext.EditHierarchyFormula
-


# IEaxSelectionPadContext.EditHierarchyFormula


## Синтаксис


EditHierarchyFormula(Element: [IDimElement](KeDims.chm::/interface/IDimElement/IDimElement.htm));


## Параметры


Element. Элемент измерения.


## Описание


Метод EditHierarchyFormula редактирует
 формулу текущего элемента иерархии.


## Комментарии


Для редактирования измерения используйте метод [IEaxSelectionPadContext.EditDimension](IEaxSelectionPadContext.EditDimension.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента EaxConfigurationPanel
 с наименованием «EaxConfigurationPanel1» и компонента UiErAnalyzer, который
 установлен в качестве источника данных для «EaxConfigurationPanel1». UiErAnalyzer
 подключен к какому-либо экспресс-отчету репозитория.


Добавьте ссылку на системную сборку Dimensions.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    sps: ISystemPadContext;

	    Element: IDimElement;

	Begin

	    sps := EaxConfigurationPanel1.GetActiveContext;

	    Element := (sps As IEaxSelectionPadContext).FocusedElement;

	    (sps As IEaxSelectionPadContext).EditHierarchyFormula(Element);

	End Sub Button1OnClick;


На боковой панели перейдите в группу вкладок «Отметка»
 и выберите измерение. При нажатии на кнопку будет открыто окно «[Редактор
 выражения](UiNav.chm::/GUI/ExpressionEditor.htm)».


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

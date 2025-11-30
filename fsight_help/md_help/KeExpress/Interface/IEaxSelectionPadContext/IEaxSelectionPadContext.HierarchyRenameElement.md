# IEaxSelectionPadContext.HierarchyRenameElement

IEaxSelectionPadContext.HierarchyRenameElement
-


# IEaxSelectionPadContext.HierarchyRenameElement


## Синтаксис


HierarchyRenameElement(Element: [IDimElement](KeDims.chm::/interface/IDimElement/IDimElement.htm));


## Параметры


Element. Элемент измерения.


## Описание


Метод HierarchyRenameElement
 переименовывает текущий элемент иерархии.


## Комментарии


Для добавления в иерархию нового элемента используйте метод [IEaxSelectionPadContext.HierarchyNewElement](IEaxSelectionPadContext.HierarchyNewElement.htm).


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

	    (sps As IEaxSelectionPadContext).HierarchyRenameElement(Element);

	End Sub Button1OnClick;


На боковой панели перейдите в группу вкладок «Отметка»
 и в выбранном измерении выделите элемент. При нажатии на кнопку наименование
 выделенного элемента измерения будет переведено в режим редактирования.


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

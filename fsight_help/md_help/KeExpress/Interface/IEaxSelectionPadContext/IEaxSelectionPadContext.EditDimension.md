# IEaxSelectionPadContext.EditDimension

IEaxSelectionPadContext.EditDimension
-


# IEaxSelectionPadContext.EditDimension


## Синтаксис


EditDimension(FocusedElement: [IDimElement](KeDims.chm::/interface/IDimElement/IDimElement.htm));


## Параметры


FocusedElement. Элемент измерения.


## Описание


Метод EditDimension редактирует
 измерение, элемент которого был выделен.


## Комментарии


Для получения отметки в справочнике используйте свойство [IEaxSelectionPadContext.DimSelection](IEaxSelectionPadContext.DimSelection.htm).


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

	    (sps As IEaxSelectionPadContext).EditDimension(Element);

	End Sub Button1OnClick;


На боковой панели перейдите в группу вкладок «Отметка»
 и выберите измерение. При нажатии на кнопку будет открыто окно «[Редактирование
 измерения](UiSelection.chm::/Selection/Dimension_edit.htm)».


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

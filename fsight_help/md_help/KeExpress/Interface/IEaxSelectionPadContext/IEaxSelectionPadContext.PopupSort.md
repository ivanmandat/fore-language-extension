# IEaxSelectionPadContext.PopupSort

IEaxSelectionPadContext.PopupSort
-


# IEaxSelectionPadContext.PopupSort


## Синтаксис


PopupSort(SortType: [EaxPopupSortType](../../Enums/EaxPopupSortType.htm));


## Параметры


SortType. Тип сортировки элементов
 измерения.


## Описание


Метод PopupSort выполняет сортировку
 элементов иерархии.


## Комментарии


Для выполнения действия над сворачивающейся иерархией используйте метод
 [IEaxSelectionPadContext.PopupCommand](IEaxSelectionPadContext.PopupCommand.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента EaxConfigurationPanel
 с наименованием «EaxConfigurationPanel1» и компонента UiErAnalyzer, который
 установлен в качестве источника данных для «EaxConfigurationPanel1». UiErAnalyzer
 подключен к какому-либо экспресс-отчету репозитория.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    sps: ISystemPadContext;

	    Type: EaxPopupSortType;

	Begin

	    sps := EaxConfigurationPanel1.GetActiveContext;

	    Type := EaxPopupSortType.Descending;

	    (sps As IEaxSelectionPadContext).PopupSort(Type);

	End Sub Button1OnClick;


На боковой панели перейдите в группу вкладок «Отметка»
 и выберите измерение. При нажатии на кнопку будет выполнена сортировка
 элементов измерения по убыванию.


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

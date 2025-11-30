# IEaxSelectionPadContext.PopupSortAttribute

IEaxSelectionPadContext.PopupSortAttribute
-


# IEaxSelectionPadContext.PopupSortAttribute


## Синтаксис


PopupSortAttribute(Attr: [IDimAttribute](KeDims.chm::/interface/IDimAttribute/IDimAttribute.htm));


## Параметры


Attr. Атрибут справочника.


## Описание


Метод PopupSortAttribute выполняет
 сортировку элементов иерархии по заданному атрибуту.


## Комментарии


Для выполнения сортировки элементов иерархии используйте метод [IEaxSelectionPadContext.PopupSort](IEaxSelectionPadContext.PopupSort.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента EaxConfigurationPanel
 с наименованием «EaxConfigurationPanel1» и компонента UiErAnalyzer, который
 установлен в качестве источника данных для «EaxConfigurationPanel1». «UiErAnalyzer1»
 подключен к экспресс-отчету, который содержит измерение с идентификатором
 D_TO, являющееся справочником НСИ, расположенном в репозитории НСИ с идентификатором
 RDS. Данный справочник содержит атрибут с идентификатором «TERRID».


Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылку на системные сборки: Dimensions, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    mb: IMetabase;

	    Dim: IDimensionModel;

	    Attr: IDimAttribute;

	    Attrs: IDimAttributes;

	    sps: ISystemPadContext;

	    PadContext: IEaxSelectionPadContext;

	Begin

	    mb := MetabaseClass.Active;

	    Dim := mb.ItemByIdNamespace("D_TO", MB.ItemById("RDS").Key).Bind As IDimensionModel;

	    Attrs := Dim.Attributes;

	    Attr := Attrs.FindById("TERRID");

	    sps := EaxConfigurationPanel1.GetActiveContext;

	    PadContext := sps As IEaxSelectionPadContext;

	    PadContext.PopupSortAttribute(Attr);

	    Debug.WriteLine("Выполнена сортировка по атрибуту TERRID в измерении "

	        + PadContext.DimSelection.Dimension.Name);

	End Sub Button1OnClick;


На боковой панели перейдите в группу вкладок «Отметка»
 и выберите измерение. При нажатии на кнопку будет выполнена сортировка
 элементов измерения по атрибуту «TERRID».


См. также:


[IEaxSelectionPadContext](IEaxSelectionPadContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

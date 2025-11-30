# IDimensionViewer.DimGroup

IDimensionViewer.DimGroup
-


# IDimensionViewer.DimGroup


## Синтаксис


DimGroup: [IDimElementGroup](KeDims.chm::/interface/IDimElementGroup/IDimElementGroup.htm);


## Описание


Свойство DimGroup определяет
 группу элементов справочника, на базе которой будет строиться дерево элементов
 в компоненте.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопкой с наименованием «Button1», компонентов DimensionTree с наименованием
 «DimensionTree1», DimensionCombo с наименованием «DimensionCombo1» и компонента
 UiDimension с наименованием «UiDimension1»,
 являющегося источником данных для DimensionTree и DimensionCombo. Справочник,
 загруженный в UiDimension, должен иметь две [группы
 элементов](UiNavObj.chm::/reference_book/look-and-feel_Reference_book/UiMd_reference_book_look-and-feel_Group.htm).


Добавьте ссылки на системные сборки: Dimensions, ExtCtrls, Forms, Metabase.


Пример является обработчиком события OnClick для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Groups: IMetabaseObjectDescriptors;

	    ElemGroup: IDimElementGroup;

	Begin

	    MB := MetabaseClass.Active;

	    Groups := (UiDimension1.Dimension As IMetabaseObject).Children;

	    ElemGroup := Groups.Item(0).Bind As IDimElementGroup;

	    DimensionTree1.DimGroup := ElemGroup;

	    ElemGroup := Groups.Item(1).Bind As IDimElementGroup;

	    DimensionCombo1.DimGroup := ElemGroup;

	End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку в компоненте «DimensionTree1»
 будет отображаться дерево, основанное на первой группе элементов справочника,
 а в «DimensionCombo1» - дерево, основанное на второй группе элементов.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IDimHierarchyCreator.HierarchyInstance

IDimHierarchyCreator.HierarchyInstance
-


# IDimHierarchyCreator.HierarchyInstance


## Синтаксис


HierarchyInstance: [IDimHierarchyInstance](../IDimHierarchyInstance/IDimHierarchyInstance.htm);


## Описание


Свойство HierarchyInstance определяет
 альтернативную иерархию справочника.


## Пример


Для выполнения примера разместите на форме:


	- компонент Button с идентификатором
	 Button1;


	- компонент DimensionTree
	 с идентификаторами DimensionTree1;


	- компонент DimensionTree
	 с идентификаторами DimensionTree2;


	- компонент UiDimension  с
	 идентификаторами UiDimensionTree1;


	- компонент UiDimension  с
	 идентификаторами UiDimensionTree2;


	- компонент Memo с идентификатором
	 Memo1.


Укажите:


	- справочник с идентификатором DIC в качестве источника
	 данных для компонентов с идентификатором UiDimension1 и UiDimension2;


	- компонент с идентификатором UiDimension1 в качестве источника
	 данных для компонента с идентификатором DimensionTree1;


	- компонент с идентификатором UiDimension2 в качестве источника
	 данных для компонента с идентификатором DimensionTree2.


Добавьте ссылки на системные сборки: Dimensions, ExtCtrls, Forms, Metabase.


После запуска примера:


	- создайте отметку, по которой будет динамически создана альтернативная
	 иерархия. Для этого укажите элементы в компоненте с идентификатором
	 DimensionTree1;


	- укажите элементы в компоненте с идентификатором DimensionTree2
	 для создания дополнительных элементов иерархии, которые не были включены
	 в отметку.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Creator: IDimHierarchyCreator;

Begin

    // Cоздадим динамически альтернативную иерархию

    Creator := New DimHierarchyCreator.Create;

    // Получим отметку
 с элементами, по которой формируется альтернативная иерархия

    Creator.Selection := DimensionTree1.Selection;

    // Получим отметку с дополнительными элементами

    Creator.AdditionalElements:=DimensionTree2.Selection;

    // Зададим корневой элемент

    Creator.RootElement:= True;

    Creator.RootElementName:="Корневой элемент";

    //Получим альтернативную иерархию

    DimensionTree2.Selection.Hierarchy := Creator.HierarchyInstance;

    //Выведем наименование группировочных элементов

    memo1.Lines.Add("Группировочные элементы:"+Creator.HierarchyInstance.GroupingElements.ToString("NAME",";"));

End Sub Button1OnClick;


В результате выполнения примера в компоненте с идентификатором DimensionTree2
 отобразится созданная динамически альтернативная иерархия с корневым элементом
 «Корневой элемент», а в компоненте с идентификатором Memo1 наименование
 группировочного элемента.


См. также:


[IDimHierarchyCreator](IDimHierarchyCreator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

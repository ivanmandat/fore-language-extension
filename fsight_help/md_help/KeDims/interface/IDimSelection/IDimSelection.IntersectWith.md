# IDimSelection.IntersectWith

IDimSelection.IntersectWith
-


# IDimSelection.IntersectWith


## Синтаксис


IntersectWith(Selection: IDimSelection);


## Параметры


Selection. Группа элементов
 справочника, которую необходимо оставить в отметке.


## Описание


Метод IntersectWith оставляет
 отмеченными только те элементы, которые входят в пересечение с переданной
 отметкой.


## Пример


Для выполнения примера разместите на форме компоненты Button, DimensionTree
 и UiDimension с идентификаторами «Button1», «DimensionTree1» и «UiDimension1»
 соответственно. В качестве источника данных для «DimensionTree1» укажите
 «UiDimension1». Источником данных для «UiDimension1» является табличный
 справочник.


Добавьте ссылки на системные сборки: Dimensions, ExtCtrls, Forms, Metabase.


Пример является обработчиком события OnClick для компонента «Button1».


Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    dim: IDimInstance;

    hier: IDimHierarchyInstance;

    DimSelect: IDimSelection;

    i: Integer;

Begin

    dim := UiDimension1.DimInstance;

    hier := dim.Hierarchies.Item(0);

    UiDimension1.Selection.SelectAll;

    UiDimension1.Selection.LimitToHierarchy(hier);

    // Выберем альтернативную иерархию

    UiDimension1.Selection.SelectHierarchy := hier;

    DimSelect := Dim.CreateSelection;

    // Отметим элементы с шагом
 2

    For i:=0 To Dim.Elements.Count-1 Step 2 Do

        DimSelect.SelectElement(i,False);

    End For;

    UiDimension1.Selection.IntersectWith(DimSelect);

End Sub Button1OnClick;


В качестве исходных данных рассмотрен массив элементов: a1, a2, a3,
 a4, a5, a6, a7. В альтернативную иерархию входят элементы: a1, a2, a4,
 a5, a7. В результате выполнения примера останутся отмеченными элементы:
 a1, a5, a7.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

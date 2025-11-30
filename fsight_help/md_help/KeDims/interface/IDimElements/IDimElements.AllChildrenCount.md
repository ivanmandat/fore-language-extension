# IDimElements.AllChildrenCount

IDimElements.AllChildrenCount
-


# IDimElements.AllChildrenCount


## Синтаксис


AllChildrenCount(Element: Integer): Integer;


## Параметры


Element - индекс элемента справочника.


## Описание


Свойство AllChildrenCount возвращает
 общее количество дочерних элементов у элемента с индексом Element.


## Комментарии


Данное свойство возвращает количество дочерних элементов, расположенных
 на всех уровнях ниже уровня элемента Element.
 Для получения количества непосредственных дочерних элементов, расположенных
 на один уровень ниже используйте свойство [ChildrenCount](IDimElements.ChildrenCount.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiDimension
 с наименованием «UiDimension1» и компонента DimensionTree
 с наименованием «DimensionTree1». К «UiDimension1» подключен какой-либо
 справочник репозитория. «UiDimension1» установлен в качестве источника
 данных для «DimensionTree1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Elems: IDimElements;

Begin

    If DimensionTree1.FocusedElement <> -1 Then

        Elems := UiDimension1.DimInstance.Elements;

        Debug.WriteLine(Elems.AllChildrenCount(DimensionTree1.FocusedElement));

        Debug.WriteLine(Elems.ChildrenCount(DimensionTree1.FocusedElement));

    End If;

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в консоль среды разработки
 будут выведены общее количество и количество непосредственных дочерних
 элементов для элемента, сфокусированного в компоненте «DimensionTree1».


См. также:


[IDimElements](IDimElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

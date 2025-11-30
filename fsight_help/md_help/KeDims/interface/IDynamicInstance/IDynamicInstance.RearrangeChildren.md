# IDynamicInstance.RearrangeChildren

IDynamicInstance.RearrangeChildren
-


# IDynamicInstance.RearrangeChildren


## Синтаксис


RearrangeChildren(Parent: Integer; Childs: Array):
 Boolean;


## Параметры


Parent. Индекс элемента-родителя;


Childs. Массив дочерних элементов.


## Описание


Метод RearrangeChildren упорядочивает
 элементы, принадлежащие указанному родительскому элементу и расположенные
 на одном уровне.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 DimensionTree с идентификатором «DimensionTree1», компонент UiDimension
 с идентификатором «UiDimension1» и компонент Button с идентификатором
 «Button1». Укажите компонент «UiDimension1» в качестве источника данных
 для компонента «DimensionTree1». Источником данных компонента «UiDimension1»
 должен быть табличный справочник НСИ с настроенной динамической загрузкой
 элементов.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Dim: IDynamicInstance;

    Element: Integer;

Begin

    Dim := UiDimension1.DimInstance As IDynamicInstance;

    Element := DimensionTree1.FocusedElement;

    If Dim.HasLoadedChildren(Element) Then

        Dim.RearrangeChildren(Element, Dim.LoadedChildren(Element));

        Else

            Dim.RearrangeChildren(Element, Dim.UnloadedChildren(Element));

    End If;

End Sub Button1OnClick;


При нажатии на кнопку «Button1» дочерние элементы выделенного пользователем
 элемента-родителя будут упорядочены.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

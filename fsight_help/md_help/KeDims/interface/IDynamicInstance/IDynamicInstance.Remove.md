# IDynamicInstance.Remove

IDynamicInstance.Remove
-


# IDynamicInstance.Remove


## Синтаксис


Remove(Element: Integer; WithChildrens: Boolean);


## Параметры


Element. Индекс элемента справочника;


WithChildrens. Способ удаления
 элемента. Если параметр принимает значение true,
 элемент удаляется вместе с дочерними элементами.


## Описание


Метод Remove удаляет указанный
 элемент из справочника.


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

    // Удалим выделенный элемент

    Dim.Remove(Element, False);

End Sub Button1OnClick;


При нажатии на кнопку «Button1» будет удален выделенный пользователем
 элемент справочника.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

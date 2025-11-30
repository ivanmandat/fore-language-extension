# IDynamicInstance.Add

IDynamicInstance.Add
-


# IDynamicInstance.Add


## Синтаксис


Add(Attrs: Array; Parent: Integer; Direction: [DimDirection](../../Enums/DimDirection.htm)): Integer;


## Параметры


Attrs. Массив атрибутов нового
 элемента;


Parent. Индекс элемента-родителя;


Direction. Вариант расположения
 нового элемента.


## Описание


Метод Add добавляет новый элемент
 в справочник.


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

    Arr: Array[2] Of Variant;

    Element: Integer;

Begin

    Dim := UiDimension1.DimInstance As IDynamicInstance;

    Element := DimensionTree1.FocusedElement;

    // Укажем ключ нового элемента

    Arr[0] := 100;

    // Укажем наименование нового элемента

    Arr[1] := "Новый элемент";

    // Добавим новый элемент

    Dim.Add(Arr, Element, DimDirection.FirstChild);

End Sub Button1OnClick;


При нажатии на кнопку «Button1» будет создан и добавлен в справочник
 новый элемент. Родительским элементом для нового элемента будет выделенный
 пользователем элемент.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

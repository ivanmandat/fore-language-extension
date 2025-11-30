# IDynamicInstance.Move

IDynamicInstance.Move
-


# IDynamicInstance.Move


## Синтаксис


Move(Element: Integer; TargetElement: Integer; Direction:
 [DimDirection](../../Enums/DimRelation.htm));


## Параметры


Element. Индекс элемента справочника,
 который нужно переместить;


TargetElement. Индекс элемента,
 к которому перемещается указанный элемент;


Direction. Вариант нового расположения
 переносимого элемента.


## Описание


Метод Move перемещает указанный
 элемент.


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

    // Переместим выделенный элемент к дочерним элементам первого элемента

    Dim.Move(Element, 0, DimDirection.FirstChild);

End Sub Button1OnClick;


При нажатии на кнопку «Button1» выделенный пользователем элемент будет
 перемещен к дочерним элементам первого элемента.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

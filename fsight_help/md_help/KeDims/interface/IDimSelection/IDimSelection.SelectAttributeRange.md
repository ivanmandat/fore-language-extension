# IDimSelection.SelectAttributeRange

IDimSelection.SelectAttributeRange
-


# IDimSelection.SelectAttributeRange


## Синтаксис


SelectAttributeRange(


AttributeIndex: Integer;


MinValue: Variant;


MaxValue: Variant;


[Deselec: Boolean = False]);


## Параметры


AttributeIndex. Индекс атрибута,
 в диапазоне значений которого необходимо изменить отметку.


MinValue. Минимальное значение
 атрибута.


MaxValue. Максимальное значение
 атрибута.


Deselec. Необязательный параметр,
 определяющий действие, производимое с отметкой элементов, имеющих значение
 атрибута, попадающее в указанный диапазон. По умолчанию передается значение
 False, при этом отметка элементов
 будет установлена. Если передавать значение True,
 то отметка элементов будет сброшена.


## Описание


Метод SelectAttributeRange изменяет
 отметку справочника в соответствии с диапазоном значений атрибута, индекс
 которого передается посредством параметра AttributeIndex.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента UiDimension
 с наименованием "UiDimension1" и каких-либо компонентов, отображающих
 данные справочника, загруженного в "UiDimension1".


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    DimInst: IDimInstance;

    Attrs: IDimAttributes;

    Attr: IDimAttribute;

    i: Integer;

Begin

    DimInst := UiDimension1.DimInstance;

    Attrs := DimInst.Dimension.Attributes;

    For Each Attr In Attrs Do

        If Attr = Attrs.Id Then

            Break

        End If;

            i := i + 1;

    End For;

    UiDimension1.Selection.SelectAttributeRange(i, 1, 10);

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет изменена отметка
 элементов справочника, загруженного в "UiDimension1". В отметку
 будут добавлены элементы, имеющие значение идентификатора в диапазоне
 [1,10].


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

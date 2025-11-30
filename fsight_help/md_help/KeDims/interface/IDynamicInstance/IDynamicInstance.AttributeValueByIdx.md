# IDynamicInstance.AttributeValueByIdx

IDynamicInstance.AttributeValueByIdx
-


# IDynamicInstance.AttributeValueByIdx


## Синтаксис


AttributeValueByIdx(Element: Integer; Attribute:
 Integer): Variant;


## Параметры


Element. Индекс элемента справочника;


Attribute. Индекс атрибута.


## Описание


Свойство AttributeValueByIdx определяет
 значение атрибута элемента справочника по индексу атрибута.


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

    AttrsInst: IDimAttributesInstance;

    Element: Integer;

Begin

    Dim := UiDimension1.DimInstance As IDynamicInstance;

    // Получим коллекцию экземпляров атрибутов справочника

    AttrsInst := Dim.CreateAttributesInstance;

    Element := DimensionTree1.FocusedElement;

    // Выведем реальное значение атрибута выделенного элемента

    Debug.WriteLine("Реальное значение первого атрибута выделенного элемента: " +

        Dim.AttributeValueByIdx(Element, 0));

    // Выведем отображаемое значение атрибута выделенного элемента

    Debug.WriteLine("Отображаемое значение первого атрибута выделенного элемента: " +

        Dim.DisplayValueByIdx(Element, 0));

End Sub Button1OnClick;


При нажатии на кнопку «Button1» в окно консоли будут выведены реальное
 и отображаемое значения первого атрибута выделенного элемента.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

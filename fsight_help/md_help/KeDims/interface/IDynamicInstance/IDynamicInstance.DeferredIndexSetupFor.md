# IDynamicInstance.DeferredIndexSetupFor

IDynamicInstance.DeferredIndexSetupFor
-


# IDynamicInstance.DeferredIndexSetupFor


## Синтаксис


DeferredIndexSetupFor(Element: Integer; AttrIndex:
 Integer): Variant;


## Параметры


Element. Индекс элемента справочника;


AttrIndex. Индекс атрибута.


## Описание


Свойство DeferredIndexSetupFor
 устанавливает новое значение атрибута элемента.


## Комментарии


Внесенные изменения будут применены только после использования метода
 [IDynamicInstance.AccomplishIndexSetup](IDynamicInstance.AccomplishIndexSetup.htm).


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

    // Поменяем значение
 атрибута «Владелец» у выделенного элемента

    Dim.DeferredIndexSetupFor(Element, 2) := 1;

    // Применим настройки изменения атрибутов

    Dim.AccomplishIndexSetup;

End Sub Button1OnClick;


При нажатии на кнопку «Button1» будет изменено значение атрибута «Владелец»
 выделенного элемента.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IDynamicInstance.IsLeafUnloaded

IDynamicInstance.IsLeafUnloaded
-


# IDynamicInstance.IsLeafUnloaded


## Синтаксис


IsLeafUnloaded(Element: Integer): Boolean;


## Параметры


Element. Индекс элемента справочника.


## Описание


Метод IsLeafUnloaded возвращает
 признак того, что элемент справочника не загружен.


## Комментарии


Метод возвращает true, если
 элемент не загружен, и false,
 если загружен.


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

    LastItemIndex: Integer;

Begin

    Dim := UiDimension1.DimInstance As IDynamicInstance;

    // Получим индекс последнего элемента справочника

    LastItemIndex := Dim.CreateDimElementArray.Count - 1;

    If Dim.IsLeafUnloaded(LastItemIndex) Then

        Debug.WriteLine("Индекс владельца последнего элемента: " +

            Dim.OwnerOfUnloadedLeaf(LastItemIndex).ToString);

        Else

            Debug.WriteLine("Индекс владельца последнего элемента: " +

                Dim.OwnerOfLoadedNode(LastItemIndex).ToString);

    End If;

End Sub Button1OnClick;


При нажатии на кнопку «Button1» в окно консоли будет выведен индекс
 элемента, являющегося родителем по отношению к последнему элемента.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

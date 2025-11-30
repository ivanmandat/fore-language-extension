# IDynamicInstance.LoadedChildrenCount

IDynamicInstance.LoadedChildrenCount
-


# IDynamicInstance.LoadedChildrenCount


## Синтаксис


LoadedChildrenCount(Element: Integer): Integer;


## Параметры


Element. Индекс элемента справочника.


## Описание


Свойство LoadedChildrenCount
 возвращает количество загруженных дочерних элементов указанного элемента
 справочника.


## Комментарии


Для получения признака наличия загруженных дочерних элементов указанного
 элемента справочника используйте метод [IDynamicInstance.HasLoadedChildren](IDynamicInstance.HasLoadedChildren.htm).


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

Begin

    Dim := UiDimension1.DimInstance As IDynamicInstance;

    // Выведем количество загруженных элементов

    If Dim.HasLoadedChildren(0) Then

        Debug.WriteLine("Количество загруженных дочерних элементов первого элемента: " +

            Dim.LoadedChildrenCount(0).ToString);

    End If;

    Debug.WriteLine("Всего загруженных элементов: " + Dim.LoadedCount.ToString);

    // Выведем количество незагруженных элементов

    If Dim.HasLeavesAllowedToUnload(0) Then

        Debug.WriteLine("Количество незагруженных дочерних
 элементов первого элемента: " +

            Dim.UnloadedLeavesCount(0).ToString);

    End If;

    Debug.WriteLine("Всего незагруженных элементов: " + Dim.UnloadedLeavesTotalCount.ToString);

End Sub Button1OnClick;


При нажатии на кнопку «Button1» в окно консоли будет выведено:


	- количество загруженных дочерних элементов первого элемента;


	- общее количество загруженных элементов справочника;


	- количество незагруженных дочерних элементов первого элемента;


	- общее количество незагруженных элементов справочника.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

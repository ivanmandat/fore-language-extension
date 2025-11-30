# IDynamicInstance.LoadEntireInstance

IDynamicInstance.LoadEntireInstance
-


# IDynamicInstance.LoadEntireInstance


## Синтаксис


LoadEntireInstance;


## Описание


Метод LoadEntireInstance загружает
 все элементы справочника.


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

    // Загрузим все элементы справочника

    Dim.LoadEntireInstance;

    // Убедимся, что не осталось незагруженных элементов

    Debug.WriteLine("Незагруженных элементов: " + Dim.UnloadedLeavesTotalCount.ToString);

End Sub Button1OnClick;


При нажатии на кнопку «Button1» будут загружены все элементы справочника.


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

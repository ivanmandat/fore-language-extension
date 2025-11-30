# IDynamicInstance.Clone

IDynamicInstance.Clone
-


# IDynamicInstance.Clone


## Синтаксис


Clone(op: [DynamicInstanceOperationsVisibility](../../Enums/DynamicInstanceOperationsVisibility.htm);
 Mark: Variant): [IDynamicInstance](IDynamicInstance.htm);


## Параметры


op. Параметр определяет, на
 какие справочники распространяется выполняемая операция;


Mark. Множество, которому будет
 принадлежать справочник.


## Описание


Метод Clone создает копию справочника.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- DimensionTree с идентификатором «DimensionTree1»;


	- DimensionTree с идентификатором «DimensionTree2»;


	- UiDimension с идентификатором «UiDimension1»;


	- UiDimension с идентификатором «UiDimension2»;


	- Button с идентификатором «Button1».


Укажите компонент «UiDimension1» в качестве источника данных для компонента
 «DimensionTree1», а компонент «UiDimension2» - источником данных для компонента
 «DimensionTree2». Источником данных компонента «UiDimension1» должен быть
 табличный справочник НСИ с настроенной динамической загрузкой элементов.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Dim: IDynamicInstance;

    DimCopy: IDynamicInstance;

Begin

    Dim := UiDimension1.DimInstance As IDynamicInstance;

    // Создадим копию справочника

    If Dim.CanClone(DynamicInstanceOperationsVisibility.Local, "Copy") Then

        DimCopy := Dim.Clone(DynamicInstanceOperationsVisibility.Local, "Copy");

        UiDimension2.Dimension := DimCopy.DimensionModel;

    End If;

End Sub Button1OnClick;


При нажатии на кнопку «Button1» будет создана копия справочника. Копия
 будет отображена в компоненте «DimensionTree2».


См. также:


[IDynamicInstance](IDynamicInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

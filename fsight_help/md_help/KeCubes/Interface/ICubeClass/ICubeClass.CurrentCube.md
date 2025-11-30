# ICubeClass.CurrentCube

ICubeClass.CurrentCube
-


# ICubeClass.CurrentCube


## Синтаксис


CurrentCube: [ICubeInstance](../ICubeInstance/ICubeInstance.htm);


## Описание


Свойство CurrentCube возвращает
 текущий куб.


## Комментарии


Данное свойство используется в макросах, определяющих значение вычисляемых
 показателей стандартного куба.


## Пример


Данный пример является макросом для куба и установлен в качестве выражения
 в формуле отношения куба.


			Public Function Relation_1(T: Variant): Integer;

Var

    Cube: ICubeInstance;

    CubeDest: ICubeInstanceDestination;

    DimInsts: ICubeInstanceDimensions;

    DimInst: IDimInstance;

    i: Integer;

    Result: Integer;

Begin

    Cube := CubeClass.CurrentCube;

    CubeDest := Cube.Destinations.DefaultDestination;

    DimInsts := CubeDest.Dimensions;

    For i := 0 To DimInsts.Count - 1 Do

        If (DimInsts.Item(i).Dimension Is ICalendarDimension) Then

            DimInst := DimInsts.Item(i);

        End If;

    End For;

    Result := CalendarDimension.Shift(DimInst, t, 1);

    Return Result;

End Function Relation_1;


При использовании данного отношения в формулах вычисляемых фактов будет
 браться значение предыдущего элемента по указанному в формуле измерению.


См. также:


[ICubeClass](ICubeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

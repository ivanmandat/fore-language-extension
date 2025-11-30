# IMsTimeMatrix.Coord

IMsTimeMatrix.Coord
-


# IMsTimeMatrix.Coord


## Синтаксис


Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);


## Описание


Свойство Coord возвращает параметры
 координаты ряда.


## Комментарии


Используйте данное свойство для доступа к значениям [параметров
 координаты ряда](../IMsModelParamValues/IMsModelParamValues.htm).


## Пример


В данном примере описан пользовательский метод.


Для выполнения примера добавьте ссылки на системные сборки Ms.


			Public Function Coord(param: IMsTimeMatrix): Variant;

Var

    ParamValues: IMsModelParamValues;

    ParamVal: IMsModelParamValue;

    pVal: Double;

    s: String;

    i, j: integer;

    Input, Output: ITimeSeries;

Begin

    ParamValues := param.Coord.ParamValues;

    ParamVal := ParamValues.FindById("PARAM_COORD");

    pVal := ParamVal.Value;

    param.BeginCached;

    s := "";

    For i := 0 To param.Count - 1 Do

        For j := param.StartIndex To param.EndIndex Do

            Input(i) := param.Item(i);

            Output(i) := Input(i)*pVal;

            s := s + (Output.Item(j) As double).ToString + " ";

        End For;

    Debug.WriteLine("Ряд " + i.ToString + " - " + s);

    End For;

    param.EndCached;

    Return Null;

End Function Coord;


Метод возвращает значение точек ряда, умноженное на значение параметра
 «PARAM_COORD».


См. также:


[IMsTimeMatrix](IMsTimeMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

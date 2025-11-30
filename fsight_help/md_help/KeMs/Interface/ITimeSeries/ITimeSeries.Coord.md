# ITimeSeries.Coord

ITimeSeries.Coord
-


# ITimeSeries.Coord


## Синтаксис


Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);


## Описание


Свойство Coord
 возвращает параметры координаты ряда.


## Комментарии


Используйте данное свойство для доступа к значениям параметров координаты
 ряда, для работы с которыми предназначен интерфейс [IMsModelParamValues](../IMsModelParamValues/IMsModelParamValues.htm).


## Пример


В данном примере описан пользовательский метод. Ряд данных передается
 поточечно. Метамодель, которая рассчитывает данный ряд, должна содержать
 числовой параметр PARAM_COORD.


Добавьте ссылки на системную сборку Ms.


			Public Sub UserProc(Input: ITimeSeries; Output: ITimeSeries);

Var

    I: Integer;

    ParamValues: IMsModelParamValues;

    ParamVal: IMsModelParamValue;

    pVal: Double;

Begin

    ParamValues := Input.Coord.ParamValues;

    ParamVal := ParamValues.FindById("PARAM_COORD");

    pVal := ParamVal.Value;

    For I := Input.StartIndex To Input.EndIndex Do

        Output(I) := Input(I) * pVal;

    End For;

End Sub UserProc;


Метод возвращает значение точек ряда, умноженное на значение параметра
 PARAM_COORD.


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

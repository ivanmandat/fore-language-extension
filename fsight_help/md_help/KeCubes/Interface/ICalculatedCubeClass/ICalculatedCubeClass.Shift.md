# ICalculatedCubeClass.Shift

ICalculatedCubeClass.Shift
-


# ICalculatedCubeClass.Shift


## Синтаксис


Shift(Coord: [ICalculatedCubeInstanceCoord](../ICalculatedCubeInstanceCoord/ICalculatedCubeInstanceCoord.htm); Lag: Integer): [ICalculatedCubeInstanceCoord](../ICalculatedCubeInstanceCoord/ICalculatedCubeInstanceCoord.htm);


## Параметры


Coord. Координата, которую необходимо сместить.


Lag. Лаг, с которым необходимо сместить координату.


## Описание


Метод Shift осуществляет смещение координаты по календарному измерению с заданным лагом.


## Комментарии


Данный метод предназначен для использования в пользовательских макросах, вычисляющих значение по текущей координате в вычисляемом кубе.


## Пример


Данный пример является макросом для вычисляемого куба.


			Function TestFunction(InputCoord: ICalculatedCubeInstanceCoord): Variant;

Var

    Coord: ICalculatedCubeInstanceCoord;

    Difference: Double;

Begin

    Coord := CalculatedCube.Shift(InputCoord, -1);

    Difference := (Coord.Val As Double) - (InputCoord.Val As Double);

    Return Difference;

End Function TestFunction;


При выполнении макроса будет произведен расчет разницы между следующим и текущим значением.


См. также:


[ICalculatedCubeClass](ICalculatedCubeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

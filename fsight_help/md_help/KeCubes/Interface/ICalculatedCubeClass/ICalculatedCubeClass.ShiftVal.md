# ICalculatedCubeClass.ShiftVal

ICalculatedCubeClass.ShiftVal
-


# ICalculatedCubeClass.ShiftVal


## Синтаксис


ShiftVal(Coord: [ICalculatedCubeInstanceCoord](../ICalculatedCubeInstanceCoord/ICalculatedCubeInstanceCoord.htm); Lag: Integer): Variant;


## Параметры


Coord. Координата, относительно которой осуществляется смещение.


Lag. Лаг, с которым необходимо сместить координату.


## Описание


Метод ShiftVal возвращает значение по координате, смещенной относительно данной координаты по календарному измерению с заданным лагом.


## Комментарии


Данный метод предназначен для использования в прикладных макросах, вычисляющих значение по текущей координате в вычисляемом кубе.


## Пример


Данный пример является макросом для вычисляемого куба.


			Function TestFunction(InputCoord: ICalculatedCubeInstanceCoord): Variant;

Var

    Val: Variant;

Begin

    Val := CalculatedCube.ShiftVal(InputCoord, -1);

    Return (Val As Double) * 10;

End Function TestFunction;


При выполнении макроса в качестве текущего значения будет возвращено значение следующей координаты, увеличенное в десять раз.


См. также:


[ICalculatedCubeClass](ICalculatedCubeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

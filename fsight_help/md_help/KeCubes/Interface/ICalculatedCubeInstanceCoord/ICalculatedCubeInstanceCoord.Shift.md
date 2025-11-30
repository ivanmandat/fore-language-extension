# ICalculatedCubeInstanceCoord.Shift

ICalculatedCubeInstanceCoord.Shift
-


# ICalculatedCubeInstanceCoord.Shift


## Синтаксис


Shift(Lag: Integer): [ICalculatedCubeInstanceCoord](ICalculatedCubeInstanceCoord.htm);


## Параметры


Lag. Лаг, с которым необходимо
 сместить координату.


## Описание


Метод Shift осуществляет смещение
 координаты по календарному измерению с заданным лагом.


## Комментарии


Данный метод предназначен для использования в пользовательских макросах,
 вычисляющих значение по текущей координате в вычисляемом кубе.


## Пример


Данный пример является макросом для вычисляемого куба.


			Function MyFunc(Param: Variant): Variant;

Var

    Coord, Coord1: ICalculatedCubeInstanceCoord;

    i: Integer;

Begin

    Coord := Param As ICalculatedCubeInstanceCoord;

    Coord1 := Coord.Shift(1);

    i := Coord1.Val As Integer;

    i := i + Math.RandBetweenI(0, 10);

    Return i As Variant;

End Function MyFunc;


При выполнении макроса будет рассчитываться значение в текущей координате
 вычисляемого куба. При расчёте к значению предыдущей координаты будет
 добавляться случайное целое число.


См. также:


[ICalculatedCubeInstanceCoord](ICalculatedCubeInstanceCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ICalculatedCubeClass.Val

ICalculatedCubeClass.Val
-


# ICalculatedCubeClass.Val


## Синтаксис


Val(Coord: [ICalculatedCubeInstanceCoord](../ICalculatedCubeInstanceCoord/ICalculatedCubeInstanceCoord.htm)): Variant;


## Параметры


Coord. Координата, значение в которой, необходимо получить.


## Описание


Метод Val возвращает значение по указанной координате.


## Комментарии


Данный метод предназначен для использования в прикладных макросах, вычисляющих значение по текущей координате в вычисляемом кубе.


## Пример


Данный пример является макросом для вычисляемого куба.


			Function TestFunction(InputCoord: ICalculatedCubeInstanceCoord): Variant;

Begin

    Return Math.Log10(CalculatedCube.Val(InputCoord));

End Function TestFunction;


При выполнении макроса будет произведен расчет десятичного логарифма для значений, координаты которых будут приходить в макрос в качестве входного параметра.


См. также:


[ICalculatedCubeClass](ICalculatedCubeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

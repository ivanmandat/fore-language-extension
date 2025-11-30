# ICalculatedCubeInstanceCoord.DimVal

ICalculatedCubeInstanceCoord.DimVal
-


# ICalculatedCubeInstanceCoord.DimVal


## Синтаксис


DimVal(DimensionId: String; AttributeId: String): Variant;


## Параметры


DimensionId. Идентификатор измерения назначения.


AttributeId. Идентификатор атрибута измерения назначения.


## Описание


Метод DimVal возвращает значение по текущей координате атрибута измерения назначения.


## Комментарии


Данный метод предназначен для использования в пользовательских макросах, вычисляющих значение в вычисляемом кубе по текущей координате атрибута измерения назначения.


## Пример


Данный пример является макросом для вычисляемого куба.


			Public Function MyFunc(p: Variant): Variant;

Var

    result: Variant;

Begin

    result:=(p As ICalculatedCubeInstanceCoord).DimVal("DimensionId","AttributeId");

    Return result;

End Function MyFunc;


При выполнении макроса будет рассчитываться значение в текущей координате атрибута измерения назначения вычисляемого куба.


См. также:


[ICalculatedCubeInstanceCoord](ICalculatedCubeInstanceCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

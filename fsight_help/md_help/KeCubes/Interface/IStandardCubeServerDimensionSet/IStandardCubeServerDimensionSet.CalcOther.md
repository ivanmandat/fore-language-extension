# IStandardCubeServerDimensionSet.CalcOther

IStandardCubeServerDimensionSet.CalcOther
-


# IStandardCubeServerDimensionSet.CalcOther


## Синтаксис


CalcOther: Boolean;


## Описание


Свойство CalcOther определяет,
 рассчитывать ли агрегацию для элементов измерений, не вошедших в отметку
 (агрегат Other).


## Комментарии


Допустимые значения:


	- True. Рассчитывать агрегат
	 Other;


	- False. Значение по умолчанию.
	 Не рассчитывать агрегат Other.


В матрице расчета агрегации для измерений, по которым рассчитан агрегат
 Other, координата будет «-1».


См. также:


[IStandardCubeServerDimensionSet](IStandardCubeServerDimensionSet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

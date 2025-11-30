# IModelling.Iif

IModelling.Iif
-


# IModelling.Iif


## Синтаксис


Iif(Condition: Variant; TruePart: Variant; FalsePart:
 Variant): Variant;


## Параметры


Condition. Условие, которое
 требуется вычислить;


TruePart. Возвращается, если
 значение Condition равно True;


FalsePart. Возвращается, если
 значение Condition равно False.


## Описание


Метод Iif обеспечивает условное
 выполнение операторов.


## Комментарии


Метод Iif
 является эквивалентом трёхместного оператора «[?:](Fore.chm::/08_Operators/Fore_If.htm)».


Отличие метода Iif от трёхместного
 оператора ?:


	- Iif(Condition, TruePart, FalsePart)

	Iif сначала вычисляет значения
	 Condition, TruePart,
	 FalsePart, а затем в зависимости
	 от результата Condition возвращает
	 значение TruePart или FalsePart;


	- Condition ? TruePart : FalsePart

	Трехместный оператор ? сначала
	 вычисляет значение Condition,
	 а затем в зависимости от результата вычисляет или TruePart,
	 или FalsePart.


## Пример


Использование метода приведено в примере для [IModelling.IsSeriesEmpty](IModelling.IsSeriesEmpty.htm).


См. также:


[IModelling](IModelling.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

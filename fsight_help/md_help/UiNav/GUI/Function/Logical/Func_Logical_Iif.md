# Iif

Iif
-


# Iif


## Синтаксис


Iif(Condition: Variant,

    TruePart: Variant,

    FalsePart: Variant)


## Параметры


Condition. Условие, которое
 требуется вычислить;


TruePart. Возвращается, если
 значение Condition равно True;


FalsePart. Возвращается, если
 значение Condition равно False.


## Описание


Обеспечивает условное выполнение операторов.


## Комментарии


Метод Iif
 является эквивалентом трехместного оператора «[?:](Fore.chm::/08_Operators/Fore_If.htm)».


Отличие метода Iif от трехместного
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


		 Формула
		 Результат
		 Применение


		 = Iif(Min({Brazil|BCA},{Peru|BCA})>0, True,
		 False)
		 True


		Так как минимальное значение соответствующих наблюдений рядов
		 Brazil|BCA и Peru|BCA
		 больше 0.


		 Можно использовать в формулах вычисляемых рядов базы данных
		 временных рядов и в формулах моделей контейнера моделирования,
		 основанных на атрибутах.


		 = Iif(Min(X1)>0, True, False)
		 False


		Так как минимальное значение точек фактора X1
		 меньше 0.


		 Можно использовать в формулах моделей контейнера моделирования,
		 основанных на переменных.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) │ [Логические функции](Func_Logical.htm) │ [IModelling.Iif](kems.chm::/interface/imodelling/imodelling.iif.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

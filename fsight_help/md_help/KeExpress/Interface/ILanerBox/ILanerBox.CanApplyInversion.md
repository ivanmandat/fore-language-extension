# ILanerBox.CanApplyInversion

ILanerBox.CanApplyInversion
-


# ILanerBox.CanApplyInversion


## Синтаксис


CanApplyInversion(Inversion: Integer; InversionLag:
 Integer): Boolean;


## Параметры


Inversion. Способ преобразования
 ряда;


InversionLag. Лаг, с которым
 будет выполняться преобразование.


## Описание


Метод CanApplyInversion возвращает
 признак того, что указанное преобразование можно применить к выделенному
 ряду.


## Комментарии


Параметр Inversion определяется
 элементами перечисления [TsInversion](KeTransform.chm::/Enums/TsInversion.htm).


Значение параметра InversionLag
 должно быть неотрицательным.


Допустимые значения:


	- True. Преобразование
	 можно применить к выделенному ряду;


	- False. Преобразование
	 нельзя применить к выделенному ряду.


Для выполнения преобразования используйте метод [ILanerBox.ApplyInversion](ILanerBox.ApplyInversion.htm).


Признак того, что указанное преобразование уже применено к ряду возвращает
 метод [ILanerBox.IsInversionTurnedOn](ILanerBox.IsInversionTurnedOn.htm).


## Пример


Использование метода приведено в примере для [ILanerBox.ApplyInversion](ILanerBox.ApplyInversion.htm).


См. также:


[ILanerBox](ILanerBox.htm)


[TsInversion](KeTransform.chm::/Enums/TsInversion.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

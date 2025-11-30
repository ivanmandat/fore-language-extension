# ILanerBox.IsInversionTurnedOn

ILanerBox.IsInversionTurnedOn
-


# ILanerBox.IsInversionTurnedOn


## Синтаксис


IsInversionTurnedOn(Inversion: Integer; InversionLag:
 Integer): Boolean;


## Параметры


Inversion. Способ преобразования
 ряда;


InversionLag. Лаг, с которым
 будет выполняться преобразование.


## Описание


Метод IsInversionTurnedOn возвращает
 признак того, что указанное преобразование уже применено к ряду.


## Комментарии


Параметр Inversion определяется
 элементами перечисления [TsInversion](KeTransform.chm::/Enums/TsInversion.htm).


Значение параметра InversionLag
 должно быть неотрицательным.


Признак того, что указанное преобразование можно применить к ряду возвращает
 метод [ILanerBox.CanApplyInversion](ILanerBox.CanApplyInversion.htm).


Для выполнения преобразования используйте метод [ILanerBox.ApplyInversion](ILanerBox.ApplyInversion.htm).


## Пример


Использование метода приведено в примере для [ILanerBox.ApplyInversion](ILanerBox.ApplyInversion.htm).


См. также:


[ILanerBox](ILanerBox.htm)
 | [TsInversion](KeTransform.chm::/Enums/TsInversion.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

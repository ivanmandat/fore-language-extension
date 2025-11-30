# ILanerSerieDisplayParams.PreviousInversionLag

ILanerSerieDisplayParams.PreviousInversionLag
-


# ILanerSerieDisplayParams.PreviousInversionLag


## Синтаксис


PreviousInversionLag: Integer;


## Описание


Свойство PreviousInversionLag
 определяет лаг для периода, используемого при начальном преобразовании
 данных среза.


## Комментарии


По умолчанию свойству установлено значение «-1», при этом в начальном
 преобразовании будет использоваться предыдущий период. Свойство может
 принимать только отрицательные значения и актуально, если свойству [ILanerSerieDisplayParams.InversionLag](ILanerSerieDisplayParams.InversionLag.htm)
 установлено значение отличное от TsInversionLag.EndOfPrecedingYear.


## Пример


Использование свойства приведено в примере для свойства [ILanerSerieDisplayParams.Inversion](ILanerSerieDisplayParams.Inversion.htm).


См. также:


[ILanerSerieDisplayParams](ILanerSerieDisplayParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

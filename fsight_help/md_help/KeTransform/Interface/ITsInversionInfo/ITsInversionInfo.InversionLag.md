# ITsInversionInfo.InversionLag

ITsInversionInfo.InversionLag
-


# ITsInversionInfo.InversionLag


## Синтаксис


InversionLag: [TsInversionLag](../../Enums/TsInversionLag.htm);


## Описание


Свойство InversionLag определяет
 период, на котором осуществляется начальное преобразование.


## Комментарии


Свойство актуально, если в качестве способа начального преобразования
 выбран один из следующих способов:


	- Разность логарифмов (dlog)


	- Темп прироста (pch)


	- Разность (diff)


	- Коэффициент роста (ratio)


Способ начального преобразования определяется свойством [ITsInversionInfo.Inversion](ITsInversionInfo.Inversion.htm).


Если свойству InversionLag установлено
 значение, отличное от TsInversionLag.EndOfPrecedingYear,
 то также необходимо будет задать значение свойства [ITsInversionInfo.PreviousInversionLag](ITsInversionInfo.PreviousInversionLag.htm).


## Пример


Использование свойства приведено в примере для [ITsInversionInfo.Dependence](ITsInversionInfo.Dependence.htm).


См. также:


[ITsInversionInfo](ITsInversionInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

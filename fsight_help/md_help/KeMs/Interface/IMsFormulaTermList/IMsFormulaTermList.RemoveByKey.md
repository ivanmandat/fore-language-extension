# IMsFormulaTermList.RemoveByKey

IMsFormulaTermList.RemoveByKey
-


# IMsFormulaTermList.RemoveByKey


## Синтаксис


		RemoveByKey(EntryKey: Integer): Boolean;


## Параметры


EntryKey. Ключ терма.


## Описание


Метод RemoveByKey осуществляет
 удаление терма по ключу.


## Комментарии


При успешном удалении терма метод возвращает True,
 при неуспешном - False.


Если терм используется в уравнении модели, то при вызове метода генерируется
 сообщение об ошибке.


См. также:


[IMsFormulaTermList](IMsFormulaTermList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IEtlUserDataContainer.IsDirty

IEtlUserDataContainer.IsDirty
-


# IEtlUserDataContainer.IsDirty


## Синтаксис


IsDirty: Boolean;


## Описание


Метод IsDirty возвращает признак
 того, выводится ли окно подтверждения при закрытии окна мастера редактирования
 [пользовательского объекта](IEtlUserDataContainer.htm), если
 никаких изменений в мастере не было произведено.


## Комментарии


Допустимые значения:


	- True. Окно подтверждения
	 при закрытии выводится;


	- False. По умолчанию.
	 Окно подтверждения при закрытии не выводится.


Для определения, будет ли выводиться окно подтверждения при закрытии
 окна мастера редактирования [пользовательского
 объекта](IEtlUserDataContainer.htm), используйте [IEtlUserDataContainer.SetDirty](IEtlUserDataContainer.SetDirty.htm).


## Пример


Использование метода приведено в примере для [IEtlUserDataContainer.UserData](IEtlUserDataContainer.UserData.htm).


См. также:


[IEtlUserDataContainer](IEtlUserDataContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

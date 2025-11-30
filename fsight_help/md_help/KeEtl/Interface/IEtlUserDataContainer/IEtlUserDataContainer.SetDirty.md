# IEtlUserDataContainer.SetDirty

IEtlUserDataContainer.SetDirty
-


# IEtlUserDataContainer.SetDirty


## Синтаксис


SetDirty(bDirty: Boolean);


## Параметры


bDirty. Будет ли выводиться
 окно подтверждения при закрытии окна мастера редактирования.


## Описание


Метод SetDirty определяет, будет
 ли выводиться окно подтверждения при закрытии окна мастера редактирования
 [пользовательского объекта](IEtlUserDataContainer.htm), если
 никаких изменений в мастере не будет производиться.


## Комментарии


Устанавливаемые параметром bDirty
 значения:


	- True. Окно подтверждения
	 при закрытии будет выводиться;


	- False. Окно подтверждения
	 при закрытии не будет выводиться.


Для возвращения признака того, выводится ли окно подтверждения при закрытии
 окна мастера редактирования [пользовательского
 объекта](IEtlUserDataContainer.htm), используйте [IEtlUserDataContainer.IsDirty](IEtlUserDataContainer.IsDirty.htm).


## Пример


Использование метода приведено в примере для [IEtlUserDataContainer.UserData](IEtlUserDataContainer.UserData.htm).


См. также:


[IEtlUserDataContainer](IEtlUserDataContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

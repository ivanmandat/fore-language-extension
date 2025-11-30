# IMetabasePolicy.RestrictIsaAccess

IMetabasePolicy.RestrictIsaAccess
-


# IMetabasePolicy.RestrictIsaAccess


## Синтаксис


		RestrictIsaAccess: Boolean;


## Описание


Свойство RestrictIsaAccess определяет,
 будет ли у пользователей, имеющих привилегию как у АИБ (Изменение метки
 безопасности и списка контроля доступа любого объекта), возможность открывать
 объекты репозитория.


## Комментарии


По умолчанию свойство принимает значение False.
 При установке значения True игнорируется
 наличие у пользователя привилегии «Право чтения и открытия всех объектов»
 и при попытке открыть объект репозитория будет выдано сообщение о том,
 что недостаточно прав для выполнения операции.


## Пример


Использование свойства приведено в примере для [IMetabasePolicy.AllowCreateUserGrant](IMetabasePolicy.AllowCreateUserGrant.htm).


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

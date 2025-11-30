# IMetabasePolicy.RestrictAdminAccess

IMetabasePolicy.RestrictAdminAccess
-


# IMetabasePolicy.RestrictAdminAccess


## Синтаксис


		RestrictAdminAccess: Boolean;


## Описание


Свойство RestrictAdminAccess
 определяет, будет ли у пользователей, имеющих привилегию как у прикладного
 администратора (Создание, удаление пользователей), возможность открывать
 объекты репозитория.


## Комментарии


По умолчанию свойство принимает значение False.
 При установке значения True игнорируется
 наличие у пользователя привилегии «Право чтения и открытия всех объектов»
 и при попытке открыть объект репозитория будет выдано сообщение о том,
 что недостаточно прав для выполнения операции.


Свойство актуально, если используется [разделение
 ролей администраторов](IMetabasePolicy.PromoteToIsaMode.htm).


## Пример


Использование свойства приведено в примере для [IMetabasePolicy.AllowCreateUserGrant](IMetabasePolicy.AllowCreateUserGrant.htm).


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

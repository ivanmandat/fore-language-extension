# IMetabaseAutoRun.Object

IMetabaseAutoRun.Object
-


# IMetabaseAutoRun.Object


## Синтаксис


Object: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Object определяет объект,
 который будет автоматически запускаться при подключении пользователя к
 репозиторию.


## Пример


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Users: IMetabaseUsers;

	    Id: string;

	Begin

	    Mb := MetabaseClass.Active;

	    Users := Mb.Security.Users;

	    Id := Users.Administrator.AutoRun.Object.Id;

	End Sub UserProc;


После выполнения примера в переменной «Id» будет содержаться идентификатор
 объекта, который установлен объектом автозапуска для администратора.


См. также:


[IMetabaseAutoRun](IMetabaseAutoRun.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

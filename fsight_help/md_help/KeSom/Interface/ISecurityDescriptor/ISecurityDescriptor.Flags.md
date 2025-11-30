# ISecurityDescriptor.Flags

ISecurityDescriptor.Flags
-


# ISecurityDescriptor.Flags


## Синтаксис


Flags: [SecurityDescriptorFlags](../../Enums/SecurityDescriptorFlags.htm);


## Описание


Свойство Flags определяет признак
 наследования прав доступа от родительского объекта.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором OBJ_1.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    SDesc: ISecurityDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    SDesc := MB.ItemById("OBJ_1").SecurityDescriptor;

	    SDesc.Edit;

	    SDesc.Flags := SecurityDescriptorFlags.Locked;

	    SDesc.Apply(False);

	End Sub UserProc;


После выполнения примера для указанного объекта будет отменено наследование
 прав доступа от родительского объекта.


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

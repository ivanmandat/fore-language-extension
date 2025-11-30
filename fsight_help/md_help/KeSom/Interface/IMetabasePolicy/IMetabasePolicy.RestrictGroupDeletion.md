# IMetabasePolicy.RestrictGroupDeletion

IMetabasePolicy.RestrictGroupDeletion
-


# IMetabasePolicy.RestrictGroupDeletion


## Синтаксис


RestrictGroupDeletion: Boolean;


## Описание


Свойство RestrictGroupDeletion
 определяет разрешено ли удаление групп, если у группы есть эффективные
 права на объекты репозитория.


## Комментарии


По умолчанию свойство принимает значение False,
 удаление групп разрешено.


Для сохранения нового значения примените политику безопасности с помощью
 свойства [IMetabaseSecurity.Apply](../IMetabaseSecurity/IMetabaseSecurity.Apply.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Isa: IMetabaseUser;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Запретим удаление групп

    Police.RestrictGroupDeletion := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет невозможно удалить группу, если у группы
 есть права на объекты репозитория.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

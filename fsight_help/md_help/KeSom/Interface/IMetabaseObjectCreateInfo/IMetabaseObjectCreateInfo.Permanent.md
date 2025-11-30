# IMetabaseObjectCreateInfo.Permanent

IMetabaseObjectCreateInfo.Permanent
-


# IMetabaseObjectCreateInfo.Permanent


## Синтаксис


Permanent: Boolean;


## Описание


Свойство Permanent определяет
 признак создания постоянного объекта репозитория.


## Комментарии


Допустимые значения:


	- True. После выполнения
	 метода [IMetabase.CreateObject](../IMetabase/IMetabase.CreateObject.htm)
	 созданный объект сразу будет сохранен в репозитории. Для объекта будут
	 выставлены базовые свойства. Для работоспособности объекта в дальнейшем
	 необходимо будет отредактировать его структуру и выставить специфические
	 свойства;


	- False. По умолчанию.
	 После выполнения метода [IMetabase.CreateObject](../IMetabase/IMetabase.CreateObject.htm)
	 будет создана заготовка с описанием объекта. Для того чтобы объект
	 был доступен необходимо [открыть
	 его структуру на редактирование](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm), изменить необходимые свойства
	 и сохранить новый объект с помощью метода [IMetabaseObject.Save](../IMetabaseObject/IMetabaseObject.Save.htm).


## Пример


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_FOLDER;

    CrInfo.Id := "NewFolder";

    CrInfo.Name := "Новая папка";

    CrInfo.Permanent := True;

    MB.CreateObject(CrInfo);

End Sub UserProc;


После выполнения примера в корневой папке репозитория будет создана
 новая папка.


См. также:


[IMetabaseObjectCreateInfo](IMetabaseObjectCreateInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

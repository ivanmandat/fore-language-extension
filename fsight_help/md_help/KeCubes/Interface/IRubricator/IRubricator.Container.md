# IRubricator.Container

IRubricator.Container
-


# IRubricator.Container


## Синтаксис


Container(Type: [RubricatorContainerType](../../Enums/RubricatorContainerType.htm)):
 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Type. Тип объекта репозитория.


## Описание


Свойство Container определяет
 объекты репозитория, образующие базу данных временных рядов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором OBJ_RUBRICATOR.


			Sub UserProc;

Var

    MB: IMetabase;

    Rubr: IRubricator;

    CrInfo: IMetabaseObjectCreateInfo;

    Parent, Descr: IMetabaseObjectDescriptor;

Begin

    MB := MetabaseClass.Active;

    Rubr := MB.ItemById("OBJ_RUBRICATOR").Edit As IRubricator;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_FOLDER;

    CrInfo.Id := "NEW_FAVORITES";

    CrInfo.Name := "NEW_FAVORITES";

    Parent := MB.ItemById("OBJ_RUBRICATOR");

    CrInfo.Parent := Parent;

    CrInfo.Permanent := True;

    Descr := MB.CreateObject(CrInfo);

    Rubr.Container(RubricatorContainerType.UserFavorites) := Descr;

    (Rubr As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет создана папка с идентификатором NEW_FAVORITES.
 Далее эта она будет определена в качестве папки избранного для пользователя.


См. также:


[IRubricator](IRubricator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

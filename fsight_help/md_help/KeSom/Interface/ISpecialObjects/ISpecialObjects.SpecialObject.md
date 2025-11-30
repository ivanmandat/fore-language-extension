# ISpecialObjects.SpecialObject

ISpecialObjects.SpecialObject
-


# ISpecialObjects.SpecialObject


## Синтаксис


SpecialObject(Index: [MetabaseSpecialObject](../../Enums/MetabaseSpecialObject.htm)): [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Index - тип специального объекта репозитория.


## Описание


Свойство SpecialObject определяет объект, являющийся специальным объектом репозитория. Тип специального объекта передается посредством параметра Index.


## Пример


Для выполнения примера предполагается наличие в репозитории карты с идентификатором «RUSSIA».


			Sub UserProc;

Var

    MB: IMetabase;

    SpecObj: ISpecialObjects;

Begin

    MB := MetabaseClass.Active;

    SpecObj := MB.SpecialObjects(True);

    SpecObj.SpecialObject(MetabaseSpecialObject.DefaultTopobase) :=

        MB.ItemById("RUSSIA");

    (SpecObj As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера карта «RUSSIA» будет установлена картой по умолчанию для текущего репозитория.


См. также:


[ISpecialObjects](ISpecialObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabase.SpecialObjects

IMetabase.SpecialObjects
-


# IMetabase.SpecialObjects


## Синтаксис


SpecialObjects(ForEdit: Boolean): [ISpecialObjects](../ISpecialObjects/ISpecialObjects.htm);


## Параметры


ForEdit. Параметр,
 определяющий будет ли возможность изменять параметры специальных объектов.


## Описание


Свойство SpecialObjects возвращает
 коллекцию специальных объектов репозитория.


## Комментарии


Если в качестве значения параметра передается значение True,
 то будет возможность изменить параметры специальных объектов.


Если в качестве значения параметра передается значение False,
 то параметры специальных объектов будут доступны только для чтения.


## Пример


Для выполнения примера предполагается наличие в репозитории карты с
 идентификатором RUSSIA.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    SpecObj: ISpecialObjects;

	Begin

	    MB := MetabaseClass.Active;

	    SpecObj := MB.SpecialObjects(True);

	    SpecObj.SpecialObject(MetabaseSpecialObject.DefaultTopobase) := MB.ItemById("RUSSIA");

	    (SpecObj As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера указанная карта будет установлена картой по
 умолчанию для текущего репозитория.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabase.SpecialObject

IMetabase.SpecialObject
-


# IMetabase.SpecialObject


## Синтаксис


SpecialObject(Index: [MetabaseSpecialObject](../../Enums/MetabaseSpecialObject.htm)):
 [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Index. Тип специального объекта
 репозитория.


## Описание


Свойство SpecialObject определяет
 объект репозитория, который является специальным.


## Комментарии


Тип объекта передается посредством параметра Index.


## Пример


Для выполнения примера предполагается наличие в репозитории карты с
 идентификатором RUSSIA.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	Begin

	    MB := MetabaseClass.Active;

	    MB.SpecialObject(MetabaseSpecialObject.DefaultTopobase) := MB.ItemById("RUSSIA");

	End Sub UserProc;


После выполнения примера указанная карта будет установлена картой по
 умолчанию для текущего репозитория.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

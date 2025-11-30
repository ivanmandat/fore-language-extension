# IMetabaseObjectDescriptor.IsSpecial

IMetabaseObjectDescriptor.IsSpecial
-


# IMetabaseObjectDescriptor.IsSpecial


## Синтаксис


IsSpecial(Index: [MetabaseSpecialObject](../../Enums/MetabaseSpecialObject.htm)): Boolean;


## Параметры


Index. Тип специального
 объекта репозитория.


## Описание


Свойство IsSpecial определяет
 признак принадлежности к специальным объектам репозитория.


## Комментарии


Если свойству установлено значение True,
 то текущий объект является специальным объектом репозитория. Тип специального
 объекта указывается в параметре Index.


## Пример


Для выполнения примера предполагается наличие в репозитории карты с
 идентификатором «RUSSIA».


Добавьте ссылку на системную сборку Metabase.


		Sub UserProc;

		Var

		    MB: IMetabase;

		Begin

		    MB := MetabaseClass.Active;

		    MB.ItemById("RUSSIA").IsSpecial(MetabaseSpecialObject.DefaultTopobase) := True;

		End Sub UserProc;


После выполнения примера карта «RUSSIA» будет установлена картой по
 умолчанию для текущего репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

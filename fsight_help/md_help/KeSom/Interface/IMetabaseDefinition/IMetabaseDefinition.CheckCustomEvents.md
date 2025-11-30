# IMetabaseDefinition.CheckCustomEvents

IMetabaseDefinition.CheckCustomEvents
-


# IMetabaseDefinition.CheckCustomEvents


## Синтаксис


CheckCustomEvents: Boolean;


## Описание


Свойство CheckCustomEvents определяет,
 будет ли осуществляться отслеживание пользовательских событий при работе
 в репозитории с помощью веб-сервиса.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом пользовательские события не отслеживаются. При установке значения
 True события будут отслеживаться,
 для этого в репозитории должен быть установлен [специальный
 объект](../IMetabase/IMetabase.SpecialObject.htm) [MetabaseSpecialObject.MetabaseCustomEvents](../../Enums/MetabaseSpecialObject.htm).
 В качестве объекта указывается модуль, содержащий реализацию интерфейса
 [IMetabaseCustomEvents](../IMetabaseCustomEvents/IMetabaseCustomEvents.htm).


Примечание.
 События отслеживаются только при работе с репозиторием из веб-сервиса.


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с
 идентификатором «MOD_CUSTOM_EVENTS». В модуле имеется класс, который наследуется
 от интерфейса IMetabaseCustomEvents или класса ForeMetabaseCustomEvents.


Добавьте ссылки на системные сборки: Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    MbDef: IMetabaseDefinition;

    Desc: IMetabaseObjectDescriptor;

Begin

    Mb := MetabaseClass.Active;

    MbDef := Mb.Definition;

    Desc := Mb.ItemById("MOD_CUSTOM_EVENTS");

    Mb.SpecialObject(MetabaseSpecialObject.MetabaseCustomEvents) := Desc;

    MbDef.CheckCustomEvents := True;

    MbDef.Save;

End Sub UserProc;


При выполнении примера для репозитория будет установлен обработчик пользовательских
 событий, которые будут обрабатываться при работе из веб-сервиса.


См. также:


[IMetabaseDefinition](IMetabaseDefinition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

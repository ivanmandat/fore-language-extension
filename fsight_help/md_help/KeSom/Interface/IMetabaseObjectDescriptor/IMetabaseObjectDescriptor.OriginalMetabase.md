# IMetabaseObjectDescriptor.OriginalMetabase

IMetabaseObjectDescriptor.OriginalMetabase
-


# IMetabaseObjectDescriptor.OriginalMetabase


## Синтаксис


OriginalMetabase: String;


## Описание


Свойство OriginalMetabase возвращает
 идентификатор репозитория.


## Комментарии


Для задания идентификатора репозитория используйте свойство [IMetabasePolicy.MetabaseIdentifier](../IMetabasePolicy/IMetabasePolicy.MetabaseIdentifier.htm).


Данный идентификатор репозитория используется при контроле версии объектов
 при обновлении.


Для получения подробной информации о контроле версий объектов при обновлении
 обратитесь к статье «[Общие
 настройки политики](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_General.htm#version_control)».


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «OBJECT».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Desc: IMetabaseObjectDescriptor;

    s: string;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим объект с идентификатором "OBJECT"

    Desc := Mb.ItemById("OBJECT");

    // Выведем в консоль информацию об объекте при наличии локальных изменений

    If Desc.VersionChangedLocaly = True Then

        Debug.WriteLine("Версия объекта: " + Desc.Version.ToString);

        Debug.WriteLine("Идентификатор репозитория: " + Desc.OriginalMetabase);

    End If;

End Sub UserProc;


В результате выполнения примера при наличии локальных изменений объекта
 в консоль будет выведена информация о версии объекта и идентификаторе
 репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

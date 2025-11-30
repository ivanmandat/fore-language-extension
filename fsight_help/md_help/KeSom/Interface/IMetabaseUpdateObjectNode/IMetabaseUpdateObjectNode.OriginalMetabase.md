# IMetabaseUpdateObjectNode.OriginalMetabase

IMetabaseUpdateObjectNode.OriginalMetabase
-


# IMetabaseUpdateObjectNode.OriginalMetabase


## Синтаксис


OriginalMetabase: String;


## Описание


Свойство OriginalMetabase возвращает
 идентификатор репозитория обновляемого объекта.


## Комментарии


Данный идентификатор репозитория используется при контроле версии объектов
 при обновлении.


Для получения подробной информации о контроле версий объектов при обновлении
 обратитесь к статье «[Общие
 настройки политики](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_General.htm#version_control)».


## Пример


Для выполнения примера предполагается наличие файла обновления с наименованием
 «Update.pefx», в котором присутствует объект с идентификатором «OBJECT».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    Object: IMetabaseUpdateObjectNode;

    Root: IMetabaseUpdateFolderNode;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Создим объект обновления

    Update := Mb.CreateUpdate;

    // Загрузим обновление из файла

    Update.LoadFromFileNF("C:\Update.pefx");

    // Получим объект с идентификатором «OBJECT»

    Root := Update.RootFolder;

    Object := Root.FindObject(MB.GetObjectKeyById("OBJECT"));

    // Выведем информацию
 об объекте обновления в консоль

    Debug.WriteLine("Идентификатор репозитория: " + Object.OriginalMetabase);

    Debug.WriteLine("Версия объекта: " + Object.Version.ToString);

    Debug.WriteLine("Количество зависимых объектов: " + Object.DependenciesObjects.Count.ToString);

End Sub UserProc;


В результате выполнения примера в консоли будет выведена информация
 об объекте обновления: идентификатор репозитория, версия объекта и количество
 зависимых объектов.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

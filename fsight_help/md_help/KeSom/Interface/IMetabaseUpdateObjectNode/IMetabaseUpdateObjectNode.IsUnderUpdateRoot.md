# IMetabaseUpdateObjectNode.IsUnderUpdateRoot

IMetabaseUpdateObjectNode.IsUnderUpdateRoot
-


# IMetabaseUpdateObjectNode.IsUnderUpdateRoot


## Синтаксис


IsUnderUpdateRoot: Boolean;


## Описание


Свойство IsUnderUpdateRoot возвращает
 признак расположения объекта обновления под корнем [IMetabaseUpdate.RootFolder](../IMetabaseUpdate/IMetabaseUpdate.RootFolder.htm).


## Пример


Для выполнения примера предполагается наличие файла обновления с наименованием
 «Update.pefx», в котором присутствует
 объект с идентификатором «FOLDER».
 На форме должен располагатся компонент Button с идентификатором «Button1».


Добавьте ссылку на системную сборку Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    Update: IMetabaseUpdate;

    Object: IMetabaseUpdateObjectNode;

    Root: IMetabaseUpdateFolderNode;

Begin

    //Получаем доступ к репозиторию

    MB := MetabaseClass.Active;

    //Создаем объект обновления

    Update := Mb.CreateUpdate;

    //Загружаем обновление из файла

    Update.LoadFromFileNF("C:\Update.pefx");

    //Получаем объект, содержащий структуру файла

    Root := Update.RootFolder;

    //Получаем объект с идентификатором «FOLDER»

    Object := Root.FindObject(MB.GetObjectKeyById("FOLDER"));

    //Выводим признак расположения объекта обновления под корнем в консоль

    Debug.Write(Object.IsUnderUpdateRoot);

End Sub Button1OnClick;


В результате выполнения примера, после нажатия кнопки в консоли будет
 выведен признак того, располагается ли заданный объект обновления под
 корнем [IMetabaseUpdate.RootFolder](../IMetabaseUpdate/IMetabaseUpdate.RootFolder.htm).


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

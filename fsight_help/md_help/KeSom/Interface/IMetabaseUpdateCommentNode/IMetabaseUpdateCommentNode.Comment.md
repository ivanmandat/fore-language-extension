# IMetabaseUpdateCommentNode.Comment

IMetabaseUpdateCommentNode.Comment
-


# IMetabaseUpdateCommentNode.Comment


## Синтаксис


Comment: String;


## Описание


Свойство Comment определяет
 текст комментария.


## Пример


Для выполнения примера предполагается наличие в репозитории формы с
 идентификатором Form_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    Root: IMetabaseUpdateFolderNode;

	    Comment: IMetabaseUpdateCommentNode;

	    Obj: IMetabaseUpdateObjectNode;

	Begin

	    MB := MetabaseClass.Active;

	    // Создание обновления

	    Update := MB.CreateUpdate;

	    Root := Update.RootFolder;

	    // Добавление комментария

	    Comment := Root.Add(MetabaseUpdateNodeType.Comment) As IMetabaseUpdateCommentNode;

	    Comment.Comment := "Форма от " + DateTime.Now.ToShortDateString + " числа";

	    Comment.Label := "Дата обновления";

	    // Добавление объекта репозитория

	    Obj := Root.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

	    Obj.Object := MB.ItemById("Form_1");

	    // Сохранение обновления

	    Update.SaveToFileNF("c:\UpdateForm.pefx");

	End Sub UserProc;


После выполнения примера будет создано новое обновление. В обновление
 будут добавлены форма и комментарий, содержащий дату создания обновления.
 После этого обновление будет сохранено в указанный файл.


См. также:


[IMetabaseUpdateCommentNode](IMetabaseUpdateCommentNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

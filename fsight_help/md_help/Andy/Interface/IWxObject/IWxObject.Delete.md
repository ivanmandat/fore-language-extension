# IWxObject.Delete

IWxObject.Delete
-


# IWxObject.Delete


## Синтаксис


		Delete;


## Описание


Метод Delete удаляет объект.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащее объект.


Добавьте ссылки на системные сборки: Andy, Metabase.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    wsp: IWxWorkspace;

		    Shape: IWxShape;

		Begin

		    // Получим репозиторий

		    mb := MetabaseClass.Active;

		    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

		    Shape := wsp.Shapes.Item(0);

		    Shape.Delete;

		    (wsp As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера объект, размещенный на рабочем пространстве,
 будет удалён.


См. также:


[IWxObject](IWxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

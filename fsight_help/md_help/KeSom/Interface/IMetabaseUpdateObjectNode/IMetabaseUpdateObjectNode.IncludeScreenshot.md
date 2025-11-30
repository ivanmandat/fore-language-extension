# IMetabaseUpdateObjectNode.IncludeScreenshot

IMetabaseUpdateObjectNode.IncludeScreenshot
-


# IMetabaseUpdateObjectNode.IncludeScreenshot


## Синтаксис


IncludeScreenshot: Boolean;


## Описание


Свойство IncludeScreenshot определяет,
 будет ли включено в обновление изображение предварительного просмотра
 объекта.


## Комментарии


Изображение предварительного просмотра можно получить в свойстве [IMetabaseObjectDescriptor.Screenshot](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Screenshot.htm).


Допустимые значения:


	- True. Включать изображение
	 предварительного просмотра объекта в обновление;


	- False. По умолчанию.
	 Не включать изображение предварительного просмотра объекта в обновление.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Obj: IMetabaseObjectDescriptor;

	    Upd: IMetabaseUpdate;

	    Nd: IMetabaseUpdateObjectNode;

	    RootFolder: IMetabaseUpdateFolderNode;

	Begin

	    Mb := MetabaseClass.Active;

	    Upd := Mb.CreateUpdate;

	    Obj := Mb.ItemById("REPORT").Bind;

	    RootFolder := Upd.RootFolder;

	    Nd := RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

	    Nd.Object := Obj;

	    If Mb.IsScreenshotSupported Then

	        Nd.IncludeScreenshot := True;

	    End If;

	    Upd.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


При выполнении примера будет создано новое обновление, в которое будет
 включён регламентный отчёт. Если в репозитории разрешено [отображение
 объектов в виде значков без учёта прав доступа](Admin.chm::/03_Admin/Access_control_settings.htm#extralargeicons), то
 в обновление также будет включено изображение предварительного просмотра
 регламентного отчёта.


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

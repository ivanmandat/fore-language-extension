# IWxObject.Protection

IWxObject.Protection
-


# IWxObject.Protection


## Синтаксис


Protection(ObjectProperty: [WxObjectProperty](../../Enums/WxObjectProperty.htm)):
 Boolean;


## Параметры


ObjectProperty. Определяет
 защищаемое свойство.


## Описание


Свойство Protection определяет
 защиту от изменения свойств объекта. Если значение данного свойства установить
 в Тrue, то свойство, указанное
 в качестве параметра, будет защищено от изменений.


По умолчанию свойство имеет значение False.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего объект.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    // Получим репозиторий

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shape := Wsp.Shapes.Item(0);

	    Shape.Protection(WxObjectProperty.EntityFree) := False;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера объект, размещенный на рабочем пространстве,
 нельзя будет удалить.


См. также:


[IWxObject](IWxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

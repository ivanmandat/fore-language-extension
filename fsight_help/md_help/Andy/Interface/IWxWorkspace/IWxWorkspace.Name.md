# IWxWorkspace.Name

IWxWorkspace.Name
-


# IWxWorkspace.Name


## Синтаксис


		Name: String;


## Описание


Свойство Name определяет имя
 рабочего пространства.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP».


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


					Sub  Userproc;

		Var

		    mb: IMetabase;

		    wsp: IWxWorkspace;

		Begin

		    // Получаем рабочее пространство

		    mb := MetabaseClass.Active;

		    wsp := mb.ItemById("WSP").Edit As  IWxWorkspace;

		    wsp.Name := "WSP1";

		    wsp.Size := New  GxSizeF.Create(100,  100);

		    (wsp As  IMetabaseObject).Save;

		End  Sub  Userproc;


После выполнения примера будет изменено наименование и размер рабочего
 пространства.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IWxWorkspace.LoadFromFile

IWxWorkspace.LoadFromFile
-


# IWxWorkspace.LoadFromFile


## Синтаксис


		LoadFromFile(FileName: String);


## Параметры


FileName. Путь и наименование
 файла.


## Описание


Метод LoadFromFile загружает
 рабочее пространство из файла.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», а также файла «RP.p5w».


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


					Sub Userproc;

		Var

		    mb: IMetabase;

		    wsp: IWxWorkspace;

		Begin

		    // Получаем рабочее пространство

		    mb := MetabaseClass.Active;

		    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

		    wsp.LoadFromFile("c:\RP.p5w");

		    //Сохраняем изменения

		    (wsp As IMetabaseObject).Save;

		End Sub Userproc;


После выполнения примера рабочее пространство будет загружено из файла.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

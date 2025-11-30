# IWxWorkspace.SaveToFile

IWxWorkspace.SaveToFile
-


# IWxWorkspace.SaveToFile


## Синтаксис


SaveToFile(FileName: String);


## Параметры


FileName. Путь и наименование
 файла.


## Описание


Метод SaveToFile сохраняет рабочее
 пространство в файл.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    wsp.SaveToFile("c:\RP.p5w");

	    (wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера рабочее пространство будет сохранено в файл.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

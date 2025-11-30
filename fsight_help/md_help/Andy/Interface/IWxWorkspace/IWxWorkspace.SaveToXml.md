# IWxWorkspace.SaveToXml

IWxWorkspace.SaveToXml
-


# IWxWorkspace.SaveToXml


## Синтаксис


		SaveToXml: String


## Описание


Метод SaveToXml сохраняет состояние
 рабочего пространства в XML.


## Комментарии


Метод возвращает содержимое XML-файла в виде строки. В дальнейшем полученное
 содержимое может быть сохранено в файл с использованием ресурсов сборки
 [XML](ModXml.chm::/develop.htm). Также содержимое
 XML-файла используется методом [LoadFromXml](IWxWorkspace.LoadFromXml.htm)
 для загрузки состояния рабочего пространства.


## Пример


Для выполнения примера предполагается наличие в репозитории рабочего
 пространства с идентификатором «WSP».


Добавьте ссылки на системные сборки: Andy, Metabase, XML.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Wsp: IWxWorkspace;

		    XMLDoc: FreeThreadedDOMDocument60;

		Begin

		    Mb := MetabaseClass.Active;

		    Wsp := Mb.ItemById("WSP").Bind As IWxWorkspace;

		    XMLDoc := New FreeThreadedDOMDocument60.Create;

		    XMLDoc.loadXML(Wsp.SaveToXml);

		    XMLDoc.save("d:\WorkspaceState.xml");

		End Sub UserProc;


При выполнение примера текущее состояние рабочего пространства будет
 сохранено в указанный XML-файл.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IWxWorkspace.LoadFromXml

IWxWorkspace.LoadFromXml
-


# IWxWorkspace.LoadFromXml


## Синтаксис


		LoadFromXml(Xml: String);


## Параметры


Xml. XML-структура, из которой
 загружается состояние рабочего пространства.


## Описание


Метод LoadFromXml загружает
 состояние рабочего пространства из XML.


## Комментарии


XML-структура, указываемая в параметре Xml
 должна быть получена из результатов выполнения метода [SaveToXml](IWxWorkspace.SaveToXml.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории рабочего
 пространства с идентификатором «WSP». Состояние рабочего пространства
 было сохранено в файл «d:\WorkspaceState.xml».


Добавьте ссылки на системные сборки: Andy, Metabase, XML.


					Sub Button6OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    Mb: IMetabase;

		    Wsp: IWxWorkspace;

		    XMLDoc: FreeThreadedDOMDocument60;

		Begin

		    Mb := MetabaseClass.Active;

		    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

		    XMLDoc := New FreeThreadedDOMDocument60.Create;

		    XMLDoc.load("d:\WorkspaceState.xml");

		    Wsp.LoadFromXml(XMLDoc.xml);

		    (Wsp As IMetabaseObject).Save;

		End Sub Button6OnClick;


При выполнение примера текущее состояние рабочего пространства будет
 загружено из указанного XML-файла. После этого рабочее пространство будет
 сохранено в репозитории.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

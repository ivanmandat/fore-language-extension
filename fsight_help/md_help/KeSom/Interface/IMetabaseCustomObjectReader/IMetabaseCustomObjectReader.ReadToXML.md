# IMetabaseCustomObjectReader.ReadToXML

IMetabaseCustomObjectReader.ReadToXML
-


# IMetabaseCustomObjectReader.ReadToXML


## Синтаксис


ReadToXML(Var Xml: Variant);


## Параметры


Xml. XML-объект, в который
 будут считаны данные из объекта.


## Описание


Метод ReadToXML считывает данные
 из объекта пользовательского класса в XML-формате и загружает их в указанную
 переменную.


## Комментарии


Перед выполнением метода ReadToStream
 необходимо вызвать метод [Load](IMetabaseCustomObjectReader.Load.htm)
 для чтения данных из базы репозитория в текущий объект в памяти ПК.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 пользовательского класса с идентификатором «OBJ_CUSTOM».


Добавьте ссылки на системные сборки «Metabase», «Xml».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomObject: IMetabaseCustomObject;

	    Writer: IMetabaseCustomObjectWriter;

	    Reader: IMetabaseCustomObjectReader;

	    XmlVar: Variant;

	    XmlDE: IXmlDomElement;

	    XmlDoc: FreeThreadedDOMDocument60;

	Begin

	    Mb := MetabaseClass.Active;

	    CustomObject := Mb.ItemById("OBJ_CUSTOM").Edit As IMetabaseCustomObject;

	    XmlDoc := New FreeThreadedDOMDocument60.Create;

	    XmlDoc.loadXML("<nodes> <node1>ITEM1=3</node1> <node2>ITEM2=0</node2> </nodes>");

	    Writer := CustomObject.CreateWriter;

	    Writer.WriteFromXML(XmlDoc);

	    Writer.Save;

	    Reader := CustomObject.CreateReader;

	    Reader.Load;

	    Reader.ReadToXML(XmlVar);

	    XmlDoc := XmlVar As FreeThreadedDOMDocument60;

	    XmlDE := XmlDoc.selectSingleNode("nodes") As IXmlDomElement;

	    Debug.WriteLine(XmlDE.xml);

	    (CustomObject As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в объект будут записаны пользовательские данные
 в формате XML, затем эти данные будут прочитаны и выведены в окно консоли.


См. также:


[IMetabaseCustomObjectReader](IMetabaseCustomObjectReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

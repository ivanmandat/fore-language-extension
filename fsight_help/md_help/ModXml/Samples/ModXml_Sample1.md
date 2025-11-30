# Примеры работы с XML-файлами

Примеры работы с XML-файлами
-


# Примеры работы с XML-файлами


Рассмотрим несколько простых примеров по работе с XML-файлами с использованием
 сборки XML языка Fore.


## Загрузка XML-файла


Для загрузки XML-файла необходимо:


	- Инициализировать объект одного из доступных классов: DOMDocument,
	 DOMDocument40, DOMDocument60,
	 FreeThreadedDOMDocument, FreeThreadedDOMDocument60. Последние
	 два класса используются, если осуществляется разработка приложения,
	 в котором предусмотрен многопоточный доступ к одним и тем же данным.


	- Полученный объект может быть приведен к одному из следующих
	 интерфейсов: IXmlDomDocument,
	 IXmlDomDocument2, IXmlDomDocument3.
	 IXmlDomDocument - содержит
	 базовые свойства и методы для работы с XML-структурами; IXmlDomDocument2
	 - расширение интерфейса IXmlDomDocument,
	 которое поддерживает схемы кеширования и функции проверки, включая
	 поддержку XPath-выражений; IXmlDomDocument3
	 - продолжение IXmlDomDocument2
	 с двумя новыми методами importNode
	 и validateNode.


	- Используя метод load
	 или loadXML интерфейса IXmlDomDocument (описание методов
	 представлено в MSDN), можно загрузить XML-документ, с которым в дальнейшем
	 будет осуществляться работа.


	Sub Sample1;

	Var

	    XMLDoc: IXMLDOMDocument;

	    XMLName: String = "c:\Data.xml";

	    Loaded: Boolean;

	Begin

	    XMLDoc := New DOMDocument60.Create;

	    Loaded := XMLDoc.load(XMLName);

	    If Loaded Then

	        //Дальнейшая работа с загруженным документом

	        //...

	        XMLDoc.save(XMLName);

	    End If;

	    // Освобождение доступа к файлу

	    Dispose XMLDoc;

	End Sub Sample1;


	Sub Sample2(strXML: String);

	Var

	    XMLDoc: IXMLDOMDocument3;

	    Loaded: Boolean;

	Begin

	    XMLDoc := New FreeThreadedDOMDocument60.Create;

	    Loaded := XMLDoc.loadXML(strXML);

	    If Loaded Then

	        //Дальнейшая работа с загруженным документом

	    End If;

	    // Освобождение доступа к файлу

	    Dispose XMLDoc;

	End Sub Sample2;


## Работа с вершинами


Для получения необходимых вершин используйте соответствующие свойства
 и методы интерфейса IXmlDomDocument:


	Sub Sample3;

	Var

	    XMLDoc: IXMLDOMDocument;

	    Loaded: Boolean;

	    Nodes: IXmlDomNodeList;

	    Node, NewNode: IXmlDomNode;

	    NewAttr: IXmlDomAttribute;

	Begin

	    //Загрузка документа

	    //...

	    If Loaded Then

	        //Корневая вершина

	        Node := XMLDOc.documentElement;

	        //Получение вершин, дочерних для корневой вершины

	        Nodes := Node.childNodes;

	        //Получение необходимых вершин в соответствии с XPath-запросом

	        Nodes := XMLDOc.selectNodes("<XPath-запрос для отбора вершин>");

	        //Новая вершина

	        NewNode := XMLDOc.createNode("element", "Comments", "");

	        //Новый атрибут для вершины

	        NewAttr := XMLDOc.createAttribute("text");

	        NewAttr.value := "Comment...";

	        NewNode.attributes.setNamedItem(NewAttr);

	        //Добавление созданной вершины в дерево

	        Node.appendChild(NewNode);

	        //Получение необходимой вершины в соответствии с XPath-запросом

	        Node := XMLDOc.selectSingleNode("<XPath-запрос для отбора вершины>");

	        //...

	    End If;

	    Dispose XMLDoc;

	End Sub Sample3;


## Дополнительно


Ниже приведены различные примеры работы с XML-файлами:


		 Пример


		 [Работа с XML файлами
		 через MSXML версии 6.0](work_using_msxml6.htm)


		 [Работа с разделом
		 CDATA](work_with_cdata.htm)


См. также:


[Сборка XML](../develop.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

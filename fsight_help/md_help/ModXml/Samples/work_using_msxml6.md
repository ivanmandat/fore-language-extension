# Работа с XML файлами через MSXML версии 6.0

Работа с XML файлами через MSXML версии 6.0
-


# Работа с XML файлами через MSXML версии 6.0


При переходе к стандарту MSXML версии 6.0 изменился алгоритм работы
 системных функций в плане учёта пространств имен XML-файла. Данная особенность
 описана в статье [https://learn.microsoft.com/en-us/previous-versions/troubleshoot/msxml/msxml-6-matching-nodes-not-return](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/msxml/msxml-6-matching-nodes-not-return).


В языке Fore все классы сборки XML при своей работе используют MSXML
 версии 6.0. Это накладывает определённые требования к коду, чтобы результаты
 работы были корректны.


Рассмотрим пример. Имеется файл Data.xml со следующим содержимым:


<?xml version="1.0" encoding="utf-8"?>


<root xmlns="http://www.w3.org/1999/xhtml">


  <items>


    <item>A</item>


    <item>B</item>


    <item>C</item>


  </items>


</root>


Попробуем использовать для работы с файлом следующий код:


	Sub LoadXML;

	Var

	    XMLDoc: IXMLDOMDocument;

	    XMLName: String = "c:\Data.xml";

	    Loaded: Boolean;

	    Nodes: IXmlDomNodeList;

	Begin

	    XMLDoc := New DOMDocument.Create;

	    Loaded := XMLDoc.load(XMLName);

	    //...

	    If Loaded Then

	        //Получение вершин

	        Nodes := XMLDOc.documentElement.childNodes;

	        Debug.WriteLine(Nodes.length);

	        Nodes := XMLDOc.getElementsByTagName("root"); //Получить элемент root

	        Debug.WriteLine(Nodes.length);

	        Nodes := XMLDOc.getElementsByTagName("items"); //Получить элемент items

	        Debug.WriteLine(Nodes.length);

	        Nodes := XMLDOc.getElementsByTagName("item"); //Получить все элементы item

	        Debug.WriteLine(Nodes.length);

	    End If;

	    Dispose XMLDoc;

	End Sub LoadXML;


Код вернёт следующие значения: 1, 0, 0. Метод getElementsByTagName
 не распознает пространство имён по умолчанию и поэтому не найдёт указанные
 элементы Items и Item. Для решения проблемы необходимо убрать пространство
 имён по умолчанию или задать для него какой-либо префикс:


<?xml version="1.0" encoding="utf-8"?>


<root xmlns:ns="http://www.w3.org/1999/xhtml">


  <items>


    <item>A</item>


    <item>B</item>


    <item>C</item>


  </items>


</root>


Указание префикса подходит, если имеется возможность изменить используемый
 XML-файл. Если такой возможности нет, то можно воспользоваться программным
 способом введения пространства имен с префиксом. В Fore необходимый метод
 setProperty, который используется
 для задания внутреннего свойства SelectionNamespaces,
 доступен в интерфейсе IXMLDOMDocument2.
 Код приложения при этом изменится следующим способом:


	Sub LoadXML;

	Var

	    XMLDoc: IXMLDOMDocument2;

	    XMLName: String = "c:\Data.xml";

	    Loaded: Boolean;

	    Nodes: IXmlDomNodeList;

	Begin

	    XMLDoc := New DOMDocument.Create;

	    XMLDoc.setProperty("SelectionNamespaces", "xmlns:ns=""http://www.w3.org/1999/xhtml""");

	    Loaded := XMLDoc.load(XMLName);

	    //...

	    If Loaded Then

	        //Получение вершин, дочерних для корневой вершины

	        Nodes := XMLDOc.documentElement.childNodes;

	        Debug.WriteLine(Nodes.length);

	        Nodes := XMLDOc.selectNodes("ns:root"); //Получить элемент root

	        Debug.WriteLine(Nodes.length);

	        Nodes := XMLDOc.selectNodes("//ns:items"); //Получить элемент items

	        Debug.WriteLine(Nodes.length);

	        Nodes := XMLDOc.selectNodes("//ns:item"); //Получить все элементы item

	        Debug.WriteLine(Nodes.length);

	    End If;

	    Dispose XMLDoc;

	End Sub LoadXML;


См. также:


[Сборка XML](../develop.htm) | [Примеры
 работы с XML-файлами](ModXml_Sample1.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Работа с разделом CDATA

Работа с разделом CDATA
-


# Работа с разделом CDATA


Раздел CDATA предназначен для хранения любых символьных данных, разбор
 которых не осуществляется при обработке XML-файла. Все данные, расположенные
 в разделе CDATA интерпретируются как символы, а не как разметка или ссылки
 на объект. Также в разделе CDATA можно сохранить поток каких-либо двоичных
 данных.


Рассмотрим небольшой пример для сохранения в раздел CDATA содержимого
 объекта «Документ» из репозитория и последующую загрузку его из XML-файла.


Примечание.
 В виду того, что при работе происходит преобразование данных из потока
 в символьную строку, указанный пример подходит для сохранения/загрузки
 только небольших объектов.


	Sub Save;

	Var

	    MB: IMetabase;

	    ID_DOC: String = "REPO_IMG";

	    Doc: IDocument;

	    Stream: IIOStream;

	    Bytes: Array Of Integer;

	    Result: String;

	    XMLDoc: IXMLDOMDocument;

	    XMLName: String = "c:\Documents.xml";

	    Root, Element: IXmlDomElement;

	    CDATA: IXmlDomCDATASection;

	    Loaded: Boolean;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Doc := MB.ItemById(ID_DOC).Bind As IDocument;

	    //Представление содержимого документа в виде потока

	    Stream := Doc.GetAsStream;

	    //Получение списка битов в виде строки

	    Stream.Seek(0, SeekOrigin.Beginning);

	    Bytes := New Integer[Stream.Size];

	    Debug.WriteLine("Размер: " + Stream.Size.ToString);

	    For i := 0 To Stream.Size - 1 Do

	        Bytes[i] := Stream.ReadByte;

	        Result := Result + Bytes[i].ToString + "|"; //Для разделения битов используется символ - "|"

	    End For;

	    Result := Result.SubString(0, Result.Length - 1); //Удаление последнего незначимого "|"

	    //Работа с XML-файлом

	    XMLDoc := New DOMDocument60.Create;

	    Loaded := XMLDoc.load(XMLName);

	    //Если файл существует, то открываем его, иначе создаем

	    If Loaded Then

	        Root := XMLDoc.documentElement;

	    Else

	        Root := XMLDoc.createElement("DOCUMENTS");

	        XMLDoc.appendChild(Root);

	    End If;

	    //Создание нового элемента и раздела CDATA

	    Element := XMLDoc.createElement("DOCUMENT");

	    CDATA := XMLDoc.createCDATASection(Result);

	    //В атрибуте ID сохраним идентификатор документа

	    Element.setAttribute("ID", ID_DOC);

	    //Блок CDATA как дочерний раздел для DOCUMENT

	    Element.appendChild(CDATA);

	    Root.appendChild(Element);

	    //Сохранение

	    XMLDoc.save(XMLName);

	    Dispose XMLDoc;

	End Sub Save;


При выполнении метода Save документ
 с идентификатором REPO_IMG будет сохранен в XML-файл. Для документа создается
 новый элемент, в атрибут элемента ID сохраняется идентификатор, а в разделе
 CDATA - содержимое документа.


	Sub Load;

	Var

	    XMLDoc: IXMLDOMDocument;

	    XMLName: String = "c:\Documents.xml";

	    ID_DOC: String = "REPO_IMG";

	    Root, Element: IXmlDomElement;

	    CDATA: IXmlDomCDATASection;

	    Loaded: Boolean;

	    BytesString: Array Of String;

	    Stream: IMemoryStream;

	    i: Integer;

	Begin

	    //Загрузка документа

	    XMLDoc := New DOMDocument60.Create;

	    Loaded := XMLDoc.load(XMLName);

	    If Loaded Then

	        Root := XMLDoc.documentElement;

	    Else

	        Debug.WriteLine("Файл отсутствует");

	        Return;

	    End If;

	    //Получаем элемент DOCUMENT с заданным значением атрибута ID

	    Element := Root.selectSingleNode("DOCUMENT[@ID=""" + ID_DOC + """]") As IXmlDomElement;

	    If Element <> Null Then

	        //Получаем CDATA

	        CDATA := Element.firstChild As IXmlDomCDATASection;

	        //Получение списка битов из CDATA

	        BytesString := CDATA.data.Split("|");

	        //Поток, в который будут помещены биты

	        Stream := New MemoryStream.Create;

	        Stream.Seek(0, SeekOrigin.Beginning);

	        //Считываем данные из массива в поток

	        For i := 0 To BytesString.Length - 1 Do

	            Stream.WriteByte(Integer.Parse(BytesString[i]));

	        End For;

	        Debug.WriteLine("Считанный размер: " + Stream.Size.ToString);

	        //...

	        //Дальнейшая работа с потоком Stream

	        //...

	    Else

	        Debug.WriteLine("Документ с указанным идентификатором отсутствует.");

	    End If;

	    Dispose XMLDoc;

	End Sub Load;


При выполнении метода Load осуществляется
 загрузка XML-файла. В файле ищется элемент DOCUMENT с заданным значением
 атрибута ID. Если элемент присутствует, то из его дочернего раздела CDATA
 в поток считываются данные.


См. также:


[Сборка XML](../develop.htm) | [Примеры
 работы с XML-файлами](ModXml_Sample1.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

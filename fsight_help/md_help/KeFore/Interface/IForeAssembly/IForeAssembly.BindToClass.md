# IForeAssembly.BindToClass

IForeAssembly.BindToClass
-


# IForeAssembly.BindToClass


## Синтаксис


BindToClass(ClassName: String): [IForeClass](../IForeClass/IForeClass.htm);


## Параметры


ClassName. Наименование класса/интерфейса/перечисления.


## Описание


Метод BindToClass возвращает
 информацию о классе/интерфейсе/перечислении с указанным именем.


## Комментарии


Метод возвращает Null, если
 класс/интерфейс/перечисление с указанным именем не найдены в сборке.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST». В сборке реализован класс «CCalculate».


Добавьте ссылку на системную сборку Fore, Metabase, Xml.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FClass: IForeClass;

	    FSub: IForeSub;

	    i, j: Integer;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    //Загрузка сборки

	    Assm := Runtime.BindToAssembly("ASSM_TEST");

	    //Получение информации о
	 процедурах/функциях класса

	    FClass := Assm.BindToClass("CCalculate");

	    j := FClass.SubsCount - 1;

	    For i := 0 To j Do

	        FSub := FClass.SubItem(i);

	        If FSub.IsConstructor Then

	            Debug.Write("Конструктор: ");

	        Elseif FSub.IsStatic Then

	            If FSub.IsResult Then

	                Debug.Write("Статическая функция: ");

	            Else

	                Debug.Write("Статическая процедура: ");

	            End If;

	        Else

	            If FSub.IsResult Then

	                Debug.Write("Функция: ");

	            Else

	                Debug.Write("Процедура: ");

	            End If;

	        End If;

	        Debug.WriteLine(FSub.Name);

	        If FSub.XMLDocumentation <> Null Then

	            Debug.WriteLine("Комментарии:");

	            Debug.Indent;

	            PrintXml(FSub.XMLDocumentation);

	            Debug.Unindent;

	        End If;

	        If FSub.ModuleName <> "ASSM_TEST" Then

	            Debug.WriteLine("Непосредственная реализация в: " + FSub.ModuleName);

	        End If;

	    End For;

	End Sub UserProc;


	Sub PrintXml(_doc: IXmlDomDocument);

	Var

	    _nodes: IXmlDomNodeList;

	    _node: IXmlDomNode;

	    _elem: IXmlDomElement;

	Begin

	    _elem := _doc.documentElement;

	    Debug.WriteLine("Root node: " + _elem.nodeName);

	    _nodes := _elem.childNodes;

	    Debug.WriteLine("Root child count: " + _nodes.length.ToString);

	    Debug.WriteLine("Nodes: ");

	    Debug.Indent;

	    _node := _nodes.nextNode;

	    While _node <> Null Do

	        Debug.WriteLine("Name: " + _node.nodeName + ", Text: " + _node.text);

	        _node := _nodes.nextNode;

	    End While;

	    Debug.Unindent;

	End Sub PrintXml;


При выполнении примера в среду выполнения будет загружена сборка репозитория
 с указанным идентификатором. В консоль среды разработки будет выведена
 информация о процедурах/функциях/конструкторах, реализованных в классе
 «CCalculate».


См. также:


[IForeAssembly](IForeAssembly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

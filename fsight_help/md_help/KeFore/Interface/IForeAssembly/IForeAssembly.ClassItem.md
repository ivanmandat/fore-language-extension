# IForeAssembly.ClassItem

IForeAssembly.ClassItem
-


# IForeAssembly.ClassItem


## Синтаксис


ClassItem(ClassIndex: Integer): [IForeClass](../IForeClass/IForeClass.htm);


## Параметры


ClassIndex. Индекс конструкции,
 реализованной в сборке. Значение индекса указывается в диапазоне [0, [ClassesCount](IForeAssembly.ClassesCount.htm)-1].


## Описание


Метод ClassItem возвращает информацию
 о конструкции сборки с указанным индексом.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST». В сборке реализованы какие-либо классы, интерфейсы
 или перечисления.


Добавьте ссылку на системную сборку Fore, Metabase, Xml.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FClass: IForeClass;

	    i, j: Integer;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    //Загрузка сборки

	    Assm := Runtime.BindToAssembly("ASSM_TEST");

	    //Получение информации о интерфейсах, классах, перечислениях

	    j := Assm.ClassesCount - 1;

	    For i := 0 To j Do

	        FClass := Assm.ClassItem(i);

	        Select Case FClass.ClassType

	            Case ForeClassType.Class_: Debug.Write("Класс: ");

	            Case ForeClassType.Interface_: Debug.Write("Интерфейс: ");

	            Case ForeClassType.Enum_: Debug.Write("Перечисление: ");

	        End Select;

	        Debug.Write(FClass.Name);

	        Debug.Write("; Модификатор доступа: ");

	        Select Case FClass.ClassAccessSpecificatorKind

	            Case AccessSpecificatorKind.Public_: Debug.WriteLine("Public");

	            Case AccessSpecificatorKind.Private_: Debug.WriteLine("Private");

	            Case AccessSpecificatorKind.Protected_: Debug.WriteLine("Protected");

	            Case AccessSpecificatorKind.Friend_: Debug.WriteLine("Friend");

	            Case AccessSpecificatorKind.ProtectedFriend: Debug.WriteLine("ProtectedFriend");

	        End Select;

	        If FClass.XMLDocumentation <> Null Then

	            Debug.WriteLine("Комментарии:");

	            Debug.Indent;

	            PrintXml(FClass.XMLDocumentation);

	            Debug.Unindent;

	        End If;

	        If FClass.ParentName <> "" Then

	            Debug.WriteLine("Родительский класс/интерфейс: " + FClass.ParentName);

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
 информация о конструкциях, которые реализованы в этой сборке.


См. также:


[IForeAssembly](IForeAssembly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

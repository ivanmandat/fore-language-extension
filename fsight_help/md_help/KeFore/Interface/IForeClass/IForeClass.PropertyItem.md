# IForeClass.PropertyItem

IForeClass.PropertyItem
-


# IForeClass.PropertyItem


## Синтаксис


PropertyItem(Index: Integer): [IForeProperty](../IForeProperty/IForeProperty.htm);


## Параметры


Index. Индекс свойства. Значение
 индекса указывается в диапазоне [0, [PropertiesCount](IForeClass.PropertiesCount.htm)-1].


## Описание


Метод PropertyItem возвращает
 информацию о свойстве с указанным индексом.


## Пример


Для выполнения примера предполагается наличие в репозитории сборки с
 идентификатором «ASSM_TEST». В сборке реализован класс «CCalculate», в
 классе имеются какие-либо свойства.


Добавьте ссылку на системную сборку Fore, Metabase, Xml.


	Sub UserProc;

	Var

	    ForeService: IForeServices;

	    Runtime: IForeRuntime;

	    Assm: IForeAssembly;

	    FClass: IForeClass;

	    FProp: IForeProperty;

	    i, j: Integer;

	Begin

	    ForeService := MetabaseClass.Active As IForeServices;

	    Runtime := ForeService.GetRuntime;

	    // Загрузка сборки

	    Assm := Runtime.BindToAssembly("ASSM_TEST");

	    // Получение информации о свойствах класса

	    FClass := Assm.BindToClass("CCalculate");

	    j := FClass.PropertiesCount - 1;

	    For i := 0 To j Do

	        FProp := FClass.PropertyItem(i);

	        Debug.WriteLine("Свойство: " + FProp.Name);

	        Debug.Indent;

	        Debug.WriteLine("По умолчанию: " + FProp.IsDefault.ToString);

	        Debug.WriteLine("Статическое: " + FProp.IsStatic.ToString);

	        Debug.WriteLine("Метод, реализующий Get-часть: " + FProp.NameOfGetMethod);

	        Debug.WriteLineIf(FProp.NameOfSetMethod <> "", "Метод, реализующий Set-часть: " + FProp.NameOfSetMethod);

	        If FProp.XMLDocumentation <> Null Then

	            Debug.WriteLine("Комментарии:");

	            Debug.Indent;

	            PrintXml(FProp.XMLDocumentation);

	            Debug.Unindent;

	        End If;

	        Debug.Unindent;

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
 информация о свойствах, реализованных в классе «CCalculate».


См. также:


[IForeClass](IForeClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

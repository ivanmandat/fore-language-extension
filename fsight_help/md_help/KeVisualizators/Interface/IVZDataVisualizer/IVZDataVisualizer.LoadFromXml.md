# IVZDataVisualizer.LoadFromXml

IVZDataVisualizer.LoadFromXml
-


# IVZDataVisualizer.LoadFromXml


## Синтаксис


LoadFromXml(Value: String);


## Параметры


Value. Параметры визуализатора
 в XML-формате.


## Описание


Метод LoadFromXml загружает
 XML-параметры визуализатора: стиль и данные.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS. Добавьте ссылки на системные сборки Express,
 Metabase, Visualizators и Xml.


До выполнения примера пузырьковое дерево выглядит так, как показано
 на странице [описания интерфейса
 IVZBubbleTree](../IVZBubbleTree/IVZBubbleTree.htm). Получим параметры стиля данного дерева в формате XML
 и изменим цвет подписей, которые находятся за пределами пузырьков:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    BubbleTreeXML: String;

	    XMLDoc: IXMLDOMDocument;

	    Loaded: Boolean;

	    Nodes: IXmlDomNodeList;

	    Node, NodeAttr: IXmlDomNode;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим параметры пузырькового дерева в формате XML

	    BubbleTreeXML := BubbleTree.SaveToXml;

	    // Создадим структуру для изменения XML

	    XMLDoc := New DOMDocument.Create;

	    Loaded := XMLDoc.loadXML(BubbleTreeXML);

	    If Loaded Then

	        // Получим узел Font

	        Nodes := XMLDOc.getElementsByTagName("Font");

	        Node := Nodes.item(1);

	        // Найдём атрибут Color

	        NodeAttr := Node.attributes.getNamedItem("Color");

	        // Установим другой цвет

	        NodeAttr.nodeValue := "#FF404EED";

	        // Получим изменённую XML

	        BubbleTreeXML := XMLDoc.xml;

	    End If;

	    // Установим новые значения параметров стиля пузырькового дерева из XML

	    BubbleTree.LoadFromXml(BubbleTreeXML);

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера цвет подписей,
 которые находятся за пределами пузырьков, будет изменён на синий.


См. также:


[IVZDataVisualizer](IVZDataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

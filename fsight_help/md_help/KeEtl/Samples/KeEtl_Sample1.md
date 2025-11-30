# Импорт из XML-файлов со смешанной структурой

Импорт из XML-файлов со смешанной структурой
-


# Импорт из XML-файлов со смешанной структурой


Задача ETL позволяет импортировать данные из XML-файлов, если значения
 сформированы в одном из двух видов:


	- Поля располагаются в дочерних вершинах;


	- Поля располагаются в атрибутах вершины.


Иногда может возникнуть ситуация, когда XML-файл имеет смешанную структуру,
 и часть необходимых данных будет расположена в дочерних вершинах, а часть
 в атрибутах вершин. В такой ситуации написать необходимый XPath-запрос
 не получится. Импорт из XML-файла со смешанной структурой можно произвести,
 используя макрос на Fore и объект задачи Etl - [Источник
 пользователя](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/Uietl_Inputs_User.htm). Рассмотрим пример импорта из XML-файла
 со смешанной структурой.


Структура импортируемого файла:


[![](../opened.gif)![](../closed.gif)Data.xml](javascript:TextPopup(this))


	<?xml version="1.0" encoding="windows-1251"?>


	<Data>


	 <Record Date="01.04.2011">


	  <val>100,8</val>


	  <val1>1,8</val1>


	 </Record>


	 <Record Date="02.04.2011">


	  <val>200,8</val>


	  <val1>12,8</val1>


	 </Record>


	 <Record Date="03.04.2011">


	  <val>300,8</val>


	  <val1>41,8</val1>


	 </Record>


	 <Record Date="04.04.2011">


	  <val>400,8</val>


	  <val1>113,8</val1>


	 </Record>


	 <Record Date="05.04.2011">


	  <val>500,8</val>


	  <val1>13,8</val1>


	 </Record>


	 <Record Date="06.04.2011">


	  <val>600,8</val>


	  <val1>41,8</val1>


	 </Record>


	</Data>


Класс с реализацией метода [Fetch](KeDt.chm::/Interface/IDtRecordsetProvider/IDtRecordsetProvider.Fetch.htm), который импортирует
 данные:


	Class UserProvider: Object, IDtRecordsetProvider

	    Public Function Fetch: Array Of Variant;

	    Var

	        Xml: IXmlDomDocument;

	        Nodes, ChildNodes: IXmlDomNodeList;

	        Node: IXmlDomNode;

	        Date, Val1, Val2: Variant;

	        Result: Array Of Variant;

	        i: integer;

	    Begin

	        Xml := New DOMDocument.Create;

	        Xml.load("c:\Data.xml");

	        Nodes := Xml.getElementsByTagName("Data").item(0).childNodes;

	        Result := New Variant[Nodes.length, 3];

	        For i := 0 To Nodes.length - 1 Do

	            Node := Nodes.item(i);

	            Date := Node.attributes.getNamedItem("Date").nodeTypedValue;

	            ChildNodes := Node.childNodes;

	            Val1 := ChildNodes.item(0).nodeTypedValue;

	            Val2 := ChildNodes.item(1).nodeTypedValue;

	            Result[i, 0] := Date;

	            Result[i, 1] := Val1;

	            Result[i, 2] := Val2;

	        End For;

	        Return Result;

	    End Function Fetch;

	End Class UserProvider;


Наименование данного класса необходимо указать в настройках [источника
 пользователя](UiETL.chm::/Desktop/03_ETLObjects/02_Inputs/Uietl_Inputs_User.htm).


См. также:


[Примеры](KeEtl_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

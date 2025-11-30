# ISharedParams.EtlTemplates

ISharedParams.EtlTemplates
-


# ISharedParams.EtlTemplates


## Синтаксис


EtlTemplates(Type: [EtlTemplateType](../../Enums/EtlTemplateType.htm)):
 [IEtlTemplates](../IEtlTemplates/IEtlTemplates.htm);


## Параметры


Type. Тип пользовательского
 шаблона для задачи ETL.


## Описание


Свойство EtlTemplates возвращает
 коллекцию пользовательских шаблонов источников/приёмников.


## Пример


Для выполнения примера необходимо наличие модуля с идентификатором «USERCLASSFORETL», содержащего класс
 «USER_PROVIDER» для реализации
 необходимых интерфейсов.


[![](../../Opened.gif)![](../../Closed.gif)Пример класса
 «USER_PROVIDER» на Fore](javascript:TextPopup(this))


	Добавьте ссылки на системные сборки: Dt, MathFin.


		Class USER_PROVIDER: Object, IDtRecordsetProvider


		    Public Function Fetch: Array Of Variant;

		        Var

		            ResArray: Array[0..1, 0..10] Of Variant;

		            i, j: integer;

		        Begin

		            For j := 0 To 10 Do

		                For i := 0 To 1 Do

		                    If i = 0 Then

		                        ResArray[i, j] := "Код-" + j.ToString;

		                    Else

		                        ResArray[i, j] := Math.RandBetween(0, 100);

		                    End If;

		                End For;

		            End For;

		            Return ResArray;

		    End Function Fetch;


		End Class USER_PROVIDER;


Добавьте ссылки на системные сборки: Fore, Metabase, Xml.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Params: ISharedParams;

	    Templates: IEtlTemplates;

	    Template: IEtlTemplate;

	    xmlEl: IXmlDomElement;

	    xmlDom: IXmlDomDocument;

	    Node: IXmlDomNode;

	Begin

	    MB := MetabaseClass.Active;

	    Params := MB.SpecialObject(MetabaseSpecialObject.SharedParams).Edit As ISharedParams;

	    Templates := params.EtlTemplates(ETLTemplateType.Provider);

	    Template := Templates.Add;

	    xmlDom := New FreeThreadedDOMDocument60.Create;

	    xmlEl := xmlDom.createElement("firstTemplate");

	    xmlEl.setAttribute("server", "PPServer");

	    xmlEl.setAttribute("database", "databse");

	    xmlDom.appendChild(xmlEl);

	    Node := xmlDom.createNode("Element", "Table", "");

	    xmlEl.appendChild(Node);

	    Node.text := "T_SEP";

	    Template.Module := mb.ItemById("USERSCLASSFORETL");

	    Template.Class_ := "User_Provider";

	    Template.Id := "TemplId";

	    Template.Name := "TemplName";

	    Debug.WriteLine("Тип шаблона объекта ETL - " + Template.Type.ToString);

	    (Params As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера при открытии задачи ETL будет доступен новый
 пользовательский шаблон источника данных.


См. также:


[ISharedParams](ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

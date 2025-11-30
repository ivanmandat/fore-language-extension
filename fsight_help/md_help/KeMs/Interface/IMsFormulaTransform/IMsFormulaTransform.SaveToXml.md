# IMsFormulaTransform.SaveToXml

IMsFormulaTransform.SaveToXml
-


# IMsFormulaTransform.SaveToXml


## Синтаксис


SaveToXml(Xml: [IXMLDOMElement](ModXml.chm::/develop.htm));


## Параметры


Xml. Объект, в который будут
 выгружены параметры модели.


## Описание


Метод SaveToXml сохраняет параметры
 модели в XML.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «OBJ_MODEL».


Добавьте ссылки на системные сборки: Metabase, Ms, Xml.


			Sub UserProc;

Var

    model: IMsModel;

    node: IXmlDomElement;

    mb: IMetabase;

    cl: FreeThreadedDOMDocument60;

    msKey: Integer;

Begin

    mb := MetabaseClass.Active;

    msKey := mb.ItemById("MS").Key;

    model := (mb.ItemByIdNamespace("OBJ_MODEL", msKey)).Bind As IMsModel;

    cl := New FreeThreadedDOMDocument60.Create;

    node := cl.createElement((model As IMetabaseObjectDescriptor).Id);

    cl.appendChild(node);

    model.Transform.SaveToXml(node);

    Debug.WriteLine(node.xml);

End Sub UserProc;


После выполнения примера, в компонент «Memo1» будут выведены параметры
 модели «OBJ_MODEL» в виде XML-кода.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

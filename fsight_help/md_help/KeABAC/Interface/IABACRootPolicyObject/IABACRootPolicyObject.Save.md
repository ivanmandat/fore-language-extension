# IABACRootPolicyObject.Save

IABACRootPolicyObject.Save
-


# IABACRootPolicyObject.Save


## Синтаксис


Save(Writer: [IXmlDomElement](ModXml.chm::/develop.htm));


## Описание


Метод Save осуществляет сохранение
 структуры атрибутного доступа в XML-файл.


## Комментарии


Для загрузки сохраненной структуры атрибутного доступа из XML-файла
 используйте метод [IABACRootPolicyObject.Load](IABACRootPolicyObject.Load.htm).


## Пример


Для выполнения примера убедитесь, что в [атрибутном
 доступе](Admin.chm::/04_SecurityPolicy/Admin_AttributeAccess.htm) содержится структура элементов: набор политик,
 политики, правила.


Добавьте ссылки на системные сборки: ABAC, Metabase, Xml.


Sub UserProc;

Var

    PolicyObject: IABACRootPolicyObject;

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Xml: IXmlDomElement;

    XmlDoc: IXmlDomDocument;

Begin

    MB := MetabaseClass.Active;

    MS := MB.Security;

    // Получим структуру атрибутного доступа

    PolicyObject := MS.Policy.ABACRules;

    // Сохраним структуру атрибутного доступа в XML-файл

    XmlDoc := New DOMDocument.Create;

    Xml := XmlDoc.createElement("ABAC");

    XmlDoc.appendChild(Xml);

    PolicyObject.Save(Xml);

    XmlDoc.save("C:\temp\ABAC.xml");

End Sub UserProc;


В результате выполнения примера в заданном XML-файле будет содержаться
 структура атрибутного доступа.


См. также:


[IABACRootPolicyObject](IABACRootPolicyObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

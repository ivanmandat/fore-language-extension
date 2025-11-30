# IABACRootPolicyObject.Load

IABACRootPolicyObject.Load
-


# IABACRootPolicyObject.Load


## Синтаксис


Load(Reader: [IXmlDomElement](ModXml.chm::/develop.htm));


## Описание


Метод Load осуществляет загрузку
 структуры атрибутного доступа из XML-файла.


## Комментарии


Используется для формирования атрибутного доступа, не связанного с общей
 политикой безопасности. Загруженная структура атрибутного доступа из XML-файла
 не отображается в интерфейсе менеджера безопасности.


Для сохранения структуры атрибутного доступа в XML-файл используйте
 метод [IABACRootPolicyObject.Save](IABACRootPolicyObject.Save.htm).


## Пример


Для выполнения примера убедитесь, что в XML-файле содержится структура
 элементов атрибутного доступа: набор политик, политики, правила.


Добавьте ссылки на системные сборки: ABAC, Metabase, Ui, Xml.


Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    PolicyObject: IABACRootPolicyObject;

    XMLDoc: IXMLDOMDocument;

    XMLElem: IXMLDOMElement;

    XMLName, XMLElemName: String;

    Lic: Object;

Begin

    MB:= MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS:= MB.Security;

    // Загрузим структуру атрибутного доступа из XML-файла

    XMLName:= "C:\temp\ABAC.xml";

    XMLElemName:= "ABAC";

    XMLDoc := New DOMDocument60.Create;

    If XMLDoc.load(XMLName) Then

        XMLElem := XMLDoc.selectSingleNode(XMLElemName) As IXmlDomElement;

        If XMLElem <> Null Then

            MS.Policy.ABACRules.Load(XMLElem);

            MS.Apply;

        Else

            WinApplication.ErrorBox("Не найден заданный элемент");

        End If;

    Else

        WinApplication.ErrorBox("Ошибка при загрузке XML");

    End If;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


В результате выполнения примера будет загружена структура атрибутного
 доступа из XML-файла. Если возникнут ошибки при загрузке XML-файла или
 не будет найден элемент «ABAC» в файле, то появится соответствующее сообщение.


См. также:


[IABACRootPolicyObject](IABACRootPolicyObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

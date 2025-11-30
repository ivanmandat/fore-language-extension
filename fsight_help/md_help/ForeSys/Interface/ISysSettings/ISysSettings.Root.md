# ISysSettings.Root

ISysSettings.Root
-


# ISysSettings.Root


## Синтаксис


Root: [ISysSettingsKey](../ISysSettingsKey/ISysSettingsKey.htm);


## Описание


Свойство Root возвращает параметры
 элемента «Root» из файла с настройками.


## Пример


Для выполнения примера предполагается наличие файла [settings.xml](Setup.chm::/UiWebSetup/03_Setup_Web/BI_Server_Settings_XML.htm).
 В данном файле заполнены все разделы с настройками BI-сервера.


Добавьте
 ссылку на системную сборку Xml.


	Sub UserProc;

	Var

	    Settings: ISysSettings;

	    Node: ISysSettingsKey;

	    XmlNode: IXmlDomElement;

	    Lock: Object;

	Begin

	    Settings := New SysSettings.Create;

	    Debug.WriteLine("Расположение файла: " + Settings.Location);

	    //Элемент Root

	    Node := Settings.Root;

	    XmlNode := Node.Element As IXmlDomElement;

	    //Получение параметров элемента <Root>/<Key Name="PP">/<BIS>/<Key Name="System">/<Pool>

	    XmlNode := XmlNode.selectSingleNode("//Pool") As IXmlDomElement;

	    //Изменение значения атрибута MaxConnections

	    XmlNode.setAttribute("MaxConnections", "100");

	    //Блокировка перед сохранением

	    Lock := Settings.CriticalLock;

	    Try

	        Settings.Commit;

	    Finally

	        Dispose Lock;

	    End Try;

	End Sub UserProc;


При выполнении примера в файле с настройками BI-сервера
 будет изменено значение параметра «MaxConnections».


См. также:


[ISysSettings](ISysSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ISysSettingsKey.BindKey

ISysSettingsKey.BindKey
-


# ISysSettingsKey.BindKey


## Синтаксис


BindKey(Key: String; [CanCreate: Boolean = false]):
 [ISysSettingsKey](ISysSettingsKey.htm);


## Параметры


Key. Ключ элемента в файле
 с настройками;


CanCreate. Признак создания
 элемента, если он отсутствует в текущем файле с настройками. Допустимые
 значения:


	- True. Создавать элемент;


	- False. Не создавать
	 элемент (значение по умолчанию).


## Описание


Метод BindKey возвращает параметры
 указанного элемента с настройками.


## Комментарии


Ключ элемента Key формируется
 из наименований всех его родительских элементов, разделенных символом
 «\\». Если перед первым значением в ключе встречается символ «@», то само
 значение воспринимается как значение атрибута «Name» для элемента «Key».


Если параметру CanCreate установлено
 значение True и элемент с ключом
 Key отсутствует, то генерируется
 исключительная ситуация.


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

	    Node := Settings.Root;

	    XmlNode := Node.Element As IXmlDomElement;

	    //Получение параметров элемента <Root>/<Key Name="PP">/<BIS>/<Key Name="System">/<Pool>

	    Node := Node.BindKey("@PP\\BIS", True);

	    Node := Node.BindKey("@System\\Pool", True);

	    XmlNode := Node.Element As IXmlDomElement;

	    //Изменение значения

	    XmlNode.setAttribute("MaxConnections", "10");

	    XmlNode.setAttribute("UserMaxConnections", "2");

	    //Блокировка перед сохранением

	    Lock := Settings.CriticalLock;

	    Try

	        Settings.Commit;

	    Finally

	        Dispose Lock;

	    End Try;

	End Sub UserProc;


При выполнении примера в файле с настройками BI-сервера будет изменено
 значение параметров «MaxConnections» и «UserMaxConnections». Если параметры
 не существуют, то они будут созданы.


См. также:


[ISysSettingsKey](ISysSettingsKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IEtlUserDataContainer.UserData

IEtlUserDataContainer.UserData
-


# IEtlUserDataContainer.UserData


## Синтаксис


UserData: [IXmlDomElement](ModXml.chm::/develop.htm);


## Описание


Свойство UserData возвращает
 элемент объектной модели документа XML.


## Комментарии


Особенности работы с XML-файлами представлены на странице «[Пример работы с XML-файлами](ModXml.chm::/Samples/ModXml_Sample1.htm)».


## Пример


Для выполнения примера в репозитории необходимо наличие Fore формы с
 идентификатором FORMUSERPROV, содержащей следующие компоненты:


	- Memo с наименованием
	 «Memo1»;


	- Button с наименованием
	 «Button1».


Форма содержит следующие классы:


	- класс описания формы, которая будет использоваться в качестве
	 одной из страниц мастера редактирования источника пользователя;


	- класс для подключения этой формы.


[![](../../opened.gif)![](../../closed.gif)Код формы](javascript:TextPopup(this))


	Добавьте ссылки на системные сборки: Collections, Dt, Etl, MathFin,
	 Metabase, Xml.


		{ Класс описания формы }

		Class FormUserProvForm: Form, IEtlForeWizardPage

		    Memo1: Memo;

		    Button1: Button;

		    Model: IEtlUserDataContainer;


		    {IEtlForeWizardPage}

		    Public Function OnSetActive: Boolean;

		    Begin

		        memo1.Clear;

		        memo1.Lines.Add(Model.UserData.xml);

		        Return True;

		    End Function OnSetActive;


		    Public Function OnWizardNext: Integer;

		    Begin

		        Return 0;

		    End Function OnWizardNext;


		    Public Function OnWizardBack: Integer;

		    Begin

		        Return 0;

		    End Function OnWizardBack;


		    Public Function IsLeaveAllowed: Boolean;

		    Begin

		        Return True;

		    End Function IsLeaveAllowed;


		    Public Function IsDoneAllowed: Boolean;

		    Begin

		        Return False;

		    End Function IsDoneAllowed;


		    Public Sub set_Model(m: IEtlUserDataContainer);

		    Begin

		        Model := m;

		    End Sub set_Model;


		    Public Function get_Title: String;

		    Begin

		        Return "CrPage";

		    End Function get_Title;


		    Public Sub set_Title(t: String);

		    Begin

		    End Sub set_Title;


		    {Щелчок по кнопке}

		    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		    Begin

		        If Not Model.IsDirty Then

		            Model.SetDirty(True);

		        End If;

		        Model.UserData.setAttribute("NewValue", "Value");

		        memo1.Lines.Add("------------------------------");

		        memo1.Lines.Add(Model.UserData.xml);

		    End Sub Button1OnClick;

		End Class FormUserProvForm;


		{ Класс для подключения формы в качестве одной из страниц мастера редактирования

		  источника пользователя }

		Class MyProvider: Object, IDtRecordsetProvider, IEtlForeWizardPages, IDtRecordsetUserData

		    userD: IXmlDomElement;

		    randMax: integer;

		    meta: IMetabase;

		    _model: IEtlUserDataContainer;


		    {IDtRecordsetProvider}

		    Public Function Fetch: Array Of Variant;

		    Var

		        ResArray: Array[0..1, 0..100] Of Variant;

		        i, j: integer;

		    Begin

		        For j := 0 To 100 Do

		            For i := 0 To 1 Do

		                If i = 0 Then

		                    ResArray[i, j] := "Код-" + j.ToString;

		                Else

		                    ResArray[i, j] := Math.RandBetween(0, randMax);

		                End If;

		            End For;

		        End For;

		    Return ResArray;

		    End Function Fetch;


		    {IEtlForeWizardPages}

		    Public Function Item(index: Integer): IMetabaseObjectDescriptor;

		    Begin

		        Return meta.ItemById("FORMUSERPROV");

		    End Function Item;


		    Public Property Count: Integer

		        Get

		        Begin

		            Return 1

		        End Get

		    End Property Count;


		    Public Function get_Metabase: IMetabase;

		    Begin

		        Return meta;

		    End Function get_Metabase;


		    Public Sub set_Metabase(metabase: IMetabase);

		    Begin

		        meta := metabase;

		    End Sub set_Metabase;


		    Public Property Model: IEtlUserDataContainer

		    Set

		    Begin

		        _model := Value

		    End Set

		    End Property Model;


		    Public Sub OnWizardOK;

		    Begin

		        Debug.WriteLine("---OK---");

		    End Sub OnWizardOK;


		    Public Sub OnWizardCancel;

		    Begin

		        Debug.WriteLine("---Cancel---");

		    End Sub OnWizardCancel;


		    {IDtRecordsetUserData}

		    Public Function get_userData: IXmlDomElement;

		    Begin

		    Return UserD;

		    End Function get_userData;


		    Public Sub set_userData(value: IXmlDomElement);

		    Begin

		        UserD := value;

		    End Sub set_userData;

		End Class MyProvider;


Для выполнения примера в репозитории необходимо наличие задачи ETL с
 идентификатором ETLT.


[![](../../opened.gif)![](../../closed.gif)Пример подключения
 модуля и класса](javascript:TextPopup(this))


	Добавьте ссылки на системные сборки: Andy, Drawing, Dt, Etl, Metabase.


		Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObject;

		    EtlTask: IEtlTask;

		    DataUserProvider: IEtlPlainDataUserProvider;

		    UserProvider: IDtUserProvider;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим задачу ETL

		    MObj := MB.ItemById("ETLT").Edit;

		    EtlTask := MObj As IEtlTask;

		    //Создадим объект "Источник пользователя"

		    DataUserProvider := EtlTask.Create(EtlObjectType.PlainDataUserProvider) As IEtlPlainDataUserProvider;

		    // Зададим наименование источника

		    DataUserProvider.Name := "Источник пользователя";

		    // Подключим модуль и класс для источника пользователя

		    UserProvider := DataUserProvider.Provider As IDtUserProvider;

		    UserProvider.ForeModule := MB.ItemById("FORMUSERPROV").Edit;

		    UserProvider.ForeClass := "MyProvider";

		    // Визуальное представление источника в задаче

		    CreateWXP(DataUserProvider, EtlTask);

		    // Сохраним изменения

		    Mobj.Save;

		End Sub UserProc;


		{ Создание визуального объекта источника данных }

		Sub CreateWXP(CopyObj: IEtlPlainDataProvider; Etltask: IEtltask);

		Var

		    WxDataTrans: IWxRectangle;

		    WxETLDataTrans: IWxEtlObject;

		Begin

		    WxDataTrans := EtlTask.Workspace.CreateRectangle;

		    WxDataTrans.Id := CopyObj.Id;

		    WxETLDataTrans := New WxEtlObject.Create;

		    WxETLDataTrans.EtlObject := CopyObj;

		    WxDataTrans.Style.TextPosition := WxTextPosition.Bottom;

		    WxDataTrans.Style.PictureMarginTop := -10;

		    WxDataTrans.PinPosition := New GxPointF.Create(20, 20);

		    WxDataTrans.Extension := WxETLDataTrans As IWxShapeExtension;

		End Sub CreateWXP;


После выполнения примера в указанной задаче Etl будет создан источник
 пользователя. В мастере редактирования источника будет создана новая страница
 с наименованием «CrPage». При
 переходе на нее в компоненте «Memo1» будут отображаться текущие XML-данные
 модели.


На странице «CrPage» при нажатии
 на кнопку:


	- в компонент «Memo1» будут выведены измененные XML-данные;


	- свойство [IEtlUserDataContainer.SetDirty](IEtlUserDataContainer.SetDirty.htm)
	 примет значение True, что
	 будет означать, что при закрытии окна мастера редактирования выведется
	 окно подтверждения, хотя никаких изменений не производилось.


См. также:


[IEtlUserDataContainer](IEtlUserDataContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Доступ к репозиторию и объектам: Разработка прикладного приложения

Доступ к репозиторию и объектам: Разработка прикладного приложения
-


# Доступ к репозиторию и объектам


В большинстве случаев работа прикладного приложения будет построена
 на взаимодействии с репозиторием и его объектами. Интерфейс [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm)
 описывает соединение с репозиторием и имеет набор различных свойств/методов
 для получения доступа к объектам, менеджеру безопасности и другим блокам
 платформы.


Для получения доступа к текущему репозиторию, к которому осуществлено
 подключение и в котором создаётся прикладной код, в языке Fore используйте
 статическое свойство [MetabaseClass.Active](KeSom.chm::/Interface/IMetabaseClass/IMetabaseClass.Active.htm):


	Public Sub WorkInRepository;

	Var

	    Mb: IMetabase;

	Begin

	    Mb := MetabaseClass.Active;

	    //...

	    // Дальнейшая работа в текущем репозитории

	    //...

	End Sub WorkInRepository;


Если требуется создать новое соединение с репозиторием во время выполнения
 кода, то используются описания репозиториев из коллекции [IMetabaseManager.Definitions](KeSom.chm::/Interface/IMetabaseManager/IMetabaseManager.Definitions.htm)
 менеджера репозиториев. Менеджер репозитория, описываемый интерфейсом
 [IMetabaseManager](KeSom.chm::/Interface/IMetabaseManager/IMetabaseManager.htm),
 можно получить с помощью свойства [IMetabaseManagerFactory.Active](KeSom.chm::/Interface/IMetabaseManagerFactory/IMetabaseManagerFactory.Active.htm):


	Function ConnectToRepository: IMetabase;

	Var

	    MbManager: IMetabaseManager;

	    MbDef: IMetabaseDefinition;

	    Package: ISecurityPackage;

	    Creds: IPasswordCredentials;

	    Mb: IMetabase;

	Begin

	    // Менеджер репозитория

	    MbManager := MetabaseManagerFactory.Active;

	    // Описание репозитория, к которому осуществляется подключение

	    MbDef := MbManager.Definitions.FindById("Repository");

	    If MbDef <> Null Then

	        Package := MbManager.Packs.FindById(MbDef.SecurityPackage).Package;

	        //
	 Учётные данные для подключения

	        Creds := Package.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	        Creds.UserName := "User";

	        Creds.Password := "Password";

	        //
	 Подключение

	        Mb := MbDef.Open(Creds);

	        If Mb <> Null Then

	            Return Mb;

	        Else

	            Return Null;

	        End If;

	    Else

	        Return Null;

	    End If;

	End Function ConnectToRepository;


## Доступ к объектам


Каждый объект репозитория имеет описание, в котором содержится базовая
 информация об объекте: наименование, идентификатор, класс объекта, списки
 дочерних и зависимых объектов и другая информация. Для работы с описанием
 объекта предназначен интерфейс [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm).
 Получить описание одного или нескольких объектов можно с помощью различных
 свойств и методов интерфейса [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm),
 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
 и других:


	Public Sub WorkInRepository;

	Var

	    Mb: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	    MDescs: IMetabaseObjectDescriptors;

	    FindInfo: IMetabaseObjectFindInfo;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение описания объекта по идентификатору

	    MDesc := Mb.ItemById("Folder");

	    // База данных репозитория по умолчанию

	    MDesc := Mb.SpecialObject(MetabaseSpecialObject.DefaultDatabase);

	    // Описание дочерних объектов для указанного объекта

	    MDescs := Mb.ItemById("Folder").Children;

	    // Поиск объектов по заданным параметрам

	    FindInfo := Mb.CreateFindInfo;

	    FindInfo.Text := "Module";

	    FindInfo.Attribute := FindAttribute.NameOrIdent;

	    FindInfo.WholeWordsOnly := False;

	    MDescs := MB.Find(FindInfo);

	End Sub WorkInRepository;


Получив описание объекта, можно перейти к [настройке
 его свойств](setting_object_properties_and_parameters.htm), [работать с данными](Work_with_data.htm),
 настраивать права доступа и выполнять другие специфические действия.


См. также:


[Разработка
 прикладного приложения](../01_Development_Environment/01_Purpose_of_the_constructor/Purpose_of_the_constructor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

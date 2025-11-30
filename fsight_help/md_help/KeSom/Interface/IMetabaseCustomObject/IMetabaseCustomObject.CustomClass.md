# IMetabaseCustomObject.CustomClass

IMetabaseCustomObject.CustomClass
-


# IMetabaseCustomObject.CustomClass


## Синтаксис


CustomClass: [IMetabaseCustomClass](../IMetabaseCustomClass/IMetabaseCustomClass.htm);


## Описание


Свойство CustomClass определяет
 пользовательский класс объекта.


## Комментарии


Для определения контейнера пользовательского класса используйте свойство
 [IMetabaseCustomObject.Extender](IMetabaseCustomObject.Extender.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории ресурса
 с идентификатором RESOURCE. В файловой системе должны содержаться две
 пиктограммы: C:\Icon_small.ico и C:\Icon_large.ico.


Добавьте ссылки на системные сборки: Drawing, IO, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Type: MetabaseSpecialObject;

	    Object: IMetabaseObject;

	    CustomClassExtender: IMetabaseCustomExtender;

	    CustomClasses: IMetabaseCustomClasses;

	    CustomClass: IMetabaseCustomClass;

	    CustomObject: IMetabaseCustomObject;

	    Operations: IMetabaseCustomClassOperations;

	    Operation: IMetabaseCustomClassOperation;

	    CreateInfo: IMetabaseObjectCreateInfo;

	    Description: IMetabaseObjectDescriptor;

	    ImgList, ImgList32: IGxImageList;

	    Icon: IGxIcon;

	Begin

	    // Получим текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Получим контейнер пользовательских классов

	    Type := MetabaseSpecialObject.CustomExtender;

	    CustomClassExtender := Mb.SpecialObject(Type).Edit As IMetabaseCustomExtender;

	    // Зададим ресурс для контейнера

	    CustomClassExtender.Resource := Mb.ItemById("RESOURCE").Bind As IResourceObject;

	    CustomClassExtender.NameResource := "ID_CUSTOM_EXTENDER";

	    // Загрузим крупную и маленькую пиктограммы в коллекцию

	    ImgList := New GxImageList.Create;

	    ImgList.Height := 16;

	    Icon := New GxIcon.CreateFromFile("C:\Icon_small.ico");

	    ImgList.AddIcon(Icon);

	    CustomClassExtender.SmallImages := ImgList;

	    ImgList32 := New GxImageList.Create;

	    ImgList32.Height := 32;

	    Icon := New GxIcon.CreateFromFile("C:\Icon_large.ico");

	    ImgList32.AddIcon(Icon);

	    CustomClassExtender.LargeImages := ImgList32;

	    // Создадим пользовательский класс в контейнере

	    CustomClasses := CustomClassExtender.Classes;

	    CustomClass := CustomClasses.Add;

	    // Зададим параметры пользовательского класса

	    CustomClass.Name := "Пользовательский класс";

	    CustomClass.Description := "Класс-контейнер";

	    CustomClass.IsContainer := True;

	    CustomClass.LargeImageIndex := 0;

	    CustomClass.SmallImageIndex := 0;

	    CustomClass.ImplementationURL := "https://site/CoolScript.js";

	    // Создадим операцию для пользовательского класса

	    Operations := CustomClass.Operations;

	    Operation := Operations.Add(0);

	    Operation.Name := "Новый метод";

	    // Сохраним изменения контейнера пользовательских классов

	    (CustomClassExtender As IMetabaseObject).Save;

	    // Создадим объект пользовательского класса в корне репозитории

	    CreateInfo := Mb.CreateCreateInfo;

	    CreateInfo.ClassId := CustomClass.ClassId;

	    CreateInfo.Name := "Объект собственного класса";

	    CreateInfo.Permanent := True;

	    CreateInfo.Parent := Mb.Root;

	    Description := Mb.CreateObject(CreateInfo);

	    Object := Description.Edit;

	    CustomObject := Object As IMetabaseCustomObject;

	    CustomObject.Extender := CustomClassExtender;

	    CustomObject.CustomClass := CustomClass;

	    // Сохраним изменения объекта пользовательского класса

	    Object.Save;

	End Sub UserProc;


После выполнения примера:


	- для контейнера пользовательских классов будет определён ресурс,
	 загружены крупная и маленькая пиктограммы из файловой системы: C:\Icon_small.ico
	 и C:\Icon_large.ico;


	- в контейнере пользовательских классов будет создан новый класс-контейнер
	 с наименованием «Пользовательский класс». Для класса заданы крупная
	 и маленькая пиктограммы, которые загружены в контейнер пользовательских
	 классов, создана операция с наименованием «Новый метод» и указан URL-адрес
	 скрипта - обработчика операций в веб-приложении;


	- в корне репозитория будет создан объект пользовательского класса
	 с наименованием «Объект собственного класса».


См. также:


[IMetabaseCustomObject](IMetabaseCustomObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

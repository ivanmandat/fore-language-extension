# IMetabaseCustomClass.OperationsWeb

IMetabaseCustomClass.OperationsWeb
-


# IMetabaseCustomClass.OperationsWeb


## Синтаксис


OperationsWeb: [IMetabaseCustomClassOperationsWeb](../IMetabaseCustomClassOperationsWeb/IMetabaseCustomClassOperationsWeb.htm);


## Описание


Свойство OperationsWeb возвращает
 коллекцию пользовательских операций класса, доступных при работе в веб-приложении.


## Пример


Для выполнения примера в репозитории предполагается наличие четырёх
 веб-форм с идентификаторами F_WEB_CREATE, F_WEB_OPEN, F_WEB_EDIT, F_WEB_CUSTOM.
 Также имеется модуль с идентификатором M_WEB_OPERATIONS, в котором реализован
 класс WebOperationsClass для обработки операций без визуальных зависимостей.
 В классе должны быть реализованы методы для обработки системных операций
 PASTE и DELETE.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CustomClassExtender: IMetabaseCustomExtender;

	    CustomClass: IMetabaseCustomClass;

	    StdOperationsWeb: IMetabaseCustomClassStandardOperationsWeb;

	    Operations: IMetabaseCustomClassOperationsWeb;

	    Operation: IMetabaseCustomClassOperationWeb;

	Begin

	    Mb := MetabaseClass.Active;

	    // Получение контейнера пользовательских классов

	    CustomClassExtender := Mb.SpecialObject(MetabaseSpecialObject.CustomExtender).Edit As IMetabaseCustomExtender;

	    // Добавление пользовательского класса

	    CustomClass := CustomClassExtender.Classes.Add;

	    CustomClass.Id := "CUSTOMOBJECTWEB";

	    CustomClass.Name := "Объект для веб-приложения";

	    CustomClass.ImplementationAssembly := MB.ItemById("M_WEB_OPERATIONS");

	    CustomClass.ImplementationClass := "WebOperationsClass";

	    // Настройка системных операций

	    StdOperationsWeb := CustomClass.StandardOperationsWeb;

	    StdOperationsWeb.FindById("CREATEOBJECT").Handler := Mb.ItemById("F_WEB_CREATE");

	    StdOperationsWeb.FindById("OPEN").Handler := Mb.ItemById("F_WEB_OPEN");

	    StdOperationsWeb.FindById("EDIT").Handler := Mb.ItemById("F_WEB_EDIT");

	    // Создание пользовательской операции

	    Operations := CustomClass.OperationsWeb;

	    Operation := Operations.Add(0);

	    Operation.Name := "Операция";

	    Operation.Handler := Mb.ItemById("F_WEB_CUSTOM");

	    Debug.WriteLine("Идентификатор созданной операции: " + Operation.Id);

	    (CustomClassExtender As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера в контейнере пользовательских классов будет создан
 новый класс объектов, предназначенный для работы в веб-приложении. Для
 класса будут определены базовые свойства, для обработки системных операций
 будут назначены указанные веб-формы. Также будет создана одна пользовательская
 операция, для которой также будет назначена веб-форма. Для обработки операций
 без визуальных зависимостей будут указаны модуль и класс.


См. также:


[IMetabaseCustomClass](IMetabaseCustomClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

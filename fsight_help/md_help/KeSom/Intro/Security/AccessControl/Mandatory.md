# Мандатный метод: Сборка Metabase

Мандатный метод: Сборка Metabase
-


# Мандатный метод


	Механизм работы данного метода представлен в подразделе «[Настройка
	 мандатного метода](Admin.chm::/04_SecurityPolicy/Admin_PermSep_M.htm)».


	Для включения/выключения использования мандатного доступа используйте
	 флаг [IMetabasePolicy.MandatoryAccessControl](../../../Interface/IMetabasePolicy/IMetabasePolicy.MandatoryAccessControl.htm).


		Sub EnableMandatoryAccessControl;

		Var

		    Mb: IMetabase;

		    MbSec: IMetabaseSecurity;

		    Lic: Object;

		Begin

		    Mb := MetabaseClass.Active;

		    // Получение лицензии для возможности работы с менеджером безопасности

		    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

		    // Менеджер безопасности

		    MbSec := Mb.Security;

		    // Использовать мандатный метод

		    MbSec.Policy.MandatoryAccessControl := True;

		    // Применить изменения

		    MbSec.Apply;

		    // Освобождение лицензии

		    Lic := Null;

		End Sub EnableMandatoryAccessControl;


	Дальнейшую работу можно разделить на три этапа.


## Этап 1. Создание категорий и уровней


	Для работы с категориями безопасности мандатного доступа предназначен
	 интерфейс [IMetabaseMandatoryAccess](../../../Interface/IMetabaseMandatoryAccess/IMetabaseMandatoryAccess.htm),
	 доступ к которому предоставляет свойство [IMetabasePolicy.MandatoryAccess](../../../Interface/IMetabasePolicy/IMetabasePolicy.MandatoryAccess.htm).
	 Каждая отдельная категория описывается интерфейсом [ISecurityCategory](../../../Interface/ISecurityCategory/ISecurityCategory.htm),
	 каждый отдельный уровень категории - интерфейсом [ISecurityLevel](../../../Interface/ISecurityLevel/ISecurityLevel.htm).


	Для создания новых категорий используйте метод [IMetabaseMandatoryAccess.AddCategory](../../../Interface/IMetabaseMandatoryAccess/IMetabaseMandatoryAccess.AddCategory.htm),
	 для создания уровней внутри категории - [ISecurityCategory.AddLevel](../../../Interface/ISecurityCategory/ISecurityCategory.AddLevel.htm).


	При создании новой категории в коллекции её уровней сразу будет
	 создан один уровень с меткой критичности 0 и наименованием «Нет доступа».
	 Попытка создать уровень с таким именем приведёт к ошибке так как наименования
	 уровней должны быть уникальными. Данный уровень можно переименовать
	 или создать новый уровень с меткой критичности 0, но другим именем.


		Sub CreateCategoryAndLevel;

		Var

		    Mb: IMetabase;

		    MbSec: IMetabaseSecurity;

		    MandatoryAccess: IMetabaseMandatoryAccess;

		    Category: ISecurityCategory;

		    Lic: Object;

		Begin

		    Mb := MetabaseClass.Active;

		    // Получим лицензию для возможности работы с менеджером безопасности

		    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

		    // Менеджер безопасности

		    MbSec := Mb.Security;

		    MandatoryAccess := MbSec.Policy.MandatoryAccess;

		    // Создание категории и уровней

		    Category := MandatoryAccess.AddCategory("Доступ к данным");

		    Category.Hierarchical := True;

		    Category.Level(0).Name := "Нет доступа к данным";

		    Category.AddLevel(1, "Исполнитель");

		    Category.AddLevel(2, "Руководитель");

		    Category.AddLevel(3, "Владелец");

		    // Применить изменения

		    MbSec.Apply;

		    // Освободим лицензию

		    Lic := Null;

		End Sub CreateCategoryAndLevel;


## Этап 2. Настройка уровня доступа у пользователя


	При мандатном доступе настройка уровней доступа производиться только
	 у пользователей и не может применяться к группе пользователей. Параметры
	 мандатного доступа пользователя возвращает свойство [IMetabaseUser.Token](../../../Interface/IMetabaseUser/IMetabaseUser.Token.htm).
	 С помощью свойства [IAccessToken.ClassificationLabel](../../../Interface/IAccessToken/IAccessToken.ClassificationLabel.htm)
	 необходимо пользователю для определённой категории сопоставить определённый
	 уровень доступа.


	Предположим, что в репозитории уже созданы три пользователя с помощью
	 кода, представленного в подразделе «[Субъекты
	 безопасности](../CreateMBSubject.htm)». Для сопоставления уровней пользователям выполните
	 следующий код:


		Sub SetUsersMandatoryLevel;

		Var

		    Mb: IMetabase;

		    MbSec: IMetabaseSecurity;

		    Executor, Manager, Owner: IMetabaseUser;

		    MandatoryAccess: IMetabaseMandatoryAccess;

		    Category: ISecurityCategory;

		    Lic: Object;

		Begin

		    Mb := MetabaseClass.Active;

		    // Получим лицензию для возможности работы с менеджером безопасности

		    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

		    // Менеджер безопасности

		    MbSec := Mb.Security;

		    // Пользователи, для которых настраивается мандатный уровень доступа

		    Executor := MbSec.ResolveName("Executor") As IMetabaseUser;

		    Manager := MbSec.ResolveName("Manager") As IMetabaseUser;

		    Owner := MbSec.ResolveName("Owner") As IMetabaseUser;

		    // Категория мандатного доступа

		    MandatoryAccess := MbSec.Policy.MandatoryAccess;

		    Category := MandatoryAccess.Category(0);

		    // Сопоставление пользователям уровней мандатного доступа

		    Executor.Token.ClassificationLabel(Category) := Category.FindLevelByLabel(1);

		    Manager.Token.ClassificationLabel(Category) := Category.FindLevelByLabel(2);

		    Owner.Token.ClassificationLabel(Category) := Category.FindLevelByLabel(3);

		    // Применить изменения

		    MbSec.Apply;

		    // Освободим лицензию

		    Lic := Null;

		End Sub SetUsersMandatoryLevel;


## Этап 3. Настройка уровня доступа у объекта репозитория


	Для настройки уровня доступа у объекта репозитория:


		- Используя свойство [IMetabaseObjectDescriptor.SecurityDescriptor](../../../Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm),
		 получите параметры управления доступом. С помощью метода [Edit](../../../Interface/ISecurityDescriptor/ISecurityDescriptor.Edit.htm)
		 переведите параметры в режим редактирования.


		- В параметрах доступа с помощью свойства [ISecurityDescriptor.AccessToken](../../../Interface/ISecurityDescriptor/ISecurityDescriptor.AccessToken.htm)
		 получите параметры мандатного доступа.


		- С помощью свойства [IAccessToken.ClassificationLabel](../../../Interface/IAccessToken/IAccessToken.ClassificationLabel.htm)
		 объекту для определённой категории сопоставьте определённый уровень
		 доступа.


		- Примените изменения с помощью метода [ISecurityDescriptor.Apply](../../../Interface/ISecurityDescriptor/ISecurityDescriptor.Apply.htm)
		 или [ISecurityDescriptor.ApplyO](../../../Interface/ISecurityDescriptor/ISecurityDescriptor.ApplyO.htm).


	Предположим, в репозитории имеется папка, в которой расположен куб
	 и все объекты, от которых он зависит. На базе куба создан регламентный
	 отчёт. Для сопоставления уровней объектам репозитория выполните следующий
	 код:


		Sub SetObjectsMandatoryLevel;

		Var

		    Mb: IMetabase;

		    MbSec: IMetabaseSecurity;

		    MandatoryAccess: IMetabaseMandatoryAccess;

		    Category: ISecurityCategory;

		    CubeDesc: IMetabaseObjectDescriptor;

		    Folder, Cube, Report: ISecurityDescriptor;

		    Lic: Object;

		Begin

		    Mb := MetabaseClass.Active;

		    // Получим лицензию для возможности работы с менеджером безопасности

		    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

		    // Менеджер безопасности

		    MbSec := Mb.Security;

		    // Категория мандатного доступа

		    MandatoryAccess := MbSec.Policy.MandatoryAccess;

		    Category := MandatoryAccess.Category(0);

		    // Сопоставление объектам уровней мандатного доступа

		    //---Регламентный отчёт---

		    Report := Mb.ItemById("REPORT").SecurityDescriptor;

		    Report.Edit;

		    Report.AccessToken.ClassificationLabel(Category) := Category.FindLevelByLabel(1);

		    Report.Apply(False);

		    //---Куб и все объекты, от которых он зависит---

		    CubeDesc := Mb.ItemById("STD_CUBE");

		    Cube := CubeDesc.SecurityDescriptor;

		    Cube.Edit;

		    Cube.AccessToken.ClassificationLabel(Category) := Category.FindLevelByLabel(2);

		    Cube.Apply(False);

		    ApplyAccessToDependence(CubeDesc.Dependencies(False), Category, Cube.AccessToken.ClassificationLabel(Category));

		    //---Папка---

		    Folder := Mb.ItemById("FOLDER").SecurityDescriptor;

		    Folder.Edit;

		    Folder.AccessToken.ClassificationLabel(Category) := Category.FindLevelByLabel(3);

		    // Не применяем установку уровня мандатного доступа по всей иерархии
		 папки,

		    // чтобы не сбросить установленные ранее
		 уровни доступа у объектов внутри папки

		    Folder.Apply(False);

		    // Освободим лицензию

		    Lic := Null;

		End Sub SetObjectsMandatoryLevel;


		Sub ApplyAccessToDependence(MDescs: IMetabaseObjectDescriptors; Category: ISecurityCategory; Level: ISecurityLevel);

		Var

		    MDesc: IMetabaseObjectDescriptor;

		    SecDesc: ISecurityDescriptor;

		Begin

		    For Each MDesc In MDescs Do

		        SecDesc := MDesc.SecurityDescriptor;

		        SecDesc.Edit;

		        SecDesc.AccessToken.ClassificationLabel(Category) := Level;

		        SecDesc.Apply(False);

		        // Рекурсивный обход всех объектов, от которых может зависеть текущий объект

		        If MDesc.Dependencies(False).Count > 0 Then

		            ApplyAccessToDependence(MDesc.Dependencies(False), Category, Level);

		        End If;

		    End For;

		End Sub ApplyAccessToDependence;


	При выполнении примера для указанных объектов репозитория будут
	 установлены различные уровни мандатного доступа. Для объектов, от
	 которых зависит куб, рекурсивно будет установлен тот же уровень, который
	 устанавливается для куба.


См. также:


[Методы
 разграничения доступа](AccessControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IAccessToken.ClassificationLabel

IAccessToken.ClassificationLabel
-


# IAccessToken.ClassificationLabel


## Синтаксис


ClassificationLabel(Category: [ISecurityCategory](../ISecurityCategory/ISecurityCategory.htm)):
 [ISecurityLevel](../ISecurityLevel/ISecurityLevel.htm);


## Параметры


Category.
 Категория мандатного доступа.


## Описание


Свойство ClassificationLabel
 определяет классификационную метку для данной категории.


## Комментарии


Категория безопасности передается посредством параметра Category.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Lic: Object;

	    User: IMetabaseUser;

	    Tok: IAccessToken;

	    SecCat: ISecurityCategory;

	    SecLevel: ISecurityLevel;

	Begin

	    MB := MetabaseClass.Active;

	    // Получение лицензии для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    // Пользователь, для которого настраивается мандатный доступ

	    User := MB.Security.Users.Item(0);

	    Tok := User.Token;

	    SecCat := MB.Security.Policy.MandatoryAccess.Category(0);

	    SecLevel := SecCat.Level(3);

	    Tok.ClassificationLabel(SecCat) := SecLevel;

	    MB.Security.Apply;

	    // Освобождение лицензии

	    Lic := Null;

	End Sub UserProc;


После выполнения примера у указанного пользователя для первой категории
 мандатного контроля будет установлен четвертый уровень доступа.


См. также:


[IAccessToken](IAccessToken.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

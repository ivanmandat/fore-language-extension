# IMetabaseUser.Token

IMetabaseUser.Token
-


# IMetabaseUser.Token


## Синтаксис


Token: [IAccessToken](../IAccessToken/IAccessToken.htm);


## Описание


Свойство Token возвращает параметры
 мандатного доступа пользователя.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MbSec: IMetabaseSecurity;

	    Lic: Object;

	    User: IMetabaseUser;

	    Tok: IAccessToken;

	    SecCat: ISecurityCategory;

	    SecLevel: ISecurityLevel;

	Begin

	    MB := MetabaseClass.Active;

	    // Получение лицензии для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    MbSec := MB.Security;

	    // Получение пользователя

	    User := MbSec.Users.Item(0);

	    Tok := User.Token;

	    SecCat := MB.Security.Policy.MandatoryAccess.Category(0);

	    SecLevel := SecCat.Level(3);

	    Tok.ClassificationLabel(SecCat) := SecLevel;

	    // Применение изменений

	    MbSec.Apply;

	    // Освобождение лицензии

	    Lic := Null;

	End Sub UserProc;


После выполнения примера у указанного пользователя для первой категории
 мандатного контроля будет установлен четвертый уровень доступа.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

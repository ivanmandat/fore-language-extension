# IMetabaseUser.Certificate

IMetabaseUser.Certificate
-


# IMetabaseUser.Certificate


## Синтаксис


Certificate:
 String;


## Описание


Свойство Certificate присваивает
 пользователю слепок сертификата, по которому будет осуществляться вход.


## Комментарии


Слепок сертификата можно получить с помощью метода
 [IMetabaseUser.InitCertificate](IMetabaseUser.initCertificate.htm).


## Пример


Для выполнения примера предполагается наличие на форме, расположенных
 на ней компонентов Button, EditBox с наименованиями Button1, EditBox1.
 Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылку на системную сборку Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Value: String;

	    User: IMetabaseUser;

	    Security: IMetabaseSecurity;

	    Lic: Object;

	Begin

	    // Получим данные текущего репозитория

	    MB := MetabaseClass.Active;

	    // Получим лицензию для возможности работы с менеджером безопасности

	    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

	    Security := MB.Security;

	    // Присвоим слепок сертификата пользователю ADMIN

	    User := Security.ResolveName("ADMIN") As IMetabaseUser;

	    // Зададим значение сертификата

	    Value := EditBox1.Text;

	    User.Certificate := Value;

	    // Сохраним изменения

	    Security.Apply;

	    // Освободим лицензию

	    Lic := Null;

	End Sub Button1OnClick;


В результате выполнения примера после нажатия на кнопку пользователю
 ADMIN будет присвоен сертификат, введенный администратором в компоненте
 EditBox1.


См. также:


[IMetabaseUser](IMetabaseUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

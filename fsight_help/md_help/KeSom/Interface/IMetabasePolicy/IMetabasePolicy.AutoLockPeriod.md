# IMetabasePolicy.AutoLockPeriod

IMetabasePolicy.AutoLockPeriod
-


# IMetabasePolicy.AutoLockPeriod


## Синтаксис


AutoLockPeriod: Integer;


## Описание


Свойство AutoLockPeriod определяет
 период неактивности пользователя в днях, по истечении которого учетная
 запись пользователя заблокируется.


## Комментарии


По умолчанию свойство принимает значение 0, блокировок нет.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 компоненты Button и IntegerEdit
 с наименованиями Button1 и IntegerEdit1 соответственно. Пример является
 обработчиком события OnClick для
 компонента Button1.


Добавьте ссылку на системную сборку Metabase.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Зададим период неактивности пользователя

    Policy.AutoLockPeriod := IntegerEdit1.Value;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub Button1OnClick;


После нажатия на кнопку будет установлен период неактивности пользователя,
 заданный в компоненте IntegerEdit,
 по истечении которого учетная запись пользователя заблокируется.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

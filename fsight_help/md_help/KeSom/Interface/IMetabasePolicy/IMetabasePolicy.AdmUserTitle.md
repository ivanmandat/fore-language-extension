# IMetabasePolicy.AdmUserTitle

IMetabasePolicy.AdmUserTitle
-


# IMetabasePolicy.AdmUserTitle


## Синтаксис


AdmUserTitle(Locale: [LocaleCodeID](ForeSys.chm::/Enums/LocaleCodeID.htm);
 Type: [AdmUserType](../../Enums/AdmUserType.htm)): String;


## Параметры


Locale. Идентификатор языка
 и региональных параметров;


Type. Определяет тип администратора.


## Описание


Свойство AdmUserTitle определяет
 строку для вывода в заголовок окна менеджера безопасности для указанного
 типа администратора.


## Комментарии


Параметр Locale не может быть
 равным LocaleCodeID.None.


По умолчанию строка не формируется (пуста). Определить строку может
 только пользователь с привилегией «Изменение прав пользователей, раздача
 ролей, изменение политики».


Строку можно задавать для трех типов пользователей:


	- Пользователи, обладающие привилегией «Изменение метки безопасности
	 и списка контроля доступа любого объекта»;


	- Пользователи, обладающие привилегией «Создание, удаление пользователей»;


	- Пользователи, обладающие обеими привилегиями «Изменение метки
	 безопасности и списка контроля доступа любого объекта» и «Создание,
	 удаление пользователей»;


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

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

    // Зададим строку для вывода в заголовок окна менеджера безопасности

    Policy.AdmUserTitle(LocaleCodeID.Russian, AdmUserType.ISA) := "РМ Администратора информационной безопасности";

    Policy.AdmUserTitle(LocaleCodeID.Russian, AdmUserType.Admin) := "РМ Прикладного администратора";

    Policy.AdmUserTitle(LocaleCodeID.Russian, AdmUserType.ISA Or AdmUserType.Admin) := "РМ Администратора";

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в заголовок окна менеджера безопасности будет
 выводиться дополнительная строка в зависимости от привилегии, которой
 обладает пользователь.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

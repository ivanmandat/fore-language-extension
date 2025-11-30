# IMetabasePolicy.IsObjectsIdFormatValid

IMetabasePolicy.IsObjectsIdFormatValid
-


# IMetabasePolicy.IsObjectsIdFormatValid


## Синтаксис


IsObjectsIdFormatValid(ObjectIdFormat: String):
 Boolean;


## Параметры


ObjectIdFormat. Строка для
 проверки корректности данных.


## Описание


Метод IsObjectsIdFormatValid
 проверяет строку на наличие некорректных данных (русский язык, первый
 символ - цифра, и т.п.).


## Комментарии


Метод возвращает значение True,
 если строка корректная, и False,
 если строка содержит некорректные данные. В случае корректности строку
 можно использовать в качестве [формата
 идентификаторов](admin.chm::/04_securitypolicy/editor_of_politicy/security_editorpoliticy_general.htm#identifier_format). Некорректный формат в ядро не передается
 и не используется для формирования идентификаторов объектов.


Для установки формата идентификаторов объектов репозитория используйте
 свойство [IMetabasePolicy.ObjectsIdFormat](IMetabasePolicy.ObjectsIdFormat.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Str: String;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Зададим строку для проверки

    Str := "ID_*";

    // Выведем в консоль результат проверки

    If Policy.IsObjectsIdFormatValid(Str) Then

        Debug.WriteLine("Строка корректная");

        // Если строка корректная, установим её в качестве формата идентификаторов объектов

        Policy.ObjectsIdFormat := Str;

        // Сохраним изменения

        MS.Apply;

    Else

    Debug.WriteLine("Строка содержит некорректные данные");

    End If;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоли отобразится
 результат проверки заданной строки. Если строка корректная, то в качестве
 формата идентификатора объектов будет задана данная строка.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

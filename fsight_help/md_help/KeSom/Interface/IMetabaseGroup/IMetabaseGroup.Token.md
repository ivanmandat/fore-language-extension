# IMetabaseGroup.Token

IMetabaseGroup.Token
-


# IMetabaseGroup.Token


## Синтаксис


		Token: [IAccessToken](../IAccessToken/IAccessToken.htm);


## Описание


Свойство Token возвращает параметры
 мандатного доступа группы пользователей.


## Комментарии


Свойство актуально только при работе с доменной группой пользователей.
 В репозитории должен быть включён [мандатный
 метод разграничения доступа](../IMetabasePolicy/IMetabasePolicy.MandatoryAccessControl.htm) или [метод
 разграничения доступа по уровням](../IMetabaseMandatoryAccess/IMetabaseMandatoryAccess.IsSimple.htm). Для настройки параметров мандатного
 метода разграничения доступа установите значение True
 свойству [IMetabaseGroup.HasToken](IMetabaseGroup.HasToken.htm).


См. также:


[IMetabaseGroup](IMetabaseGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

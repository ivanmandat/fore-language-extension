# ISecurityDescriptor.AccessToken

ISecurityDescriptor.AccessToken
-


# ISecurityDescriptor.AccessToken


## Синтаксис


AccessToken: [IAccessToken](../IAccessToken/IAccessToken.htm);


## Описание


Свойство AccessToken возвращает
 параметры мандатного контроля доступа к объекту.


## Комментарии


Свойство актуально при включенном мандатном контроле доступа к объектам.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором Obj_1. В репозитории включен мандатный контроль доступа
 к объектам.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    SDesc: ISecurityDescriptor;

	    Tok: IAccessToken;

	    SecCat: ISecurityCategory;

	    SecLevel: ISecurityLevel;

	Begin

	    MB := MetabaseClass.Active;

	    SDesc := MB.ItemById("Obj_1").SecurityDescriptor;

	    SDesc.Edit;

	    Tok := SDesc.AccessToken;

	    SecCat := MB.Security.Policy.MandatoryAccess.Category(0);

	    SecLevel := SecCat.Level(2);

	    Tok.ClassificationLabel(SecCat) := SecLevel;

	    SDesc.Apply(False);

	End Sub UserProc;


После выполнения примера у указанного объекта будут изменены параметры
 мандатного доступа. Для первой категории будет установлен третий уровень
 доступа.


См. также:


[ISecurityDescriptor](ISecurityDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

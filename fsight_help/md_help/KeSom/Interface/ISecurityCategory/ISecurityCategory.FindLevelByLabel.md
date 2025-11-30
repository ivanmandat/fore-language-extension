# ISecurityCategory.FindLevelByLabel

ISecurityCategory.FindLevelByLabel
-


# ISecurityCategory.FindLevelByLabel


## Синтаксис


		FindLevelByLabel(CriticalityLabel: Integer):
		 [ISecurityLevel](../ISecurityLevel/ISecurityLevel.htm);


## Параметры


CriticalityLabel.
 Метка критичности, по которой будет осуществляется поиск.


## Описание


Метод FindLevelByLabel осуществляет
 поиск уровня с меткой критичности, передаваемой в качестве параметра CriticalityLabel.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MS: IMetabaseSecurity;

		    MU: IMetabasePolicy;

		    MAccess: IMetabaseMandatoryAccess;

		    SecCat: ISecurityCategory;

		    SecLev: ISecurityLevel;

		Begin

		    MB := MetabaseClass.Active;

		    MS := MB.Security;

		    MU := MS.Policy;

		    MAccess := MU.MandatoryAccess;

		    SecCat := MAccess.Category(0);

		    SecLev := SecCat.FindLevelByLabel(2);

		    If SecLev <> Null Then

		        Debug.WriteLine(SecLev.Name);

		    End If;

		End Sub UserProc;


После выполнения примера будет осуществлен поиск уровня безопасности
 с меткой критичности «2». В случае удачного поиска в консоль среды разработки
 будет выведено наименование найденного уровня.


См. также:


[ISecurityCategory](ISecurityCategory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

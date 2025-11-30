# IAdoMdCatalogInstance.Refresh

IAdoMdCatalogInstance.Refresh
-


# IAdoMdCatalogInstance.Refresh


## Синтаксис


Refresh;


## Описание


Метод Refresh обновляет содержимое
 каталога ADOMD.


## Комментарии


При выполнении метода будет обновлена структура всех кубов и справочников,
 которые созданы в каталоге ADOMD. Если на сервере есть какие-либо новые
 объекты, то соответствующие объекты будут созданы в репозитории. Если
 на сервере были удалены какие-либо объекты, то также будут удалены соответствующие
 объекты в репозитории.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalog;

    CatalogInst: IAdoMdCatalogInstance;

    Fail: IStringList;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Bind As IAdoMdCatalog;

    CatalogInst := Catalog.Open;

    CatalogInst.Refresh;

    Fail := CatalogInst.CubesFail;

    Debug.WriteLine("Кубы, которые не были обновлены: " + Fail.Count.ToString);

    If Fail.Count > 0 Then

        For Each s In Fail Do

            Debug.WriteLine(s);

        End For;

    End If;

    Fail := CatalogInst.CubesFailExceptions;

    Debug.WriteLine("Ошибки обновления: " + Fail.Count.ToString);

    If Fail.Count > 0 Then

        For Each s In Fail Do

            Debug.WriteLine(s);

        End For;

    End If;

End Sub UserProc;


При выполнении примера будет обновлено содержимое указанного каталога
 ADOMD. Если при обновлении возникли какие-либо ошибки и часть кубов каталога
 не была обновлена, то список кубов и текст ошибок будут выведены в консоль
 среды разработки.


См. также:


[IAdoMdCatalogInstance](IAdoMdCatalogInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

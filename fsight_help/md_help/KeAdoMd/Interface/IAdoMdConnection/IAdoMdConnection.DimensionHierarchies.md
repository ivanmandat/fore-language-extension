# IAdoMdConnection.DimensionHierarchies

IAdoMdConnection.DimensionHierarchies
-


# IAdoMdConnection.DimensionHierarchies


## Синтаксис


DimensionHierarchies(Cube: String; Dimension: String;
 Hierarchy: String): [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm);


## Параметры


Cube. Физическое имя куба.


Dimension. Физические имя справочника.


Hierarchy. Наименование иерархии
 справочника.


## Описание


Метод DimensionHierarchies возвращает
 курсор, содержащий системную информацию об указанной иерархии уровней.


## Комментарии


Если параметры Cube, Dimension
 и Hierarchy не заданы, то полученный
 курсор будет содержать информацию обо всех иерархиях всех справочников,
 имеющихся в каталоге ADOMD. В зависимости от того, какие из параметров
 заданы, будет получен курсор с информацией по одной или нескольким иерархиям.


Для разделения информации по иерархиям в курсор будет добавляться отдельная
 запись. Первое поле в этой записи не будет иметь наименования, в качестве
 значения поля будет указан номер иерархии.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В данном каталоге имеется куб с физическим
 именем «Test», в структуре этого куба имеется справочник с физическим
 именем «Dim_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalogInstance;

    Connection: IAdoMdConnection;

    DimHie: IDalCursor;

    CFields: IDalCursorFields;

    CField: IDalCursorField;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    Connection := Catalog.Connection;

    DimHie := Connection.DimensionHierarchies("Test", "Dim_1", "");

    CFields := DimHie.Fields;

    While Not DimHie.Eof Do

        For i := 0 To CFields.Count - 1 Do

            CField := CFields.Item(i);

            Debug.WriteLine(CField.Name + " | " + CField.Value);

        End For;

        DimHie.Next;

    End While;

End Sub UserProc;


При выполнении примера будет получен курсор, содержащий информацию об
 иерархиях указанного справочника ADOMD. Данная информация будет выведена
 в консоль среды разработки.


См. также:


[IAdoMdConnection](IAdoMdConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

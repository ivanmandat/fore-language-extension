# IAdoMdDimension.Cubes

IAdoMdDimension.Cubes
-


# IAdoMdDimension.Cubes


## Синтаксис


Cubes: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Свойство Cubes возвращает коллекцию
 кубов, в структуру которых входит текущий справочник ADOMD.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В каталоге имеется справочник ADOMD
 с идентификатором «DimTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IAdoMdDimension;

    Cubes: IStringList;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemByIdNamespace("DimTest", MB.GetObjectKeyById("ADOMDTest")).Bind As IAdoMdDimension;

    Cubes := Dim.Cubes;

    For Each s In Cubes Do

        Debug.WriteLine(s);

    End For;

End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведен список
 кубов, в структуру которых входит указанный справочник.


См. также:


[IAdoMdDimension](IAdoMdDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

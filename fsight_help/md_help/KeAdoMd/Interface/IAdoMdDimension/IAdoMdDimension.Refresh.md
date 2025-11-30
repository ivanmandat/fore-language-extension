# IAdoMdDimension.Refresh

IAdoMdDimension.Refresh
-


# IAdoMdDimension.Refresh


## Синтаксис


Refresh;


## Описание


Метод Refresh обновляет структуру
 справочника ADOMD в репозитории на основании информации о справочнике,
 полученной с сервера.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В каталоге имеется справочник ADOMD
 с идентификатором «DimTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Dim: IAdoMdDimension;

Begin

    MB := MetabaseClass.Active;

    Dim := MB.ItemByIdNamespace("DimTest", MB.GetObjectKeyById("ADOMDTest")).Edit As IAdoMdDimension;

    Dim.Refresh;

    (Dim As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет обновлена структура указанного справочника
 ADOMD на основании информации о справочнике, полученной с сервера.


См. также:


[IAdoMdDimension](IAdoMdDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

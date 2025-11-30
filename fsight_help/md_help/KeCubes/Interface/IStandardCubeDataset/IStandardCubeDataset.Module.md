# IStandardCubeDataset.Module

IStandardCubeDataset.Module
-


# IStandardCubeDataset.Module


## Синтаксис


Module: [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство Module возвращает описание
 модуля, в котором реализован класс для обработки процесса формирования
 запроса на извлечение данных.


## Комментарии


Установка модуля и класса для обработки процесса формирования запроса
 на извлечение данных осуществляется методом [SetCallback](IStandardCubeDataset.SetCallback.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». Подключите системные сборки: Cubes,
 Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IStandardCube;

    CubeDataset: IStandardCubeDataset;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    CubeDataset := Cube.Destinations.Item(0).Datasets.Item(0);

    If Not IsNull(CubeDataset.Module) Then

        CubeDataset.SetCallback(Null, "");

    End If;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера, если для первого источника куба установлен модуль
 и класс для обработки процесса формирования запроса на извлечение данных,
 то он будет сброшен.


См. также:


[IStandardCubeDataset](IStandardCubeDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

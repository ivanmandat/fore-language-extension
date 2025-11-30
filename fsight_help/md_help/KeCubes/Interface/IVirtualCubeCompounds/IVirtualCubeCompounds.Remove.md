# IVirtualCubeCompounds.Remove

IVirtualCubeCompounds.Remove
-


# IVirtualCubeCompounds.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index. Индекс составной структуры в коллекции.


## Описание


Метод Remove удаляет составную структуру из коллекции по ее индексу.


## Комментарии


Значение параметра Index должно быть неотрицательным числом, но меньше значения свойства [IVirtualCubeCompounds.Count](IVirtualCubeCompounds.Count.htm). Индекс первого объекта в коллекции - «0», последнего - «[IVirtualCubeCompounds.Count](IVirtualCubeCompounds.Count.htm) - 1». Нумерация индексов - сквозная.


Если удаление структуры прошло успешно, то метод возвращает значение True, значение свойства [IVirtualCubeCompounds.Count](IVirtualCubeCompounds.Count.htm) уменьшается на единицу; в обратном случае - False.


## Пример


Для выполнения примера в репозитории предполагается наличие виртуального куба с идентификатором «CUBE_VIRT». Также необходимо добавить ссылки на системные сборки «Metabase», «Cubes».


			    Sub UserProc;

    Var

        mb: IMetabase;

        VirtCube: IVirtualCube;

        Compounds: IVirtualCubeCompounds;

        VCompound: IVirtualCubeCompound;

    Begin

        Mb := MetabaseClass.Active;

        VirtCube := Mb.ItemById("CUBE_VIRT").Edit As IVirtualCube;

        Compounds := VirtCube.Compounds;

        VCompound := Compounds.Item(Compounds.Count - 1);

        If VCompound <> Null Then

            Debug.WriteLine("Удаление прошло успешно: " + Compounds.Remove(Compounds.Count - 1).ToString);

        End If;

        (VirtCube As IMetabaseObject).Save;

    End Sub UserProc;


После выполнения примера из виртуального куба будет удалена последняя составная структура. Результаты удаления будут выведены в окно консоли.


См. также:


[IVirtualCubeCompounds](IVirtualCubeCompounds.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

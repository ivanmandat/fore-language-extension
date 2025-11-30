# ICubeMetaUpdateAdditionalObjects.Item

ICubeMetaUpdateAdditionalObjects.Item
-


# ICubeMetaUpdateAdditionalObjects.Item


## Синтаксис


Item(Index: Integer): [ICubeMetaUpdateAdditionalObject](../ICubeMetaUpdateAdditionalObject/ICubeMetaUpdateAdditionalObject.htm);


## Параметры


Index. Индекс объекта коллекции.


## Описание


Свойство Item возвращает объект из коллекции по его индексу.


## Комментарии


Данное свойство обеспечивает возможность доступа к определенному объекту из коллекции. Значение параметра Index должно быть неотрицательным числом, но меньше значения свойства [ICubeMetaUpdateAdditionalObjects.Count](ICubeMetaUpdateAdditionalObjects.Count.htm). Индекс первого объекта в коллекции - «0», последнего - «[ICubeMetaUpdateAdditionalObjects.Count](ICubeMetaUpdateAdditionalObjects.Count.htm). - 1». Нумерация индексов - сквозная.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта репликации с идентификатором «CUBE_META_UPD» Также необходимо добавить ссылки на системные сборки «Cubes» и «Metabase».


			    Sub UserProc;

    Var

        Mb: IMetabase;

        Update: ICubeMetaUpdateEx;

        AdditionalObjs: ICubeMetaUpdateAdditionalObjects;

        i: Integer;

        AddObj: ICubeMetaUpdateAdditionalObject;

    Begin

        Mb := MetabaseClass.Active;

        Update := Mb.ItemById("CUBE_META_UPD").Bind As ICubeMetaUpdateEx;

        AdditionalObjs := Update.AdditionalObjects;

        For i := 0 To AdditionalObjs.Count - 1 Do

            AddObj := AdditionalObjs.Item(i);

            If AddObj.SourceClassId = MetabaseObjectClass.KE_CLASS_EXPRESSREPORT Then

                Debug.WriteLine("Идентификатор: " + AddObj.SourceId);

                Debug.WriteLine("Ключ: " + AddObj.SourceKey.ToString);

                Debug.WriteLine("----");

            End If;

        End For;

    End Sub UserProc;


После выполнения примера в окно консоли будут выведены идентификаторы и ключи экспресс-отчетов, копируемых вместе с базой данных временных рядов, но не являющихся вложенными по отношению к нему.


См. также:


[ICubeMetaUpdateAdditionalObjects](ICubeMetaUpdateAdditionalObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

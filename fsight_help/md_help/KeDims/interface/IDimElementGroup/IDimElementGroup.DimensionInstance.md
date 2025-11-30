# IDimElementGroup.DimensionInstance

IDimElementGroup.DimensionInstance
-


# IDimElementGroup.DimensionInstance


## Синтаксис


DimensionInstance: [IDimInstance](../IDimInstance/IDimInstance.htm);


## Описание


Свойство DimensionInstance позволяет
 установить экземпляр справочника для группы элементов.


## Комментарии


Свойство можно использовать при копировании групп элементов для последующей
 привязки скопированной группы к другому справочнику.


## Пример


Для выполнения примера предполагается наличие двух справочников с идентификаторами
 «Dim_1» и «Dim_1_COPY». Для справочника «Dim_1_COPY» настроены группы
 элементов.


Добавьте ссылки на системные сборки «Dimensions» и «Metabase».


			Sub UserProc;

Var

    mb: IMetabase;

    obj: IMetabaseObject;

    desc: IMetabaseObjectDescriptor;

    childs: IMetabaseObjectDescriptors;

    CInfo: IMetabaseObjectCopyInfo;

    group: IDimElementGroup;

    i: Integer;

Begin

    mb := MetabaseClass.Active;

    desc := mb.ItemById("Dim_1");

    childs := desc.Children;

    If childs.Count <> 0 Then

        For i := 0 To childs.Count - 1 Do

            desc := childs.Item(i);

            If desc.ClassId = 1029 Then

                CInfo := mb.CreateCopyInfo;

                CInfo.Source := mb.ItemById("Dim_1_COPY1").Children.Item(i);

                CInfo.Destination := desc;

                mb.CopyObject(CInfo);

                obj := CInfo.Destination.Edit;

                group := obj.Edit As IDimElementGroup;

                group.DimensionInstance := desc.Open(Null) As IDimInstance;

                (group As IMetabaseObject).Save;

                Break;

            End If;

        End For;

    End If;

End Sub UserProc;


После выполнения примера первая найденная группа элементов будет скопирована
 из справочника с идентификатором «Dim_1_COPY» в справочник «Dim_1».


См. также:


[IDimElementGroup](IDimElementGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ICubeMetaUpdateEx.SkipEmptySourceValues

ICubeMetaUpdateEx.SkipEmptySourceValues
-


# ICubeMetaUpdateEx.SkipEmptySourceValues


## Синтаксис


SkipEmptySourceValues: Boolean;


## Описание


Свойство SkipEmptySourceValues
 определяет, пропускать ли пустые значения (Null),
 присутствующие в источнике данных.


## Комментарии


True - пустые точки данных (Null) из источника не вставляются
 в приёмник данных. False - пустые
 точки данных (Null) из источника
 вставляются в приёмник данных. Значение по умолчанию - False.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC» (источник данных) и базы данных
 временных рядов с идентификатором «FC_COPY» (приёмник данных). Структуры
 баз данных временных рядов должны совпадать. Также необходимо добавить
 ссылки на системные сборки «Cubes» и «Metabase».


			    Sub UserSub;

    Var

        mb: IMetabase;

        CrInfo: IMetabaseObjectCreateInfo;

        Obj: IMetabaseObject;

        ObjDesc: IMetabaseObjectDescriptor;

        RubUpdateEx: ICubeMetaUpdateEx;

        Rub: IRubricator;

    Begin

        mb := MetabaseClass.Active;

        RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

        Rub := mb.ItemById("FC").Bind As IRubricator;

        RubUpdateEx.Rubricator := Rub;

        RubUpdateEx.CopyData := True;

        RubUpdateEx.CopyExtraObjects := False;

        RubUpdateEx.Metabase := Mb;

        RubUpdateEx.TargetRubricator := mb.ItemById("FC_COPY").Bind As IRubricator;

        RubUpdateEx.SkipEmptySourceValues := True;

        RubUpdateEx.Apply(Null);

    End Sub UserSub;


После выполнения примера данные базы данных временных рядов «FC» будут
 среплицированы в базу «FC_COPY». Точки данных, отсутствующие в источнике,
 не будут вставлены в приёмник.


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

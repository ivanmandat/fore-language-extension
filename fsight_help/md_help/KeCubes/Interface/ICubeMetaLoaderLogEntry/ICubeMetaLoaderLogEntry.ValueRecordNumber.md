# ICubeMetaLoaderLogEntry.ValueRecordNumber

ICubeMetaLoaderLogEntry.ValueRecordNumber
-


# ICubeMetaLoaderLogEntry.ValueRecordNumber


## Синтаксис


ValueRecordNumber: Integer;


## Описание


Свойство ValueRecordNumber возвращает номер ошибочной записи уровня наблюдения.


## Комментарии


Свойство возвращает значение «-1», если ошибочная запись относится к уровню фактов.


## Пример


Для выполнения примера предполагается наличие баз данных временных рядов с идентификаторами «OBJ_RUBRICATOR» и «OBJ_RUBRICATOR_SOUR». В данных базах должны присутствовать атрибут показателей «COUNTRY» и атрибут наблюдения «COMMENT». Добавьте ссылки на системные сборки «Metabase», «Cubes», «Dimensions».


			Sub UserProc;

Var

    MB: IMetabase;

    Copier: ICubeMetaCopier;

    Bindings: ICubeMetaCopierBindings;

    Binding: ICubeMetaCopierBinding;

    Log: ICubeMetaLoaderLog;

    LogEnt: ICubeMetaLoaderLogEntry;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Copier := New CubeMetaCopierClass.Create;

    // Параметры копирования
    Copier.CalendarLevelSet := DimCalendarLevelSet.Year;

    Copier.DestinationRubricator := MB.ItemById("OBJ_RUBRICATOR").Bind As IRubricator;

    Copier.SourceRubricator := MB.ItemById("OBJ_RUBRICATOR_SOUR").Bind As IRubricator;

    Copier.ImportObjectKey := MB.ItemById("OBJ_RUBRICATOR").Key;

    Copier.NewRevisionName := "Копирование показателей";

    Bindings := Copier.Bindings;

    // Привязка атрибута COUNTRY
    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaCopierBindingType.Attribute;

    Binding.DestinationAttribute := "COUNTRY";

    Binding.SourceAttribute := "COUNTRY";

    // Привязка атрибута COMMENT
    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaCopierBindingType.ValueAttribute;

    Binding.DestinationAttribute := "COMMENT";

    Binding.SourceAttribute := "COMMENT";

    // Копирование показателей и вывод отчета
    Copier.Copy;

    Log := Copier.Log;

    For i := 0 To Log.Count - 1 Do

        LogEnt := Log.Item(i);

        Debug.WriteLine("Номер записи: " + LogEnt.RecordNumber.ToString);

        Debug.WriteLine("Дата создания записи: " + LogEnt.DateBegin.ToString);

        Debug.WriteLine("Поле: " + LogEnt.Field);

        If LogEnt.IsWarning Then

            Debug.WriteLine("Предупреждение: " + LogEnt.ErrorMessage);

        End If;

        If LogEnt.IsError Then

            Debug.WriteLine("Ошибка: " + LogEnt.ErrorMessage);

            Debug.WriteLine("Код ошибки: " + LogEnt.ErrorCode.ToString);

            Debug.WriteLine("Номер ошибочной записи уровня наблюдения: " + LogEnt.ValueRecordNumber.ToString);

        End If;

        Debug.WriteLine("----");

    End For;

End Sub UserProc;


После выполнения примера показатели из базы «OBJ_RUBRICATOR_SOUR» будут скопированы в базу «OBJ_RUBRICATOR». В окно консоли будет выведен отчет о результатах копирования.


См. также:


[ICubeMetaLoaderLogEntry](ICubeMetaLoaderLogEntry.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ICubeMetaCopier.Bindings

ICubeMetaCopier.Bindings
-


# ICubeMetaCopier.Bindings


## Синтаксис


Bindings: [ICubeMetaCopierBindings](../ICubeMetaCopierBindings/ICubeMetaCopierBindings.htm);


## Описание


Свойство Bindings определяет
 привязку атрибутов базы-источника с атрибутами базы-приёмника.


## Пример


Для выполнения примера предполагается наличие баз данных временных рядов
 с идентификаторами OBJ_RUBRICATOR и OBJ_RUBRICATOR_SOUR. В данных базах
 должны присутствовать атрибуты показателей COUNTRY и INDICATOR.


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

    // Привязка атрибутов

    Bindings := Copier.Bindings;

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaCopierBindingType.Attribute;

    Binding.DestinationAttribute := "COUNTRY";

    Binding.SourceAttribute := "COUNTRY";

    Binding := Bindings.Add;

    Binding.BindingType := CubeMetaCopierBindingType.Const_;

    Binding.DestinationAttribute := "INDICATOR";

    Binding.SourceAttribute := "INDICATOR";

    Binding.Value := 1009;

    // Копирование показателей и вывод отчёта

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

        End If;

        Debug.WriteLine("----");

    End For;

End Sub UserProc;


После выполнения примера показатели из базы OBJ_RUBRICATOR_SOUR будут
 скопированы в базу OBJ_RUBRICATOR. В окно консоли будет выведен отчёт
 о результатах копирования.


См. также:


[ICubeMetaCopier](ICubeMetaCopier.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

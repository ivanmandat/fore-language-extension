# ICubeMetaUpdateEx.AutoPeriod

ICubeMetaUpdateEx.AutoPeriod
-


# ICubeMetaUpdateEx.AutoPeriod


## Синтаксис


AutoPeriod: [IRubricatorAutoPeriod](../IRubricatorAutoPeriod/IRubricatorAutoPeriod.htm);


## Описание


Свойство AutoPeriod возвращает
 параметры периода копирования данных временных рядов.


## Комментарии


По умолчанию начало/окончание периода копирования совпадает с началом/окончанием
 данных.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB», базы данных с идентификатором
 «DB_MSSQL» и папки с идентификатором «TSDB_COPY_FOLDER».


Добавьте ссылки на системные сборки: Cubes, Db, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    RubUpdateEx: ICubeMetaUpdateEx;

    Rub: IRubricator;

    Progress: IMetabaseUpdateProgress;

    CrInfo: IMetabaseObjectCreateInfo;

    ExpPeriod: IRubricatorAutoPeriod;

    ExpPeriodDate: IRubricatorAutoPeriodDate;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Создаем объект копирования
 базы данных временных рядов

    RubUpdateEx := New CubeMetaUpdateClass.Create As ICubeMetaUpdateEx;

    // Получаем базу данных временных рядов

    Rub := mb.ItemById("TSDB").Bind As IRubricator;

    // Указываем копируемую
 базу данных временных рядов

    RubUpdateEx.Rubricator := Rub;

    // Указываем, что копирование выполняется в текущий репозиторий

    RubUpdateEx.Metabase := Mb;

    // Получаем параметры создаваемой базы данных временных рядов

    CrInfo := RubUpdateEx.CreateInfo;

    // Указываем папку, в которой она будет создана

    CrInfo.Parent := mb.ItemById("TSDB_COPY_FOLDER");

    // Указываем наименование и идентификатор новой базы данных временных рядов

    CrInfo.Id := Mb.GenerateId("TSDB_COPY");

    CrInfo.Name := "База данных временных рядов
 (копия)";

    // Указываем периоды копирования временных рядов

    ExpPeriod := RubUpdateEx.AutoPeriod;

    // Задаем начало периода: начало данных, смещенное на одну точку вперед

    ExpPeriodDate := ExpPeriod.Start;

    ExpPeriodDate.AutoDateType := RubricatorAutoDateType.DateStart;

    ExpPeriodDate.Offset := 1;

    // Задаем окончание периода: окончание данных, смещенное на одну точку назад

    ExpPeriodDate := ExpPeriod.End_;

    ExpPeriodDate.AutoDateType := RubricatorAutoDateType.DateEnd;

    ExpPeriodDate.Offset := -1;

    // Указываем репозиторий НСИ, который будет использоваться

    // скопированной базой данных временных рядов

    RubUpdateEx.RdsDatabase := Rub.Database;

    // Указываем объект
 репозитория - База данных, настройки которой будут использоваться

    // скопированной базой данных временных рядов

    RubUpdateEx.Database := MB.ItemById("DB_MSSQL").Bind As IDatabase;

    // Указываем, что будем копировать данные

    RubUpdateEx.CopyData := True;

    // Указываем, что будем копировать вложенные объекты базы данных временных рядов

    RubUpdateEx.CopyExtraObjects := True;

    // Указываем, что копирование и сопоставление объектов будут выполняться

    //  по уникальным индексам, используемым для формирования отметки

    RubUpdateEx.RemapBySelectionIndex := True;

    // Задаем название ревизии в скопированной базе данных временных рядов

    RubUpdateEx.NewRevisionName := "Копирование всей базы 'TSDB'";

    // Создаем объект, реализующий события, которые происходят во время копирования

    Progress := New MyUpdateProgress.Create;

    // Выполняем копирование

    RubUpdateEx.Apply(Progress);

End Sub UserProc;


// Класс, реализующий события, которые происходят во время копирования

Class MyUpdateProgress: UpdateProgress

    // Событие, возникающее при ошибках копирования

    Sub OnError(Data: IMetabaseUpdateProgressData; Var Ignore: Boolean);

    Begin

        Debug.WriteLine("Ошибка копирования объекта обновления '" + Data.Node.Label + "'");

        Debug.WriteLine("Текст ошибки: " + Data.Error.Message);

        If Data.Object <> Null Then

            Debug.WriteLine("Источник ошибки: " + Data.Object.Id);

            Debug.WriteLine("Ключ объекта: " + Data.Object.Key.ToString);

        End If;

        Debug.WriteLine("Объект будет пропущен");

        Ignore := True;

    End Sub OnError;

End Class MyUpdateProgress;


После выполнения примера в папке «TSDB_COPY_FOLDER» будет создана копия
 базы данных временных рядов «TSDB».


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

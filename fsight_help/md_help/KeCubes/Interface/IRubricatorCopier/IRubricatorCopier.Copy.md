# IRubricatorCopier.Copy

IRubricatorCopier.Copy
-


# IRubricatorCopier.Copy


## Синтаксис


Copy;


## Описание


Метод Copy выполняет копирование
 базы данных временных рядов.


## Комментарии


Для корректного выполнения метода необходимо задать значение свойства
 [IRubricatorCopier.CopyInfo](IRubricatorCopier.CopyInfo.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «TSDB» и папки с идентификатором «F_TSDB_COPY».


Добавьте ссылки на системные сборки: Cubes, Metabase.


			Sub UserCopy;

Var

    MB: IMetabase;

    pCopier: IRubricatorCopier;

    CInfo: IMetabaseObjectCopyInfo;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Создаем объект для копирования объекта репозитория

    CInfo := MB.CreateCopyInfo;

    CInfo.Id := MB.GenerateId("FC_COPY");

    CInfo.Name := "Копия базы данных временных рядов";

    CInfo.WithData := True;

    CInfo.Destination := MB.ItemById("F_TSDB_COPY");

    CInfo.Source := MB.ItemById("TSDB");

    // Создаем объект для копирования базы данных временных рядов

    pCopier := New RubricatorCopier.Create;

    // Указываем общие параметры копирования

    pCopier.CopyInfo := CInfo;

    // Указываем, что копирование выполняется с данными

    pCopier.WithObjects := True;

    // Указываем, что копирование выполняется в одну транзакцию

    pCopier.DisableTransactions := True;

    // Выполняем копирование

    pCopier.Copy;

End Sub UserCopy;


В результате выполнения примера будет выполнено копирование базы данных
 временных рядов «TSDB» в одну транзакцию вместе с данными в папку «F_TSDB_COPY».


См. также:


[IRubricatorCopier](IRubricatorCopier.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

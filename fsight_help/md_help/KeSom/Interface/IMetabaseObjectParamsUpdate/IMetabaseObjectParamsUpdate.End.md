# IMetabaseObjectParamsUpdate.End

IMetabaseObjectParamsUpdate.End
-


# IMetabaseObjectParamsUpdate.End


## Синтаксис


End_;


## Описание


Метод End возобновляет
 изменение параметров объекта репозитория.


## Комментарии


Данный метод используется после вызова метода [IMetabaseObjectParams.BeginUpdate](../IMetabaseObjectParams/IMetabaseObjectParams.BeginUpdate.htm),
 который блокирует изменение параметров объекта репозитория.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS».


Добавьте ссылки на системные сборки: Express, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Analyzer: IEaxAnalyzer;

    Object: IMetabaseObject;

    Upd: IMetabaseObjectParamsUpdate;

    Prms: IEaxDataAreaParams;

    Name: String;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Analyzer := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

    Object := Analyzer As IMetabaseObject;

    // Добавим параметр в экспресс-отчет

    Object.Params.Add;

    // Установим запрет на изменение параметров

    Upd := Object.Params.BeginUpdate;

    // Получим коллекцию параметров экспресс-отчета

    Prms := Analyzer.DataArea.Params;

    // Получим наименование параметра и выведем его в окно консоли

    Name := Prms.Item(0).Name;

    Debug.WriteLine("Наименование параметра перед
 его сменой - " + Name);

    // Изменим наименование параметра

    Object.Params.Item(0).Name := "Param";

    // Применим изменения и выведем измененное наименование параметра в окно консоли

    Upd.End_;

    Debug.WriteLine("Наименование параметра после его
 смены - " + Name);

End Sub UserProc;


После выполнения примера в окно консоли выведутся наименования параметра
 перед и после его смены.


См. также:


[IMetabaseObjectParamsUpdate](IMetabaseObjectParamsUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
